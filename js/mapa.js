// Importa SpriteSheet  (1)
// Importa loadImage y loadJSON importatu (2)

window.onload = function () {

    let canvas = // consigue el lienzo (3)
    let context = // consigue context a través de canvas(4)

// crea el mapa ( 14x25 )
    let mapa = new Array(14);
    for (let i = 0; i < 14; i++) {
        mapa[i] = new Array(25);
    }

// inicializa mapa
    for (let i = 0; i < 14; i++) {
        for (let j = 0; j < 25; j++) {
            mapa[i][j] = 0;
        }
    }


    // el mapa que está aquí: https://gist.github.com/juananpe/d5630e241605b60705c012bdc575c263
    // copia (a mano) en el siguiente fichero js/mapa.json  
    // el fichero (tiles.png) que se encuentra aquí https://egela.ehu.eus/mod/resource/view.php?id=6147595 copialo en la carpeta js/  (js/tiles.png)
    
    let url = 'js/mapa.json'

    // utiliza loadImage y loadJSON para cargar al mismo tiempo js/tiles.png y js/mapa.json 
    Promise.all( /*    (5)     */ )
        .then(([sprites, r]) => {

                let spriteSheet = // Instancia la clase SpriteSheet 16x16   (6)
                // utiliza el método define() de la clase spriteSheet para cargar los gráficos sky ('s') y ground ('g') (7)
                
                r.backgrounds.forEach(elem => {
                    elem.ranges.forEach(range => {
                        for (let i = range[0]; i < range[2]; i++) {
                            for (let j = range[1]; j < range[3]; j++) {
                                mapa[i][j] = elem.tile.charAt(0)
                            }
                        }
                    })
                })

                // con la siguiente línea dibujaremos con un zoom de x2 , l dibujado en canvas 
                context.scale(2, 2) 

                // visualiza el mapa
                // recorre el mapa y basandonos en el valor de cada celda  ('s' edo 'g')
                // dibuja en canvas el elemento que le corresponde  (usa el método drawTile ofrecido por la clase SpriteSheet)  (8)



            }
        )

}
