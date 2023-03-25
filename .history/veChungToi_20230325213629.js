function slider() {
  if(screen.width > 768){
    console.log("asdasd");
    let btnDown = document.querySelector(".btn-down-slider");
  let btnUp = document.querySelector(".btn-up-slider");

  btnDown.onclick = () => {
    let itemSliders = document.querySelectorAll(".slider-item");
    let listItemSliders = document.querySelector(".slider-con");
    listItemSliders.appendChild(itemSliders[0]);
  };

  btnUp.onclick = () => {
    let itemSliders = document.querySelectorAll(".slider-item");
    let listItemSliders = document.querySelector(".slider-con");
    listItemSliders.prepend(itemSliders[itemSliders.length - 1]);
  };

  setInterval(() => {
    let itemSliders = document.querySelectorAll(".slider-item");
    let listItemSliders = document.querySelector(".slider-con");
    listItemSliders.appendChild(itemSliders[0]);
  }, 8000);

  }else{
    let btnNext = document.querySelector(".btn-next-slider");
    let btnPrev = document.querySelector(".btn-prev-slider");
  
    btnNext.onclick = () => {
      let itemSliderMb = document.querySelectorAll(".slider-item-mb");
      let listItemSliderMb = document.querySelector(".slider-con-mobile");
      listItemSliderMb.appendChild(itemSliderMb[0]);
    };
  
    btnPrev.onclick = () => {
      let itemSliderMb = document.querySelectorAll(".slider-item-mb");
      let listItemSliderMb = document.querySelector(".slider-con-mobile");
      listItemSliderMb.prepend(itemSliderMb[itemSliderMb.length - 1]);
    };
  
  
  
    setInterval(() => {
      let itemSliderMb = document.querySelectorAll(".slider-item-mb");
      let listItemSliderMb = document.querySelector(".slider-con-mobile");
      listItemSliderMb.appendChild(itemSliderMb[0]);
    }, 8000);
  }
  
}

slider();

// function sliderMobile() {
 
// }

// sliderMobile();

function handleChungNhan() {
  let wrapperImg = document.querySelectorAll(".swiper-slide");
  let modalImg = document.querySelector(".modal-img-zoom");
  let btnExitZoom = document.querySelector(".exit-img-zoom");



  wrapperImg.forEach((itemImg,index) => {
    itemImg.onclick = (e) => {
      console.log(index);
      let imgzoom = document.querySelector(".img-zoom");
      let imgZoomImg = document.querySelector(".img-zoom-item > img");
      let imgZoomItem = document.querySelector(".img-zoom-item");
      let img = document.querySelectorAll(".swiper-slide > img");
    
      imgzoom.style.visibility = "visible";
      imgzoom.style.pointerEvents = "visible";
      imgZoomItem.style.visibility = "visible";
      imgZoomImg.src = img[index].src;
      modalImg.style.display = "block";
      imgZoomItem.style.opacity = "1";
      document.body.style.overflow = "hidden";
    };
  });



  

  btnExitZoom.onclick = () => {
    let imgZoom = document.querySelector(".img-zoom");
    let imgZoomItem = document.querySelector(".img-zoom-item");

    imgZoom.style.visibility = "hidden";
    imgZoom.style.pointerEvents = "hidden";
    modalImg.style.display = "none";
    imgZoomItem.style.visibility = "hidden";
    imgZoomItem.style.opacity = "0";
    document.body.style.overflow = "auto";

  };
}

handleChungNhan();


function handleScroll() {
  window.onscroll = (e) => {
    let listLink = document.querySelector(".main_links-link");
    if (window.scrollY > 800 && screen.width > 1024) {
      let topCalc = Math.floor(window.scrollY - 200);

      listLink.style.top = topCalc + "px";
      if(window.scrollY >= 4800){
        console.log("lon hon 4500");
        listLink.style.top = "4600px";
      }
    } else if(screen.width > 1024) {
      listLink.style.top = "2%";
      listLink.style.marginTop = "0%";
    } 
    

    console.log(window.scrollY);
  };
}

handleScroll();