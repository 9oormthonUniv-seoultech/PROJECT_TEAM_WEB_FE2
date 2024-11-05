# Base image for building
FROM node:18-alpine AS base

# Define arguments for environment variables
ARG VITE_KAKAO_MAP_KEY
ARG VITE_KAKAO_REST_API_KEY

# Install dependencies
WORKDIR /app
COPY package.json package-lock.json* ./

RUN npm ci # package 설치

# Copy source code and set environment variables
COPY . .
ENV VITE_KAKAO_MAP_KEY=${VITE_KAKAO_MAP_KEY}
ENV VITE_KAKAO_REST_API_KEY=${VITE_KAKAO_REST_API_KEY}

# Build the Vite application
RUN npm run build # npm run build 명령어로 vite 실행

# Production stage with Nginx
FROM nginx:stable-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx configuration to handle all routes with index.html
COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
