document.addEventListener('DOMContentLoaded', ()=>{
    var cards = Array.from(document.getElementsByClassName("card"))
    var index = 1

    cards.forEach((card, i)=>{
        card.style.backgroundImage = `url("images/${index}.jpg")`
        index++

        card.addEventListener('mouseenter', ()=>{
            new Audio("audio/light-switch.wav").play()
        })

    })

    var cardContainer = document.getElementById("cardContainer");

    setInterval(()=>{
        
    }, 1000);
    // cardContainer.scrollLeft = cardContainer.scrollWidth;
})