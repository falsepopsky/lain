export const browseQueryPageTen = `<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"><title>Directorio de Animes — AnimeFLV</title><meta name="description" content="El catálogo completo de animes que existen en nuestra base de datos, los puedes filtrar por tipo, categoría, año y mucho más, solo en tu página favorita: AnimeFLV"><meta name="robots" content="index, follow"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700,400italic" rel="stylesheet" type="text/css"><link rel="stylesheet" type="text/css" href="/assets/animeflv/css/font-awesome.css"><link rel="stylesheet" type="text/css" href="/assets/animeflv/css/css.css?v=1.3.4"><link rel="stylesheet" type="text/css" href="/assets/animeflv/css/bootstrap.css"><meta name="verify-admitad" content="34e2b77cc8"><meta content="es" http-equiv="content-language"><meta content="es" name="language"><meta name="viewport" content="width=device-width,initial-scale=1"><meta property="fb:app_id" content="1730508916998105"><link rel="manifest" href="/manifest.json"><meta name="monetag" content="ead37e1f95ad5b49c1acf5dfea76754c"></head><body><div id="fb-root"></div><div class="Wrapper"><header class="Header"><div class="Mid"><div class="Container"><div class="AX Row AFluid"><div class="Logo"><a href="/"><img src="/assets/animeflv/img/logo.png?v=2.3" alt="AnimeFLV"></a></div><div class="AFixed"><input type="checkbox" hidden="hidden" id="BtnMenu"><label for="BtnMenu" class="BtnMenu fa-bars"><span>MENU</span></label><nav class="CX Row"><input type="checkbox" hidden="hidden" id="Hd-Search"><div class="Search"><form action="/browse" method="get"><input name="q" type="text" id="search-anime" autocomplete="off" placeholder="Buscar..."><button><i class="fa-search"></i></button></form><div class="DpdwCnt TtCn"><ul class="ListResult"></ul></div></div><div class="Login"><input type="checkbox" hidden="hidden" id="DpdwLnk-Login"><label for="DpdwLnk-Login" class="Button"><span class="fa-user">Login</span></label><div class="DpdwCnt TtCn"><div class="Title">INICIAR SESION</div><form action="/auth/sign_in" class="form-horizontal" method="POST"><label class="Form-Icon Right"><input name="email" type="text" placeholder="E-Mail"><i class="fa-user"></i></label><label class="Form-Icon Right"><input name="password" type="password" placeholder="Contraseña"> <input type="hidden" name="remember_me" value="1"><i class="fa-lock"></i></label><button type="submit">INICIAR SESIÓN</button><a href="/auth/facebook/sign_in" rel="nofollow" class="Button fb_login"><span class="fa-facebook">INICIAR SESION CON FB</span></a><div class="Links"><a href="/auth/sign_up" rel="nofollow">Registrate</a><a href="/auth/password/new" rel="nofollow">¿Olvidaste tu contraseña?</a></div></form></div></div><ul class="Menu"><li><a href="/">Inicio</a></li><li class="lnk-h"><a href="https://www3.hentaila.com/suweb" target="_blank">Hentai</a></li><li class="Current"><a href="/browse">Directorio Anime</a></li></ul></nav></div></div></div></div></header><div class="Body"><div class="Container"><div class="Title Page fa-star B12"><h1>Lista completa de Animes</h1></div><main class="Main"><form action="/browse" method="get"><div class="filters" style="margin-bottom:10px"><select name="genre[]" id="genre_select" multiple="multiple"><option value="accion">Acci&oacute;n</option><option value="artes-marciales">Artes Marciales</option><option value="aventura">Aventuras</option><option value="carreras">Carreras</option><option value="ciencia-ficcion">Ciencia Ficci&oacute;n</option><option value="comedia">Comedia</option><option value="demencia">Demencia</option><option value="demonios">Demonios</option><option value="deportes">Deportes</option><option value="drama">Drama</option><option value="ecchi">Ecchi</option><option value="escolares">Escolares</option><option value="espacial">Espacial</option><option value="fantasia">Fantas&iacute;a</option><option value="harem">Harem</option><option value="historico">Historico</option><option value="infantil">Infantil</option><option value="josei">Josei</option><option value="juegos">Juegos</option><option value="magia">Magia</option><option value="mecha">Mecha</option><option value="militar">Militar</option><option value="misterio">Misterio</option><option value="musica">M&uacute;sica</option><option value="parodia">Parodia</option><option value="policia">Polic&iacute;a</option><option value="psicologico">Psicol&oacute;gico</option><option value="recuentos-de-la-vida">Recuentos de la vida</option><option value="romance">Romance</option><option value="samurai">Samurai</option><option value="seinen">Seinen</option><option value="shoujo">Shoujo</option><option value="shounen">Shounen</option><option value="sobrenatural">Sobrenatural</option><option value="superpoderes">Superpoderes</option><option value="suspenso">Suspenso</option><option value="terror">Terror</option><option value="vampiros">Vampiros</option><option value="yaoi">Yaoi</option><option value="yuri">Yuri</option></select><select name="year[]" id="year_select" multiple="multiple"><option value="2023">2023</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option></select><select name="type[]" id="type_select" multiple="multiple"><option value="tv">TV</option><option value="movie">Película</option><option value="special">Especial</option><option value="ova">OVA</option></select><select name="status[]" id="status_select" multiple="multiple"><option value="1">En emisión</option><option value="2">Finalizado</option><option value="3">Próximamente</option></select><select name="order" id="order_select"><option value="default">Por Defecto</option><option value="updated">Recientemente Actualizados</option><option value="added">Recientemente Agregados</option><option value="title">Nombre A-Z</option><option value="rating">Calificación</option></select><button type="submit" class="btn btn-sm btn-primary"><span class="fa fa-filter" aria-hidden="true"></span>Filtrar</button></div></form><ul class="ListAnimes AX Rows A03 C02 D02"><li><article class="Anime alt B"><a href="/anime/the-legend-of-heroes-sen-no-kiseki-northern-war"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/3729.jpg" alt="The Legend of Heroes: Sen no Kiseki - Northern War"></figure><span class="Type tv">Anime</span></div><h3 class="Title">The Legend of Heroes: Sen no Kiseki - Northern War</h3></a><div class="Description"><div class="Title"><strong>The Legend of Heroes: Sen no Kiseki - Northern War</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">3.8</span></p><p>Con la intención de proteger su pueblo natal del Imperio de Erebonia y para limpiar su nombre de la mancha que supuso la deslealtad de su abuelo, Lavie se alista en los Jaegers del Norte, donde hará todo lo que esté en su mano para cumplir su misión. Ahora esta joven que no se amolda a las normas deberá formar un escuadrón para embarcarse en ...</p><span class="Flwrs fa-user"><span>3253</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/the-legend-of-heroes-sen-no-kiseki-northern-war">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/kimi-to-boku-no-saigo-no-senjou-aruiwa-sekai-ga-hajimaru-seisen"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/3361.jpg" alt="Kimi to Boku no Saigo no Senjou, Aruiwa Sekai ga Hajimaru Seisen"></figure><span class="Type tv">Anime</span></div><h3 class="Title">Kimi to Boku no Saigo no Senjou, Aruiwa Sekai ga Hajimaru Seisen</h3></a><div class="Description"><div class="Title"><strong>Kimi to Boku no Saigo no Senjou, Aruiwa Sekai ga Hajimaru Seisen</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">4.5</span></p><p>El Imperio, dotado de un nivel avanzado de conocimiento, y la Agencia de la Casa Imperial de Nebulis temida como el «País de las Brujas», mantienen una lucha que dura en el tiempo. En el campo de batalla un chico y una chica se conocen. El espadachín que se convirtió en la fuerza definitiva en el campo de batalla a la edad más joven a lo larg...</p><span class="Flwrs fa-user"><span>18650</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/kimi-to-boku-no-saigo-no-senjou-aruiwa-sekai-ga-hajimaru-seisen">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/megaman-maverick-hunter-x-the-day-of-sigma"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/681.jpg" alt="MegaMan Maverick Hunter X The Day of Sigma"></figure><span class="Type ova">OVA</span></div><h3 class="Title">MegaMan Maverick Hunter X The Day of Sigma</h3></a><div class="Description"><div class="Title"><strong>MegaMan Maverick Hunter X The Day of Sigma</strong></div><p><span class="Type ova">OVA</span><span class="Vts fa-star">4.6</span></p><p>Megaman no es un anime en sí, las ovas existentes están basadas en un videojuego llamado Rockman (en japón} Megamán (aqui en occidente). Es la historia de un robot llamado X el cual pelea contra los Maveriks que son robots que se han opuesto a los humanos y se dedican a destruir, X junto con Zero, otro riploid están dedicados a proteger la paz...</p><span class="Flwrs fa-user"><span>177</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/megaman-maverick-hunter-x-the-day-of-sigma">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/kami-nomi-zo-shiru-sekai-2"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/384.jpg" alt="Kami Nomi zo Shiru Sekai 2"></figure><span class="Type tv">Anime</span></div><h3 class="Title">Kami Nomi zo Shiru Sekai 2</h3></a><div class="Description"><div class="Title"><strong>Kami Nomi zo Shiru Sekai 2</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">4.7</span></p><p>Continuan las aventuras de Keima Katsuragi, el rey de las conquistas (apodo dado por ser como un dios en juegos Galge de citas 2D), seguirá "capturando" el corazón de chicas con espiritus prófugos dentro de ellas para que puedan salir y Elsee, su compañera demoniaca, les de captura.</p><span class="Flwrs fa-user"><span>2203</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/kami-nomi-zo-shiru-sekai-2">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/osananajimi-ga-zettai-ni-makenai-love-comedy"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/3469.jpg" alt="Osananajimi ga Zettai ni Makenai Love Comedy"></figure><span class="Type tv">Anime</span></div><h3 class="Title">Osananajimi ga Zettai ni Makenai Love Comedy</h3></a><div class="Description"><div class="Title"><strong>Osananajimi ga Zettai ni Makenai Love Comedy</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">4.4</span></p><p>Mi amiga de la infancia, Shida Kuroha, parece tener sentimientos románticos hacia mí. Ella es también mi vecina, y es pequeña y linda. Con una hermosa personalidad, ella es como mi hermana mayor, y esa es una de sus principales fortalezas… Pero yo ya tengo a alguien que me gusta, la hermosa idol de la escuela, Kachi Shirokusa. Aunque pensánd...</p><span class="Flwrs fa-user"><span>30091</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/osananajimi-ga-zettai-ni-makenai-love-comedy">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/totsukuni-no-shoujo-2022"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/3672.jpg" alt="Totsukuni no Shoujo (2022)"></figure><span class="Type ova">OVA</span></div><h3 class="Title">Totsukuni no Shoujo (2022)</h3></a><div class="Description"><div class="Title"><strong>Totsukuni no Shoujo (2022)</strong></div><p><span class="Type ova">OVA</span><span class="Vts fa-star">0.0</span></p><p>Hace mucho tiempo, había un Dios de la Luz y un Dios de las Tinieblas. Mientras que los devotos del Dios de la Luz experimentaban felicidad y buena fortuna, el Dios de las Tinieblas engañaba a la gente y les robaba la alegría. Y así, como dice la leyenda, el Dios de la Luz decidió castigarlo convirtiéndolo en un monstruo. Enfurecido por esto,...</p><span class="Flwrs fa-user"><span>0</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/totsukuni-no-shoujo-2022">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/ore-dake-haireru-kakushi-dungeon"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/3401.jpg" alt="Ore dake Haireru Kakushi Dungeon"></figure><span class="Type tv">Anime</span></div><h3 class="Title">Ore dake Haireru Kakushi Dungeon</h3></a><div class="Description"><div class="Title"><strong>Ore dake Haireru Kakushi Dungeon</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">4.5</span></p><p>Noir, el tercer hijo de una familia de nobles en decadencia, ha perdido su empleo y no sabe qué hacer, pero la fortuna le sonríe justo cuando decide convertirse en un aventurero. Calabozos a los que nadie sabe cómo entrar. Lugares legendarios llenos de extremadamente raras criaturas, herramientas mágicas con poderes inmensurables y objetos q...</p><span class="Flwrs fa-user"><span>35885</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/ore-dake-haireru-kakushi-dungeon">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/akuyaku-reijou-nanode-last-boss-wo-kattemimashita"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/3675.jpg" alt="Akuyaku Reijou nanode Last Boss wo Kattemimashita"></figure><span class="Type tv">Anime</span></div><h3 class="Title">Akuyaku Reijou nanode Last Boss wo Kattemimashita</h3></a><div class="Description"><div class="Title"><strong>Akuyaku Reijou nanode Last Boss wo Kattemimashita</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">4.6</span></p><p>¡Las villanas tienen su propia ruta! Cuando su compromiso con el príncipe finalizó de forma poco cortés, la joven noble Aileen comenzó a recordar poco a poco detalles de su vida anterior y se percató de algo: está viviendo en el mundo de uno de sus juegos otome favoritos, ¡y como la villana principal! Pero su memoria es un desastre y no rec...</p><span class="Flwrs fa-user"><span>7962</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/akuyaku-reijou-nanode-last-boss-wo-kattemimashita">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/the-law-of-ueki"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/1393.jpg" alt="The Law of Ueki"></figure><span class="Type tv">Anime</span></div><h3 class="Title">The Law of Ueki</h3></a><div class="Description"><div class="Title"><strong>The Law of Ueki</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">4.5</span></p><p>Kosuke Ueki, un chico normal que vive en Jap&oacute;n, vive una vida normal, amigos normales... pero &eacute;l se siente diferente. Un d&iacute;a, un nuevo profesor, el profesor Kobayashi, se interesa en Ueki tras saber que &eacute;l lo que m&aacute;s desea es justicia en el mundo. Tras esto, le revela a Ueki su verdadera identidad; Kobayashi es...</p><span class="Flwrs fa-user"><span>1570</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/the-law-of-ueki">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/the-idolmaster-cinderella-girls-2"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/2117.jpg" alt="The IDOLM@STER: Cinderella Girls 2nd Season"></figure><span class="Type tv">Anime</span></div><h3 class="Title">The IDOLM@STER: Cinderella Girls 2nd Season</h3></a><div class="Description"><div class="Title"><strong>The IDOLM@STER: Cinderella Girls 2nd Season</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">4.3</span></p><p>Segunda temporada de The IDOLM@STER: Cinderella Girls</p><span class="Flwrs fa-user"><span>267</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/the-idolmaster-cinderella-girls-2">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/strike-the-blood-valkyria-no-oukoku-hen"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/2331.jpg" alt="Strike the Blood: Valkyria no Oukoku-hen"></figure><span class="Type ova">OVA</span></div><h3 class="Title">Strike the Blood: Valkyria no Oukoku-hen</h3></a><div class="Description"><div class="Title"><strong>Strike the Blood: Valkyria no Oukoku-hen</strong></div><p><span class="Type ova">OVA</span><span class="Vts fa-star">4.7</span></p><p></p><span class="Flwrs fa-user"><span>2960</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/strike-the-blood-valkyria-no-oukoku-hen">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/concrete-revolutio-choujin-gensou-the-last-song"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/2428.jpg" alt="Concrete Revolutio: Choujin Gensou - The Last Song"></figure><span class="Type tv">Anime</span></div><h3 class="Title">Concrete Revolutio: Choujin Gensou - The Last Song</h3></a><div class="Description"><div class="Title"><strong>Concrete Revolutio: Choujin Gensou - The Last Song</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">4.5</span></p><p>Segunda temporada de Concrete Revolutio.</p><span class="Flwrs fa-user"><span>441</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/concrete-revolutio-choujin-gensou-the-last-song">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/yakusoku-no-neverland"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/3084.jpg" alt="Yakusoku no Neverland"></figure><span class="Type tv">Anime</span></div><h3 class="Title">Yakusoku no Neverland</h3></a><div class="Description"><div class="Title"><strong>Yakusoku no Neverland</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">4.8</span></p><p>Por mucho que los niños la quieran, ella no es su madre. Viven juntos, pero no son familiares de sangre. Grace Field es un hogar al que son enviados los niños que no tienen padres. Un hogar irreemplazable para los 38 niños que allí viven felices su día a día, como si fueran hermanos, aunque al inicio fueran completos desconocidos. Al menos as...</p><span class="Flwrs fa-user"><span>36242</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/yakusoku-no-neverland">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/shigofumi"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/67.jpg" alt="Shigofumi"></figure><span class="Type tv">Anime</span></div><h3 class="Title">Shigofumi</h3></a><div class="Description"><div class="Title"><strong>Shigofumi</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">4.6</span></p><p>Amores lejanos, mensajes de aliento, peque&ntilde;as aventuras, secretos inconfesables... Pocos objetos pueden reunir tantos sentimientos y revelaciones en tan poco espacio como una carta. Desde su velada creaci&oacute;n hasta la ansiosa espera de su llegada, es cierto que somos personas distintas antes y despu&eacute;s de leer una carta: tal ve...</p><span class="Flwrs fa-user"><span>375</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/shigofumi">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/ghost-in-the-shell-stand-alone-complex"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/292.jpg" alt="Ghost in the Shell: Stand Alone Complex"></figure><span class="Type tv">Anime</span></div><h3 class="Title">Ghost in the Shell: Stand Alone Complex</h3></a><div class="Description"><div class="Title"><strong>Ghost in the Shell: Stand Alone Complex</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">4.5</span></p><p>La serie tiene lugar en el Jap&oacute;n del a&ntilde;o 2029, tras el alza de este pa&iacute;s como imperio econ&oacute;mico debido al &quot;milagro japon&eacute;s&quot; (reciclaje de residuos nucleares). La historia gira en torno a la organizaci&oacute;n de fuerzas especiales Secci&oacute;n 9, y en particular en torno a su segunda de abordo tras Da...</p><span class="Flwrs fa-user"><span>2126</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/ghost-in-the-shell-stand-alone-complex">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/shinsekai-yori"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/853.jpg" alt="Shinsekai yori"></figure><span class="Type tv">Anime</span></div><h3 class="Title">Shinsekai yori</h3></a><div class="Description"><div class="Title"><strong>Shinsekai yori</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">4.5</span></p><p>La historia se sitúa en un Japón de dentro de mil años. Cinco niños (Saki la protagonista, Satoru, Maria, Mamoru y Shun) han nacido y se han criado en un tranquilo pueblo del cual se podría decir que es una utopía, con agua abundante y verdes zonas. El mundo de esa época está gobernado por aquellos con el ?poder maldito?, también conocido ...</p><span class="Flwrs fa-user"><span>2963</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/shinsekai-yori">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/detective-conan-movie-18"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/1732.jpg" alt="Detective Conan Movie 18: The Sniper from Another Dimension"></figure><span class="Type movie">Película</span></div><h3 class="Title">Detective Conan Movie 18: The Sniper from Another Dimension</h3></a><div class="Description"><div class="Title"><strong>Detective Conan Movie 18: The Sniper from Another Dimension</strong></div><p><span class="Type movie">Película</span><span class="Vts fa-star">4.3</span></p><p></p><span class="Flwrs fa-user"><span>241</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/detective-conan-movie-18">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/danganronpa-3-the-end-of-kibougamine-gakuen-kibou-hen"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/2546.jpg" alt="Danganronpa 3: The End of Kibougamine Gakuen - Kibou-hen"></figure><span class="Type ova">OVA</span></div><h3 class="Title">Danganronpa 3: The End of Kibougamine Gakuen - Kibou-hen</h3></a><div class="Description"><div class="Title"><strong>Danganronpa 3: The End of Kibougamine Gakuen - Kibou-hen</strong></div><p><span class="Type ova">OVA</span><span class="Vts fa-star">4.6</span></p><p></p><span class="Flwrs fa-user"><span>2411</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/danganronpa-3-the-end-of-kibougamine-gakuen-kibou-hen">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/ballroom-e-youkoso"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/2771.jpg" alt="Ballroom e Youkoso"></figure><span class="Type tv">Anime</span></div><h3 class="Title">Ballroom e Youkoso</h3></a><div class="Description"><div class="Title"><strong>Ballroom e Youkoso</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">4.8</span></p><p>La historia de Ballroom e Youkoso se centra en el estudiante Tatara Fujita, que quiere ser bueno en algo, en cualquier cosa. Por desgracia, es tan mediocre como cualquier otro adolescente. Los matones del barrio lo saben y por eso aprovechan cualquier ocasión para sacarle dinero, pero esto cambia cuando el caballeroso Kaname Sengoku se encuentra c...</p><span class="Flwrs fa-user"><span>8252</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/ballroom-e-youkoso">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/mahoutsukai-no-yome"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/2829.jpg" alt="Mahoutsukai no Yome"></figure><span class="Type tv">Anime</span></div><h3 class="Title">Mahoutsukai no Yome</h3></a><div class="Description"><div class="Title"><strong>Mahoutsukai no Yome</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">4.8</span></p><p>Chise Hatori, 15 años. Perdida, sin esperanza y sin familia, la compran por dinero. Pero quien la compra no es otra persona, sino un hechicero no humano llamado Elias. Aunque al inicio duda, la joven comenzará una nueva vida como su aprendiz y futura esposa. Se muda y comienza a vivir una nueva vida pacífica, tranquila pero firme, hasta que un d...</p><span class="Flwrs fa-user"><span>30281</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/mahoutsukai-no-yome">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/hidan-no-aria"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/392.jpg" alt="Hidan no Aria"></figure><span class="Type tv">Anime</span></div><h3 class="Title">Hidan no Aria</h3></a><div class="Description"><div class="Title"><strong>Hidan no Aria</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">4.6</span></p><p>La historia toma lugar en Tokyo Butei High School, una escuela especial en donde detectives armados llamados &quot;Butei&quot; son entrenados en el uso de sus armas y habilidades. Kinji Tooyama es un estudiante de segundo a&ntilde;o que tiene una habilidad especial, pero la mantiene en secreto y se muestra como alguien normal ya que quiere una vida...</p><span class="Flwrs fa-user"><span>5513</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/hidan-no-aria">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/sk"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/3407.jpg" alt="SK∞"></figure><span class="Type tv">Anime</span></div><h3 class="Title">SK∞</h3></a><div class="Description"><div class="Title"><strong>SK∞</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">4.5</span></p><p>El anime se centra en Reki, una estudiante de segundo año de secundaria a quien le encanta andar en patineta. Un día, el se ve atrapado en “S”, una peligrosa carrera de patinetas sin reglas que se realiza en mina abandonada. Langa, quien ha regresado a Japón tras vivir algún tiempo en Canadá y que nunca antes había patinado en patinet...</p><span class="Flwrs fa-user"><span>34467</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/sk">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/kousetsu-hyaku-monogatari"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/1484.jpg" alt="Kousetsu Hyaku Monogatari"></figure><span class="Type tv">Anime</span></div><h3 class="Title">Kousetsu Hyaku Monogatari</h3></a><div class="Description"><div class="Title"><strong>Kousetsu Hyaku Monogatari</strong></div><p><span class="Type tv">Anime</span><span class="Vts fa-star">4.6</span></p><p>La historia transcurre en la Era Bakumatsu, cuando los cimientos del gobierno de Tokugawa empezaron a tambalearse. En la edad donde la &quot;Oscuridad&quot; se respiraba y la presencia de monstruos era muy temida, un escritor so&ntilde;ador, Yamaoka Hyakusuke, viaja por todos los pa&iacute;ses con la esperanza de publicar en todo el mundo su ob...</p><span class="Flwrs fa-user"><span>366</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/kousetsu-hyaku-monogatari">VER ANIME</a></div></article></li><li><article class="Anime alt B"><a href="/anime/neon-genesis-evangelion-the-end-of-evangelion"><div class="Image fa-play-circle-o"><figure><img src="https://animeflv.net/uploads/animes/covers/1494.jpg" alt="Neon Genesis Evangelion: The End of Evangelion"></figure><span class="Type movie">Película</span></div><h3 class="Title">Neon Genesis Evangelion: The End of Evangelion</h3></a><div class="Description"><div class="Title"><strong>Neon Genesis Evangelion: The End of Evangelion</strong></div><p><span class="Type movie">Película</span><span class="Vts fa-star">4.6</span></p><p>El final original de Neon Genesis Evangelion mostrado en los dos &uacute;ltimos cap&iacute;tulos de la serie de TV fue criticado un&aacute;nimemente debido a la enorme cantidad de preguntas que dej&oacute; sin resolver. Sin m&aacute;s remedio, GAINAX decidi&oacute; rehacer el final lanzando la pel&iacute;cula The End of Evangelion (El Final de Evan...</p><span class="Flwrs fa-user"><span>3046</span>Seguidores</span><a class="Button Vrnmlk" href="/anime/neon-genesis-evangelion-the-end-of-evangelion">VER ANIME</a></div></article></li></ul><div class="NvCnAnm"><ul class="pagination"><li><a href="/browse?q=the&page=9" rel="prev">&laquo;</a></li><li><a href="/browse?q=the&page=1">1</a></li><li><span>&hellip;</span></li><li><a href="/browse?q=the&page=6">6</a></li><li><a href="/browse?q=the&page=7">7</a></li><li><a href="/browse?q=the&page=8">8</a></li><li><a href="/browse?q=the&page=9">9</a></li><li class="active"><a href="/browse?q=the&page=10">10</a></li><li><a href="/browse?q=the&page=11">11</a></li><li><a href="/browse?q=the&page=12">12</a></li><li><a href="/browse?q=the&page=13">13</a></li><li><a href="/browse?q=the&page=14">14</a></li><li><span>&hellip;</span></li><li><a href="/browse?q=the&page=23">23</a></li><li><a href="/browse?q=the&page=11" rel="next">&raquo;</a></li></ul></div></main></div></div><footer class="Footer"><div class="Container"><div class="BX Row BFluid Sp20 NMb"><div><p><span>Anime Online</span>- Ningún vídeo se encuentra alojado en nuestros servidores.</p><nav class="mnftxt"><a href="/condiciones-de-uso.html">Términos y Condiciones</a><a href="/politica-de-privacidad.html">Política de Privacidad</a><a href="/sobre-animeflv.html">Sobre AnimeFLV</a></nav></div><ul class="ListSocial BFixed"><li><a href="https://www.facebook.com/armyanime.jp/" target="_blank" class="fa-facebook"></a></li><li><a href="https://www.youtube.com/c/kudasai" target="_blank" class="fa-youtube"></a></li></ul></div></div></footer></div></body></html>
`