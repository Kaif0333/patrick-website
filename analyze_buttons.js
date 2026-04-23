const fs = require('fs');
const path = require('path');
const pagesDir = './src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));
let buttonCount = 0;
let emptyLinkCount = 0;
let aHrefCount = 0;
let buttonLines = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.match(/<button/i)) {
      buttonCount++;
      buttonLines.push(`${file}:${i + 1}: ${line.trim()}`);
    }
  }

  const emptyLinks = content.match(/<Link\s+[^>]*to=[\"']\/[\"'][^>]*>/gi);
  if (emptyLinks) emptyLinkCount += emptyLinks.length;
  
  const aHrefs = content.match(/<a\s+[^>]*href=[\"'][#\/][\"'][^>]*>/gi);
  if (aHrefs) aHrefCount += aHrefs.length;
}

console.log('Buttons:', buttonCount);
console.log('Links to "/":', emptyLinkCount);
console.log('Raw <a href="#" or "/"> links:', aHrefCount);
console.log('Button details:');
console.log(buttonLines.join('\n'));
