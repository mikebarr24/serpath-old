FROM node:16-alpine3.16
WORKDIR /app
RUN npm install -g nodemon
RUN addgroup nonroot && adduser -S -D -G nonroot nonroot
COPY package*.json .
RUN chown -R nonroot /app
USER nonroot
RUN npm install
COPY . .
EXPOSE 8080
CMD ["nodemon", "index.js"]