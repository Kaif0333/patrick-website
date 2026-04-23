import { useEffect, useState } from 'react';

interface YouTubeVideo {
  title: string;
  link: string;
  guid: string;
  pubDate: string;
  thumbnail: string;
}

export default function YouTubeFeed() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch YouTube RSS via rss2json converter
    const channelId = 'UC1PVkMt_ctv26Bsh0bzrxVg';
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'ok') {
          setVideos(data.items.slice(0, 3));
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching YouTube feed:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="space-y-4 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="aspect-video bg-surface-container rounded-lg"></div>
        ))}
      </div>
    );
  }

  // Fallback if feed fails or is empty
  if (videos.length === 0) {
    return (
      <div className="space-y-6">
        <VideoCard 
          title="Optimizing Gross-to-Net (GTN) for Pharma" 
          link="https://www.youtube.com/@patrickrcoyle"
          thumbnail="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
        />
        <VideoCard 
          title="Commercial Launch Readiness in Life Sciences" 
          link="https://www.youtube.com/@patrickrcoyle"
          thumbnail="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {videos.map((video) => (
        <VideoCard 
          key={video.guid}
          title={video.title}
          link={video.link}
          guid={video.guid}
          thumbnail={video.thumbnail}
        />
      ))}
      <a 
        href="https://www.youtube.com/@patrickrcoyle" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all mt-4"
      >
        View All Videos <span className="material-symbols-outlined text-sm">open_in_new</span>
      </a>
    </div>
  );
}

function VideoCard({ title, link, guid, thumbnail }: { title: string; link: string; guid?: string; thumbnail: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);

  // Use a robust regex to extract the 11-character YouTube video ID
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = (guid && guid.startsWith('yt:video:'))
    ? guid.replace('yt:video:', '')
    : getYouTubeId(guid || '') || getYouTubeId(link) || '';

  useEffect(() => {
    let timer: any;
    if (isHovered && videoId) {
      // Small delay before starting the video "glimpse" to avoid triggers while scrolling
      timer = setTimeout(() => setShouldPlay(true), 400);
    } else {
      setShouldPlay(false);
    }
    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group block relative rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/10 hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-video relative overflow-hidden bg-black">
        {/* Static Thumbnail */}
        <img 
          src={thumbnail} 
          alt={title} 
          className={`w-full h-full object-cover transition-opacity duration-500 ${shouldPlay ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* Video Glimpse (Iframe) */}
        {shouldPlay && videoId && (
          <div className="absolute inset-0 w-full h-full">
            <iframe
              className="w-[150%] h-[150%] -ml-[25%] -mt-[12%]" // Oversize and crop to hide controls/headers
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}&rel=0`}
              title={title}
              allow="autoplay; encrypted-media"
              frameBorder="0"
            />
          </div>
        )}

        {/* Overlay Icon (Hidden when playing) */}
        {!shouldPlay && (
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              <span className="material-symbols-outlined text-2xl fill-1">play_arrow</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-bold text-on-surface line-clamp-2 leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </a>
  );
}
