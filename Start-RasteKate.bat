@echo off
title Raste Kate Server
echo ================================
echo   RASTE KATE - Safar ka Sangeet
echo ================================
echo.
echo Server start ho raha hai... please wait
start "" "C:\Program Files\nodejs\node.exe" server.js
timeout /t 3 /nobreak
echo Browser khul raha hai...
start http://localhost:9001
echo.
echo Server chal raha hai! Is window ko BAND MAT KARO.
echo Band karne ke liye yahan koi key dabaao.
pause > nul
