// app/destinations/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface Destination {
  name: string;
  history: string;
  culture: string;
  attractions: string;
  practicalInfo: string;
  image: string;
  video?: string;
}

const destinationData: Record<string, Destination> = {
  paris: {
    name: "巴黎，法國",
    history: "巴黎自公元3世紀起便成為重要城市，歷經羅馬時期、中世紀到現代，見證了歐洲文明的發展歷程。塞納河畔的建築群被聯合國教科文組織列為世界遺產。",
    culture: "融合哥德式建築與現代藝術的獨特文化，每年舉辦超過400場藝術展覽。奧塞博物館與羅浮宮收藏了從古典到現代的全球藝術珍品。",
    attractions: "艾菲爾鐵塔、巴黎聖母院、香榭麗舍大道、蒙馬特高地藝術區",
    practicalInfo: "最佳旅遊季節：4-6月/9-10月 | 交通：地鐵日均客流量400萬人次 | 電壓：230V 50Hz",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    video: "/videos/paris.mp4"
  },
  tokyo: {
    name: "東京，日本",
    history: "始建於1457年的江戶城，1603年德川家康建立幕府後成為政治中心。明治維新後改名東京，經歷關東大地震與二戰後重建為現代都市。",
    culture: "傳統神社與高科技並存的文化，全年舉辦逾千場祭典。秋葉原的動漫文化與淺草的傳統手工藝形成鮮明對比。",
    attractions: "東京鐵塔、淺草寺、澀谷十字路口、皇居東御苑",
    practicalInfo: "最佳旅遊季節：3-5月（櫻花季）| 交通：地鐵系統每日運量1100萬人次 | 貨幣：日元",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    video: "/videos/tokyo.mp4"
  },
  'new-york': {
    name: "紐約，美國",
    history: "1624年荷蘭人建立新阿姆斯特丹，1664年英國接管後改名紐約。19世紀移民潮造就文化大熔爐，20世紀成為全球金融中心。",
    culture: "聯合國總部所在地，聚集超過800種語言的使用者。百老匯歌劇院每年上演50部新劇目，現代藝術博物館館藏超過20萬件作品。",
    attractions: "自由女神像、中央公園、時代廣場、大都會博物館",
    practicalInfo: "最佳旅遊季節：4-6月/9-11月 | 交通：24小時地鐵系統 | 小費文化：餐廳15-20%",
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  'cape-town': {
    name: "開普敦，南非",
    history: "1652年荷蘭東印度公司建立的補給站，經歷荷、英殖民時期。桌山於2012年當選世界新七大自然奇觀。",
    culture: "非洲、歐洲與馬來文化的融合，11種官方語言並存。每年舉辦開普敦國際爵士音樂節等大型文化活動。",
    attractions: "桌山、好望角、維多利亞港、科斯坦伯斯植物園",
    practicalInfo: "最佳旅遊季節：11-3月（夏季）| 時區：UTC+2 | 駕駛方向：左側通行",
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    video: "/videos/cape-town.mp4"
  }
};

export default function DestinationDetailPage({ 
  params 
}: { 
  params: { id: keyof typeof destinationData } 
}) {
  const dest = destinationData[params.id];
  
  if (!dest) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* Header Section */}
          <header className="mb-12 space-y-6">
            <h1 className="text-5xl font-bold text-gray-900">{dest.name}</h1>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={dest.image}
                alt={`${dest.name} 主圖`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 75vw"
              />
            </div>
          </header>

          {/* Main Content Grid */}
          <section className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <SectionCard title="歷史沿革">
                <p className="text-gray-600 leading-relaxed">{dest.history}</p>
              </SectionCard>

              <SectionCard title="文化特色">
                <p className="text-gray-600 leading-relaxed">{dest.culture}</p>
              </SectionCard>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <SectionCard title="必訪景點">
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {dest.attractions.split('、').map((attraction, index) => (
                    <li key={index}>{attraction}</li>
                  ))}
                </ul>
              </SectionCard>

              <SectionCard title="實用資訊">
                <div className="prose">
                  <pre className="whitespace-pre-wrap font-sans">
                    {dest.practicalInfo}
                  </pre>
                </div>
              </SectionCard>

              {/* Video Section */}
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <video 
                        controls 
                        preload="metadata"
                        playsInline
                        className="w-full h-full object-cover"
                        poster="/posters/cape-town.jpg"
                        disablePictureInPicture
                        controlsList="nodownload noplaybackrate"
                    >
                        <source
                        src={dest.video}
                        type="video/mp4"
                        />
                        <track
                        kind="captions"
                        srcLang="zh-Hant"
                        label="繁體中文字幕"
                        src="/subtitles/cape-town.vtt"
                        default
                        />
                        <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
                        <p className="text-white">您的瀏覽器不支援影片播放</p>
                        </div>
                    </video>
                </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}

// Reusable Section Component
function SectionCard({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
