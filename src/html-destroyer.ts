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
        this.flipAttributesCycle(imgElement, "src", "data-src");
    }

    private flipAttributesCycle(element: JQuery, attributeFrom: string, attributeTo: string) {
        element.attr(attributeTo, element.attr(attributeFrom));
        element.attr(attributeFrom, "");
        $(window).trigger("resize");
        setTimeout(() => {
            this.flipAttributesCycle(element, attributeTo, attributeFrom);
        },
            Math.random() * 500 + 50);
    }
}