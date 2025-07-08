FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Asegúrate de que el script sea ejecutable
RUN chmod +x scripts/wait-for-it.sh

# Usa el script para esperar MySQL antes de ejecutar tu app
CMD ["./scripts/wait-for-it.sh", "mysql:3306", "--", "npm", "start"]
