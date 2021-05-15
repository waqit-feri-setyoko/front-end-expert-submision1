//Load Content
const home = () => {
const data = require('../../DATA.json');

let post = '';

data.restaurants.forEach(restaurants =>{
    post += `
    <article class="post-item" tabindex="0">
        <div class="thumbnail">
            <img class="post-thumbnail" src="${restaurants.pictureId}" alt="restaurant">
            <span class="post-city"><p> ${restaurants.city}</p></span>
            <div class="container-rating" >
                <i title="rating" class="fa fa-star"></i>
                <span class="post-rating"> ${restaurants.rating}</span>
            </div>
        </div>
        <div class="post-item-content">
            <h3 class="post-tittle">${restaurants.name}</h3>
            <p class="post-description">${restaurants.description}</p>
        </div>
    </article>
    `;
});

document.getElementById('posts').innerHTML = post;
}

export default home;