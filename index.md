<h1 align="center">
<img alt="img" src="2EA53BD8-7D9C-41CC-814C-3DE91F4F231B.png">
</h1>
<p align="center">
  A Nodejs Server Stats & Information app.
  </p>
<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/inkstats-v2">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/lucaslah/inkstats-v2">
  <img alt="NPM" src="https://img.shields.io/npm/l/inkstats-v2">
  <img alt="npm" src="https://img.shields.io/npm/dw/inkstats-v2">
  <img alt="depen" src="https://david-dm.org/Lucaslah/inkstats-v2.svg">
  </p>
  <p align="center">
  <img alt="npmpkg" src="https://nodei.co/npm/inkstats-v2.png" herf="https://npmjs.org/package/inkstats-v2">
  </p>

### InkStats Requirements
- `npm` or `yarn`
- Nodejs v12 +

### Installing Globlly
- npm: `npm i -g inkstats-v2`
- yarn: `yarn add globle inkstats-v2`
- Shell Script (Coming soon)

### Installing as a Module
- npm: `npm i --save inkstats-v2`
- yarn: `yarn add inkstats-v2`

### Information that InkStats Shows
- Total Ram
- CPU Speed
- CPU Cores
- CPU Information
- Platform
- Computer Uptime
- Hostname
- More Coming Soon


## Getting Started: CLI
1. Install InkStats v2 [See Installing Globlly](#installing-globlly)
### Web Server

1. In your Terminal run `inkstats-v2 serve` to start a basic InkStats Server
2. See More About the CLI [here](https://github.com/Lucaslah/InkStats-v2/wiki/Getting-Started:-CLI)
### CLI Stats
1. In your Terminal run `inkstats stats` to see all you basic computer stats.
2. See More About the CLI [here](https://github.com/Lucaslah/InkStats-v2/wiki/Getting-Started:-CLI)

## Getting Started: Module
1. Install InkStats v2 (Module)
2. Make a New InkStats Instance in your nodejs project
```javascript
// InkStats Module Example

const { InkStats } = require('inkstats-v2') // Require InkStats

/**
 * Makes a New InkStats Instance
 */
const server = new InkStats({
    /**
     * The Port you want your InkStats Instance to run on
     * Not Required, Defaults to port 8080
     */
    port: 8080,
    /**
     * A Message to be logged to your Console when your InkStats Instance Starts
     * Not Required, Defaults to Nothing (Nothing will be logged to your Console)
     * {port} will output will the port your InkStats Instance is running on
     */
    message: 'Hello {port}',
    /**
     * Sets the Title of your InkStats Instance, It will show on your InkStats Home Page
     * Not Required, Defaults to InkStats
     */
    name: 'My Epic Name'
})

// Usage Examples

/**
 * Stops your InkStats Instance
 * Required to Start your InkStats Process
 */
server.start()

/**
 * Stops your InkStats Instance
 * Not Required, Killing the node process will also stop InkStats
 */
server.kill()
```
3. For More Examples Check the Examples Folder in the Repo
4. See more about the Module [here](https://github.com/Lucaslah/InkStats-v2/wiki/Getting-Started:-Module)

## Local Development
1. Clone the Repo: `git clone https://github.com/Lucaslah/InkStats-v2.git`
2. Chnage to the Dir you cloned: `cd InkStats-v2`
3. Install Required Stuff: `yarn` or `npm install`
4. Start the app: `yarn start serve` or `npm start serve`

## Documentation
See the [Wiki](https://github.com/Lucaslah/InkStats-v2/wiki)

## GitHub
<h1 align="center">
<img alt="npm" src="img/InkStats.png">
</h1>

<p align="center">
  A Nodejs Server Stats & Information app.
  </p>


<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/inkstats-v2">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/lucaslah/inkstats-v2">
  <img alt="NPM" src="https://img.shields.io/npm/l/inkstats-v2">
  <img alt="npm" src="https://img.shields.io/npm/dw/inkstats-v2">
  <img alt="depen" src="https://david-dm.org/Lucaslah/inkstats-v2.svg">
  </p>
  <p align="center">
  <img alt="npmpkg" src="https://nodei.co/npm/inkstats-v2.png" herf="https://npmjs.org/package/inkstats-v2">
  </p>

## Table of Contents
- [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Installing Globlly](#installing-globlly)
  - [Installing as a Module](#installing-as-a-module)
  - [Information that InkStats Shows](#information-that-inkstats-shows)
- [Getting Started: CLI](#getting-started-cli)
- [Getting Started: Module](#getting-started-module)
- [Local Development](#local-development)
- [CLI Options](#cli-options)
- [Module Options](#module-options)
- [Module Commands](#module-commands)
- [Documentation](#documentation)
- [Contributing](#contributing)

### Requirements
- `npm` or `yarn`
- Nodejs v12 +

### Installing Globlly
- npm: `npm i -g inkstats-v2`
- yarn: `yarn add globle inkstats-v2`
- Shell Script (Coming soon)

### Installing as a Module
- npm: `npm i --save inkstats-v2`
- yarn: `yarn add inkstats-v2`

### Information that InkStats Shows
- Total Ram
- CPU Speed
- CPU Cores
- CPU Information
- Platform
- Computer Uptime
- Hostname
- More Coming Soon


## Getting Started: CLI
1. Install InkStats v2 [See Installing Globlly](#installing-globlly)
### Web Server

1. In your Terminal run `inkstats-v2 serve` to start a basic InkStats Server
2. See More About the CLI [here](https://github.com/Lucaslah/InkStats-v2/wiki/Getting-Started:-CLI)
### CLI Stats
1. In your Terminal run `inkstats stats` to see all you basic computer stats.
2. See More About the CLI [here](https://github.com/Lucaslah/InkStats-v2/wiki/Getting-Started:-CLI)

## Getting Started: Module
1. Install InkStats v2 (Module)
2. Make a New InkStats Instance in your nodejs project
```javascript
// InkStats Module Example

const { InkStats } = require('inkstats-v2') // Require InkStats

/**
 * Makes a New InkStats Instance
 */
const server = new InkStats({
    /**
     * The Port you want your InkStats Instance to run on
     * Not Required, Defaults to port 8080
     */
    port: 8080,
    /**
     * A Message to be logged to your Console when your InkStats Instance Starts
     * Not Required, Defaults to Nothing (Nothing will be logged to your Console)
     * {port} will output will the port your InkStats Instance is running on
     */
    message: 'Hello {port}',
    /**
     * Sets the Title of your InkStats Instance, It will show on your InkStats Home Page
     * Not Required, Defaults to InkStats
     */
    name: 'My Epic Name'
})

// Usage Examples

/**
 * Stops your InkStats Instance
 * Required to Start your InkStats Process
 */
server.start()

/**
 * Stops your InkStats Instance
 * Not Required, Killing the node process will also stop InkStats
 */
server.kill()
```
3. For More Examples Check the Examples Folder in the Repo
4. See more about the Module [here](https://github.com/Lucaslah/InkStats-v2/wiki/Getting-Started:-Module)

## Local Development
1. Clone the Repo: `git clone https://github.com/Lucaslah/InkStats-v2.git`
2. Chnage to the Dir you cloned: `cd InkStats-v2`
3. Install Required Stuff: `yarn` or `npm install`
4. Start the app: `yarn start serve` or `npm start serve`

## Documentation
See the [Wiki](https://github.com/Lucaslah/InkStats-v2/wiki)

## GitHub
https://github.com/Lucaslah/InkStats-v2
