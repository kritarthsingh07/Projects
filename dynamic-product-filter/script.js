const products = [
  { name: "Wireless Headphones", price: 129.99, category: "electronics" },
  { name: "Bluetooth Speaker", price: 89.99, category: "electronics" },
  { name: "Samsung S24 ultra", price: 559.99, category: "electronics" },
  { name: "Cotton T-Shirt", price: 24.99, category: "clothing" },
  { name: "Denim Jeans", price: 59.99, category: "clothing" },
  { name: "Denim Jacket", price: 129.99, category: "clothing" },
  { name: "Hooded Sweatshirt", price: 69.99, category: "clothing" },
  { name: "Casual Sneakers", price: 89.99, category: "clothing" },
  { name: "Formal Shirt", price: 44.99, category: "clothing" },
  { name: "Smart Watch", price: 199.99, category: "electronics" },
  { name: "Laptop Backpack", price: 49.99, category: "electronics" },
  { name: "USB-C Power Bank", price: 39.99, category: "electronics" },
  { name: "Wireless Mouse", price: 29.99, category: "electronics" },
  { name: "Mechanical Keyboard", price: 79.99, category: "electronics" }
];

const grid = document.getElementById("productGrid");
const filter = document.getElementById("categoryFilter");

function showProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h2>${p.name}</h2>
      <div class="price">$${p.price}</div>
      <span class="badge ${p.category}">${p.category}</span>
    `;

    grid.appendChild(card);
  });
}

filter.addEventListener("change", () => {
  if (filter.value === "all") {
    showProducts(products);
  } else {
    const filtered = products.filter(p => p.category === filter.value);
    showProducts(filtered);
  }
});

showProducts(products);
