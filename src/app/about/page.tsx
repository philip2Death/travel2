// src/app/about/page.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-purple-50/60">
      {/* 頁首區塊 */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              探索世界的故事
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              我們是由資深旅行家與數位創作者組成的團隊，致力於用科技重新定義旅行體驗。自2015年以來，已幫助超過<span className="font-bold text-blue-600">120萬</span>旅人發現世界的美好。
            </p>
          </div>
          
          {/* 動態背景元素 */}
          <div className="absolute -top-32 right-0 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute -top-20 left-0 w-72 h-72 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        </div>
      </section>

      {/* 核心團隊區塊 */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* 團隊成員卡片 */}
          <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
            <div className="overflow-hidden rounded-t-2xl">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt="創辦人 John Doe"
                width={600}
                height={800}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">John Doe</h2>
              <p className="text-blue-600 font-medium mb-4">創辦人暨旅行體驗總監</p>
              <p className="text-gray-600 mb-6">累計跨越87國，擅長發掘隱藏版在地體驗</p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                {/* 其他社群圖標 */}
              </div>
            </div>
          </div>

          {/* 新增其他團隊成員區塊 */}
          {/* 可複製卡片結構添加更多成員 */}
        </div>

        {/* 數據統計區塊 */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600">12+</div>
            <div className="text-gray-600 mt-2">專業領域</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600">1.2M</div>
            <div className="text-gray-600 mt-2">服務旅人次</div>
          </div>
          {/* 其他統計卡片 */}
        </div>
      </section>
    </div>
  );
}
