const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const singleMovieID = params.get("id");
const singleMovieID_API_URL = `https://lindasandaker.me/wp-json/wc/store/products/${singleMovieID}`;
const shortfilmItemsContainer = document.querySelector('.shortfilm-items__container');

async function getSingleMovieId() {
  try {
    const response = await fetch(singleMovieID_API_URL);
    const singleMoviePage = await response.json();
    document.title = `${singleMoviePage.name}`;
    shortfilmItemsContainer.innerHTML = `
    <h1>${singleMoviePage.name}</h1>
      <article class="shortfilm-play__card flex">
        <div class="shortfilm-video__container">
          <span class='shortfilm-rating'>
            <i class="iconify" data-icon="bx:bxs-star">rating</i>8.9
          </span>
          <img class="shortfilm-video-img" src='${singleMoviePage.images[0].thumbnail}' alt="${singleMoviePage.images.alt}" width='725' height='495'/>
          <span class="play-settings__container flex-row-align-center">
          <i class="iconify" data-icon="fluent:play-32-filled">play film</i>
          <i class="iconify" data-icon="majesticons:sound-up">sound</i>
          <i class="iconify" data-icon="akar-icons:normal-screen">screen-normal</i>
          <i class="iconify" data-icon="ic:baseline-subtitles">subtitles</i>
          <i class="iconify" data-icon="ci:settings-filled">settings</i>
        </span>
        </div>
        <div class="shortfilm-actions__container flex-row-align-center">
          <a href='checkout.html' class="link-underline">
            <i class="iconify" data-icon="zmdi:ticket-star">rent</i>Rent for ${singleMoviePage.prices.price} kr
          </a>
          <span>
            <i class="iconify" data-icon="fluent:star-edit-24-regular">review</i>
            <i class="iconify" data-icon="bx:bx-heart">like</i>
            <i class="iconify" data-icon="fluent:add-12-filled">save for later</i>
            <i class="iconify" data-icon="fluent:send-24-filled">share</i>
          </span>
        </div>
        <div class="shortfilm-text__container">
          <h2>${singleMoviePage.short_description}</h2>
          <div class='subtitle' role='doc-subtitle'>${singleMoviePage.categories[0].name}</div>
          <p class='about-shortfilm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            repellat a deserunt itaque hic consectetur debitis repudiandae
            eveniet asperiores. Necessitatibus, reiciendis impedit.
          </p>
        </div>
      </article>
    `
  } catch(error) {
    shortfilmItemsContainer.innerHTML = `Sorry for the inconvenience, but there seems to be an error here..:(`;
  }
}
getSingleMovieId().then();