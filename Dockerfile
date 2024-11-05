# Base image for building
FROM node:18-alpine AS build

# Define arguments for environment variables
ARG VITE_KAKAO_MAP_KEY
ARG VITE_KAKAO_REST_API_KEY

# Set working directory and copy package files
WORKDIR /app
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci # Install packages

# Copy source code and set environment variables
COPY . .
ENV VITE_KAKAO_MAP_KEY=${VITE_KAKAO_MAP_KEY}
ENV VITE_KAKAO_REST_API_KEY=${VITE_KAKAO_REST_API_KEY}

# Build the Vite application
RUN npm run build # Run the Vite build command

# Production stage
FROM node:18-alpine AS serve

# Install serve to serve static files
RUN npm install -g serve

# Copy built files
COPY --from=build /app/dist /app

# Expose port 3000 for serve
EXPOSE 3000

# Serve static files on port 3000
CMD ["serve", "-s", "/app", "-l", "3000"]