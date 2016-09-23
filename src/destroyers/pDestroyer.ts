export class PDestroyer {
    public destroyPParent(pParent: JQuery) {
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