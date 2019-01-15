FROM mhart/alpine-node:10.9 AS build
RUN npm i -g serve > /dev/null
WORKDIR /code/
COPY package*.json ./
RUN npm i > /dev/null
COPY . .
RUN npm run build > /dev/null
CMD serve -s build
EXPOSE 5000
