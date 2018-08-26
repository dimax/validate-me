#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build:docs

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m '🛫 Deploy'

git push -f git@github.com:dimax/validate-me.git master:gh-pages

cd -
