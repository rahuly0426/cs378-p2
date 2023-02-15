// Get all the buttons
const plusButtons = document.querySelectorAll('.button3:nth-child(3)');
const minusButtons = document.querySelectorAll('.button3:nth-child(1)');
const orderButton = document.querySelector('.button1');
const clearButton = document.querySelector('.button2');

// Get the subtotal value element
const subtotalElement = document.querySelector('#valueTotal');

// Initialize the items
const items = [
  {
    name: 'mac & cheese',
    price: 5,
    valueElement: document.querySelectorAll('#value')[0],
  },
  {
    name: 'pasta',
    price: 8,
    valueElement: document.querySelectorAll('#value')[1],
  },
  {
    name: 'tacos',
    price: 8,
    valueElement: document.querySelectorAll('#value')[2],
  },
  {
    name: 'enchilada',
    price: 10,
    valueElement: document.querySelectorAll('#value')[3],
  },
];

// Initialize the total price
let totalPrice = 0;

// Increment the item value when the + button is clicked
plusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    items[index].valueElement.textContent = parseInt(items[index].valueElement.textContent) + 1;
    totalPrice += items[index].price;
    subtotalElement.textContent = `$${totalPrice}`;
  });
});

// Decrement the item value when the - button is clicked
minusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (parseInt(items[index].valueElement.textContent) > 0) {
      items[index].valueElement.textContent = parseInt(items[index].valueElement.textContent) - 1;
      totalPrice -= items[index].price;
      subtotalElement.textContent = `$${totalPrice}`;
    }
  });
});


// Calculate the total price when the "Order" button is clicked
orderButton.addEventListener('click', () => {
  if (totalPrice === 0) {
    alert("Your cart is empty.");
  } else {
    let orderSummary = '';
    items.forEach((item) => {
      const itemValue = parseInt(item.valueElement.textContent);
      if (itemValue > 0) {
        orderSummary += `${itemValue} ${item.name}\n`;
      }
    });
    alert(`Order Placed\nYour order:\n${orderSummary}\nTotal: $${totalPrice}`);
  }
});

// Clear all the selections when the "Clear All" button is clicked
clearButton.addEventListener('click', () => {
  items.forEach((item) => {
    item.valueElement.textContent = '0';
  });
  totalPrice = 0;
  subtotalElement.textContent = `$${totalPrice}`;
});
