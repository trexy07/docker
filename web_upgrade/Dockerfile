# plain node
FROM node:18-alpine
WORKDIR /home/t-rex/coding/web/node/

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
