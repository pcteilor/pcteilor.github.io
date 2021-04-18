//const json = require('../../data/data.json'); 

const json = fetch('../../data/data.json')
                .then(response => response.json())
                .then(json => console.log(json));

let linkInsta = document.getElementsByClassName('insta'); //or grab it by tagname etc
//linkinsta.href = json['link-insta'];
linkInsta.setAttribute('href', json.linkInsta);


let getTitle = document.getElementsByClassName('banner-h1');
getTitle.innerHTML = json.title;


console.log(json.title);