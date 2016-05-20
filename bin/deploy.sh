#!/bin/bash

# Exit if any subcommand fails.
set -e

# Build site.
echo "Started building the app..."
npm run build-heroku

echo "Started deploying"
# Push dist to master.
cd HEROKU/app
git init
git remote add heroku $HEROKU_URL

git config user.name "$USERNAME"
git config user.email "$EMAIL"

git add -fA
git commit --allow-empty -m "Update app from commit $CURRENT_COMMIT"
git push -f heroku master

echo "Deployed Successfully!"

exit 0
