#!/usr/bin/env.sh
set -e
npm run docs:build

cd .vitepress/dist

git init

git add -A

git commit -m "gitee actions 自动部署"

git push -f https://gitee.com/chenwanye/wanye-chen.git  master:ph-pages

cd -

rm -rf docs/.vitepress/dist


