function slider(){
    let btnDown = document.querySelector(".btn-down-slider");
    let btnUp = document.querySelector(".btn-down-slider");
   

    btnDown.onclick = () =>{
        let itemSliders = document.querySelectorAll(".slider-item");
        let listItemSliders = document.querySelector(".slider-con")
        listItemSliders.appendChild(itemSliders[0])
    }
}

slider()