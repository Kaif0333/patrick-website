import YouTubeFeed from './YouTubeFeed';
import LinkedInFeed from './LinkedInFeed';

export default function SocialSection() {
  return (
    <section id="insights" className="py-32 px-8 bg-white relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.3em] uppercase rounded-full">
            Insights & Activity
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">
            Latest Industry Perspectives
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
            Stay updated with the latest trends in life sciences finance, gross-to-net strategy, and executive leadership through my latest digital contributions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* YouTube Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
              <div className="w-10 h-10 rounded-full bg-[#FF0000]/10 flex items-center justify-center text-[#FF0000]">
                <span className="material-symbols-outlined font-bold">video_library</span>
              </div>
              <h3 className="text-2xl font-black tracking-tight">Latest from YouTube</h3>
            </div>
            <YouTubeFeed />
          </div>

          {/* LinkedIn Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
              <div className="w-10 h-10 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2]">
                <span className="material-symbols-outlined font-bold">post</span>
              </div>
              <h3 className="text-2xl font-black tracking-tight">Recent LinkedIn Posts</h3>
            </div>
            <LinkedInFeed />
          </div>
        </div>
      </div>
    </section>
  );
}
