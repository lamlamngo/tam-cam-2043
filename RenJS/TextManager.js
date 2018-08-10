function TextManager(){

    this.show = function(text,title,colour, ch){
        var t = RenJS.logicManager.parseVars(text);
        console.log("IN HEREEEEEEEEEEEEEEEEEEEEEEeeeeeeeeeeeeee");
        if (ch != null) {
          ch.animations.stop('blink');
          ch.animations.play('talk', 3, true);
          console.log("CHECK HERE");
          console.log(ch.animations);
        }
        RenJS.gui.showText(t,title,colour,function(){
            console.log("Waiting for click");
            if (ch != null) {
                ch.animations.stop('talk');
                RenJS.notTalking = true;
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
        console.log("IN HEREEEEEEEEEEEEEEEEEEEEEE");
        var character = RenJS.chManager.characters[name];
        RenJS.notTalking = false;
        this.show(text,character.name,character.speechColour, character.looks["action"]);
    }
}
