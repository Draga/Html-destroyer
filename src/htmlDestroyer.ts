import { WordGenerator } from "./WordGenerator";
import { PDestroyer } from "./destroyers/PDestroyer";
import { HDestroyer } from "./destroyers/HDestroyer";
import { ImgDestroyer } from "./destroyers/ImgDestroyer";

export class HtmlDestroyer {
    pDestroyer = new PDestroyer();
    hDestroyer = new HDestroyer();
    imgDestroyer = new ImgDestroyer();
}