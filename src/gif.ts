import { Gif, renderGif } from "@giphy/js-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { css } from "emotion";

const gf = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

const vanillaJSGif = async (targetEl: HTMLElement) => {
  // target all gifs by Gif.className
  targetEl.className = css`
    .${Gif.className} {
      display: inline-block;
    }
  `;
  const { data: gif1 } = await gf.gif("fpXxIjftmkk9y");
  // no className prop will merge props with an existing Gif using the default className
  renderGif({ gif: gif1, width: 300 }, targetEl);
  const { data: gif2 } = await gf.gif("1DqOFqULOqe5y");
  // create new gifs in a targetEl by providing a unique className prop
  renderGif(
    { gif: gif2, width: 300, className: "gif-1DqOFqULOqe5y" },
    targetEl
  );
};

export default vanillaJSGif;
