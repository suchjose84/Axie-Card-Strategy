const requestURL = 'json/axie_cards.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const axies = jsonObject['axies']


    //loop all cards from json file
    for (let i = 0; i < axies.length; i++) {

      let card = document.createElement('picture');
      let img = document.createElement('img');

      img.setAttribute('src', axies[i].imageurl);
      img.setAttribute('data-src', axies[i].imageurl);
      img.setAttribute('alt', 'cardImage');

      card.appendChild(img);

      document.querySelector('.card_box').appendChild(card);

    }

    const selectElement = document.querySelector('.inputContainer');

    const getClass = document.getElementById("classList").value;
    const getPart = document.getElementById("partList").value;
    const getCardType = document.getElementById("cardTypeList").value;


    selectElement.addEventListener('change', e => {


      showCards(getClass, getPart, getCardType);



      console.log(getClass);
      
    })


    function showCards(getClass, getPart, getCardType) {
      let selectedAxies = [];
      let axieClass = getCardType

      for (let i = 0; i < axies.length; i++) {
        if (axies[i].class == getClass && axies[i].part == getPart) {
          selectedAxies.push(axies[i]);
        }

      };

      for (let i = 0; i < selectedAxies.length; i++) {
        let card = document.createElement('picture');
        let img = document.createElement('img');

        img.setAttribute('src', selectedAxies[i].imageurl);
        img.setAttribute('data-src', selectedAxies[i].imageurl);
        img.setAttribute('alt', 'cardImage');

        card.appendChild(img);

        document.querySelector('.card_box').appendChild(card)
      }
      console.log(selectedAxies);

    }

    // const getClass = document.getElementById("classList").value;
    // const getPart = document.getElementById("partList").value;
    // const getCardType = document.getElementById("cardTypeList").value;


    // function showCards(getClass){
    //   let selectedAxies = [];
    // for (let i=0; i < axies.length; i++){
    //   if(axies[i].class == getClass && axies[i].part == "horn" && axies[i].card_type == "attack"){
    //     selectedAxies.push(axies[i]);
    //   }

    // };

    // for(let i=0; i < selectedAxies.length; i++){
    //   let card = document.createElement('picture');
    //   let img = document.createElement('img');

    //   img.setAttribute('src', selectedAxies[i].imageurl);
    //   img.setAttribute('data-src', selectedAxies[i].imageurl);
    //   img.setAttribute('alt', 'cardImage');

    //   card.appendChild(img);

    //   document.querySelector('.card_box').appendChild(card)
    // }
    // console.log(selectedAxies);

    // }

    // showCards();



  });