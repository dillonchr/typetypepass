FROM mhart/alpine-node:10.9 AS build
WORKDIR /code/
COPY package*.json ./
RUN npm i > /dev/null
COPY . .
RUN npm run build > /dev/null

FROM nginx:1.15.3-alpine
COPY --from=build /code/build/ /usr/share/nginx/html/
EXPOSE 80
