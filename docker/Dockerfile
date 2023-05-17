FROM nginx:1.24-alpine-slim

ARG TARGETARCH

RUN rm /etc/nginx/conf.d/default.conf
COPY docker/nginx.conf /etc/nginx/conf.d
COPY build /etc/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
