//src/app/layout.tsx
import type { Metadata } from 'next';
import NavBar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';
export const metadata: Metadata = {
  title: 'Travel World',
  description: 'Discover amazing travel destinations around the world.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 推薦的完整旅遊導航配置
const travelNavItems = [
  { 
    name: '探索目的地', 
    href: '/destinations',
    subItems: [
      { name: '海島度假', href: '/islands' },
      { name: '文化之旅', href: '/cultural' },
      { name: '冒險行程', href: '/adventure' }
    ]
  },
  { 
    name: '主題旅遊', 
    href: '/themed-tours',
    subItems: [
      { name: '蜜月旅行', href: '/honeymoon' },
      { name: '家庭旅遊', href: '/family' },
      { name: '背包客路線', href: '/backpacking' }
    ]
  },
  { 
    name: '實用工具', 
    href: '/tools',
    subItems: [
      { name: '簽證助手', href: '/visa-assistant' },
      { name: '預算計算機', href: '/budget-calculator' },
      { name: '行李清單生成器', href: '/packing-list' }
    ]
  }
]


  return (
    <html lang="en">
      <body className="bg-gray-100">
        <NavBar navItems={travelNavItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
