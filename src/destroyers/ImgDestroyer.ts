export class ImgDestroyer {
    public destroyImg(imgElement: JQuery) {
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