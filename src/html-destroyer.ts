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

    destroyPParent(pParent: JQuery) {
        let childrenP = pParent.children("p");

        // Until list is exhausted group P elements together where they are
        // adjacent and share the class.
        while (childrenP.length) {
            let firstChildP = childrenP.first();
            let pSimilarToFirt = firstChildP.nextAll("p [class='" + firstChildP.attr("class") + "']");
            let similarP = firstChildP.add(pSimilarToFirt);

            this.destroyP(similarP);
            childrenP = childrenP.not(similarP);
        }
    }

    private destroyP(pElements: JQuery) {
        const maxPs = 3;

        if (pElements.length >= maxPs) {
            while (pElements.length > 1) {
                let pToRemove = pElements.get(1);
                pToRemove.remove();
                pElements = pElements.not(pToRemove);
            }
        } else {
            let firstP = pElements.first();
            let copy = firstP.clone();
            copy.insertAfter(firstP);
            pElements = pElements.add(copy);
        }

        $(window).trigger("resize");

        setTimeout(() => {
            this.destroyP(pElements);
        },
            Math.random() * 2000 + 1000);
    }
} 