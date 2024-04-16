FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./

ENV NEXT_PUBLIC_API_URL=http://ec2-3-140-238-145.us-east-2.compute.amazonaws.com:3001

RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
