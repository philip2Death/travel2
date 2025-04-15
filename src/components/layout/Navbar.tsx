// src/components/layout/Navbar.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

interface NavItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

const navItems: NavItem[] = [
  { name: '首頁', href: '/' },
  {
    name: '旅遊目的地',
    href: '/destinations',
    subItems: [
      { name: '巴黎', href: '/destinations/paris' },
      { name: '東京', href: '/destinations/tokyo' },
      { name: '紐約', href: '/destinations/new-york' },
      { name: '開普敦', href: '/destinations/cape-town' },
    ],
  },
  { name: '關於我們', href: '/about' },
  { name: '聯絡我們', href: '/contact' },
];

export default function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-purple-800 shadow-xl !text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo 區塊 */}
          <div className="flex-shrink-0 flex items-center">
              {/* 品牌標誌 */}
            <Link href="/" className="text-xl font-bold  text-white tracking-wide tracking-tighter !text-white">
              Travel World
            </Link>
            
          </div>

          {/* 桌面導航 */}
          <div className="hidden md:block " >
            <div className="ml-10 flex items-baseline gap-x-10 ">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="!text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <div className={`absolute left-0 mt-2 w-48 origin-top-left bg-white/95 backdrop-blur-sm rounded-lg shadow-xl ring-1 ring-black/5 ${
                      activeDropdown === item.name ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    } transition-transform duration-200 ease-out`}>
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm !text-gray-800 hover:!text-blue-700 hover:bg-blue-50/80 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 移動端菜單按鈕 */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 移動端菜單內容 */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
              {item.subItems && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
