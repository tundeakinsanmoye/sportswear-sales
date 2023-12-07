let countEl = document.getElementById("count-el")

let soldParagraph = document.getElementById("sold")


let count = 0

function item() {
    count += 1
    countEl.textContent = count
}
function purchase() {
    soldParagraph.textContent = "Payment received! Thank you, bye."
}