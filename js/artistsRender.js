/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
const artistContainer = document.querySelector('.artists-container');
const cardsInfo = [
  {
    imgUrl: '../assets/img/banbBack.jpeg',
    title: 'The Blusy Tusy',
    genres: 'Blues/Jazz/Soul',
    text: 'King of the Delta Blues Singers, The Complete Recordings, King of the Delta Blues.',
  },
  {
    imgUrl: '../assets/img/banbBack.jpeg',
    title: 'The Blusy Tusy',
    genres: 'Blues/Jazz/Soul',
    text: 'King of the Delta Blues Singers, The Complete Recordings, King of the Delta Blues.',
  },
  {
    imgUrl: '../assets/img/banbBack.jpeg',
    title: 'The Blusy Tusy',
    genres: 'Blues/Jazz/Soul',
    text: 'King of the Delta Blues Singers, The Complete Recordings, King of the Delta Blues.',
  },
  {
    imgUrl: '../assets/img/banbBack.jpeg',
    title: 'The Blusy Tusy',
    genres: 'Blues/Jazz/Soul',
    text: 'King of the Delta Blues Singers, The Complete Recordings, King of the Delta Blues.',
  },
  {
    imgUrl: '../assets/img/banbBack.jpeg',
    title: 'The Blusy Tusy',
    genres: 'Blues/Jazz/Soul',
    text: 'King of the Delta Blues Singers, The Complete Recordings, King of the Delta Blues.',
  },
  {
    imgUrl: '../assets/img/banbBack.jpeg',
    title: 'The Blusy Tusy',
    genres: 'Blues/Jazz/Soul',
    text: 'King of the Delta Blues Singers, The Complete Recordings, King of the Delta Blues.',
  },
];

function artistGenerator() {
  for (let i = 0; i < cardsInfo.length; i++) {
    const card = document.createElement('ul');
    card.classList.add('card');
    const imageContainer = document.createElement('li');
    imageContainer.classList.add('card-image-container');
    card.appendChild(imageContainer);
    const cardImg = document.createElement('div');
    cardImg.classList.add('card-img');
    cardImg.style.backgoundImage = cardsInfo[i].imgUrl;
    imageContainer.appendChild(cardImg);
    const cardText = document.createElement('li');
    cardText.classList.add('card-text');
    card.appendChild(cardText);
    const topText = document.createElement('div');
    topText.classList.add('top-text');
    cardText.appendChild(topText);
    const title = document.createElement('h4');
    title.classList.add('top-title');
    title.textContent = cardsInfo[i].title;
    topText.appendChild(title);
    const topGenres = document.createElement('span');
    topGenres.classList.add('top-genres');
    topGenres.textContent = cardsInfo[i].genres;
    const text = document.createElement('p');
    text.textContent = cardsInfo[i].text;
    cardText.appendChild(text);
    topText.appendChild(topGenres);
    artistContainer.appendChild(card);
  }
}

export { artistGenerator, cardsInfo };