# Use the specified Node.js image version as the base image
FROM node:20.13.1-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that Nginx will use
EXPOSE 5173

# Start Nginx
CMD ["npm", "run", "dev"]
