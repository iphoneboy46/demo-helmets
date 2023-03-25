function slider(){
    let btnDown = document.querySelector(".btn-down-slider");
    let listItemSliders = document.querySelectorAll(".main_container-slider.slider-item");

    btnDown.onclick = () =>{
        listItemSliders.forEach((item) =>{
            console.log(item);
            item[0].style.top = "60%"
        })
    }
}

slider()