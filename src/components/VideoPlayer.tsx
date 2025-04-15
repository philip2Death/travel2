// 實現分段載入 (components/VideoPlayer.tsx)
'use client';

import { useRef, useEffect } from 'react';

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoRef.current?.load();
        }
      });
    }, { threshold: 0.1 });

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <video 
      ref={videoRef}
      controls 
      preload="none"
      className="lazy-video"
    >
      <source data-src={dest.video} type="video/mp4" />
    </video>
  );
}
