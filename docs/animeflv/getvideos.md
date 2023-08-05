# getVideos

Retrieves the video links for the path `/ver`. Works on both the desktop and mobile site

## Parameters

| params |   type   | Required | Description      |
| ------ | :------: | :------: | ---------------- |
| html   | `string` |   Yes    | Plain html text. |

## Return

::: details Returns an array of objects containing the following data:

```typescript
{
  server: string;
  url: string;
}
```

:::

## Target

![video links target](/afs/videolinks.png)

## Usage

1. Import the `getVideos` method.

```typescript
import { getVideos } from '@untidy/animeflv/cheerio';
```

2. Pass the parsed HTML text for the `/ver` path:

```typescript
const data = getVideos(html);
```

3. As an example, we provide a minimal representation of the retrieved video links:

```javascript
[
  {
    server: 'MEGA',
    url: 'https://mega.nz/embed#!UD9HRaZK!fake',
  },
  {
    server: 'SW',
    url: 'https://streamwish.to/e/fake',
  },
  // and goes on...
];
```
