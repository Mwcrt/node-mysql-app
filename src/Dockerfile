FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x scripts/wait-for-it.sh

CMD ["./scripts/wait-for-it.sh", "mysql:3306", "--", "npm", "start"]
