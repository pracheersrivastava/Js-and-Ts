const URL = 'https://dog.ceo/api/breeds/list/all';
const dogBreedsElement = document.querySelector('#breed');
const getDogBreeds = document.querySelector('#btn');

 
const getBreeds = async () => {
    console.log('Fetching Data....');
    let promise = await fetch(URL);
    console.log(promise); //JSON Format
    let data = await promise.json();
    dogBreedsElement.innerHTML = Object.keys(data.message).join(', ');
    console.log(data.message);
};

getDogBreeds.addEventListener('click', getBreeds);