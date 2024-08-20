FROM node:22

RUN npm i -g pnpm

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .

EXPOSE 3001

CMD [ "pnpm", "run", "dev" ]