# Stage 1: Build Vite app
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the Vite app
RUN npm run build

# Stage 2: Serve with Nginx (internal only)
FROM nginx:alpine

# Copy Vite build output to Nginx default html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose a non-conflicting port for host reverse proxy
EXPOSE 5173

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
