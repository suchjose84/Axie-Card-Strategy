//Initial Page Load
const requestURL = 'json/axie_cards.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const axies = jsonObject['axies']

    //for loop to make cards
    for (let i = 0; i < axies.length; i++) {


      var card = document.createElement('picture');
      var img = document.createElement('img');


      img.setAttribute('src', axies[i].imageurl);
      img.setAttribute('data-src', axies[i].imageurl);
      img.setAttribute('alt', 'cardImage');
      card.classList.add('axie_card');
      // card.classList.add(axies[i].class);
      // card.classList.add(axies[i].part);
      // card.classList.add(axies[i].card_type);

      card.appendChild(img);

      document.querySelector('.card_box').appendChild(card);

    }

  });

//addEventListener when .inputContainer changes
var selectors = document.querySelector(".inputContainer");
selectors.addEventListener("change", (e) => {

  var x = document.querySelector(".bigcard_box");
  var selectedClass = document.getElementById('classList').value;
  var selectedPart = document.getElementById('partList').value;
  var selectedCardType = document.getElementById('cardTypeList').value;
  var selectedCost = document.getElementById('costList').value;
  var selectedSort = document.getElementById('sortList').value;
  while (x.firstChild) {
    x.removeChild(x.firstChild);
  }
  showSelectedCards(selectedClass, selectedPart, selectedCardType, selectedCost, selectedSort);


});


function showSelectedCards(a, b, c, d, e) {

  const requestURL = 'json/axie_cards.json';
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      // console.table(jsonObject);  // temporary checking for valid response and data parsing
      const axies = jsonObject['axies']

      const selectedAxies = [];
      const newAxies = [];
      const newerAxies = [];
      const superNewAxies = [];
      let axieClass = a;
      let axiePart = b;
      let cardType = c;
      let cost = d;
      let sort = e;

      for(let i = 0; i < axies.length; i++){
        if(axies[i].class == axieClass || axieClass == "All"){
          selectedAxies.push(axies[i]);
        }
      }

      for(let i = 0; i < selectedAxies.length; i++){
        if(selectedAxies[i].part == axiePart || axiePart == "All"){
          newAxies.push(selectedAxies[i]);
        }
      }
      for(let i = 0; i < newAxies.length; i++){
        if(newAxies[i].card_type == cardType || cardType == "All"){
          newerAxies.push(newAxies[i]);
        }else if(newAxies[i].card_type2 == cardType){
          newerAxies.push(newAxies[i]);
        }else if(newAxies[i].card_type3 == cardType){
          newerAxies.push(newAxies[i]);
        }
      }
      for(let i = 0; i < newerAxies.length; i++){
        if(newerAxies[i].energy == cost || cost == "All"){
          superNewAxies.push(newerAxies[i]);
        }
      }console.log(superNewAxies);

      if(sort == "highestDamage"){
        superNewAxies.sort((a, b) => b.damage - a.damage);
      }
      else if(sort == "lowestDamage"){
        superNewAxies.sort((a, b) => a.damage - b.damage);
      }
      else if(sort == "highestShield"){
        superNewAxies.sort((a, b) => b.shield - a.shield);
      }
      else if(sort == "lowestShield"){
        superNewAxies.sort((a, b) => a.shield - b.shield);
      }
      else if(sort == "heal"){
        superNewAxies.sort((a, b) => b.heal - a.heal);
      }
      

      //Add to the page the selected options
      var callBigBox = document.querySelector('.bigcard_box')
      var div = document.createElement('div');
      div.setAttribute('class', 'card_boxSelected');
      callBigBox.appendChild(div);

      for (let i = 0; i < superNewAxies.length; i++) {

        let card = document.createElement('picture');
        let img = document.createElement('img');
    
        img.setAttribute('src', superNewAxies[i].imageurl);
        img.setAttribute('alt', 'cardImage');
        card.classList.add('axie_card');

        card.appendChild(img);
        document.querySelector('.card_boxSelected').appendChild(card);
    }




      // var selectedAxies = [];
      // for (let i = 0; i < axies.length; i++) {
      //   if (axies[i].class == a && axies[i].part == b && axies[i].card_type == c) {
      //     selectedAxies.push(axies[i]);
      //   }
      // }
      // for (let i = 0; i < selectedAxies.length; i++) {
      //   let card = document.createElement('picture');
      //   let img = document.createElement('img');
    
      //   img.setAttribute('src', axies[i].imageurl);
      //   img.setAttribute('data-src', axies[i].imageurl);
      //   img.setAttribute('alt', 'cardImage');
      //   card.classList.add('axie_card');
    
      //   card.appendChild(img);
      //   document.querySelector('.card_box').appendChild(card);
    
      // }

      

    });



  

}