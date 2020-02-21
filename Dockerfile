FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./mocks ./mocks

RUN ls -la .

EXPOSE 9001

CMD ["npm", "run", "start:mock:identity"]
