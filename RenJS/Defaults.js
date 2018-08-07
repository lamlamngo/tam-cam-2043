var defaults = {
    //name of the game
    name: "Tam Cam 2043",

    defaultTextStyle: {
        font: "bold 16pt FVF Femendo 08",
        fill: "#FFFFFF",
        align: "left"
    },
    settings: {
        textSpeed: 40,
        autoSpeed: 150,
        bgmv: 0.5,
        sfxv: 0.5,
        muted: false
    },

    limits: {
        textSpeed: [10,150],
        autoSpeed: [50,300],
        bgmv: [0,1],
        sfxv: [0,1]
    },

    positions : {
        LEFT: {x:globalConfig.w/6,y:globalConfig.h},
        OUTLEFT: {x:-(globalConfig.w/6),y:globalConfig.h},
        CENTER: {x:globalConfig.w/2,y:globalConfig.h/2 - 25},
        CENTERREAL: {x:globalConfig.w/2,y:globalConfig.h/2},
        RIGHT: {x:(globalConfig.w/6)*5,y:globalConfig.h},
        OUTRIGHT: {x:(globalConfig.w/6)*7,y:globalConfig.h},
        START: {x: 1000, y:globalConfig.h/2 - 25},
        END: {x: 300, y: 300}
    },

    //miliseconds for fade transitions
    fadetime : 750,
    skiptime: 50,
    //miliseconds to wait before continuing
    timeout : 5000,
    //avoid continuous clicking by waiting a few miliseconds before accepting new "clicks"
    clickCooldown: 200,

    transitions: {
        ch: "CUT",
        bg: "FADE",
        cgs: "FADE",
        bgm: "FADE"
    }

}
