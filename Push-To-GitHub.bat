@echo off
title Push to GitHub - Raste Kate
echo ==============================================
echo Pushing Raste Kate to GitHub Repository...
echo URL: https://github.com/Jaydeep12-3/rastekate
echo ==============================================
echo.
git push -f -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ==============================================
    echo [SUCCESS] Code pushed successfully to GitHub!
    echo Refresh: https://github.com/Jaydeep12-3/rastekate
    echo ==============================================
) else (
    echo [ERROR] Push failed. Please check your GitHub credentials.
)
pause
