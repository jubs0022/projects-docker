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

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default Nginx HTML and use custom config if needed
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy Vite build output
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
