# getInformation

Retrieves the information of the title/anime for the path `anime` on the desktop site.

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
  type: string;
  cover: string;
  status: string;
  alternativeTitles: string[];
  relatedTitles: Record<'title' | 'sufix', string>[];
  genres: string[];
  episodes: string[];
}


```

:::

## Targets

Here, we present the current sources from which this function retrieves data for the title
`Yu Yu Hakusho: Ghost Files`.

::: details

![anime target](/afgi/target.png)

:::

- title

  ::: details The title name

  ![title target](/afgi/title.png)

  :::

- description

  ::: details Synopsis/Overview of the Title

  ![description target](/afgi/description.png)

  :::

- type

  ::: details Type of the Title

  ![type target](/afgi/type.png)

  :::

- cover

  ::: details This takes the actual cover/banner of the title

  ![cover target](/afgi/cover.png)

  :::

- status

  ::: details The current status of the title

  ![status target](/afgi/status.png)

  :::

- alternativeTitles

  ::: details Other alternatives titles

  ![alternative titles targets](/afgi/alternativetitles.png)

  :::

- relatedTitles

  ::: details Related titles

  ![related titles targets](/afgi/relatedtitles.png)

  :::

- genres

  ::: details Genres of the title

  ![genres targets](/afgi/genres.png)

  :::

- episodes

  ::: details Episodes of the title

  ![episodes targets](/afgi/episodes.png)

  :::

## Usage

1. Import the `getInformation` method.

```typescript
import { getInformation } from '@untidy/animeflv/cheerio';
```

2. Pass the parsed HTML text for the title from which you want to retrieve data:

```typescript
const data = getInformation(html);
```

3. As an example, we present the extracted data for the title `Slam Dunk`:

```typescript
{
  title: 'Slam Dunk',
  alternativeTitles: ['スラムダンク'],
  relatedTitles: [],
  description: 'Un estudiante de preparatoria llamado Hanamichi Sakuragi, que sufre una serie de rechazos amorosos hasta que un buen día conoce a una chica a quien le fascina el baloncesto. A causa de esto Hanamichi fingirá ser un deportista y se inscribirá en el club de baloncesto del colegio con la esperanza de poder impresionarla y salir con ella. Aunque con el tiempo descubrirá en el baloncesto un deporte que lo exigirá y pondrá a prueba sacando lo mejor de él.',
  status: 'Finalizado',
  type: 'Anime',
  cover: '/uploads/animes/covers/335.jpg',
  genres: ['Comedia', 'Deportes', 'Drama', 'Escolares', 'Shounen'],
  episodes: [
    '101', '100', '99', '98', '97', '96', '95', '94', '93',
    '92',  '91',  '90', '89', '88', '87', '86', '85', '84',
    '83',  '82',  '81', '80', '79', '78', '77', '76', '75',
    '74',  '73',  '72', '71', '70', '69', '68', '67', '66',
    '65',  '64',  '63', '62', '61', '60', '59', '58', '57',
    '56',  '55',  '54', '53', '52', '51', '50', '49', '48',
    '47',  '46',  '45', '44', '43', '42', '41', '40', '39',
    '38',  '37',  '36', '35', '34', '33', '32', '31', '30',
    '29',  '28',  '27', '26', '25', '24', '23', '22', '21',
    '20',  '19',  '18', '17', '16', '15', '14', '13', '12',
    '11',  '10',  '9',  '8',  '7',  '6',  '5',  '4',  '3',
    '2', '1'
  ]
}
```
