FROM node:16-alpine

WORKDIR /app

COPY package*.json .

RUN npm install --production

COPY . .

EXPOSE 8060

CMD ["npm", "start"]