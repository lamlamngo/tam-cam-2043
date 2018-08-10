function TextManager(){

    this.show = function(text,title,colour, ch){
        var t = RenJS.logicManager.parseVars(text);
        if (ch != null) {
          ch.animations.stop('blink');
          ch.animations.play('talk', 3, true);
        }
        RenJS.gui.showText(t,title,colour,function(){
            console.log("Waiting for click");
            if (ch != null) {
                ch.animations.stop('talk');
                ch.frame = 0;
            }
            RenJS.waitForClick(RenJS.textManager.hide);
        });
    };

    this.hide = function(){
        RenJS.gui.hideText();
        RenJS.resolve();
    }

    this.say = function(name,text){
        var character = RenJS.chManager.characters[name];
        this.show(text,character.name,character.speechColour, character.looks["talk"]);
    }
}
