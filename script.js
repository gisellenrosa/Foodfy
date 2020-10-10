const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')


for (let card of cards) {
    card.addEventListener("click", function() {
        const foodId = card.getAttribute("id");
        const title = card.querySelector(".card-title p").innerHTML;
        const text = card.querySelector(".card-info p").innerHTML;
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `assets/${foodId}`;
        modalOverlay.querySelector('.modal-title p').innerHTML = title;
        modalOverlay.querySelector('.modal-text p').innerHTML = text;


    })
}
document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("img").src = "";

})