import { Link } from 'react-router-dom';

function EbookThankYou() {
  return (
    <>
      {/*  TopNavBar  */}

{/*  Success Main Content  */}
<main className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-surface-container-low">
<div className="max-w-4xl w-full px-6">
<div className="bg-surface-container-lowest rounded-xl shadow-[0_40px_100px_rgba(31,62,146,0.06)] overflow-hidden flex flex-col md:flex-row items-center">
{/*  Left: Visual/Ebook Preview  */}
<div className="w-full md:w-5/12 bg-primary-container p-12 flex items-center justify-center relative min-h-[300px]">
<div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
<div className="relative z-10 w-full transform rotate-3 hover:rotate-0 transition-transform duration-500">
<img alt="Ebook Cover" className="w-full shadow-2xl rounded-sm" data-alt="Professional hardcover book mockup with elegant dark blue cover and minimalist white typography titled Strategic Stewardship on a clean surface" src="/images/img_4.jpg" />
</div>
</div>
{/*  Right: Message & CTAs  */}
<div className="w-full md:w-7/12 p-8 md:p-16 text-center md:text-left">
<div className="inline-flex items-center justify-center w-12 h-12 bg-primary-fixed rounded-full text-primary mb-6">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
<h1 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight mb-4 font-headline leading-tight">
                        Your Ebook Is Ready! 🎉
                    </h1>
<p className="text-on-surface-variant text-lg mb-8 leading-relaxed max-w-md">
                        Thank you for your interest. Your digital copy of "Strategic Stewardship" has been prepared for you. <span className="font-semibold text-on-surface">Check your email for a copy.</span>
</p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<Link to="/ebook" className="bg-primary-container text-on-primary px-8 py-4 rounded-md font-bold tracking-tight shadow-lg shadow-primary-container/20 hover:translate-y-[-1px] transition-all duration-200 flex items-center justify-center gap-2">
<span className="material-symbols-outlined">download</span>
                            Download PDF
                        </Link>
<Link className="flex items-center justify-center gap-2 px-8 py-4 text-on-surface-variant font-medium border border-outline-variant/30 rounded-md hover:bg-surface-container-high transition-all duration-200" to="https://www.linkedin.com/in/pcoyle/" target="_blank">
<span className="material-symbols-outlined">share</span>
                            Follow on LinkedIn
                        </Link>
</div>
<div className="pt-8 border-t border-surface-variant w-full">
<p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4">You might also like</p>
<div className="grid grid-cols-2 gap-4">
<Link className="group block" to="/about">
<p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">Quarterly Review 2024</p>
<p className="text-xs text-on-surface-variant">Technical Report</p>
</Link>
<Link className="group block" to="/about">
<p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">Case Study: BioTech X</p>
<p className="text-xs text-on-surface-variant">Financial Strategy</p>
</Link>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-on-surface-variant/60 text-sm">
                    Having trouble? Contact our support at <span className="underline">hello@patrickcoyle.com</span>
</p>
</div>
</div>
</main>
{/*  Footer  */}
    </>
  );
}

export default EbookThankYou;