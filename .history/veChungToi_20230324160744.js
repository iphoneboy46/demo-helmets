function slider(){
    let btnDown = document.querySelector(".btn-down-slider");
   

    btnDown.onclick = () =>{
        let itemSliders = document.querySelectorAll(".slider-item");
        let listItemSliders = document.querySelector(".slider-con")
        listItemSliders.prepend(itemSliders[itemSliders.length - 1])
        // itemSliders[0].style.top = "60%"
        // itemSliders[1].style.top = "50%"
        // itemSliders[2].style.top = "40%"
        // itemSliders[3].style.top = "30%"
        
    }
}

slider()