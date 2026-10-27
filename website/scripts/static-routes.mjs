import { copyFile, mkdir, writeFile } from 'node:fs/promises';

const routes = ['technical', 'demos', 'models', 'roadmap', 'about', 'contact'];
for (const route of routes) {
  await mkdir(`dist/${route}`, { recursive: true });
  await copyFile('dist/index.html', `dist/${route}/index.html`);
}
await copyFile('dist/index.html', 'dist/404.html');
await writeFile('dist/.nojekyll', '');
console.log(`Prepared ${routes.length + 1} direct-entry pages for GitHub Pages.`);
