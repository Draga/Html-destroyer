export class Helpers {
    static removeNonFirstElements(elements: JQuery) {
        for (let i = 1; i < elements.length; i++) {
            elements.get(i).remove();
        }

        let firstElement = elements.first();

        return firstElement;
    }
}