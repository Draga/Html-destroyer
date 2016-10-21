import {Helpers} from "../Helpers";

export class ListWidthDestroyer {
    destroyListWidth(list: JQuery) {
        list.children("li")
            .each((i, el) => this.appendLiAndRecurse($(el)));
        // Get all the leaf nodes.
        /*let leafLis = list.children("li")
            .filter((i, el) => { return $(el).children("li").empty(); });
        leafLis.each((i, el) => this.appendLiAndRecurse($(el)));*/
    }

    private appendLiAndRecurse(lis: JQuery) {
        let firstLi = lis.first();

        if (lis.length >= 3) {
            lis = Helpers.removeNonFirstElements(lis);
        } else {
            let copy = firstLi.clone();
            copy.insertAfter(firstLi);
            lis = lis.add(copy);
        }

        setTimeout(() => {
                this.appendLiAndRecurse(lis);
            },
            Math.random() * 600 + 300);
    }
}