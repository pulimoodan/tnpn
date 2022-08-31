<p align="center">
  <a href="https://www.typescriptlang.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" width="50" alt="Typescript Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="50" alt="Nest Logo" /></a>
  <a href="https://www.prisma.io/" target="blank"><img src="https://www.freelogovectors.net/wp-content/uploads/2022/01/prisma_logo-freelogovectors.net_.png" width="50" alt="Prisma Logo" /></a>
  <a href="https://nextjs.org/" target="blank"><img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/nextjs-boilerplate-logo.png" width="50" alt="Next Logo" /></a>
</p>

<h1 align="center">
  <span style="color:#2E75C0;">T</span>
  <span style="color:#D5214A;">N</span>
  <span style="color:#0A3047">P</span>
  <span style="color:#FFF">N</span>
</h1>

<p align="center">
  A boiler-plate combined with <b>Typescript</b>, <b>Nest JS</b>, <b>Prisma</b>, and <b>Next JS</b> for building full stack applications.
</p>

<p align="center">
  <a href="https://github.com/pulimoodan/tnpn/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/pulimoodan/tnpn" />
  </a>
  <a href="https://github.com/pulimoodan/tnpn">
    <img src="https://img.shields.io/github/repo-size/pulimoodan/tnpn" />
  </a>
  <a href="https://github.com/pulimoodan/pulimoodan/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/pulimoodan/tnpn?color=0088ff" />
  </a>
  <a href="https://github.com/pulimoodan/pulimoodan/pulls">
    <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/pulimoodan/tnpn?color=0088ff" />
  </a>
</p>

## Description

No time configuring your full stack web app with multiple frameworks? Here we go. TNPN is a boiler plate configured with Typescript, Prisma, Nest and Next JS. Start your projects with this template and earn a lot of time.

## Installation

```bash
$ yarn
```

## Environment variables

Copy the `.env.example` file and create a `.env` file. Configure your database and other env variables.

## Migration
Configure `prisma/schema.prisma` file according to your database and paste the database url in the .env file as `DATABASE_URL`.
Then run :
```bash
$ yarn prisma migrate dev
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Views
Configure your Next JS views inside `src\server\modules\view\view.controller.ts`. 
```js
// Add all view base paths here
@Get([
  '/',
  '_next*',
])
```