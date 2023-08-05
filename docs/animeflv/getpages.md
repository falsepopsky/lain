# getPages

Obtain pagination suffix pages for the `/browse` path. Works on both the desktop and mobile site.

> `https://www3.animeflv.net/browse` or `https://m.animeflv.net/browse`

## Parameters

| params |   type   | Required | Description      |
| ------ | :------: | :------: | ---------------- |
| html   | `string` |   Yes    | Plain html text. |

## Return

An array of strings containing the suffix pages for the pagination.

## Target

![pagination target](/afs/target.png)

## Usage

1. Import `getPages` method.

```typescript
import { getPages } from '@untidy/animeflv/cheerio';
```

2. Pass the parsed HTML text for the `/browse` path.

```typescript
const pages = getPages(html);
```

3. As an example, we provide a minimal representation of the retrieved sufix pagination:

```javascript
[
  '/browse?page=1',
  '/browse?page=2',
  '/browse?page=3',
  '/browse?page=4',
  '/browse?page=5',
  '/browse?page=6',
  '/browse?page=7',
  '/browse?page=8',
  '/browse?page=9',
  '/browse?page=10',
  '/browse?page=157',
];
```
