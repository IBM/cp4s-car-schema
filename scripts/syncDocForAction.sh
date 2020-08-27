echo "TARGET_REPO_INTERMEDIATE_BRANCH is : ${TARGET_REPO_INTERMEDIATE_BRANCH}"
echo "TARGET_REPO_BRANCH is : ${TARGET_REPO_BRANCH}"
echo "TARGET_REPO_URL is : ${TARGET_REPO_URL}"
echo "TARGET_REPO_USER is : ${TARGET_REPO_USER}"
echo "TARGET_REPO_REVIEWER is : ${TARGET_REPO_REVIEWER}"
echo "TARGET_GITHUB_HOST is : ${TARGET_GITHUB_HOST}"
echo "COMMIT_ID is : ${COMMIT_ID}"
result=( $(git diff --name-only ${COMMIT_ID} | grep -e graphqlSchema.js -e coreSchema.js -e filterSchema.js -e importSchema.js -e doc/script -e doc/wrapper) )
hub clone --branch=${TARGET_REPO_BRANCH} https://${TARGET_REPO_TOKEN}:x-oauth-basic@${TARGET_GITHUB_HOST}/${TARGET_REPO_URL} target
if [ -d ./target ]
then
  cd target && git checkout -b ${TARGET_REPO_INTERMEDIATE_BRANCH}
  for file in "${result[@]}"
  do
    cp -f ../$file ./$file
  done 
  node ./doc/script/docSchemaHelper.js
  if ! git diff --exit-code --quiet; then
    git config  user.email "iscstg@ie.ibm.com"
    git config  user.name "scstg"
    git commit  -a --author "${TARGET_REPO_USER}" --message "sync docs"
    pr=$(GITHUB_HOST=${TARGET_GITHUB_HOST} GITHUB_TOKEN=${TARGET_REPO_TOKEN}  hub pr list -b ${TARGET_REPO_BRANCH} -h ${TARGET_REPO_INTERMEDIATE_BRANCH})
    if [ ! -z "$pr" ]; then
      git push -f --set-upstream origin ${TARGET_REPO_INTERMEDIATE_BRANCH}
    fi
    branches=$(git ls-remote | grep ${TARGET_REPO_INTERMEDIATE_BRANCH})
    if [ -z "$branches" ]; then
      GITHUB_HOST=${TARGET_GITHUB_HOST} GITHUB_TOKEN=${TARGET_REPO_TOKEN} hub pull-request -b ${TARGET_REPO_BRANCH} -h ${TARGET_REPO_INTERMEDIATE_BRANCH} -r ${TARGET_REPO_REVIEWER}  --push --no-edit
    else
      git push -f --set-upstream origin ${TARGET_REPO_INTERMEDIATE_BRANCH}
      GITHUB_HOST=${TARGET_GITHUB_HOST} GITHUB_TOKEN=${TARGET_REPO_TOKEN} hub pull-request -b ${TARGET_REPO_BRANCH} -h ${TARGET_REPO_INTERMEDIATE_BRANCH} -r ${TARGET_REPO_REVIEWER}  --no-edit
    fi
  fi
fi