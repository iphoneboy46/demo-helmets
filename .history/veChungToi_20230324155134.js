function slider(){
    let btnDown = document.querySelector(".btn-down-slider");
    let itemSliders = document.querySelectorAll(".slider-item");
    let listItemSliders = document.querySelector(".slider-con")

    btnDown.onclick = () =>{
        listItemSliders.appendChild(itemSliders[0])
        // itemSliders[0].style.top = "60%"
        // itemSliders[1].style.top = "50%"
        // itemSliders[2].style.top = "40%"
        // itemSliders[3].style.top = "30%"
    }
}

slider()