chrome.runtime.onMessage.addListener((req) => {
  hideLowReviewedItems(req.minRatings);
});

function hideLowReviewedItems(minRatings) {
  const products = getProducts();

  products.forEach((product) => {
    const ratingSpan = product.querySelector('span[aria-label$="out of 5 stars"] + span[aria-label]');
    if (!ratingSpan) {
      return;
    }
    const ratingCount = Number(ratingSpan.getAttribute('aria-label').replaceAll(',', ''));

    if (ratingCount < minRatings) {
      product.style.display = 'none';
    } else {
      product.style.visibility = 'visible';
    }
  });
}

function getProducts() {
  const mainList = document.querySelectorAll('div[data-component-type="s-search-result"]');
  const mainProducts = Array.from(mainList);

  const carouselList = document.querySelectorAll(
    'span[data-component-type="s-searchgrid-carousel"] li.a-carousel-card'
  );
  const carouselProducts = Array.from(carouselList);

  return [...mainProducts, ...carouselProducts];
}
