@echo off
title Vikram Patel Portfolio - Dev Server
echo.
echo  Starting portfolio dev server...
echo  Open http://localhost:5173 in your browser
echo.
cd /d "%~dp0"
node node_modules/vite/bin/vite.js --host --port 5173
pause