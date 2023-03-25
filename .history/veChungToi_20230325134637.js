function slider() {
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
}

slider();

function handleChungNhan() {
  let wrapperImg = document.querySelectorAll(".swiper-slide");
  let modalImg = document.querySelector(".modal-img-zoom");
  let btnExitZoom = document.querySelector(".exit-img-zoom");


  
  wrapperImg.forEach((itemImg) => {
    itemImg.onclick = (e) => {
      let imgzoom = document.querySelector(".img-zoom");
      let imgZoomImg = document.querySelector(".img-zoom-item > img");
      imgzoom.style.visibility = "visible";
      imgzoom.style.pointerEvents = "visible";
      imgZoomImg.style.display = "block";
      imgZoomImg.src = e.target.childNodes[1].src;
      modalImg.style.display = "block";

    };
  });



  

  btnExitZoom.onclick = () => {
    let imgZoom = document.querySelector(".img-zoom");
    imgZoom.style.visibility = "hidden";
    imgZoom.style.pointerEvents = "hidden";
    modalImg.style.display = "none";
  };
}

handleChungNhan();

