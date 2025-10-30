@echo off
echo Installing Vite globally...
npm install -g vite

echo Creating local node_modules\vite\bin directory if it doesn't exist...
mkdir "node_modules\vite\bin" 2>nul

echo Creating a simple vite.js file that calls the global vite...
echo @echo off > "node_modules\vite\bin\vite.js"
echo npx vite %%* >> "node_modules\vite\bin\vite.js"

echo Done!
pause
