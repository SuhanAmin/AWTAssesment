"use strict";
const products = [
    {
        productId: 101,
        productName: "Laptop",
        price: 55000,
        quantity: 5,
        category: "Electronics",
        inStock: true
    },
    {
        productId: 102,
        productName: "Mouse",
        price: 800,
        quantity: 10,
        category: "Accessories",
        inStock: true
    },
    {
        productId: 103,
        productName: "Keyboard",
        price: 1500,
        quantity: 0,
        category: "Accessories",
        inStock: false
    }
];
function calculateInventoryValue(product) {
    return product.price * product.quantity;
}
function addProduct(product) {
    products.push(product);
}
function displayProducts() {
    const productList = document.getElementById("productList");
    if (!productList) {
        return;
    }
    productList.innerHTML = "";
    products.forEach((product) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.productId}</td>
            <td>${product.productName}</td>
            <td>₹${product.price}</td>
            <td>${product.quantity}</td>
            <td>${product.category}</td>
            <td>${product.inStock ? "Yes" : "No"}</td>
            <td>₹${calculateInventoryValue(product)}</td>
        `;
        productList.appendChild(row);
    });
}
displayProducts();
