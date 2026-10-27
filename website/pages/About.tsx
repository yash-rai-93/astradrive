import { useState } from 'react';
import { Github, FileText, ChevronDown, User } from 'lucide-react';
import { site } from '../src/site';

const faqs = [
  { question: 'How do I run the simulation?', answer: 'Install BeamNG.tech, prepare the Python dependencies and compatible model weights, and set the simulator path in config/beamng.yaml. The repository README includes setup steps and known integration issues.' },
  { question: 'Which features are implemented?', answer: 'The local loop combines CV/UFLDv2 lane perception, object/sign/light recognition, PID steering, cruise control, and experimental radar braking. Planning, mapping, and comprehensive sensor fusion remain roadmap work.' },
  { question: 'Does AstraDrive support CARLA?', answer: 'The active integration uses BeamNG.tech. A CARLA bridge is planned; it is not part of the current driving loop.' },
  { question: 'Can I contribute?', answer: 'Yes. Open an issue or pull request in the AstraDrive repository. Reproducible bug reports, setup improvements, and focused perception/control experiments are welcome.' },
];

export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main className="min-h-screen bg-brand-surface pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-12 shadow-sm">
          <h1 className="text-4xl font-display font-bold text-brand-dark mb-6">About {site.name}</h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-7">AstraDrive is a modular Python project for autonomous-driving research in simulation. It brings camera perception, radar processing, and vehicle control together in BeamNG.tech so experiments can be inspected and improved.</p>
          <p className="text-slate-600 mb-8">This is a research prototype. The demos show individual experiments, while the README records the active implementation, setup requirements, and remaining limitations.</p>
          <div className="flex flex-wrap gap-4">
            <a href={`${site.repository}#getting-started`} className="inline-flex items-center gap-2 text-brand-accent font-semibold"><FileText size={19} /> Read the setup guide</a>
            <a href={site.repository} className="inline-flex items-center gap-2 text-brand-dark font-semibold"><Github size={19} /> Explore the repository</a>
          </div>
        </section>
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-7 sm:p-10">
          <h2 className="text-2xl font-display font-bold text-brand-dark flex items-center gap-3 mb-6"><User className="text-brand-accent" /> Project maintainer</h2>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-brand-dark text-white flex items-center justify-center text-2xl font-display font-bold shrink-0" aria-hidden="true">Y</div>
            <div>
              <h3 className="text-xl font-bold text-brand-dark">{site.owner}</h3>
              <a href={site.profile} className="text-brand-accent text-sm">@{site.username}</a>
              <a href={`mailto:${site.email}`} className="block text-slate-600 text-sm mt-1 break-all">{site.email}</a>
            </div>
          </div>
        </section>
        <section className="border border-slate-200 rounded-2xl p-7 sm:p-10">
          <h2 className="text-2xl font-display font-bold text-brand-dark mb-6">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border border-slate-200 rounded-xl overflow-hidden">
                <h3><button type="button" aria-expanded={openFaq === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(current => current === index ? null : index)} className="w-full flex justify-between items-center gap-5 p-5 text-left font-semibold text-slate-700 hover:bg-slate-50">
                  {faq.question}<ChevronDown size={19} className={`shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button></h3>
                <div id={`faq-answer-${index}`} hidden={openFaq !== index} className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{faq.answer}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="border border-slate-200 rounded-2xl p-7 sm:p-10">
          <h2 className="text-xl font-display font-bold mb-4 text-brand-dark">Tools & research</h2>
          <p className="text-slate-600 text-sm leading-relaxed">BeamNG.tech, BeamNGpy, UFLDv2, Ultralytics, TensorFlow/Keras, OpenCV, and Foxglove support the experiments. Dataset and third-party license details are documented in the repository.</p>
        </section>
      </div>
    </main>
  );
}
