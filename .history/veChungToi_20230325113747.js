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
    },8000)
}

slider()

function handleChungNhan(){
    let itemHoaDon = document.querySelectorAll(".swiper-slide");
    
    console.log(itemHoaDon);
    itemHoaDon.forEach((item)=>{
        
        item.onclick = (e) =>{
            let imgZoom = document.querySelector(".img-zoom-item > img");
            let imgHoaDon = document.querySelector(".img-hoa-don")
            console.log(e.target.src);
            imgZoom.scr = e.target.src
           
        }
    })
}

handleChungNhan()