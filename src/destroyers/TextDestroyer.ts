export class TextDestroyer {
    constructor(private wordGenerator : IWordProvider){}

    public destroyText(element: JQuery) {
        element.each( (i, el) => {
            this.walk((node: Node) => {
                    this.destroyTextAndRecurse(node);
                },
                el
            );
        });
    }

    private walk(func: Function, node: Node) {
        let child: Node;
        let next: Node;

        switch (node.nodeType) {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while (child) {
                    next = child.nextSibling;
                    this.walk(func, child);
                    child = next;
                }
                break;
            case 3: // Text node
                // handleText(node);
                func(node);
                break;
        }
    }

    private destroyTextAndRecurse(node: Node) {
        const currentText = node.nodeValue;
        const textToAppend = this.wordGenerator.getWord();

        if (currentText.length + textToAppend.length + 1 >= 256) {
            node.nodeValue = textToAppend;
        } else {
            node.nodeValue = currentText + " " + textToAppend;
        }

        $(window).trigger("resize");

        setTimeout(() => {
            this.destroyTextAndRecurse(node);
        },
            Math.random() * 100 + 50);
    }
}