---
titleTemplate: '@untidy/animeflv'
---

# cheerio

This module is designed to extract specific information for particular paths of the animeflv site,
whether it's for the mobile or desktop version. This could encompass links to videos, cover, titles,
and more, all facilitated through the utilization of cheerio for data extraction.

::: danger Warning

Since this package doesn't make requests to the animeflv site, the parsed HTML response should not
be minified or formatted by any tools.

:::

## API

| methods                                           |      desktop       |       mobile       | path                   |
| ------------------------------------------------- | :----------------: | :----------------: | ---------------------- |
| [getInformation](/animeflv/getinformation)        | :white_check_mark: |        :x:         | `/anime/:title`        |
| [getInformationMobile](/animeflv/getinformationm) |        :x:         | :white_check_mark: | `/anime/:title`        |
| [getTitles](/animeflv/gettitles)                  | :white_check_mark: |        :x:         | `/browse`              |
| [getTitlesMobile](/animeflv/gettitlesm)           |        :x:         | :white_check_mark: | `/browse`              |
| [getPages](/animeflv/getpages)                    | :white_check_mark: | :white_check_mark: | `/browse`              |
| [getVideos](/animeflv/getvideos)                  | :white_check_mark: | :white_check_mark: | `/ver/:title-:episode` |
