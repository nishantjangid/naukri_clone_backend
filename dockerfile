FROM node:18-alpine

# CREATE A APP DIRECTORY
WORKDIR /app 

# INSTALL APP DEPENDENCIES
COPY package.json ./

# RUN NPM INSTALL
RUN npm install

#COPY ALL FILES TO DIRECTORY
COPY . .

# Generate Prisma client
RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "start"]