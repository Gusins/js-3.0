git add .
echo "Введи комміт:"
read commit_message
git commit -m "$commit_message"
git push origin