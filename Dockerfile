# Production Dockerfile for Mezu - Music Library
# Static web server using Alpine Nginx

FROM nginx:1.25-alpine

LABEL description="Nginx container for Mezu - Music Library"

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy web application assets
COPY . /usr/share/nginx/html/

# Prune development and configuration files from web root
RUN rm -rf /usr/share/nginx/html/.vscode \
           /usr/share/nginx/html/docs \
           /usr/share/nginx/html/.git \
           /usr/share/nginx/html/Dockerfile \
           /usr/share/nginx/html/nginx.conf

# Copy Nginx server configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/index.html || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
