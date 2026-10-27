import { ArrowDown, Car, Eye, Radio, Cpu, Github } from 'lucide-react';
import { site } from '../src/site';

const steps = [
  { title: 'Simulation & sensors', icon: Car, items: ['BeamNG.tech scenario and vehicle', 'BeamNGpy camera/radar/LiDAR polling', 'Vehicle speed, position, and direction'] },
  { title: 'Local perception', icon: Eye, items: ['CV voting with an optional UFLDv2 lane mask', 'YOLO objects, lights, and sign detection', 'TensorFlow/Keras sign classification'] },
  { title: 'Measurements', icon: Radio, items: ['Current-lane selection and lateral deviation', 'Radar filtering and time-to-collision metrics', 'LiDAR point clouds for inspection'] },
  { title: 'Control & actuation', icon: Cpu, items: ['PID steering and steering-rate limits', 'PID cruise control or experimental radar braking', 'Steering, throttle, and brake sent to the vehicle'] },
];
const sensors = [
  { title: 'Front camera', specs: '1920 × 1080 · 70° vertical FOV · 0.05 s requested period', note: 'Primary front-camera perception. Color is enabled; depth is disabled in the default ETK profile.' },
  { title: 'Roof LiDAR', specs: '80 vertical lines · 360° · 120 m max distance · 20 Hz frequency', note: 'Point-cloud collection and visualization. Active code does not perform 3D obstacle detection.' },
  { title: 'Front radar', specs: '150 m configured maximum · 128 × 64 range/azimuth bins', note: 'Requested period 0.05 s. Radar-derived TTC is used by the adaptive braking branch.' },
  { title: 'Rear radars', specs: 'Left/right profiles · disabled in the default ETK configuration', note: 'Blind-spot logic requires enabled and correctly positioned rear sensors. Q8 settings differ.' },
  { title: 'GPS & IMU', specs: 'GPS: 0.05 s physics period · IMU: 0.01 s physics period', note: 'Sensors are configured and initialized. Comprehensive localization and state-estimation fusion are future work.' },
];

export default function Technical() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <span className="text-brand-accent font-semibold text-sm uppercase tracking-widest">Inside the stack</span>
          <h1 className="text-4xl font-display font-bold text-brand-dark mt-4 mb-4">System Architecture</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">From simulated sensor data to vehicle commands. The active driving loop runs models locally in a single Python process.</p>
        </header>
        <div className="max-w-3xl mx-auto mb-14">
          {steps.map((step, index) => (
            <div key={step.title}>
              <section className="border border-slate-200 bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
                <div className="flex gap-4 items-center mb-4"><span className="p-3 rounded-xl bg-cyan-50 text-brand-accent"><step.icon size={23} /></span><h2 className="text-xl font-bold text-brand-dark">{index + 1}. {step.title}</h2></div>
                <ul className="space-y-2 text-sm text-slate-600 list-disc pl-6">{step.items.map(item => <li key={item}>{item}</li>)}</ul>
              </section>
              {index < steps.length - 1 ? <ArrowDown className="mx-auto my-4 text-slate-400" aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
        <section className="grid sm:grid-cols-3 gap-4 mb-16" aria-label="Runtime scope">
          {[['Execution', 'Local Python loop'], ['Steering', 'PID + feed-forward'], ['Validation', 'Simulation prototype']].map(([label, value]) => <div key={label} className="p-6 rounded-xl bg-slate-50 border border-slate-200"><h2 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">{label}</h2><p className="text-lg font-bold text-brand-dark">{value}</p></div>)}
        </section>
        <section>
          <h2 className="text-3xl font-display font-bold text-brand-dark mb-4">Sensor configuration</h2>
          <p className="text-slate-600 mb-8">These values describe the default ETK configuration. Requested sensor periods and deterministic simulation stepping are not measured end-to-end model throughput.</p>
          <div className="grid sm:grid-cols-2 gap-5">{sensors.map(sensor => <article key={sensor.title} className="border border-slate-200 rounded-2xl p-6"><h3 className="font-bold text-xl text-brand-dark mb-3">{sensor.title}</h3><p className="text-sm text-brand-accent font-medium mb-3">{sensor.specs}</p><p className="text-sm text-slate-600 leading-relaxed">{sensor.note}</p></article>)}</div>
        </section>
        <aside className="mt-10 p-6 rounded-xl bg-cyan-50 border border-cyan-100 text-slate-700 text-sm leading-relaxed">The repository also contains experimental Flask services and a Docker/HTTP aggregator. They are bypassed by the main loop. MPC, path planning, complete ACC, and comprehensive sensor fusion remain roadmap work. Standardized system benchmarks have not been established.</aside>
        <a href={`${site.repository}#architecture`} className="inline-flex gap-2 items-center mt-8 text-brand-accent font-semibold"><Github size={18} /> Read the architecture documentation</a>
      </div>
    </main>
  );
}
