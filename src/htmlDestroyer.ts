import { PDestroyer } from "./destroyers/PDestroyer";
import { HDestroyer } from "./destroyers/HDestroyer";
import { ImgDestroyer } from "./destroyers/ImgDestroyer";
import { LiTextDestroyer } from "./destroyers/LiTextDestroyer";
import { LasagneWordProvider} from "./LasagneWordProvider";

export class HtmlDestroyer {
    wordProvider: IWordProvider = new LasagneWordProvider();

    hDestroyer = new HDestroyer(this.wordProvider);
    imgDestroyer = new ImgDestroyer();
    pDestroyer = new PDestroyer();
    liTextDestroyer = new LiTextDestroyer(this.wordProvider);
}