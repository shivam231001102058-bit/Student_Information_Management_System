import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.join(process.cwd(), 'src', 'assets', 'students');
fs.mkdirSync(outputDir, { recursive: true });

const students = [
  ['shivam', 'Shivam', '#2563eb'],
  ['rahul', 'Rahul', '#0f766e'],
  ['shubham', 'Shubham', '#7c3aed'],
  ['ankit', 'Ankit', '#dc2626'],
];

for (const [name, label, color] of students) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="${color}" />
      <rect x="30" y="30" width="540" height="390" rx="22" fill="rgba(255,255,255,0.28)" />
      <circle cx="300" cy="190" r="140" fill="rgba(255,255,255,0.40)" />
      <rect x="210" y="220" width="180" height="150" rx="10" fill="rgba(255,255,255,0.40)" />
      <text x="300" y="370" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="white">${label}</text>
    </svg>
  `;

  const filePath = path.join(outputDir, `${name}.jpg`);
  await sharp(Buffer.from(svg)).jpeg({ quality: 92 }).toFile(filePath);
  console.log(`Created ${filePath}`);
}

console.log('All student images generated successfully.');
