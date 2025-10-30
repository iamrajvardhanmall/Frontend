@echo off
echo Cleaning npm cache...
npm cache clean --force

echo Removing node_modules...
rmdir /s /q node_modules

echo Installing dependencies...
npm install

echo Done!
pause
