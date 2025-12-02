import kaplay from "kaplay";
import "kaplay/global"; 

kaplay({
    width:600,
    height: 600,
});
onLoad(() => {
    go("home");
})
// // loading all sprites
// // loadSprite("sprite", "path/to/image")

// loadSprite ("bean", "sprites/bean.png")

// //adding sprites
// //const x = add([sprite("x"), pos(x, y)])

// const bean = add([sprite("bean"), pos(200,100)])
scene ("home", () => {
    const menu = add([
        rect (400, 100),
        area(),
        "button",
        "1"
    ]);
    onClick("button" & "1")
    const allButtons = get("button")
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
        get("player").move(50, 0)
    });

    onKeyDown("s", () => {
        get("player").move(0, 50)
    });

    onKeyDown("w", () => {
        get("player").move(0, -50)
    });

    onKeyDown("a", () =>{
        get("player").move(-50, 0)
    });
})



