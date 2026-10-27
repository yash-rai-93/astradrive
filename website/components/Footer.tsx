import { Github, Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '../src/site';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="text-2xl font-display font-bold text-brand-dark">{site.name}</Link>
            <p className="text-slate-500 text-sm leading-relaxed my-5">Computer vision, simulated sensors, and assisted vehicle control in BeamNG.tech.</p>
            <div className="flex gap-4">
              <a href={site.repository} aria-label="AstraDrive GitHub repository" className="text-slate-500 hover:text-brand-accent"><Github size={21} /></a>
              <a href={`mailto:${site.email}`} aria-label="Email Yash" className="text-slate-500 hover:text-brand-accent"><Mail size={21} /></a>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-brand-dark mb-4">Explore</h2>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/technical">Architecture</Link></li>
              <li><Link to="/demos">Simulation demos</Link></li>
              <li><Link to="/models">Models & datasets</Link></li>
              <li><Link to="/roadmap">Roadmap</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-brand-dark mb-4">Resources</h2>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href={`${site.repository}#getting-started`}>Setup guide</a></li>
              <li><a href={`${site.repository}#architecture`}>Architecture documentation</a></li>
              <li><a href={`${site.repository}/commits/main`}>Development history</a></li>
              <li><a href={site.repository} className="inline-flex items-center gap-1">GitHub repository <ArrowUpRight size={13} /></a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-brand-dark mb-4">Contact</h2>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/about">{site.owner}</Link></li>
              <li><a href={site.profile}>@{site.username}</a></li>
              <li><a href={`mailto:${site.email}`} className="break-all">{site.email}</a></li>
              <li><Link to="/contact">Get in touch</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row gap-3 justify-between text-sm text-slate-500">
          <p>© {site.year} {site.owner} · {site.name}</p>
          <p>Research prototype · Built with React & BeamNG.tech</p>
        </div>
      </div>
    </footer>
  );
}
