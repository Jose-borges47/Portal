# Etapa 1: Usar uma imagem oficial do Node.js para construir o projeto
FROM node:16-alpine AS build

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar o package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Construir o projeto (para criar a versão otimizada)
RUN npm run build

# Etapa 2: Usar uma imagem do NGINX para servir a aplicação
FROM nginx:alpine

# Copiar o resultado da build para o diretório de arquivos estáticos do NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Expor a porta 80 para o tráfego HTTP
EXPOSE 80

# Comando para rodar o NGINX
CMD ["nginx", "-g", "daemon off;"]
