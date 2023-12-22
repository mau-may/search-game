FROM node:16 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN yarn install

COPY . .
RUN yarn build

EXPOSE 8080