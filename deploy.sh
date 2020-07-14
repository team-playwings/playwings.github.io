#!/bin/bash
STAGE=$(echo $1 | tr 'A-Z' 'a-z')
if [ "${STAGE}" == "" ]; then
  echo "Usage: ./deploy.sh <stage>"
  echo "Available stages: dev, prd"
  exit 1
fi
echo "Deploying to ${STAGE}"
if [ "${STAGE}" == "dev" ]; then
  DEPLOY_URL=s3://www-$STAGE.playwings.co.kr
elif  [ "${STAGE} == "prd" ]; then
  DEPLOY_URL=s3://www.playwings.co.kr
else
  exit 1
fi

# --guess-mime-type --no-mime-magic is required. If not specified, css files that are uploaded to S3 will have "text/plain" MIME type.
s3cmd sync --exclude-from .s3ignore _site/ $DEPLOY_URL --delete-removed --guess-mime-type --no-mime-magic
