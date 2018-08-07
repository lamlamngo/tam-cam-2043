var globalConfig = {
  w: 640,
  h: 360,
  mode: "AUTO",
  scaleMode: "USER_SCALE", //SHOW_ALL, EXACT_FIT
  splash: { //The "Loading" page for your game
    loadingScreen: "assets/gui/logo.png", //splash background
    loadingBar: {
      fullBar: "assets/gui/loading_bars.png",
      position: {x:0,y:0}
    }
  },
  fonts: "assets/gui/fonts.css",
  guiConfig: "story/GUI.yaml",
  storySetup: "story/Setup.yaml",
  //as many story text files as you want
  storyText: [
        "story/YourStory.yaml"
    ],
}
