# @untidy/jkanime

## :information_source: About

Web scraping tools for the [jkanime](https://jkanime.net/) site.

> **Warning**  
> Use of this web scraping package for any malicious or unethical activities is strictly prohibited.
> By using these tools, you agree to adhere to all applicable laws and regulations, as well as to
> respect the terms of service of the website you are scraping. The intention of this package is
> solely for legitimate purposes such as data analysis, research, or personal use.

## :sparkles: Features

- Built with TypeScript, providing full typing support.
- ESM only
- Uses `cheerio` to retrieve data for paths such as `/directorio`, `/horario`, and any anime
  `title`.

## :package: Install

With npm:

```
npm install @untidy/jkanime
```

With yarn:

```
yarn add @untidy/jkanime
```

With pnpm:

```
pnpm add @untidy/jkanime
```

## :beginner: Usage

`@untidy/jkanime` is easy to use, The following example demonstrates how to retrieve the titles for
the path `/horarios`. For more examples involving other APIs, please refer to the
[Docs](#page_facing_up-docs) section.

Example usage:

```typescript
import { browseFilter } from '@untidy/jkanime/cheerio';

// The html variable contains the parsed HTML response text.
const data = browseFilter(html);

// The output data results in a `Map` containing titles for each day of the week.
```

## :page_facing_up: Docs

[API](https://lain-packages.netlify.app/jkanime/)

## :scroll: License

`@untidy/jkanime` is licensed under the
[Apache-2.0](https://github.com/falsepopsky/lain/blob/main/LICENSE) license - © 2023-2024
[falsepopsky](https://github.com/falsepopsky).
