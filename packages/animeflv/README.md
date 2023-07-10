# @untidy/animeflv

## :information_source: About

Web scraping tools for the [animeflv](https://www3.animeflv.net/) site.

> **Warning**  
> Use of this web scraping package for any malicious or unethical activities is strictly prohibited.
> By using these tools, you agree to adhere to all applicable laws and regulations, as well as to
> respect the terms of service of the website you are scraping. The intention of this package is
> solely for legitimate purposes such as data analysis, research, or personal use.

## :sparkles: Features

- Built with TypeScript for full typing support
- ESM only
- Uses `cheerio` to retrieve data for paths `browse`, `anime`, `ver` (for both mobile and desktop
  sites).
- Utilizes the built-in `URL` module from `node` to create queries in the `browse` path (for both
  mobile and desktop sites).

## :package: Install

With npm:

```
npm install @untidy/animeflv
```

With yarn:

```
yarn add @untidy/animeflv
```

With pnpm:

```
pnpm add @untidy/animeflv
```

## :beginner: Usage

`@untidy/animeflv` is easy to use, The following example demonstrates how to retrieve the URL for
recently updated movies in the year 2023.

Example usage:

```typescript
import { browseFilter } from '@untidy/animeflv';

// If using TypeScript
import type { Options, OriginURL } from '@untidy/animeflv/url';

const origin: OriginURL = 'https://www3.animeflv.net/';
const options: Options = {
  year: '2023',
  type: 'movie',
  order: 'updated',
};

// In this case, the target URL will be: https://www3.animeflv.net/browse?year=2023&type=movie&order=updated
const target = browseFilter(options, origin);
```

For more examples with other APIs, please refer to the "Docs" section.

## :page_facing_up: Docs

Under construction 🚧

## :scroll: License

`@untidy/animeflv` is licensed under the
[Apache-2.0](https://github.com/falsepopsky/lain/blob/main/LICENSE) license - © 2023
[falsepopsky](https://github.com/falsepopsky).
