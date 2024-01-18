

function fetchApiData() {
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => {
            products = data.map(item => ({
                id: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                // Add other relevant properties from the API data
            }));
            products.forEach(product => addApiCard(product));
        })
        .catch(error => console.error('Error fetching data:', error));
}



function addApiCard(product) {
    const template = document.getElementById("card-template").content.cloneNode(true);
    
    template.querySelector('.card-title').innerText = product.title;
    template.querySelector('.card-text').innerText = product.description;
    template.querySelector('.card-price').innerText = `Total: $ ${product.price}`;

    const addToCartButton = template.querySelector('.addToCart'); // Make sure this selector is correct
    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            addToCart(product.id);
        });
    }

    const cardList = document.getElementById('card-list');
    const firstCard = cardList.firstChild;

    if (firstCard) {
        cardList.insertBefore(template, firstCard);
    } else {
        cardList.appendChild(template);
    }
}



// Call the function to fetch and display the data
fetchApiData();
// addApiCard()


let products = [];


// function addApiCard(product) {
//     const template = document.getElementById("card-template").content.cloneNode(true);
//     template.querySelector('.card-title').innerText = product.title;
//     template.querySelector('.card-text').innerText = product.description;
//     template.querySelector('.card-price').innerText = `Total: $ ${product.price}`;
//     document.getElementById('card-list').appendChild(template);
// }