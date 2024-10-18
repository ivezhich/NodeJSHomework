FROM node:22-alpine

WORKDIR /app
ARG NODE_ENV=production
COPY package*.json .
RUN npm install
RUN mkdir file_storage
RUN mkdir logs
COPY ./src .

CMD ["node", "main.js"]