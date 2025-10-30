const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if node_modules/vite exists
const vitePath = path.join(__dirname, 'node_modules', 'vite');
const viteExists = fs.existsSync(vitePath);

console.log(`Vite installation check: ${viteExists ? 'Found' : 'Not found'}`);

if (!viteExists) {
  console.log('Installing vite...');
  try {
    execSync('npm install vite@latest --save-dev', { stdio: 'inherit' });
    console.log('Vite installed successfully!');
  } catch (error) {
    console.error('Error installing vite:', error.message);
  }
}

// Check again if node_modules/vite/bin/vite.js exists
const viteBinPath = path.join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');
const viteBinExists = fs.existsSync(viteBinPath);

console.log(`Vite bin check: ${viteBinExists ? 'Found at ' + viteBinPath : 'Not found'}`);

if (!viteBinExists) {
  console.error('Vite bin still not found after installation. Try running:');
  console.error('1. npm cache clean --force');
  console.error('2. Delete node_modules folder');
  console.error('3. npm install');
} else {
  console.log('Your Vite installation appears to be correct. Try running:');
  console.log('npm run dev');
}
