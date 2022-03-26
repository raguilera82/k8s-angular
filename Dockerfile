FROM raguilera82/ng:1.0 as builder
COPY . .
RUN npm run build -- --output-path=dist

FROM nginx:1.21.6-alpine
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /ng-app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]