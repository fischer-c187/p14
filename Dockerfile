FROM node:21.5-alpine3.19 AS builder

WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm ci

COPY . .
ENV VITE_BACKEND_URL=https://gitlab.drsky.ovh
ENV VITE_MODE_API=BACKEND
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080