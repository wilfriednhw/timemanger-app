# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginxinc/nginx-unprivileged  as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

# EXPOSE can be used for local testing, not supported in Heroku's container runtime
EXPOSE 8080

# web process/code should get the $PORT environment variable
ENV PORT=8080

CMD ["nginx", "-g", "daemon off;"]