export const browse = `<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"><title>Buscador Avanzado - AnimeFLV</title><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet"><link rel="stylesheet" type="text/css" href="/assets/mobile/css/css.css?v=1.1.5"><link rel="stylesheet" type="text/css" href="/assets/animeflv/css/alertify.css"><link rel="stylesheet" type="text/css" href="/iframe/css3.css"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"><link rel="manifest" href="/manifest.json"><meta name="monetag" content="ead37e1f95ad5b49c1acf5dfea76754c"><meta name="robots" content="noindex, follow"></head><body id="AnimeFlv"><div id="fb-root"></div><div class="AA-Wp"><svg xmlns="http://www.w3.org/2000/svg" class="Hide"><symbol id="Ic-user" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/></symbol><symbol id="Ic-search" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></symbol><symbol id="Ic-clear" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></symbol><symbol id="Ic-down" viewBox="0 0 24 24"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/><path d="M0-.75h24v24H0z" fill="none"/></symbol><symbol id="Ic-right" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></symbol><symbol id="Ic-alpha" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm.75.75h22.5v22.5H.75z" fill="none"/><path d="M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"/></symbol><symbol id="Ic-home" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/><path d="M0 0h24v24H0z" fill="none"/></symbol><symbol id="Ic-anime" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/></symbol><symbol id="Ic-eye" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></symbol><symbol id="Ic-eye-slash" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12,7c2.76,0 5,2.24 5,5 0,0.65 -0.13,1.26 -0.36,1.83l2.92,2.92c1.51,-1.26 2.7,-2.89 3.43,-4.75 -1.73,-4.39 -6,-7.5 -11,-7.5 -1.4,0 -2.74,0.25 -3.98,0.7l2.16,2.16C10.74,7.13 11.35,7 12,7zM2,4.27l2.28,2.28 0.46,0.46C3.08,8.3 1.78,10.02 1,12c1.73,4.39 6,7.5 11,7.5 1.55,0 3.03,-0.3 4.38,-0.84l0.42,0.42L19.73,22 21,20.73 3.27,3 2,4.27zM7.53,9.8l1.55,1.55c-0.05,0.21 -0.08,0.43 -0.08,0.65 0,1.66 1.34,3 3,3 0.22,0 0.44,-0.03 0.65,-0.08l1.55,1.55c-0.67,0.33 -1.41,0.53 -2.2,0.53 -2.76,0 -5,-2.24 -5,-5 0,-0.79 0.2,-1.53 0.53,-2.2zM11.84,9.02l3.15,3.15 0.02,-0.16c0,-1.66 -1.34,-3 -3,-3l-0.17,0.01z"/></symbol><symbol id="Ic-star" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></symbol><symbol id="Ic-fav" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></symbol><symbol id="Ic-shows" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"/></symbol><symbol id="Ic-emis" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"/></symbol><symbol id="Ic-favB" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></symbol><symbol id="Ic-chat" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/><path d="M0 0h24v24H0z" fill="none"/></symbol><symbol id="Ic-fb" viewBox="0 0 32 32"><path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"/></symbol><symbol id="Ic-tw" viewBox="0 0 32 32"><path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"/></symbol><symbol id="Ic-ws" viewBox="0 0 32 32"><path d="M27.281 4.65c-2.994-3-6.975-4.65-11.219-4.65-8.738 0-15.85 7.112-15.85 15.856 0 2.794 0.731 5.525 2.119 7.925l-2.25 8.219 8.406-2.206c2.319 1.262 4.925 1.931 7.575 1.931h0.006c0 0 0 0 0 0 8.738 0 15.856-7.113 15.856-15.856 0-4.238-1.65-8.219-4.644-11.219zM16.069 29.050v0c-2.369 0-4.688-0.637-6.713-1.837l-0.481-0.288-4.987 1.306 1.331-4.863-0.313-0.5c-1.325-2.094-2.019-4.519-2.019-7.012 0-7.269 5.912-13.181 13.188-13.181 3.519 0 6.831 1.375 9.319 3.862 2.488 2.494 3.856 5.8 3.856 9.325-0.006 7.275-5.919 13.188-13.181 13.188zM23.294 19.175c-0.394-0.2-2.344-1.156-2.706-1.288s-0.625-0.2-0.894 0.2c-0.262 0.394-1.025 1.288-1.256 1.556-0.231 0.262-0.462 0.3-0.856 0.1s-1.675-0.619-3.188-1.969c-1.175-1.050-1.975-2.35-2.206-2.744s-0.025-0.613 0.175-0.806c0.181-0.175 0.394-0.463 0.594-0.694s0.262-0.394 0.394-0.662c0.131-0.262 0.069-0.494-0.031-0.694s-0.894-2.15-1.219-2.944c-0.319-0.775-0.65-0.669-0.894-0.681-0.231-0.012-0.494-0.012-0.756-0.012s-0.694 0.1-1.056 0.494c-0.363 0.394-1.387 1.356-1.387 3.306s1.419 3.831 1.619 4.1c0.2 0.262 2.794 4.269 6.769 5.981 0.944 0.406 1.681 0.65 2.256 0.837 0.95 0.3 1.813 0.256 2.494 0.156 0.762-0.113 2.344-0.956 2.675-1.881s0.331-1.719 0.231-1.881c-0.094-0.175-0.356-0.275-0.756-0.475z"/></symbol><symbol id="Ic-fltr" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"/></symbol></svg><header id="Header" class="Header Bglg"><nav class="Container"><ul class="Header-Top Clfx"><li class="Logo-Top"><a href="/"><img src="/assets/mobile/img/anime-flv.svg" alt="AnimeFLV"></a></li><li class="User-Top AADrpd"><span class="Btn AALink"><i class="Svg-ic"><svg><use xlink:href="#Ic-user"/></svg></i></span><div id="Form-User" class="AACont"><form action="/auth/sign_in" class="Login" method="POST"><div class="Title">Iniciar sesión</div><div class="Form-Group"><label><strong>Email</strong></label><input type="text" name="email"></div><div class="Form-Group"><label><strong>Contraseña</strong></label><input type="password" name="password"></div><p class="RcvrPass"><a href="/auth/password/new">Recuperar contraseña</a></p><button type="submit">Iniciar sesión</button><hr><a class="Button AATggl" href="/auth/sign_up">Registrarse<i class="Svg-ic"><svg><use xlink:href="#Ic-right"/></svg></i></a></form></div></li><li class="Search-Top"><label for="Input-Search" class="Btn AATggl" data-tggl="Header"><i class="Svg-ic"><svg><use xlink:href="#Ic-search"/></svg></i></label></li><li class="Menu-Top"><i class="MenuBtn AATggl" data-tggl="AnimeFlv"><i></i><i></i><i></i></i><ul><li><i class="Svg-ic"><svg><use xlink:href="#Ic-home"/></svg></i><a href="/">Inicio</a></li><li><i class="Svg-ic"><svg><use xlink:href="#Ic-anime"/></svg></i><a href="/browse">Directorio</a></li><li class="AASbmn mn-rgt"><i class="Svg-ic"><svg><use xlink:href="#Ic-anime"/></svg></i><i class="Svg-ic rgt"><svg><use xlink:href="#Ic-down"/></svg></i><a href="#">Categorias</a><ul><li><a href="/browse?genre=accion">Acci&oacute;n</a></li><li><a href="/browse?genre=artes-marciales">Artes Marciales</a></li><li><a href="/browse?genre=aventura">Aventuras</a></li><li><a href="/browse?genre=carreras">Carreras</a></li><li><a href="/browse?genre=ciencia-ficcion">Ciencia Ficci&oacute;n</a></li><li><a href="/browse?genre=comedia">Comedia</a></li><li><a href="/browse?genre=demencia">Demencia</a></li><li><a href="/browse?genre=demonios">Demonios</a></li><li><a href="/browse?genre=deportes">Deportes</a></li><li><a href="/browse?genre=drama">Drama</a></li><li><a href="/browse?genre=ecchi">Ecchi</a></li><li><a href="/browse?genre=escolares">Escolares</a></li><li><a href="/browse?genre=espacial">Espacial</a></li><li><a href="/browse?genre=fantasia">Fantas&iacute;a</a></li><li><a href="/browse?genre=harem">Harem</a></li><li><a href="/browse?genre=historico">Historico</a></li><li><a href="/browse?genre=infantil">Infantil</a></li><li><a href="/browse?genre=josei">Josei</a></li><li><a href="/browse?genre=juegos">Juegos</a></li><li><a href="/browse?genre=magia">Magia</a></li><li><a href="/browse?genre=mecha">Mecha</a></li><li><a href="/browse?genre=militar">Militar</a></li><li><a href="/browse?genre=misterio">Misterio</a></li><li><a href="/browse?genre=musica">M&uacute;sica</a></li><li><a href="/browse?genre=parodia">Parodia</a></li><li><a href="/browse?genre=policia">Polic&iacute;a</a></li><li><a href="/browse?genre=psicologico">Psicol&oacute;gico</a></li><li><a href="/browse?genre=recuentos-de-la-vida">Recuentos de la vida</a></li><li><a href="/browse?genre=romance">Romance</a></li><li><a href="/browse?genre=samurai">Samurai</a></li><li><a href="/browse?genre=seinen">Seinen</a></li><li><a href="/browse?genre=shoujo">Shoujo</a></li><li><a href="/browse?genre=shounen">Shounen</a></li><li><a href="/browse?genre=sobrenatural">Sobrenatural</a></li><li><a href="/browse?genre=superpoderes">Superpoderes</a></li><li><a href="/browse?genre=suspenso">Suspenso</a></li><li><a href="/browse?genre=terror">Terror</a></li><li><a href="/browse?genre=vampiros">Vampiros</a></li><li><a href="/browse?genre=yaoi">Yaoi</a></li><li><a href="/browse?genre=yuri">Yuri</a></li></ul></li><li><i class="Svg-ic"><svg><use xlink:href="#Ic-shows"/></svg></i><a href="/browse?status=3">Próximos animes</a></li><li><i class="Svg-ic"><svg><use xlink:href="#Ic-emis"/></svg></i><a href="/browse?status=1">Animes en emisión</a></li><li class="MenuClose AATggl" data-tggl="AnimeFlv"></li></ul></li></ul><form class="Form-Search" method="get" action="/browse"><input id="Input-Search" name="q" type="text" placeholder="Buscar anime..."><i class="Close-Search AATggl" data-tggl="Header"><i class="Svg-ic"><svg><use xlink:href="#Ic-clear"/></svg></i></i></form></nav></header><div class="Body"><div class="Container"><div class="Title-Top"><i class="Svg-ic"><svg><use xlink:href="#Ic-search"/></svg></i>Buscador<span class="FilterLnk AATggl" data-tggl="Filter">FILTROS<i class="Svg-ic"><svg><use xlink:href="#Ic-fltr"/></svg></i></span></div><form action="/browse" id="Filter" class="FilterCnt"><ul class="List Clfx"><li><div class="Form-Select Alt"><select name="genre[]" id="genre_select" multiple="multiple"><option value="accion">Acci&oacute;n</option><option value="artes-marciales">Artes Marciales</option><option value="aventura">Aventuras</option><option value="carreras">Carreras</option><option value="ciencia-ficcion">Ciencia Ficci&oacute;n</option><option value="comedia">Comedia</option><option value="demencia">Demencia</option><option value="demonios">Demonios</option><option value="deportes">Deportes</option><option value="drama">Drama</option><option value="ecchi">Ecchi</option><option value="escolares">Escolares</option><option value="espacial">Espacial</option><option value="fantasia">Fantas&iacute;a</option><option value="harem">Harem</option><option value="historico">Historico</option><option value="infantil">Infantil</option><option value="josei">Josei</option><option value="juegos">Juegos</option><option value="magia">Magia</option><option value="mecha">Mecha</option><option value="militar">Militar</option><option value="misterio">Misterio</option><option value="musica">M&uacute;sica</option><option value="parodia">Parodia</option><option value="policia">Polic&iacute;a</option><option value="psicologico">Psicol&oacute;gico</option><option value="recuentos-de-la-vida">Recuentos de la vida</option><option value="romance">Romance</option><option value="samurai">Samurai</option><option value="seinen">Seinen</option><option value="shoujo">Shoujo</option><option value="shounen">Shounen</option><option value="sobrenatural">Sobrenatural</option><option value="superpoderes">Superpoderes</option><option value="suspenso">Suspenso</option><option value="terror">Terror</option><option value="vampiros">Vampiros</option><option value="yaoi">Yaoi</option><option value="yuri">Yuri</option></select><label><span>Genero:</span><i class="Svg-ic"><svg><use xlink:href="#Ic-down"/></svg></i></label></div></li><li><div class="Form-Select Alt"><select name="year[]" id="year_select" multiple="multiple"><option value="2023">2023</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option></select><label><span>Año:</span><i class="Svg-ic"><svg><use xlink:href="#Ic-down"/></svg></i></label></div></li><li><div class="Form-Select Alt"><select name="type[]" id="type_select" multiple="multiple"><option value="tv">TV</option><option value="movie">Película</option><option value="special">Especial</option><option value="ova">OVA</option></select><label><span>Tipo:</span><i class="Svg-ic"><svg><use xlink:href="#Ic-down"/></svg></i></label></div></li><li><div class="Form-Select Alt"><select name="status[]" id="status_select" multiple="multiple"><option value="1">En emisión</option><option value="2">Finalizado</option><option value="3">Próximamente</option></select><label><span>Estado:</span><i class="Svg-ic"><svg><use xlink:href="#Ic-down"/></svg></i></label></div></li><li><div class="Form-Select Alt"><select name="order" id="order_select"><option value="default">Por Defecto</option><option value="updated">Recientemente Actualizados</option><option value="added">Recientemente Agregados</option><option value="title">Nombre A-Z</option><option value="rating">Calificación</option></select><label><span>Orden:</span><i class="Svg-ic"><svg><use xlink:href="#Ic-down"/></svg></i></label></div></li><li><button type="submit">FILTRAR</button></li></ul></form><div class="TbCnAnmFlv"><ul class="List-Animes"><li class="Anime"><a href="/anime/ayaka"><figure class="Image"><img src="/uploads/animes/covers/3821.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">Ayaka</h2></a></li><li class="Anime"><a href="/anime/ryza-no-atelier-tokoyami-no-joou-to-himitsu-no-kakurega"><figure class="Image"><img src="/uploads/animes/covers/3820.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">Ryza no Atelier: Tokoyami no Joou to Himitsu no Kakurega</h2></a></li><li class="Anime"><a href="/anime/uchi-no-kaisha-no-chiisai-senpai-no-hanashi"><figure class="Image"><img src="/uploads/animes/covers/3822.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">Uchi no Kaisha no Chiisai Senpai no Hanashi</h2></a></li><li class="Anime"><a href="/anime/horimiya-piece"><figure class="Image"><img src="/uploads/animes/covers/3819.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">Horimiya: Piece</h2></a></li><li class="Anime"><a href="/anime/bang-dream-its-mygo"><figure class="Image"><img src="/uploads/animes/covers/3818.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">BanG Dream! It's MyGO!!!!!</h2></a></li><li class="Anime"><a href="/anime/genjitsu-no-yohane-sunshine-in-the-mirror"><figure class="Image"><img src="/uploads/animes/covers/3817.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">Genjitsu no Yohane: Sunshine in the Mirror</h2></a></li><li class="Anime"><a href="/anime/black-clover-mahou-tei-no-ken"><figure class="Image"><img src="/uploads/animes/covers/3816.jpg" alt=""><span class="Type A">Película</span></figure><h2 class="Title">Black Clover: Mahou Tei no Ken</h2></a></li><li class="Anime"><a href="/anime/5toubun-no-hanayome-movie"><figure class="Image"><img src="/uploads/animes/covers/3815.jpg" alt=""><span class="Type A">Película</span></figure><h2 class="Title">5-toubun no Hanayome Movie</h2></a></li><li class="Anime"><a href="/anime/kimi-wo-aishita-hitori-no-boku-e"><figure class="Image"><img src="/uploads/animes/covers/3813.jpg" alt=""><span class="Type A">Película</span></figure><h2 class="Title">Kimi wo Aishita Hitori no Boku e</h2></a></li><li class="Anime"><a href="/anime/boku-ga-aishita-subete-no-kimi-e"><figure class="Image"><img src="/uploads/animes/covers/3814.jpg" alt=""><span class="Type A">Película</span></figure><h2 class="Title">Boku ga Aishita Subete no Kimi e</h2></a></li><li class="Anime"><a href="/anime/tensei-shitara-slime-datta-ken-movie-guren-no-kizunahen"><figure class="Image"><img src="/uploads/animes/covers/3812.jpg" alt=""><span class="Type A">Película</span></figure><h2 class="Title">Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen</h2></a></li><li class="Anime"><a href="/anime/niehime-to-kemono-no-ou"><figure class="Image"><img src="/uploads/animes/covers/3811.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">Niehime to Kemono no Ou</h2></a></li><li class="Anime"><a href="/anime/watashi-ni-tenshi-ga-maiorita-precious-friends"><figure class="Image"><img src="/uploads/animes/covers/3810.jpg" alt=""><span class="Type A">Película</span></figure><h2 class="Title">Watashi ni Tenshi ga Maiorita! Precious Friends</h2></a></li><li class="Anime"><a href="/anime/ousama-ranking-yuuki-no-takarabako"><figure class="Image"><img src="/uploads/animes/covers/3809.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">Ousama Ranking: Yuuki no Takarabako</h2></a></li><li class="Anime"><a href="/anime/majutsushi-orphen-hagure-tabi-seiikihen"><figure class="Image"><img src="/uploads/animes/covers/3806.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">Majutsushi Orphen Hagure Tabi: Seiiki-hen</h2></a></li><li class="Anime"><a href="/anime/oshi-no-ko"><figure class="Image"><img src="/uploads/animes/covers/3808.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">[Oshi No Ko]</h2></a></li><li class="Anime"><a href="/anime/the-idolmster-cinderella-girls-u149"><figure class="Image"><img src="/uploads/animes/covers/3807.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">The IDOLM@STER Cinderella Girls: U149</h2></a></li><li class="Anime"><a href="/anime/the-marginal-service"><figure class="Image"><img src="/uploads/animes/covers/3805.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">The Marginal Service</h2></a></li><li class="Anime"><a href="/anime/dead-mount-death-play"><figure class="Image"><img src="/uploads/animes/covers/3803.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">Dead Mount Death Play</h2></a></li><li class="Anime"><a href="/anime/kimi-wa-houkago-insomnia"><figure class="Image"><img src="/uploads/animes/covers/3804.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">Kimi wa Houkago Insomnia</h2></a></li><li class="Anime"><a href="/anime/kanojo-ga-koushakutei-ni-itta-riyuu"><figure class="Image"><img src="/uploads/animes/covers/3802.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">Kanojo ga Koushaku-tei ni Itta Riyuu</h2></a></li><li class="Anime"><a href="/anime/kimetsu-no-yaiba-katanakaji-no-satohen"><figure class="Image"><img src="/uploads/animes/covers/3801.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">Kimetsu no Yaiba: Katanakaji no Sato-hen</h2></a></li><li class="Anime"><a href="/anime/world-dai-star"><figure class="Image"><img src="/uploads/animes/covers/3800.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">World Dai Star</h2></a></li><li class="Anime"><a href="/anime/isekai-shoukan-wa-nidome-desu"><figure class="Image"><img src="/uploads/animes/covers/3799.jpg" alt=""><span class="Type A">Anime</span></figure><h2 class="Title">Isekai Shoukan wa Nidome desu</h2></a></li></ul></div><nav aria-label="Page navigation"><ul class="pagination"><li class="disabled"><a href="#" rel="prev">&laquo;</a></li><li class="active"><a href="/browse?page=1">1</a></li><li><a href="/browse?page=2">2</a></li><li><a href="/browse?page=3">3</a></li><li><a href="/browse?page=4">4</a></li><li><a href="/browse?page=5">5</a></li><li><a href="/browse?page=6">6</a></li><li><a href="/browse?page=7">7</a></li><li><a href="/browse?page=8">8</a></li><li><a href="/browse?page=9">9</a></li><li><a href="/browse?page=10">10</a></li><li><span>&hellip;</span></li><li><a href="/browse?page=157">157</a></li><li><a href="/browse?page=2" rel="next">&raquo;</a></li></ul></nav></div></div></div></body></html>`;