import { Link } from 'react-router-dom';

export default function SocialGlimpse() {
  return (
    <section className="py-24 px-8 bg-surface-container-low/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-[10px] font-black tracking-[0.3em] uppercase rounded-full">
            Strategic Engagement
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-on-surface">
            Insights & Industry Perspectives
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* YouTube Glimpse Card - High-Quality Founder Thumbnail */}
          <div className="bg-white rounded-[2.5rem] border border-outline-variant/10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(31,62,146,0.08)] transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
            <div className="relative h-56 overflow-hidden">
              <img src="/founder-v2.jpg" alt="Executive Insight" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </div>
              </div>
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-[#FF0000] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                <span className="material-symbols-outlined text-xs">video_library</span>
                Watch Insight
              </div>
            </div>
            <div className="p-8 text-center flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 tracking-tight">Strategic Insights</h3>
              <p className="text-sm text-on-surface-variant/80 font-light leading-relaxed px-4">
                Executive financial navigation and tactical biotech narratives.
              </p>
            </div>
          </div>

          {/* LinkedIn Glimpse Card - High-Quality Founder Thumbnail */}
          <div className="bg-white rounded-[2.5rem] border border-outline-variant/10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(31,62,146,0.08)] transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
            <div className="relative h-56 overflow-hidden">
              <img src="/founder-v2.jpg" alt="Executive Perspective - LinkedIn" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-[#0A66C2] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                <span className="material-symbols-outlined text-xs">share_reviews</span>
                Read Post
              </div>
            </div>
            <div className="p-8 text-center flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 tracking-tight">Digital Footprint</h3>
              <p className="text-sm text-on-surface-variant/80 font-light leading-relaxed px-4">
                Real-time commentary on market dynamics and strategic leadership.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link 
            to="/about#insights" 
            className="group flex items-center gap-3 text-primary font-black text-xs uppercase tracking-[0.4em] hover:gap-5 transition-all"
          >
            Explore Now
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
