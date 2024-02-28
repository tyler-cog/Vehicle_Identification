FROM node:14 as development
WORKDIR /app
COPY package.json ./
RUN npm install 
COPY . .
EXPOSE 5000
CMD ["npm", "run", "start"]