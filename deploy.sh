#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run document:build

# navigate into the build output directory
cd document/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:comter1/comter1.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:comter1/document.git main:gh-pages

cd -