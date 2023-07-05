FROM node:18.16.1-alpine as ts-environment

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci --only=production

COPY . ./

RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
