FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT = 8000
ENV URI = <MONGO_URI>
EXPOSE 8000
CMD [ "npm", "start" ]  
