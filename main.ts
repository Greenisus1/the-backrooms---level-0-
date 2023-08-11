controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (blockSettings.exists("upmodeoff")) {
        scene.setBackgroundImage(assets.image`togglemode`)
        Render.toggleViewMode()
        blockSettings.remove("upmodeoff")
    } else {
        scene.setBackgroundImage(assets.image`backgroundlevel0`)
        Render.toggleViewMode()
        blockSettings.writeNumber("upmodeoff", 1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    blockSettings.writeNumber("stopallsound", 1)
    music.bigCrash.play()
    game.setDialogFrame(assets.image`dialog`)
    game.setDialogCursor(assets.image`cursor`)
    game.setDialogTextColor(1)
    game.showLongText("You Died!", DialogLayout.Center)
    game.reset()
})
let textSprite2 = textsprite.create("Try the web")
blockSettings.remove("stopallsound")
blockSettings.writeNumber("upmodeoff", 1)
tiles.setCurrentTilemap(tilemap`level0`)
scene.setBackgroundImage(assets.image`backgroundlevel0`)
Render.getRenderSpriteInstance().setPosition(128, 32)
color.setColor(5, color.rgb(216, 197, 61))
color.setColor(13, color.rgb(191, 167, 41))
color.setColor(11, color.rgb(98, 95, 40))
let beast = sprites.create(assets.image`beast`, SpriteKind.Enemy)
beast.setPosition(416, 304)
Render.setSpriteAnimations(beast, Render.createAnimations(100, assets.animation`beastanimation`))
beast.follow(Render.getRenderSpriteInstance(), 45)
let textSprite = textsprite.create("Press \"Q\" to open the map", 0, 1)
textSprite.setFlag(SpriteFlag.RelativeToCamera, true)
textSprite.setPosition(77, 5)
pause(2000)
textSprite.destroy()
forever(function () {
    pause(22000)
    if (blockSettings.exists("stopallsound")) {
    	
    } else {
        music.knock.play()
    }
})
forever(function () {
    pause(12000)
    if (blockSettings.exists("stopallsound")) {
    	
    } else {
        music.footstep.play()
    }
})
