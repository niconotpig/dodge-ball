import kaplay from "kaplay";
import "kaplay/global"; 

kaplay({
    width:600,
    height:700,
});

loadSprite("bean", "public/sprites/bean.png");

add([sprite("bean"), pos(100,100)])