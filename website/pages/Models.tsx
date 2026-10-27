import { Cpu, Database, FileCode2, ArrowUpRight } from 'lucide-react';
import { site } from '../src/site';

const models = [
  { name: 'Traditional CV + UFLDv2', task: 'Multi-lane detection', framework: 'OpenCV · PyTorch', note: 'Brightness-adaptive feature voting, optional neural mask, perspective transform, lane fitting, and deviation metrics.' },
  { name: 'YOLO object detector', task: 'Objects and road users', framework: 'Ultralytics', note: 'Local checkpoint for the trained classes. The exact network variant depends on the supplied weights.' },
  { name: 'YOLO sign detector + CNN', task: 'Traffic signs', framework: 'Ultralytics · TensorFlow/Keras', note: 'Detect sign regions, then classify cropped signs using the Keras model.' },
  { name: 'YOLO traffic-light detector', task: 'Traffic-light recognition', framework: 'Ultralytics', note: 'Detection and label overlays. Traffic-rule enforcement is not yet connected to the controller.' },
];
const checkpoints = ['object_detection/object_detection.pt', 'traffic_light/traffic_light_detection.pt', 'traffic_sign/traffic_sign_detection.pt', 'traffic_sign/traffic_sign_classification.h5', 'ufld/ufld_culane_res18.pth'];

export default function Models() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12"><span className="text-sm text-brand-accent font-semibold uppercase tracking-widest">Perception foundations</span><h1 className="text-4xl font-display font-bold text-brand-dark mt-4 mb-4">Models & Datasets</h1><p className="text-lg text-slate-600 max-w-3xl">The models and data behind AstraDrive's simulation experiments. These integrations are research prototypes, not production-qualified driving systems.</p></header>
        <section className="grid md:grid-cols-2 gap-6">{models.map(model => <article key={model.name} className="border border-slate-200 rounded-2xl p-7 bg-white shadow-sm"><Cpu className="text-brand-accent mb-5" size={25} /><h2 className="text-xl font-bold text-brand-dark mb-2">{model.name}</h2><p className="text-sm text-brand-accent mb-4">{model.task} · {model.framework}</p><p className="text-sm text-slate-600 leading-relaxed">{model.note}</p></article>)}</section>
        <section className="grid lg:grid-cols-2 gap-8 mt-12">
          <article className="p-7 rounded-2xl bg-slate-50 border border-slate-200"><h2 className="text-2xl font-display font-bold text-brand-dark flex items-center gap-3 mb-5"><FileCode2 className="text-brand-accent shrink-0" /> Expected checkpoints</h2><p className="text-sm text-slate-600 mb-5">Place compatible weights under the repository's models/ directory. Checkpoint architectures and class labels must match the code.</p><ul className="space-y-3">{checkpoints.map(name => <li key={name} className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-mono text-slate-700 break-all">{name}</li>)}</ul><a href={`${site.repository}#getting-started`} className="inline-flex items-center gap-2 mt-6 text-brand-accent font-semibold">Model setup guide <ArrowUpRight size={17} /></a></article>
          <article className="p-7 rounded-2xl border border-slate-200"><h2 className="text-2xl font-display font-bold text-brand-dark flex items-center gap-3 mb-5"><Database className="text-brand-accent shrink-0" /> Datasets & experiments</h2><p className="text-sm text-slate-600 leading-relaxed mb-5">The project documentation references CULane, BDD100K, GTSRB, LISA, and Mapillary. Training scripts, sign notebooks, archived plots, and some checkpoints are available in the repository.</p><p className="text-sm text-slate-600 leading-relaxed mb-5">Full datasets are external. Training notebooks contain environment-specific paths, and saved metrics apply to their individual runs. No comparative dataset-size chart or current inference benchmark is claimed here.</p><a href={`${site.repository}/tree/main/training`} className="inline-flex items-center gap-2 text-brand-accent font-semibold">Browse training artifacts <ArrowUpRight size={17} /></a></article>
        </section>
        <aside className="mt-8 rounded-xl border border-cyan-100 bg-cyan-50 p-6 text-sm text-slate-700 leading-relaxed">UFLDv2 requires both its checkpoint and the correct bundled configuration path. The README documents a current loader/config filename mismatch and the CV-only fallback. Check the startup console before assuming neural lane inference is enabled.</aside>
      </div>
    </main>
  );
}
