const moviesURL_API = 'https://lindasandaker.me/wp-json/wc/store/products';
const moviesContainer = document.querySelector('.shortfilms-carousel__container');

async function getMovies() {
  try {
    const response = await fetch(moviesURL_API);
    const moviesSquareeyes = await response.json();
    for (let i = 0; i < moviesSquareeyes.length; i++) {
      let imageThumbnail = moviesSquareeyes[i].images[0].thumbnail;
      let imageAlt = moviesSquareeyes[i].images[0].alt;
        moviesContainer.innerHTML += `
              <article class="shortfilm__card">
                <a href="shortfilm-details.html?id=${moviesSquareeyes[i].id}">
                  <h4>${moviesSquareeyes[i].name}</h4>
                  <p>${moviesSquareeyes[i].short_description}</p>
                  <small>${moviesSquareeyes[i].categories[3].name} ${moviesSquareeyes[i].categories[0].name} ${moviesSquareeyes[i].categories[4].name}</small>
                  <div class="shortfilm-img">
                    <span class='shortfilm-rating'>
                      <i class="iconify" data-icon="bx:bxs-star">rating</i>8.9
                    </span>
                    <img src="${imageThumbnail}" alt="${imageAlt}" />
                  </div>
                  <div class="shortfilm-icons flex-row-align-center">
                    <span class="link-underline">
                      <i class="iconify" data-icon="zmdi:ticket-star">rent</i>
                    </span>
                    <span>
                      <i class="iconify" data-icon="bx:bx-heart">like</i>
                      <i class="iconify" data-icon="fluent:add-12-filled">save for later</i>
                    </span>
                   </div>
                </a>
              </article>
           `
    }
  } catch(error) {
    moviesContainer.innerHTML = `Sorry for the inconvenience, but there seems to be an error here..:(`;
  }
}
getMovies().then();