# getTitles

Retrieves the titles for the path `browse` on the desktop site

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
  description: string;
  cover: string;
  slug: string;
}
```

:::

## Targets

Here, we present the current sources from which this function retrieves data for the titles.

::: details

![anime target](/afgt/targets.png)

:::

- title

  ::: details The title name

  ![title target](/afgt/title.png)

  :::

- type

  ::: details Type of the Title

  ![type target](/afgt/type.png)

  :::

- description

  ::: details Synopsis/Overview of the Title

  ![description target](/afgt/description.png)

  :::

- cover

  ::: details This takes the actual cover/banner of the title

  ![cover target](/afgt/cover.png)

  :::

- slug

  > Returns the `slug` for the path `/anime`

## Usage

1. Import the `getTitles` method.

```typescript
import { getTitles } from '@untidy/animeflv/cheerio';
```

2. Pass the parsed HTML text for the `/browse` path:

```typescript
const data = getTitles(html);
```

3. As an example, we provide a minimal representation of the retrieved titles:

```javascript
[
  {
    title: 'Black Clover: Mahou Tei no Ken',
    description: '',
    slug: '/anime/black-clover-mahou-tei-no-ken',
    type: 'Película',
    cover: 'https://animeflv.net/uploads/animes/covers/3816.jpg',
  },
  {
    title: 'Niehime to Kemono no Ou',
    description:
      'En un reino en el que los humanos han de servir al rey de los demonios, Sariphi es ofrecida como sacrificio. Sin embargo, con su carisma no tardará en conquistar al rey de los demonios.',
    slug: '/anime/niehime-to-kemono-no-ou',
    type: 'Anime',
    cover: 'https://animeflv.net/uploads/animes/covers/3811.jpg',
  },
  // and goes on...
];
```
