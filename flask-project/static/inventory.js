function updateTable(selectedPlace) {
    console.log('Selected Place:', selectedPlace);

    var tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; 

    if (selectedPlace === 'warehouse') {
      
addTableRow(tableBody, '1', 'Vans', 'Skate Shoe', 'Streetwear', '700', '2024-01-07', '10:45 AM');
addTableRow(tableBody, '2', 'Adidas', 'High Top Sneaker', 'Casual', '750', '2024-01-08', '5:50 PM');
addTableRow(tableBody, '3', 'Asics', 'Tennis Shoe', 'Sporty', '950', '2024-01-09', '12:45 PM');
addTableRow(tableBody, '4', 'Nike', 'Running Sneaker', 'Athletic', '900', '2024-01-10', '3:15 PM');
addTableRow(tableBody, '5', 'Puma', 'Basketball Shoe', 'Sporty', '800', '2024-01-11', '8:30 AM');
addTableRow(tableBody, '6', 'Converse', 'Low Top Sneaker', 'Casual', '600', '2024-01-12', '2:20 PM');
addTableRow(tableBody, '7', 'Reebok', 'Cross Training Shoe', 'Fitness', '850', '2024-01-13', '6:40 PM');
addTableRow(tableBody, '8', 'New Balance', 'Walking Shoe', 'Comfort', '700', '2024-01-14', '11:10 AM');
addTableRow(tableBody, '9', 'Under Armour', 'Football Cleat', 'Sports', '1100', '2024-01-15', '4:55 PM');
addTableRow(tableBody, '10', 'Brooks', 'Trail Running Shoe', 'Outdoor', '1000', '2024-01-16', '9:25 AM');

        
    } else if (selectedPlace === 'shop') {
       
        
        addTableRow(tableBody, '1', 'Nike', 'Running Shoe', 'Sports', '1200', '2024-01-01', '9:30 AM');
        addTableRow(tableBody, '2', 'Adidas', 'Sneaker', 'Casual', '800', '2024-01-02', '2:45 PM');
        addTableRow(tableBody, '3', 'Puma', 'Basketball Shoe', 'Athletic', '1000', '2024-01-03', '11:15 AM');
        addTableRow(tableBody, '4', 'Reebok', 'Walking Shoe', 'Comfort', '900', '2024-01-04', '4:20 PM');
        addTableRow(tableBody, '5', 'Under Armour', 'Cross Trainer', 'Fitness', '1300', '2024-01-05', '1:00 PM');
        addTableRow(tableBody, '6', 'New Balance', 'Trail Running Shoe', 'Outdoor', '1100', '2024-01-06', '3:30 PM');
        addTableRow(tableBody, '7', 'Vans', 'Skate Shoe', 'Streetwear', '700', '2024-01-07', '10:45 AM');
        addTableRow(tableBody, '8', 'Converse', 'High Top Sneaker', 'Casual', '750', '2024-01-08', '5:50 PM');
        addTableRow(tableBody, '9', 'Asics', 'Tennis Shoe', 'Sporty', '950', '2024-01-09', '12:45 PM');
        addTableRow(tableBody, '10', 'Skechers', 'Slip-On Shoe', 'Casual', '600', '2024-01-10', '8:00 AM');

        
    }

    
    document.getElementById('productTable').style.opacity = 1;
}

function addTableRow(tableBody, slNo, brand, productName, category, price, date, time) {
    var newRow = tableBody.insertRow();
    var cells = [slNo, brand, productName, category, price, date, time];

    for (var i = 0; i < cells.length; i++) {
        var cell = newRow.insertCell(i);
        cell.appendChild(document.createTextNode(cells[i]));
    }
}


document.body.style = "background-color: var(--bs-dark);transition: 0.5s;"
const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"

var theme = "dark";
const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);

function setTheme() {
    switch (theme) {
        case "dark":
            setLight();
            theme = "light";
            break;
        case "light":
            setDark();
            theme = "dark";
            break;
    }
}

function setLight() {
    root.style.setProperty(
        "--bs-dark",
        "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
    );
    container.classList.remove("shadow-dark");
    setTimeout(() => {
        container.classList.add("shadow-light");
        themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
}

function setDark() {
    root.style.setProperty("--bs-dark", "#212529");
    container.classList.remove("shadow-light");
    setTimeout(() => {
        container.classList.add("shadow-dark");
        themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
}