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

        $(window).trigger("resize");


        setTimeout(() => {
            this.destroyH(hElement);
        },
            Math.random() * 100 + 50);
    
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
     
    destroyP(pParent: JQuery) {
        const maxPs = 2;
        let childrenP = pParent.children("p");
        if (childrenP.length >= maxPs) {
            for (var i = 1; i < childrenP.length; i++) {
                childrenP[i].remove();
            }
        } else {
            let firstP = childrenP.first();
            firstP.clone().insertAfter(firstP);
        }

        $(window).trigger("resize");

        setTimeout(() => {
            this.destroyP(pParent);
        },
            Math.random() * 2000 + 1000);
    }
} 