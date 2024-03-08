FROM node:20.11 AS build
WORKDIR /app
COPY . ./
RUN npm ci
RUN npm run fmt
RUN npm run build

FROM node:20.11
RUN mkdir /app
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm ci
COPY --from=build /app/.next .next
COPY public public
CMD ["npm", "run", "start"]