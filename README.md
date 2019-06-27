# Shopee-Crawler
Crawl data from the shopee.vn


Reference: https://medium.com/create-a-server-with-nodemon-express-typescript/create-a-server-with-nodemon-express-typescript-f7c88fb5ee71

## Prepare

- Install dependent packages
```
npm install
```

### Create and update Environment

- Create `.env` file from `.env-example`
```
cp .env-example .env
```

- Update `.env` information
```
HOST=
PORT=
```

## Run on develope mode

```
npm run start
// or
npm run start:watch
```

## Build and Deploy

```
npm run build
node ./dist-backend/index.js
```

## API Document
```
http://localhost/api/docs
```