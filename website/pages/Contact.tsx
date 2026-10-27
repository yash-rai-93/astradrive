import { Github, Mail, ArrowUpRight } from 'lucide-react';
import { site } from '../src/site';

export default function Contact() {
  return (
    <main className="min-h-[80vh] bg-brand-surface flex items-center justify-center px-4 pt-32 pb-20">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block text-sm font-semibold text-brand-accent tracking-widest uppercase mb-5">Let's connect</span>
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-brand-dark mb-6">Get in touch with {site.owner}</h1>
        <p className="text-lg text-slate-600 mb-10">Questions about AstraDrive, computer vision, or simulation? Explore the code, open an issue, or reach out by email.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={site.repository} target="_blank" rel="noopener noreferrer" className="px-7 py-4 bg-brand-dark text-white rounded-full font-bold inline-flex items-center justify-center gap-3 hover:bg-brand-accent transition-colors">
            <Github size={21} /> View on GitHub <ArrowUpRight size={17} />
          </a>
          <a href={`mailto:${site.email}`} className="px-7 py-4 border border-slate-200 text-brand-dark rounded-full font-bold inline-flex items-center justify-center gap-3 hover:border-brand-accent transition-colors">
            <Mail size={21} /> Email {site.owner}
          </a>
        </div>
        <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-2xl text-slate-600 space-y-2">
          <p className="font-semibold text-brand-dark">{site.owner} · @{site.username}</p>
          <a className="block text-brand-accent break-all" href={`mailto:${site.email}`}>{site.email}</a>
          <a className="block text-sm" href={site.profile}>github.com/{site.username}</a>
        </div>
      </div>
    </main>
  );
}
