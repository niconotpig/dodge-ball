import kaplay from "kaplay";
import "kaplay/global";

kaplay({
    width: 600,
    height: 600,
    background: [230, 158, 161],
});
onLoad(() => {
    go("home");
})
// loading all sprites
// loadSprite("sprite", "path/to/image")

loadSprite("bean", "sprites/bean.png")

//adding sprites
//const x = add([sprite("x"), pos(x, y)])

const bean = add([sprite("bean"), pos(100, 100)])

//home 
scene("home", () => {
    const playButton = add([
        rect(300, 80),
        area(),
        pos(150, 100),
        "play",
    ]);
    const tutButton = add([
        rect(200, 80),
        area(),
        pos(200, 250),
        "tut",
    ]);
    onClick("play", () => go("level1"));
    onClick("tut", () => go("tutorial"))
});


scene("level1", () => {
    add([
        text("Level 1")
    ])
    const player = add([
        rect(100, 100),
        pos(100, 400),
        area(),
        anchor("center"),
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

    onKeyDown("a", () => {
        player.move(-167, 0)
    });
    const enemy = add([
        rect(50, 50),
        area(),
        pos(500, 500),
        "enemy"
    ]);

    async function level1Func() {
        debug.log("i ran")
        await wait(0.5)
        const playerSpeech = player.add([
            text("you'll never defeat me!!", {
                size: 15
            }),
            pos(2, 2),
            color(BLACK),
            "playerSpeech"
        ]);
        await wait(2)
        playerSpeech.text = "uh oh don't shoot me pls"
        wait(1, () => {
            playerSpeech.destroy()
        })
        await wait(2)
        loop(2, () => {
            const ball = add([
                rect(10, 10),
                pos(enemy.pos),
                area(),
                move(player.pos.angle(enemy.pos), 300),
                offscreen({ destroy: true }),
                "ball",
            ]);
        }, 5);
        await wait(11);
        go("level2")
    }
    level1Func();
    onCollide("player", "ball", () => {
        player.destroy()
        go("gameOver")
    });

});
scene("level2", () => {
    add([
        text("Level 2")
    ])
})
scene("tutorial", () => {
    const playerTut = add([
        rect(100, 100),
        area(),
        pos(300, 100),
        "playerTut",
        "tut",
    ]);
    const playerTxt = add([
        text("this is the player"),
        pos(200, 70),
        "tut",
    ]);
    const moveTxt = add([
        text("press wasd to move heh"),
        pos(100, 400),
        "tut",
    ]);
    onKeyDown("d", () => {
        playerTut.move(167, 0)
    });

    onKeyDown("s", () => {
        playerTut.move(0, 167)
    });

    onKeyDown("w", () => {
        playerTut.move(0, -167)
    });

    onKeyDown("a", () => {
        playerTut.move(-167, 0)
    });
    wait(3, () => {
        const continueTxt = add([
            text("click to continue"),
            scale(0.5),
            pos(400, 500),
            area(),
            "continueTxt",
            "tut",
        ]);
    });
    onClick("continueTxt", () => {
        destroyAll("tut")
        const newText = add([
            text("This game is very simple so far, so that is all you need!!", {
                size: 30,
                width: 500,
            }),
            pos(50, 100),
        ]);
    });
});

scene("gameOver", () => {
    const lost = add([
        text("guh goh you lost"),
        pos(200, 100)
    ]);
});
