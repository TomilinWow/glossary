FROM node:18-alpine
WORKDIR /
COPY data /data
COPY index.js ./
COPY package.json ./
RUN npm install
CMD npm start
EXPOSE 5050
