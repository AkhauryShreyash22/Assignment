@echo off
echo Initializing a project

git init

git remote add origin git@github.com:AkhauryShreyash22/Assignment.git

git status

git add .

git status

git config --global user.email "akhaury.shreyash@gmail.com"
git config --global user.name "Akhaury Shreyash"

git commit -m "initializing project"

git checkout -b init_commit

git push -u origin init_commit

echo Pushed to GitHub repository
