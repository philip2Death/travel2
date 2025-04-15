// app/destinations/page.tsx
import Link from 'next/link';
import Image from 'next/image';

const destinations = [
    {
      id: 'paris',
      name: '巴黎，法國',
      description: '浪漫之都，藝術與時尚的殿堂',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'tokyo',
      name: '東京，日本',
      description: '融合傳統與現代的繁華都市',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'new-york',
      name: '紐約，美國',
      description: '永不眠的城市，充滿活力',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'cape-town',
      name: '開普敦，南非',
      description: '壯麗的自然景觀與豐富歷史',
      image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
  ];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">探索目的地</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <Link 
              key={dest.id} 
              href={`/destinations/${dest.id}`}
              className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-square">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">{dest.name}</h2>
                <p className="opacity-90">{dest.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
