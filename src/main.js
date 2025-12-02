import kaplay from "kaplay";
import "kaplay/global"; 

kaplay({
    width:600,
    height: 600,
    background: [230, 158, 161],
});
onLoad(() => {
    go("home");
})
// loading all sprites
// loadSprite("sprite", "path/to/image")

loadSprite ("bean", "sprites/bean.png")

//adding sprites
//const x = add([sprite("x"), pos(x, y)])

const bean = add([sprite("bean"), pos(100,100)])

//home 
scene ("home", () => {
    const playButton = add([
        rect (300, 80),
        area(),
        pos(150, 100),
        "play",
    ]);
    const tutButton = add([
        rect (200,80),
        area(),
        pos(200,250),
        "tut",
    ])
    onClick("play", ()=> go("game"));
    onClick("tut", () => go("tutorial"))
});


scene ("game", () => {
    const player = add([
        rect(100,100),
        pos (100, 400),
        area(),
        anchor ("center"),
        "player"
    ]);

    onKeyDown("d", () => {  
       player.move(67, 0)
    });

    onKeyDown("s", () => {
        player.move(0, 67)
    });

    onKeyDown("w", () => {
        player.move(0, -67)
    });

    onKeyDown("a", () =>{
        player.move(-67, 0)
    });
})

scene ("tutorial", () =>{

})

