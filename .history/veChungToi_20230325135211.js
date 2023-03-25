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
      let imgZoomItem = document.querySelector(".img-zoom-item");
      imgzoom.style.visibility = "visible";
      imgzoom.style.pointerEvents = "visible";
      imgZoomItem.style.display = "block";
      imgZoomImg.src = e.target.childNodes[1].src;
      modalImg.style.display = "block";
      imgZoomItem.style.opacity = "1";
    };
  });



  

  btnExitZoom.onclick = () => {
    let imgZoom = document.querySelector(".img-zoom");
    let imgZoomItem = document.querySelector(".img-zoom-item");

    imgZoom.style.visibility = "hidden";
    imgZoom.style.pointerEvents = "hidden";
    modalImg.style.display = "none";
    imgZoomItem.style.display = "none";
    imgZoomItem.style.opacity = "0";
  };
}

handleChungNhan();

