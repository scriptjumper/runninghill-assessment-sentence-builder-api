<p align="center">
  <h3 align="center">Sentence Builder API</h3>
</p>

## Table of Contents

* [About the API](#about-the-api)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)

## About The API

This API handles POST and GET requests that allows you to dynamically build a sentence by selecting words based on their word types.

Here's why:
* Getting all available words types
* Getting all words available under selected word type
* Saving created sentence in the database
* Getting all the saved sentences

### Built With

* [NodeJS](https://nodejs.org/)
* [express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)

## Getting Started

> Here is a quick guide on how you can setup our API on your machine.

### Prerequisites
Make sure you have the following install on your machine
- NodeJS
- Npm
- PostgreSQL ()

### Installation

1. Clone the repo
```shell
$ git clone https://github.com/scriptjumper/sentence-api.git
```
> Alternatively you can download the zipped files.

2. Setup environmental variables
```shell
$ cp .env.example .env
```

