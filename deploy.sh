set -e
npm run build
cd public
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Doerr33/Doerr33.github.io.git master