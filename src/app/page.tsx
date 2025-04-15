import Image from 'next/image';
export default function Home() {
  const features = [
    {
      title: '巴黎，法國',
      description: '浪漫之都，藝術與時尚的殿堂',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: '東京，日本',
      description: '融合傳統與現代的繁華都市',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: '紐約，美國',
      description: '永不眠的城市，充滿活力',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: '開普敦，南非',
      description: '壯麗的自然景觀與豐富歷史',
      image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];
return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            探索世界之美
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            發現四個令人驚嘆的旅遊目的地，規劃您的完美旅程
          </p>
        </div>
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-16">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1519046904884-53103b34b206"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
            <h2 className="text-4xl font-bold text-white">開始您的冒險之旅</h2>
          </div>
        </div>
{/* 水平滾動卡片 */}
<div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">熱門目的地</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover rounded-lg mb-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 line-clamp-3">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
