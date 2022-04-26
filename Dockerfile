FROM node:alpine AS node-builder

WORKDIR .

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY tsconfig.json .
COPY backend/main.ts .
COPY backend/walletupdate.ts .
COPY backend/healthcheck.ts .

RUN npx tsc

FROM heroiclabs/nakama:3.9.0

COPY --from=node-builder /backend/build/*.js /nakama/data/modules/build/
COPY local.yml /nakama/data/.