FROM node:lts-alpine as builder

WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build


FROM node:lts-alpine

WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn install --production
RUN yarn -W add tslib

COPY --from=builder /app/build .

RUN yarn install --production

CMD ["node", "index.js"]
