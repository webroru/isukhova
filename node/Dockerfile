FROM node

ENV HOST 0.0.0.0

CMD npm install \
    && npm run build \
    && npm run dev

WORKDIR /var/www/html
