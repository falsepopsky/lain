---
titleTemplate: '@untidy/animeflv'
---

# Getting Started

[[toc]]

## About

With this package, you can create URL queries to search for a specific `title/anime` or apply
filters based on criteria like `year`, `genre`, etc. Additionally, you can retrieve data such as
`title`, `cover`, total episodes, video streaming links, and more.

## Prerequisites

To successfully utilize this package, users must meet the following prerequisites:

- **Node.js:** The user must have [Node.js](https://nodejs.org) installed on their system with a
  minimum version of 18.

::: info INFO

This package utilizes [cheerio](https://github.com/cheeriojs/cheerio) for data retrieval. If you
intend to use the cheerio module, make sure to install it.

:::

## Installation

Use your preferred package manager

::: code-group

```bash [npm]
npm install @untidy/animeflv
```

```bash [yarn]
yarn add @untidy/animeflv
```

```bash [pnpm]
pnpm add @untidy/animeflv
```

:::

## API

This package provides two main APIs:

- For creating URL queries, please refer to the [URL](/animeflv/url) documentation.
- For data scraping, consult the documentation for [cheerio](/animeflv/cheerio).
