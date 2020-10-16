FROM node:latest as node
WORKDIR /app

COPY . .
RUN npm install 
RUN npm run build --prod

FROM nginx as runtime
COPY --from=build /app/dist/angular8firstapp /usr/share/nginx/html