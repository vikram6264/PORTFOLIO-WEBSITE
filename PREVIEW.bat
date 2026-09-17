@echo off
title Vikram Patel Portfolio - Production Preview
echo.
echo  Building portfolio...
echo.
cd /d "%~dp0"
call npm run build
echo.
echo  Starting preview server...
echo  Open http://localhost:4173 in your browser
echo.
node node_modules\vite\bin\vite.js preview --host --port 4173
pause