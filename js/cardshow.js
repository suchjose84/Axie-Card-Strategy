
const requestURL = 'json/axie_cards.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const axies = jsonObject['axies']
    
    
    //for loop here
    for (let i = 0; i < axies.length; i++) {
      
      let card = document.createElement('picture');
      let img = document.createElement('img');

      img.setAttribute('src', axies[i].imageurl);
      img.setAttribute('data-src', axies[i].imageurl);
      img.setAttribute('alt', 'cardImage');
      
      card.appendChild(img);

      document.querySelector('.card_box').appendChild(card);

    }
});