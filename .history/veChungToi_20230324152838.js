function slider(){
    let btnDown = document.querySelector(".btn-down-slider");
    let listItemSliders = document.querySelector(".slider-item");

    btnDown.onclick = () =>{
        listItemSliders.forEach((item) =>{
            console.log(item);
            item[0].style.top = "60%"
        })
    }
}

slider()