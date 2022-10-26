// SpriteSheet importatu  (1)
// loadImage eta loadJSON importatu (2)

window.onload = function () {

    let canvas = // oihala lortu (3)
    let context = // context lortu canvas-etik (4)

// mapa sortu ( 14x25 )
    let mapa = new Array(14);
    for (let i = 0; i < 14; i++) {
        mapa[i] = new Array(25);
    }

// mapa hasieratu
    for (let i = 0; i < 14; i++) {
        for (let j = 0; j < 25; j++) {
            mapa[i][j] = 0;
        }
    }


    // hemen dagoen mapa: https://gist.github.com/juananpe/d5630e241605b60705c012bdc575c263
    // js/mapa.json fitxategian kopiatu (eskuz)
    
    // hemen dagoen https://egela.ehu.eus/mod/resource/view.php?id=6147462 (tiles.png) fitxategia js/ karpetan kopiatu (js/tiles.png)
    
    let url = 'js/mapa.json'

    // loadImage eta loadJSON erabili js/tiles.png eta js/mapa.json aldi berean kargatzeko
    Promise.all( /*    (5)     */ )
        .then(([sprites, r]) => {

                let spriteSheet = // SpriteSheet klasea instantziatu 16x16   (6)
                // spriteSheet-en dagoen define metodoa erabili sky ('s') eta ground ('g') grafikoak kargatzeko  (7)
                
                r.backgrounds.forEach(elem => {
                    elem.ranges.forEach(range => {
                        for (let i = range[0]; i < range[2]; i++) {
                            for (let j = range[1]; j < range[3]; j++) {
                                mapa[i][j] = elem.tile.charAt(0)
                            }
                        }
                    })
                })

                // lerro honekin canvas-en margotzen duguna x2 zoom batekin margotuko da 
                context.scale(2, 2) 

                // mapa bistaratu
                // maparen gelaxkak zeharkatu eta gelaxka bakoitzean dagoen balietan oinarriturik ('s' edo 'g')
                // canvas-ean margotu dagokion osagaia (SpriteSheet-ek eskaintzen duen drawTile erabili)  (8)



            }
        )

}
