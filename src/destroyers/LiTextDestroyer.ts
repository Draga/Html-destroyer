export class LiTextDestroyer {
    constructor(private wordGenerator: IWordProvider) { }

    public destroyLiText(liElement: JQuery) {

        let linkChild = liElement.children("a").first();
        let elementWithText = linkChild ? linkChild : liElement;



        const currentText = elementWithText.text();
        const textToAppend = this.wordGenerator.getWord();

        if (currentText.length + textToAppend.length + 1 >= 256) {
            elementWithText.text(textToAppend);
        } else {
            elementWithText.text(currentText + " " + textToAppend);
        }

        $(window).trigger("resize");

        setTimeout(() => {
            this.destroyLiText(liElement);
        },
            Math.random() * 100 + 50);
    }
}