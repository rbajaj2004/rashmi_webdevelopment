function myFunction() {
  var input, filter, cards, cardContainer, title, i;
  input = document.getElementById("search");
  filter = input.value.toLowerCase();
  cardContainer = document.getElementById("cards-list");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
    title = cards[i].querySelector(".card-title");
    if (title.innerText.toLowerCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}
