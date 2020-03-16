import { css } from "@giphy/js-brand";
import vanillaJSGif from "./gif";
import { VanillaJSGrid } from "./grid";
import { vanillaJSCarousel } from "./carousel";

const gridTarget = document.getElementById("grid")!;
const carouselTarget = document.getElementById("carousel")!;
const gifTarget = document.getElementById("gif");
const banner = document.querySelector("#banner");
if (banner) banner.className = css.title;
document.querySelectorAll("h4").forEach(c => (c.className = css.sectionHeader));

if (gifTarget) vanillaJSGif(gifTarget);
if (carouselTarget) vanillaJSCarousel(carouselTarget);
if (gridTarget) new VanillaJSGrid(gridTarget);
