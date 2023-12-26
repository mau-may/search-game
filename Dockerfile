FROM node:20.10.0 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN yarn install

COPY . .
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]