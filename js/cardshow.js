
const requestURL = 'https://github.com/suchjose84/Axie-Card-Strategy/blob/master/axie_cards.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const axies = jsonObject['axies']
    
    
    //for loop here
    for (let i = 0; i < axies.length; i++) {
      
      let card = document.createElement('div');
      let img = document.createElement('img');

      img.setAttribute('src', axies[i].imageurl);
      img.setAttribute('data-src', axies[i].imageurl);
      img.setAttribute('alt', 'cardImage');
      
      card.appendChild(img);

      document.querySelector('.cardBox').appendChild(card);

    }
});