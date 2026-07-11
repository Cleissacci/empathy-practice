const fs = require('fs');
const path = require('path');

const stateFile = 'ui_kits/empathy-elearning/.image-slots.state.json';
const state = JSON.parse(fs.readFileSync(stateFile, 'utf8'));

const artifacts = [
  { key: 'rp-portrait-Maya', file: 'C:\\Users\\johnm\\.gemini\\antigravity\\brain\\d0bb7fbd-a4a8-4c79-81c8-5ac761dc77d5\\portrait_maya_1783799788721.png' },
  { key: 'rp-portrait-Devon', file: 'C:\\Users\\johnm\\.gemini\\antigravity\\brain\\d0bb7fbd-a4a8-4c79-81c8-5ac761dc77d5\\portrait_devon_1783799804389.png' },
];

const assetsDir = 'assets/images';
const mapping = {
  'portrait_priya.png': 'rp-portrait-Priya',
  'portrait_theo.png': 'rp-portrait-Theo',
  'portrait_riley.png': 'rp-portrait-Riley',
  'photo_m1.png': 'photo-m1',
  'photo_m2.png': 'photo-m2',
  'photo_m3.png': 'photo-m3',
  'photo_m4.png': 'photo-m4',
  'photo_m5.png': 'photo-m5',
  'photo_cap.png': 'photo-cap'
};

// Find any image-slot IDs in the HTML files
const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const f of htmlFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const matches = [...content.matchAll(/<image-slot[^>]+id="([^"]+)"/ig)];
  for (const m of matches) {
    if (m[1].includes('cover')) mapping['cover.png'] = m[1];
  }
}

for (const artifact of artifacts) {
  if (fs.existsSync(artifact.file)) {
    const b64 = fs.readFileSync(artifact.file, 'base64');
    state[artifact.key] = { u: 'data:image/png;base64,' + b64, s: 1, x: 0, y: 0 };
    fs.copyFileSync(artifact.file, path.join(assetsDir, 'portrait_' + artifact.key.split('-').pop().toLowerCase() + '.png'));
  }
}

for (const [file, key] of Object.entries(mapping)) {
  const p = path.join(assetsDir, file);
  if (fs.existsSync(p)) {
    const b64 = fs.readFileSync(p, 'base64');
    state[key] = { u: 'data:image/png;base64,' + b64, s: 1, x: 0, y: 0 };
  }
}

fs.writeFileSync(stateFile, JSON.stringify(state));
console.log('Updated .image-slots.state.json keys:', Object.keys(state));
