import { WordGenerator } from "./word-generator";

export class HtmlDestroyer {
    wordGenerator: WordGenerator = new WordGenerator();
        
    destroyH (hElement:JQuery)
    {
        var currentText = hElement.text();
        var textToAppend = this.wordGenerator.getRandomWord();
        if (currentText.length + textToAppend.length + 1 >= 256)
        {
            hElement.text(textToAppend);
        }
        else
        {
            hElement.text(currentText + " " + textToAppend);
        }
    }

    destroyImg (imgElement:JQuery)
    {
        imgElement.attr("src", "");
    }
}