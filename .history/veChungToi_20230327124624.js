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

  }
  
}

slider();

function sliderMobile(){
 
    let btnNext = document.querySelector(".btn-next-slider");
    let btnPrev = document.querySelector(".btn-prev-slider");
  
    btnNext.onclick = () => {
      let itemSliderMb = document.querySelectorAll(".slider-item-mb");
      let listItemSliderMb = document.querySelector(".slider-con-mb");
      listItemSliderMb.appendChild(itemSliderMb[0]);
    };
  
    btnPrev.onclick = () => {
      let itemSliderMb = document.querySelectorAll(".slider-item-mb");
      let listItemSliderMb = document.querySelector(".slider-con-mb");
      listItemSliderMb.prepend(itemSliderMb[itemSliderMb.length - 1]);


    };
  
  
  
  let sliderAuto = setInterval(() => {
      let itemSliderMb = document.querySelectorAll(".slider-item-mb");
      let listItemSliderMb = document.querySelector(".slider-con-mb");
      listItemSliderMb.appendChild(itemSliderMb[0]);
    }, 10000);
  }

  sliderMobile()


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

  modalImg.onclick = () => {
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
      if(window.scrollY >= 4600){
        console.log("lon hon 4500");
        listLink.style.top = "4500px";
      }
    } else if(screen.width > 1024) {
      listLink.style.top = "2%";
      listLink.style.marginTop = "0%";
    } 
    

    console.log(window.scrollY);
  };
}

handleScroll();


function handleSearch() {
  let btnSearch = document.querySelector(".header_search");
  let btnExits = document.querySelector(".header_exits");
  let inputSearch = document.querySelector(".header_search-input");
  let arrowUp = document.querySelector(".arrow-up");
  let modal = document.querySelector(".modal");
  btnSearch.onclick = () => {
    inputSearch.style.right = "0";
    btnSearch.style.display = "none";
    btnExits.style.display = "block";
    arrowUp.style.visibility = "visible";
    arrowUp.style.opacity = "1";
    modal.style.display = "block";
  };

  btnExits.onclick = () => {
    inputSearch.style.right = "-100%";
    btnSearch.style.display = "block";
    btnExits.style.display = "none";
    arrowUp.style.visibility = "hidden";
    arrowUp.style.opacity = "0";
    modal.style.display = "none";
  };

  modal.onclick = () => {
    inputSearch.style.right = "-100%";
    btnSearch.style.display = "block";
    btnExits.style.display = "none";
    arrowUp.style.visibility = "hidden";
    arrowUp.style.opacity = "0";
    modal.style.display = "none";
  };
}

handleSearch();


function menuMoBi() {
  let btnNav = document.querySelector(".header_res-navbar");
  let btnExit = document.querySelector(".header_res-exits");
  let modal2 = document.querySelector(".modal-2");
  let menuMB = document.querySelector(".menu_responsive");

  btnNav.onclick = () => {
    menuMB.style.left = "0";
    menuMB.style.opacity = "1";
    btnExit.style.display = "block";
    modal2.style.display = "block";
    btnNav.style.display = "none";
    document.body.style.overflow = "hidden";
  };

  btnExit.onclick = () => {
    menuMB.style.left = "-100%";
    menuMB.style.opacity = "0";
    btnExit.style.display = "none";
    modal2.style.display = "none";
    btnNav.style.display = "block";
    document.body.style.overflow = "auto";
  };

  modal2.onclick = () => {
    menuMB.style.left = "-100%";
    menuMB.style.opacity = "0";
    btnExit.style.display = "none";
    modal2.style.display = "none";
    btnNav.style.display = "block";
    document.body.style.overflow = "auto";
  };
}

menuMoBi();

function searchTag() {
  let btnSearch = document.querySelector(".search-res");
  let btnExitsSearch = document.querySelector(".exits");
  let searchform = document.querySelector(".search-mobi");
  let modalSearch = document.querySelector(".modal-search");
  let btnNav = document.querySelector(".header_res-navbar");
  let btnExit = document.querySelector(".header_res-exits");
  let modal = document.querySelector(".modal");
  let modal2 = document.querySelector(".modal-2");

  let menuMB = document.querySelector(".menu_responsive");

  btnSearch.onclick = () => {
    menuMB.style.left = "-100%";
    menuMB.style.opacity = "0";
    searchform.style.display = "flex";
    modal2.style.display = "none";

    btnExit.style.display = "none";
    modal.style.display = "none";
    btnNav.style.display = "block";
    document.body.style.overflow = "auto";
    modalSearch.style.display = "block";
    searchform.style.opacity = "1";
    document.body.style.overflow = "hidden";
    searchform.style.pointerEvents = "visible";
  };

  btnExitsSearch.onclick = () => {
    // menuMB.style.left = "-100%";
    // menuMB.style.opacity = "0";
    // btnExit.style.display = "none";
    // modal.style.display = "none";
    // btnNav.style.display = "block";

    document.body.style.overflow = "auto";
    modalSearch.style.display = "none";
    searchform.style.opacity = "0";
    searchform.style.pointerEvents = "hidden";
    document.body.style.overflow = "auto";
    searchform.style.display = "none";
  };

  modalSearch.onclick = () => {
    document.body.style.overflow = "auto";
    modalSearch.style.display = "none";
    searchform.style.opacity = "0";
    searchform.style.pointerEvents = "hidden";
    document.body.style.overflow = "auto";
  };
}

searchTag();

function handleDropdown() {
  let btnDown = document.querySelector(".btn-down");
  let menuChidren = document.querySelector(".menu-children-mb");

  btnDown.onclick = () => {
    menuChidren.classList.toggle("show");
  };
}

handleDropdown();