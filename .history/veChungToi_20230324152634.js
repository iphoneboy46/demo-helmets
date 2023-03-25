function slider(){
    let btnDown = document.querySelector(".btn-down-slider");
    let listItemSliders = document.querySelectorAll(".slider-item");

    btnDown.onclick = () =>{
        listItemSliders.forEach((item, index) =>{
            item[0].style.top = "60%"
        })
    }
}

slider()