# Use the official Bun image as the base image
FROM oven/bun:latest AS build

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the application
RUN bun run build

# Use nginx to serve the built application
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration from the frontend folder
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]