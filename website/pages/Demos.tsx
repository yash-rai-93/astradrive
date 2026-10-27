import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`;
const demos = [
  { title: 'Multi-Lane Detection', description: 'Recorded lane-perception experiments across glare, tunnels, and fog. Difficult lighting remains an active limitation.', image: 'multi-lane.gif', youtubeId: 'IvmJ01pYCSE', tags: ['CV', 'Lane detection'] },
  { title: 'Automatic Emergency Braking', description: 'Radar filtering and experimental time-to-collision braking in simulation.', image: 'aeb_gif.gif', youtubeId: 'Z8Y2-MpmrRg', tags: ['Radar', 'AEB'] },
  { title: 'Blind-Spot Monitoring', description: 'Rear-radar warning logic. The sensor illustration is shown here because no separate BSD animation is included. Rear sensors must be enabled for this experiment.', image: 'radar_rear.png', tags: ['Radar', 'Prototype'] },
  { title: 'Sign Detection & Classification', description: 'Traffic sign localization and classification using YOLO and a CNN.', image: 'sign_demo.gif', youtubeId: 'ujGkQJ2BqV0', tags: ['YOLO', 'CNN'] },
  { title: 'Traffic Light Recognition', description: 'Detection and classification overlays. Automatic traffic-rule enforcement remains planned.', image: 'traffic_light_demo.gif', tags: ['Detection', 'Classification'] },
  { title: 'Lane Keeping v2', description: 'A recorded CV/neural lane-keeping experiment with steering and speed control.', image: 'lane.gif', youtubeId: '7eA_XfIkLWQ', tags: ['Lane keeping', 'Control'] },
  { title: 'YOLOP Experiment', description: 'An earlier experiment with lanes, drivable-area segmentation, and objects; outside the current local lane pipeline.', image: 'yolop.gif', youtubeId: 'CZC2ajqDkuU', tags: ['YOLOP', 'Experiment'] },
  { title: 'Foxglove LiDAR Visualization', description: 'Recorded point-cloud and vehicle telemetry visualization. Current runtime bridge wiring is documented as unfinished.', image: 'foxglove.gif', youtubeId: '4HJDvL2Q6AY', tags: ['LiDAR', 'Visualization'] },
  { title: 'Scene Segmentation', description: 'A separate segmentation experiment on saved camera images, outside the active driving loop.', image: 'segmentation.gif', youtubeId: '4PAqcUKqn6c', tags: ['Segmentation', 'Offline experiment'] },
  { title: 'Ultra-Fast Lane Detection', description: 'UFLDv2 lane inference with temporal smoothing before fusion into the CV voting pipeline.', image: 'ufld_demo.gif', youtubeId: 'Dkj-diRK334', tags: ['UFLDv2', 'Lanes'] },
];

export default function Demos() {
  const [playing, setPlaying] = useState<string | null>(null);
  return (
    <main className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12"><h1 className="text-4xl font-display font-bold text-brand-dark mb-4">Simulation Demos</h1><p className="text-slate-600 max-w-2xl mx-auto">Explore the recorded AstraDrive experiments. Existing animations and full-video links are preserved; each demo describes its scope.</p></header>
        <div className="grid md:grid-cols-2 gap-7">{demos.map(demo => <article key={demo.title} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
          <div className="aspect-video bg-slate-900 relative">
            {playing === demo.title && demo.youtubeId ? <iframe className="w-full h-full" title={`${demo.title} video`} src={`https://www.youtube-nocookie.com/embed/${demo.youtubeId}?autoplay=1`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /> : <>
              <img src={asset(demo.image)} alt={`${demo.title} preview`} loading="lazy" decoding="async" width="640" height="360" className="w-full h-full object-contain" />
              {demo.youtubeId ? <button type="button" aria-label={`Play ${demo.title} video`} onClick={() => setPlaying(demo.title)} className="absolute inset-0 flex items-center justify-center group"><span className="p-4 bg-white/95 rounded-full shadow-lg text-brand-accent group-hover:scale-110 transition-transform"><Play size={25} fill="currentColor" /></span></button> : null}
            </>}
          </div>
          <div className="p-6"><div className="flex flex-wrap gap-2 mb-4">{demo.tags.map(tag => <span key={tag} className="text-xs bg-cyan-50 text-brand-accent px-2.5 py-1 rounded-full">{tag}</span>)}</div><h2 className="font-display text-xl font-bold text-brand-dark mb-3">{demo.title}</h2><p className="text-sm text-slate-600 leading-relaxed">{demo.description}</p>{demo.youtubeId ? <a href={`https://www.youtube.com/watch?v=${demo.youtubeId}`} target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 items-center text-brand-accent text-sm font-semibold mt-5">Watch full video <ExternalLink size={15} /></a> : null}</div>
        </article>)}</div>
        <p className="text-center text-sm text-slate-500 mt-10">Earlier recording: <a className="text-brand-accent underline" href="https://youtu.be/f9mHigMKME8" target="_blank" rel="noopener noreferrer">Lane keeping & multi-model detection v1</a></p>
      </div>
    </main>
  );
}
