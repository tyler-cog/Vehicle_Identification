# Fetching the latest node image on alpine linux
FROM node:alpine as development
WORKDIR /app
COPY package.json ./
RUN npm config set legacy-peer-deps true
RUN npm install 
COPY . .
CMD ["npm", "run", "start"]
