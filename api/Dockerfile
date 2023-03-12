# Installs Node.js image
FROM node:18.14

# sets the working directory for any RUN, CMD, COPY command
# all files we put in the Docker container running the server will
# will be in /usr/src/app
WORKDIR /code

# Copies package.json, package-lock.json, tsconfig.json, .end to root
COPY package.json package.json
COPY package-lock.json package-lock.json

# Install all packages
RUN npm install

# Copies everything in the src directory to WORKDIR/src
COPY . .

# Runs the dev npm script to built & start the server
CMD npm run start 

EXPOSE 8080