FROM node:14.15.0

COPY . /app
WORKDIR /app

RUN yarn

VOLUME /app

EXPOSE 3000

CMD ["yarn", "dev"]