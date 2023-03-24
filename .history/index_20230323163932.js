
  

  function activeProduct(){
    let item = document.querySelectorAll(".main_product-best-list .item");
    item.forEach((it)=>{
      let imgItems = it.querySelectorAll(".item-list-img");
      let imgItem = it.querySelector(".item-img > img");
      
     
      imgItems.forEach((img)=>{
        img.onclick = (e) =>{
          let imgItemActive = it.querySelector(".item-list-img.active");
          let imgAniActive = it.querySelector(".item-img > img.active-ani");
        
          imgItemActive.classList.remove("active");
          imgAniActive.classList.remove("active-ani");
          img.classList.add("active");
          
          imgItem.src = e.target.src;

          setTimeout(()=>{
            imgItem.classList.add("active-ani");
          },500)
        }
      })
      

    })
  }

  activeProduct();

  function activeLanguage() {
    let listLanguage = document.querySelectorAll(".header_language");

    listLanguage.forEach((language) => {
      language.onclick = () => {
        let listLanguageActive = document.querySelector(
          ".header_language.active-language"
        );
        listLanguageActive.classList.remove("active-language");
        language.classList.add("active-language");
      };
    });
  }

  activeLanguage();

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

  function filterTag() {
    let itemFilter = document.querySelectorAll(".filter-item");
    let non34 = document.querySelector(".non-3-4");
    let fullFace = document.querySelector(".full-face");
    let latCam = document.querySelector(".lat-cam");
    let non12 = document.querySelector(".non-1-2");
    let xeDap = document.querySelector(".xe-dap");
    itemFilter.forEach((item) => {
      item.onclick = (e) => {
        let itemFilterActive = document.querySelector(".filter-item.active");
        itemFilterActive.classList.remove("active");
        item.classList.add("active");
        switch(item.getAttribute("data-filter")){
          case "non-3-4" : {
            non34.style.display = "block";
            fullFace.style.display = "none"
            latCam.style.display = "none";
            non12.style.display="none"
            xeDap.style.display="none";
            break;
          }
          case "full-face":{
            fullFace.style.display = "block";
            non34.style.display = "none";
            latCam.style.display = "none";
            non12.style.display="none"
            xeDap.style.display="none";
            break;
          }
          case "lat-cam":{
            fullFace.style.display = "none";
            non34.style.display = "none";
            latCam.style.display = "block";
            non12.style.display="none"
            xeDap.style.display="none";
            break;
          }
          case "non-1-2":{
            fullFace.style.display = "none";
            non34.style.display = "none";
            latCam.style.display = "block";
            non12.style.display="block";
            xeDap.style.display="none";
            break;
          }
          case "xe-dap":{
            fullFace.style.display = "none";
            non34.style.display = "none";
            latCam.style.display = "none";
            non12.style.display="none";
            xeDap.style.display="block";
            break;
          }
          default :{
            fullFace.style.display = "none";
            non34.style.display = "block";
            latCam.style.display = "none";
            non12.style.display="none";
            xeDap.style.display="none";
          }
        }
        
        
      };
    });
  }
  filterTag();

  function menuMoBi(){
    let btnNav = document.querySelector(".header_res-navbar");
    let btnExit = document.querySelector(".header_res-exits");
    let modal = document.querySelector(".modal");
    let menuMB= document.querySelector(".menu_responsive");

    btnNav.onclick = () =>{
      menuMB.style.left = "0";
      btnExit.style.display = "block";
      modal.style.display = "block";
    }
  }
