FROM node:16.7.13

WORKDIR /the/workdir/path
COPY package.json ./
COPY yarn.lock ./

RUN yarn
COPY . .