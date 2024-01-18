function fetchApiData() {
    fetch('https://api.escuelajs.co/api/v1/products')
        .then((response) => response.json())
        .then((posts) => {
            posts.forEach(post => {
                addCard(post);
            });
        })
        .catch((error) => {
            console.error('Error fetching data: ', error);
        });
}

function addCard(product) {
    const template = document.getElementById("card-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = product.title;
    template.querySelector('.card-text').innerText = product.description;
    template.querySelector('.card-price').innerText = `Total: $ ${product.price}`;
    document.getElementById('card-list').appendChild(template);
}

// Call the function to fetch and display the data
fetchApiData();

