# --------------------------
# Stage 1: Build the Vite app
# --------------------------
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the app
RUN npm run build

# --------------------------
# Stage 2: Serve with Vite (no Nginx)
# --------------------------
FROM node:18-alpine

WORKDIR /app

# Copy build output from Stage 1
COPY --from=build /app/dist ./dist

# Install a lightweight HTTP server (serve)
RUN npm install -g serve

# Expose the port
EXPOSE 5173

# Start the server
CMD ["serve", "-s", "dist", "-l", "5173"]
