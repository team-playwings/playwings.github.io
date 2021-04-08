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
elif  [ "${STAGE}" == "prd" ]; then
  DEPLOY_URL=s3://www.playwings.co.kr
else
  exit 1
fi

# Do not use --delete-removed to keep gatsby website
# --guess-mime-type --no-mime-magic is required. If not specified, css files that are uploaded to S3 will have "text/plain" MIME type.
s3cmd sync --exclude-from .s3ignore _site/ $DEPLOY_URL --guess-mime-type --no-mime-magic
s3cmd modify --add-header='content-type':'application/json' ${DEPLOY_URL}/.well-known/apple-app-site-association

# Clear cache in cloudfire
curl -X POST "https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/purge_cache" \
  -H "X-Auth-Email: ${CLOUDFLARE_EMAIL}" \
  -H "X-Auth-Key: ${CLOUDFLARE_API_KEY}" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}'

