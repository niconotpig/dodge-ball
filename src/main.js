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
       player.move(167, 0)
    });

    onKeyDown("s", () => {
        player.move(0, 167)
    });

    onKeyDown("w", () => {
        player.move(0, -167)
    });

    onKeyDown("a", () =>{
        player.move(-167, 0)
    });

    const enemy = add([
        rect (50,50),
        area(),
        pos (500, 500),
        "enemy"
    ])
    // const ball = add([
    //     rect (10,10),
    //     pos(enemy.pos),
    //     area(),
    //     move(player.pos.angle(enemy.pos), 800),
    //     offscreen({destroy:true}),
    //     "ball",
    // ])
    onMousePress (()=> {
        const ball = add([
        rect (10,10),
        pos(enemy.pos),
        area(),
        move(player.pos.angle(enemy.pos), 800),
        offscreen({destroy:true}),
        "ball",
        ])
    })
    onCollide ("player", "ball", () => {
        player.destroy()
        go("gameOver")
    })
})

scene ("tutorial", () =>{

})

scene ("gameOver", () => {
    const lost = add ([
        text("guh goh you lost")
    ])
})
