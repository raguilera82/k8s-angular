FROM node:16.14.0-alpine3.14 as builder
RUN mkdir /ng-app
WORKDIR /ng-app
COPY . .
RUN npm ci
RUN npm run build -- --output-path=dist

FROM nginx:1.21.6-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /ng-app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]