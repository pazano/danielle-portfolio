FROM node:lts-alpine AS deps

WORKDIR /srv/site
COPY package.json package-lock.json ./
RUN npm install

FROM node:lts-alpine AS builder


ARG builder_api_key

ENV NEXT_PUBLIC_BUILDER_API_KEY=$builder_api_key

WORKDIR /srv/site
COPY . .
COPY --from=deps /srv/site/node_modules ./node_modules
RUN npm run build

# Production image, copy all the files and run next
FROM node:lts-alpine AS deploy

WORKDIR /srv/site

# We need the API ENV here for live
ARG builder_api_key

ENV NEXT_PUBLIC_BUILDER_API_KEY=$nl_builder_api_key

COPY --from=builder /srv/site/public ./public
COPY --from=builder /srv/site/.next ./.next
COPY --from=builder /srv/site/node_modules ./node_modules
COPY --from=builder /srv/site/next-i18next.config.js ./next-i18next.config.js
COPY --from=builder /srv/site/next.config.js ./next.config.js
CMD ["node_modules/.bin/next", "start"]