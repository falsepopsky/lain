# getTitlesMobile

Retrieves the titles for the path `browse` on the mobile site

## Parameters

| params |   type   | Required | Description      |
| ------ | :------: | :------: | ---------------- |
| html   | `string` |   Yes    | Plain html text. |

## Return

::: details Returns an array of objects containing the following data:

```typescript
{
  title: string;
  type: string;
  cover: string;
  slug: string;
}
```

:::

## Targets

Here, we present the current sources from which this function retrieves data for the titles.

::: details

![anime target](/afgtm/targets.png)

:::

- title

  ::: details The title name

  ![title target](/afgtm/title.png)

  :::

- type

  ::: details Type of the Title

  ![type target](/afgtm/type.png)

  :::

- cover

  ::: details This takes the actual cover/banner of the title

  ![cover target](/afgtm/cover.png)

  :::

- slug

  > Returns the `slug` for the path `/anime`

## Usage

1. Import the `getTitlesMobile` method.

```typescript
import { getTitlesMobile } from '@untidy/animeflv/cheerio';
```

2. Pass the parsed HTML text for the `/browse` path:

```typescript
const data = getTitlesMobile(html);
```

3. As an example, we provide a minimal representation of the retrieved titles:

```javascript
[
  {
    title: 'Black Clover: Mahou Tei no Ken',
    slug: '/anime/black-clover-mahou-tei-no-ken',
    type: 'Película',
    cover: 'https://animeflv.net/uploads/animes/covers/3816.jpg',
  },
  {
    title: 'Niehime to Kemono no Ou',
    slug: '/anime/niehime-to-kemono-no-ou',
    type: 'Anime',
    cover: 'https://animeflv.net/uploads/animes/covers/3811.jpg',
  },
  // and goes on...
];
```
