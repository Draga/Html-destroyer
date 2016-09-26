import { PDestroyer } from "./destroyers/PDestroyer";
import { HDestroyer } from "./destroyers/HDestroyer";
import { ImgDestroyer } from "./destroyers/ImgDestroyer";
import { LasagneWordProvider} from "./LasagneWordProvider";
//import { ListTextDestroyer } from "./destroyers/ListTextDestroyer";

export class HtmlDestroyer {
    wordProvider : IWordProvider = new LasagneWordProvider();
    hDestroyer = new HDestroyer(this.wordProvider);
    imgDestroyer = new ImgDestroyer();
    pDestroyer = new PDestroyer();
//    listTextDestroyer = new ListTextDestroyer();
}