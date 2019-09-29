FROM node:10.16.3-alpine
ENV APP_ROOT /app/

WORKDIR $APP_ROOT

COPY package*.json $APP_ROOT
RUN npm install

COPY . $APP_ROOT