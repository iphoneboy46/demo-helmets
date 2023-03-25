function slider(){
    let btnDown = document.querySelector(".btn-down-slider");
    let listItemSliders = document.querySelectorAll(".slider-item");

    btnDown.onclick = () =>{
        listItemSliders[0].style.top = "60%"
        listItemSliders[1].style.top = "50%"
        listItemSliders[2].style.top = "40%"
        listItemSliders[3].style.top = "30%"
    }
}

slider()