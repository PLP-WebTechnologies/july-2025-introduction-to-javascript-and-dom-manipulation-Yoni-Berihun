// ---------------------------------------------
// ☕ Part 1: JavaScript Basics
// ---------------------------------------------

// Variables and greeting based on time
let customerName = "";
let currentHour = new Date().getHours();

// Conditional greeting based on time
let timeGreeting = "";
if (currentHour < 12) {
    timeGreeting = "Good Morning! Perfect time for a hot espresso ☕";
} else if (currentHour < 18) {
    timeGreeting = "Good Afternoon! How about a refreshing iced latte? 🧊";
} else {
    timeGreeting = "Good Evening! Maybe a cappuccino to relax 🌙";
}

// Personalized greeting when button clicked
document.getElementById("greetBtn").addEventListener("click", function () {
    customerName = document.getElementById("username").value;

    if (customerName.trim() === "") {
        document.getElementById("result").innerText = "⚠️ Please enter your name!";
    } else {
        document.getElementById("result").innerText = `${timeGreeting} ${customerName}, welcome to Coffee Lovers Hub!`;
    }
});

// ---------------------------------------------
// ❤️ Part 2: JavaScript Functions
// ---------------------------------------------

// Function 1: Calculate total coffee price with tax
function calculateCoffeeTotal(price, taxRate = 0.10) {
    return price + price * taxRate;
}

// Attach calculation to button
document.getElementById("calcPrice").addEventListener("click", function () {
    const price = parseFloat(document.getElementById("coffeePrice").value);
    const priceResult = document.getElementById("priceResult");

    if (isNaN(price) || price <= 0) {
        priceResult.innerText = "⚠️ Please enter a valid price!";
    } else {
        const total = calculateCoffeeTotal(price);
        priceResult.innerText = `Total Price (incl. tax): $${total.toFixed(2)}`;
    }
});

// Function 2: Toggle element visibility
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    element.style.display = element.style.display === "none" ? "block" : "none";
}

// ---------------------------------------------
// 🔁 Part 3: JavaScript Loops
// ---------------------------------------------

// Loop Example 1: Countdown to coffee break using for loop
document.getElementById("startCountdown").addEventListener("click", function () {
    let countdown = 5;
    let display = document.getElementById("countdownDisplay");
    display.innerText = "";

    for (let i = countdown; i >= 0; i--) {
        setTimeout(() => {
            display.innerText = i === 0 ? "☕ Coffee Time!" : `⏳ ${i} seconds to coffee break...`;
        }, (countdown - i) * 1000);
    }
});

// Loop Example 2: Show popular coffee types using forEach
const coffeeTypes = ["Espresso", "Latte", "Cappuccino", "Americano", "Mocha"];
document.getElementById("showCoffees").addEventListener("click", function () {
    const list = document.getElementById("coffeeList");
    list.innerHTML = ""; // Clear old list if button is clicked again

    coffeeTypes.forEach((coffee) => {
        const li = document.createElement("li");
        li.textContent = coffee;
        list.appendChild(li);
    });
});

// ---------------------------------------------
// 🌐 Part 4: DOM Manipulation
// ---------------------------------------------

// Example 1: Change greeting text dynamically (done above)

// Example 2: Toggle greeting visibility on double-click
document.getElementById("result").addEventListener("dblclick", function () {
    toggleVisibility("result");
});

// Example 3: Change background color when hovering over body
document.body.addEventListener("mouseenter", function () {
    document.body.style.backgroundColor = "#fffaf3";
});
document.body.addEventListener("mouseleave", function () {
    document.body.style.backgroundColor = "#fdf6f0";
});
