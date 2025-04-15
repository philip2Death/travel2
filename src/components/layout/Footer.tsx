// src/components/layout/Footer.tsx
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Travel World</h3>
            <p className="text-sm">探索世界的美好角落</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">旅遊目的地</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/destinations/paris" className="hover:text-blue-400">巴黎</Link></li>
              {/* 其他目的地... */}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">支援服務</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-blue-400">常見問題</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">聯絡我們</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">社群媒體</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>© 2024 Travel World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
