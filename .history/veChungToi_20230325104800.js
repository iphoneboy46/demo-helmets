function slider(){
    let btnDown = document.querySelector(".btn-down-slider");
    let btnUp = document.querySelector(".btn-up-slider");
   

    btnDown.onclick = () =>{
        let itemSliders = document.querySelectorAll(".slider-item");
        let listItemSliders = document.querySelector(".slider-con")
        listItemSliders.appendChild(itemSliders[0])
    }

    btnUp.onclick = () =>{
        let itemSliders = document.querySelectorAll(".slider-item");
        let listItemSliders = document.querySelector(".slider-con")
        listItemSliders.prepend(itemSliders[itemSliders.length -1])
    }

    setInterval(()=>{
        let itemSliders = document.querySelectorAll(".slider-item");
        let listItemSliders = document.querySelector(".slider-con")
        listItemSliders.appendChild(itemSliders[0])
    },5000)
}

slider()