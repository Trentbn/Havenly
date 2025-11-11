const hb = document.querySelector("#hamburgerButton");
const pw = document.querySelector("#pageWrapper");

hb.addEventListener("click", () => {
    pw.classList.toggle("moveOver");
})


import {hotels} from "../data/data.js";
console.log(hotels)

const hotelCards = document.querySelector("#cards");

hotels.forEach(hotel => {
    const mySection = document.createElement("section");
    const myImage = document.createElement("img");
    myImage.src = hotel.image;
    myImage.alt = hotel.name;

    const myName = document.createElement("h2");
    myName.textContent = hotel.name;

    const myAddress = document.createElement("address");
    myAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`;

    const myPhone = document.createElement("a");
    myPhone.innerHTML = hotel.phone;
    myPhone.href = `tel:${hotel.phone}`;

    mySection.appendChild(myImage);
    mySection.appendChild(myName);
    mySection.appendChild(myAddress);
    mySection.appendChild(myPhone);
    hotelCards.appendChild(mySection);


})