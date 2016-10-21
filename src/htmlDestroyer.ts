import { PDestroyer } from "./destroyers/PDestroyer";
import { TextDestroyer } from "./destroyers/TextDestroyer";
import { ImgDestroyer } from "./destroyers/ImgDestroyer";
import { ListWidthDestroyer } from "./destroyers/ListWidthDestroyer";
import { LasagneWordProvider} from "./LasagneWordProvider";

export class HtmlDestroyer {
    wordProvider: IWordProvider = new LasagneWordProvider();

    textDestroyer = new TextDestroyer(this.wordProvider);
    imgDestroyer = new ImgDestroyer();
    pDestroyer = new PDestroyer();
    listWidthDestroyer = new ListWidthDestroyer();
}