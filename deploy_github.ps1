$git = "C:\Program Files\Git\cmd\git.exe"
& $git config --global user.email "preeti-kaur245@users.noreply.github.com"
& $git config --global user.name "Preeti Kaur"
& $git init
& $git add .
& $git commit -m "Initial commit of all project files"
& $git branch -M main
& $git remote add origin https://github.com/preeti-kaur245/Fusion-Fest-project
Write-Host "Please complete the GitHub authentication in the pop-up window if prompted..."
& $git push -u origin main
