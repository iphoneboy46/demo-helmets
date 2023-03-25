function slider(){
    let btnDown = document.querySelector(".btn-down-slider");
    let listItemSliders = document.querySelectorAll(".slider-item");

    btnDown.onclick = () =>{
        listItemSliders[0].style.top = "60%"
    }
}

slider()