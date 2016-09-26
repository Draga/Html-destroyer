import Generator = require("../LasagnaWordProvider");

export class HDestroyer {
    constructor(private wordGenerator : IWordProvider){}

    public destroyH(hElement: JQuery) {
        const currentText = hElement.text();
        const textToAppend = this.wordGenerator.getWord();

        if (currentText.length + textToAppend.length + 1 >= 256) {
            hElement.text(textToAppend);
        } else {
            hElement.text(currentText + " " + textToAppend);
        }

        $(window).trigger("resize");

        setTimeout(() => {
            this.destroyH(hElement);
        },
            Math.random() * 100 + 50);
    }
}