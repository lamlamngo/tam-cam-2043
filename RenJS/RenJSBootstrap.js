
var game = new Phaser.Game(globalConfig.w, globalConfig.h, Phaser[globalConfig.mode], "", false, false, null);
var bootstrap = {

  init: function() {
    if (!(globalConfig.scaleMode == "EXACT_FIT")){
      game.scale.pageAlignHorizontally = true;
      game.scale.pageAlignVertically = true;
    }
    game.scale.scaleMode = Phaser.ScaleManager[globalConfig.scaleMode];
    game.scale.setUserScale(2,2,0,0);
    //
    game.renderer.renderSession.roundPixels = true;
    Phaser.Canvas.setImageRenderingCrisp(game.canvas);
    game.scale.refresh();



//     // scale the game 4x
// game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
// game.scale.setUserScale(4, 4);
//
// // enable crisp rendering
// game.renderer.renderSession.roundPixels = true;
// Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)

    game.forceSingleUpdate = true;
    game.time.desiredFps = 144;
  },

  preload: function () {
    game.load.image('splash',  globalConfig.splash.loadingScreen);
    if (globalConfig.splash.loadingBar) {
      game.load.image('loading',  globalConfig.splash.loadingBar.fullBar);
    }
    game.load.script('preload',  'RenJS/Preload.js');
  },

  create: function () {
    game.state.add('preload', preload);
    game.state.start('preload');
  }
};

game.state.add('bootstrap', bootstrap);
game.state.start('bootstrap');
