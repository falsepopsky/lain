# getInformationMobile

Retrieves the information of the title/anime for the path `anime` on the mobile site.

## Parameters

| params |   type   | Required | Description      |
| ------ | :------: | :------: | ---------------- |
| html   | `string` |   Yes    | Plain html text. |

## Return

::: details Returns an object containing the following data:

```typescript

{
  title: string;
  description: string;
  cover: string;
  status: string;
  genres: string[];
  episodes: string[];
}


```

:::

## Targets

Here, we present the current sources from which this function retrieves data for the title
`Mushoku Tensei II: Isekai Ittara Honki Dasu`.

::: details

![anime target](/afgim/target.png)

:::

- title

  ::: details The title name

  ![title target](/afgim/title.png)

  :::

- status

  ::: details The current status of the title

  ![status target](/afgim/status.png)

  :::

- description

  ::: details Synopsis/Overview of the Title

  ![description target](/afgim/description.png)

  :::

- cover

  ::: details This takes the actual cover/banner of the title

  ![cover target](/afgim/cover.png)

  :::

- genres

  ::: details Genres of the title

  ![genres targets](/afgim/genres.png)

  :::

- episodes

  ::: details Episodes of the title

  ![episodes targets](/afgim/episodes.png)

  :::

## Usage

1. Import the `getInformationMobile` method.

```typescript
import { getInformationMobile } from '@untidy/animeflv/cheerio';
```

2. Pass the parsed HTML text for the title from which you want to retrieve data:

```typescript
const data = getInformationMobile(html);
```

3. As an example, we present the extracted data for the title
   `Mushoku Tensei II: Isekai Ittara Honki Dasu`:

```typescript
{
  title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu',
  description: 'Segunda temporada de Mushoku Tensei: Isekai Ittara Honki Dasu',
  status: 'En emisión',
  cover: '/uploads/animes/covers/3825.jpg',
  genres: ['Drama', 'Ecchi', 'Fantasía'],
  episodes: ['/ver/mushoku-tensei-ii-isekai-ittara-honki-dasu-0']
}
```
