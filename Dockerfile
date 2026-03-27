# Base Image on where we are building our application
FROM node:18

# Create a working directory app inside the container
WORKDIR /app

# copy the package.json into our container root directory
COPY package.json .

# copy the package.json into our container root directory
COPY tsconfig.json .

# installing the dependencies from the package.json and tsconfig.json
RUN npm install

# copy all the files from our project directory to the container directory
COPY . .

# converts typescript into javascript
RUN npm run build

# port is connected to the port 3000 and accepts the incoming requests
EXPOSE 3000

# start the application
CMD ["npm", "start"]