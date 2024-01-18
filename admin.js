
// Add products to the page
products.forEach(product => addApiCard(product));
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

    // if (name === '' || description === '' || price === '') {
    //     alert('Please fill in all fields.');
    //     return;
    // }

    // Create a new product instance
    const newProduct = new Product(products.length + 1, name, parseFloat(price), description);
    // Add the new product card to the page
    addApiCard(newProduct);
    // Clear the input fields
    document.getElementById('productName').value = '';
    document.getElementById('productDescription').value = '';
    document.getElementById('productPrice').value = '';
});

// addApiCard();


// fetchApiData();
