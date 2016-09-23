import Generator = require("../WordGenerator");

export class HDestroyer {
    private wordGenerator = new Generator.WordGenerator();

    public destroyH(hElement: JQuery) {
        const currentText = hElement.text();
        const textToAppend = this.wordGenerator.getRandomWord();

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