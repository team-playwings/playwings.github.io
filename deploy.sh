#!/bin/bash
STAGE=$(echo $1 | tr 'A-Z' 'a-z')
if [ "${STAGE}" == "" ]; then
  echo "Usage: ./deploy.sh <stage>"
  echo "Available stages: dev, prd"
  exit 1
fi
echo "Deploying to ${STAGE}"
DEPLOY_URL=s3://www-$STAGE.playwings.co.kr

# --guess-mime-type --no-mime-magic is required. If not specified, css files that are uploaded to S3 will have "text/plain" MIME type.
s3cmd sync --exclude-from .s3ignore _site/ $DEPLOY_URL --delete-removed --guess-mime-type --no-mime-magic
