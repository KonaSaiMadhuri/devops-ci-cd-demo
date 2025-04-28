# Step 1: Use an official Node.js base image
FROM node:18

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json first
COPY package*.json ./

# Step 4: Install Node.js dependencies
RUN npm install

# Step 5: Copy the rest of your app's code
COPY . .

# Step 6: Expose port 3000 (so Docker knows)
EXPOSE 3000

# Step 7: Start the app
CMD ["npm", "start"]

