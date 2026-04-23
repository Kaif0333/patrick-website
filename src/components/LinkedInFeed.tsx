import { useState } from 'react';
import socialData from '../data/social_feed.json';

export default function LinkedInFeed() {
  const posts = socialData.linkedin;

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <LinkedInPost key={post.id} post={post} />
      ))}
      <a 
        href="https://www.linkedin.com/in/pcoyle/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all mt-4"
      >
        View All Activity <span className="material-symbols-outlined text-sm">open_in_new</span>
      </a>
    </div>
  );
}

function LinkedInPost({ post }: { post: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white border border-outline-variant/20 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 flex items-start gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-100">
          <img src="/founder.jpg" alt={post.author} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-bold text-on-surface hover:text-primary hover:underline cursor-pointer leading-tight">
            <a href={post.postUrl} target="_blank" rel="noopener noreferrer">{post.author}</a>
          </h4>
          <p className="text-[11px] text-on-surface-variant truncate">{post.role}</p>
          <p className="text-[11px] text-on-surface-variant flex items-center gap-1">
            {post.time} • <span className="material-symbols-outlined text-[12px]">public</span>
          </p>
        </div>
      </div>
      
      <div className="px-4 pb-3">
        <p className="text-sm text-on-surface leading-normal line-clamp-3">
          {post.content}
        </p>
        <button className="text-sm font-bold text-on-surface-variant hover:text-primary mt-1">...see more</button>
      </div>

      {post.image && (
        <a href={post.postUrl} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden aspect-[16/9] bg-slate-100">
          <img 
            src={post.image} 
            alt="Post content" 
            className={`w-full h-full object-cover transition-transform duration-[4000ms] ease-out ${isHovered ? 'scale-110' : 'scale-100'}`} 
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
               <span className="bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold text-primary shadow-sm">View on LinkedIn</span>
            </div>
          )}
        </a>
      )}

      <div className="p-2 border-t border-slate-50 flex items-center justify-between text-on-surface-variant">
        <button className="flex-1 py-1 flex items-center justify-center gap-2 hover:bg-slate-50 rounded transition-colors text-xs font-bold font-heading">
          <span className="material-symbols-outlined text-sm">thumb_up</span> Like
        </button>
        <button className="flex-1 py-1 flex items-center justify-center gap-2 hover:bg-slate-50 rounded transition-colors text-xs font-bold font-heading">
          <span className="material-symbols-outlined text-sm">comment</span> Comment
        </button>
        <button className="flex-1 py-1 flex items-center justify-center gap-2 hover:bg-slate-50 rounded transition-colors text-xs font-bold font-heading">
          <span className="material-symbols-outlined text-sm">share</span> Share
        </button>
      </div>
    </div>
  );
}
