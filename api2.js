URL = 'https://meowfacts.herokuapp.com/'
const catFactsElement = document.querySelector('#fact');
const btn = document.querySelector('#btn');
  
const getFact = async () => {
    let response = await fetch(URL);
    console.log(response)
    let data = await response.json();
    catFactsElement.innerHTML = data.data
}

btn.addEventListener('click', getFact); 

// function getFact() {
//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((data) => {
//         catFactsElement.innerHTML = data.data;
//     }).catch((error) => {
//         console.log('Error:', error);
//     });
// }