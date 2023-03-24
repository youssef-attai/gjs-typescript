# Gjs + Typescript = <3

## Setup

```bash
git clone https://github.com/youssef-attai/gjs-typescript.git
cd gjs-typescript
npm install
```

## Generate types

```bash
npm run types
```

## Build

```bash
npm run build
```

## Run

```bash
npm run start
```

## How it works

The `npm run types` command will generate the typescript definitions for the Gjs modules.

The `npm run build` command will compile the typescript files to javascript using webpack.

The `npm run start` command will run the compiled javascript files using gjs.

Webpack is configured to use the `ts-loader` to compile the typescript files, and to ignore Gjs modules.