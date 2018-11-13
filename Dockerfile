FROM node:9
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
WORKDIR /usr/src/app/data

RUN apt-get update
COPY . .
RUN npm install
RUN npm run build

EXPOSE 3001
CMD sleep 15 && npm run server-prod
