FROM mhart/alpine-node:10.7.0
RUN npm i -g serve > /dev/null
WORKDIR /code/
COPY package*.json ./
RUN npm i > /dev/null
COPY . .
ARG API_URL http://api.typetypepass.com
RUN npm run build --production > /dev/null
CMD serve -s build
EXPOSE 5000
