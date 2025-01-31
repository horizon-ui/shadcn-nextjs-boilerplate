FROM node:20-alpine

RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/

COPY package.json package-lock.json ./
RUN npm install --force

WORKDIR /opt/app
COPY . .
ENV PATH /opt/node_modules/.bin:$PATH
RUN chown -R node:node /opt/app
USER node
RUN ["npm", "run", "build"]
EXPOSE 4000
CMD ["npm", "run", "start:debug"]
