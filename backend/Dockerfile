FROM node:alpine
RUN apk add --no-cache mysql-client
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["node", "index.js"]
