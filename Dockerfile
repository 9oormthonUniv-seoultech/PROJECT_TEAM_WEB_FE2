# Base image for building
FROM node:18-alpine AS base

# Define arguments for environment variables
ARG VITE_KAKAO_MAP_KEY
ARG VITE_KAKAO_REST_API_KEY

# Install dependencies
WORKDIR /app

COPY package.json package-lock.json*./

# Copy source code and set environment variables
COPY . .
ENV VITE_KAKAO_MAP_KEY=${VITE_KAKAO_MAP_KEY}
ENV VITE_KAKAO_REST_API_KEY=${VITE_KAKAO_REST_API_KEY}

# Build the Vite application
RUN vite build

# Nginx server to serve static files
FROM nginx:stable-alpine AS runner

# Copy built files to Nginx for serving
COPY --from=base /app/dist /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
