import { renderCarousel } from "@giphy/js-components";
import { GiphyFetch } from "@giphy/js-fetch-api";

const gf = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");
const fetchGifs = (offset: number) => gf.trending({ offset, limit: 4 });

export const vanillaJSCarousel = (mountNode: HTMLElement) => {
  renderCarousel(
    {
      gifHeight: 200,
      user: {},
      fetchGifs,
      gutter: 6
    },
    mountNode
  );
};
