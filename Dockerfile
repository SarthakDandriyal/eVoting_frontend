FROM node:lts-alpine

RUN npm install yarn

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8080
CMD [ "yarn", "start" ]
