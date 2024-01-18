
class Product {
    #stockCount;
    constructor (id, title, price, description) {
        this.id = id;
        this._title = title;
        this._price = price;
        this._description = description;
        this.#stockCount = 0;
    }
    static compare(p1, p2) {
        if (p1.price > p2.price) {
            return `${p1.title} is more expensive than ${p2.title}`;
        } else {
            return `${p1.title} isnt more expensive ${p2.title}`;
        }
    }
    get stockCount () {
        return this.#stockCount;
    }
    set newStockCount (num) {
        this.#stockCount += num;
        return this.#stockCount;
    }
    get title () {
        return this._title;
    };
    set title(newtitle) {
        if (newtitle === '' || typeof newtitle === 'number') {
            throw new Error('Error Try Again');
        } else {
            this._title = newtitle;
        }
    }
    get price () {
        return this._price;
    };
    set price(newPrice) {
        if (typeof newPrice === '' || newPrice <= 0) {
            throw new Error('Error Try Again');
        } else {
            this._price = newPrice;
        }
    }
    get description () {
        return this._description;
    };
    set description(newdescription) {
        if (newdescription === '' || typeof newdescription === 'number') {
            throw new Error('Error Try Again');
        } else {
            this._description = newdescription;
        }
    }
}
let product1 = new Product(1, "Le Club Armchair", 13265.00, "Made in Italy");
let products = [product1];


    function addCard(product) {
        const template = document.getElementById("card-template").content.cloneNode(true);
        
        template.querySelector('.card-title').innerText = product.title;
        template.querySelector('.card-text').innerText = product.description;
        template.querySelector('.card-price').innerText = `Total: $ ${product.price}`;
        document.querySelector('#card-list').appendChild(template);
    };
// Add products to the page
products.forEach(product => addCard(product));
document.getElementById('addBtn').addEventListener('click', function() {
    // Get values from the input fields
    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;
    const price = document.getElementById('productPrice').value;
    // Validate inputs (basic validation)
    if (!name || !description || !price) {
        alert('Please fill in all fields.');
        return;
    }
    // Create a new product instance
    const newProduct = new Product(products.length + 1, name, parseFloat(price), description);
    // Add the new product card to the page
    addCard(newProduct);
    // Clear the input fields
    document.getElementById('productName').value = '';
    document.getElementById('productDescription').value = '';
    document.getElementById('productPrice').value = '';
});
