---
titleTemplate: '@untidy/animeflv'
---

# URL

This module is designed for creating URL-based search queries and provides two main APIs:
`browseAnime` and `browseFilter`.

## browseAnime <Badge type="info" text="API" />

This function generates a URL for browsing a specific title/anime

| params |   type   | Required | Description                  |
| ------ | :------: | :------: | ---------------------------- |
| title  | `string` |   Yes    | The name of the title/anime. |
| origin | `string` |   Yes    | URL origin for animeflv.     |
| page   | `string` | Optional | Page number for pagination.  |

### Examples

::: details Search for a specific title on the mobile site

```typescript
import { browseAnime } from '@untidy/animeflv';

const target = browseAnime('yu yu hakusho', 'https://m.animeflv.net/'); // [!code hl]

// target output: https://m.animeflv.net/browse?q=yu+yu+hakusho
```

:::

::: details Search for animation as the title and retrieve results for page 2

```typescript
import { browseAnime } from '@untidy/animeflv';

const target = browseAnime('animation', 'https://m.animeflv.net/', '2'); // [!code hl]

// target output: https://m.animeflv.net/browse?q=animation&page=2
```

:::

## browseFilter <Badge type="info" text="API" />

Generates a URL for applying filters

| params         |          type          | Required | Description                             |
| -------------- | :--------------------: | :------: | --------------------------------------- |
| options        |        `object`        | Optional | A set of options to filter the search.  |
| options.genre  | `string` or `string[]` | Optional | Genre(s) of the title.                  |
| options.year   | `string` or `string[]` | Optional | Year(s) for filtering.                  |
| options.type   | `string` or `string[]` | Optional | Type of the title.                      |
| options.status | `string` or `string[]` | Optional | Status for filtering.                   |
| options.order  |        `string`        | Optional | Sort order, e.g., rating, updated, etc. |
| options.page   |        `string`        | Optional | Page number for pagination              |
| origin         |        `string`        |   Yes    | URL origin for animeflv.                |

### Examples

::: details Search for movies released in 2023 and sort by recently updated

```typescript
import { browseFilter, type Options } from '@untidy/animeflv/url';

const options: Options = {
  year: '2023',
  type: 'movie',
  order: 'updated',
};

const target = browseFilter(options, 'https://www3.animeflv.net/'); // [!code hl]

// target output: https://www3.animeflv.net/browse?year=2023&type=movie&order=updated
```

:::

::: details Filter titles by genres released in 2023 that are currently on air

```typescript
import { browseFilter, type Options } from '@untidy/animeflv/url';

const options: Options = {
  year: '2023',
  status: '1',
  genre: ['seinen', 'superpoderes'],
};

const target = browseFilter(options, 'https://www3.animeflv.net/'); // [!code hl]

// target output: https://www3.animeflv.net/browse?year=2023&status=1&genre%5B%5D=seinen&genre%5B%5D=superpoderes
```

:::
