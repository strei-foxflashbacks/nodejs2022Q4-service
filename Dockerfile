FROM node:18.16.0 as base

WORKDIR /usr/src

RUN npm -v

RUN npm i -g npm@9.5.1

RUN npm -v

COPY package.json ./

RUN npm i

RUN npm i -g rimraf

RUN npm -f package.json