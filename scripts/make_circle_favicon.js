import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputImagePath = path.join(__dirname, '..', 'src', 'assets', 'Profil', 'april3.jpeg');
const outputSvgPath = path.join(__dirname, '..', 'public', 'favicon.svg');

const imageBuffer = fs.readFileSync(inputImagePath);
const base64Image = imageBuffer.toString('base64');
const dataUri = `data:image/jpeg;base64,${base64Image}`;

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <defs>
    <clipPath id="circleClip">
      <circle cx="32" cy="32" r="31"/>
    </clipPath>
  </defs>
  <image href="${dataUri}" width="64" height="64" preserveAspectRatio="xMidYMid slice" clip-path="url(#circleClip)"/>
  <circle cx="32" cy="32" r="30" fill="none" stroke="#E87A8A" stroke-width="2.5"/>
</svg>`;

fs.writeFileSync(outputSvgPath, svgContent, 'utf8');
console.log('Successfully generated circular SVG favicon at public/favicon.svg');
