potato = document.getElementById("potato");
var potatoClicks = 0;
potatoClicksText = document.getElementById("potatoClicks");

potato.addEventListener("click", function() {
  setPotatoClicks(potatoClicks + 1);
});

resetButton.addEventListener("click", function() {
    setPotatoClicks(0);
});

function setPotatoClicks(count){
    potatoClicks = count;
    if(count != 1)
      potatoClicksText.innerText = count + " potatoes";
    else
      potatoClicksText.innerText = count + " potato";
}