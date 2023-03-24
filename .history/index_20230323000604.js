window.onload = () => {
  function activeProduct() {
    let imgProductImage1 = document.querySelector(".item-img.img-1 > img");
    let imgProductImage2 = document.querySelector(".item-img.img-2 > img");
    let imgProductImage3 = document.querySelector(".item-img.img-3 > img");
    let imgProductImage4 = document.querySelector(".item-img.img-4 > img");
    let imgProductImage5 = document.querySelector(".item-img.img-5 > img");
    let imgProductImage6 = document.querySelector(".item-img.img-6 > img");
    let imgProductImage7 = document.querySelector(".item-img.img-7 > img");
    let imgProductImage8 = document.querySelector(".item-img.img-8 > img");
    let imgProductImage9 = document.querySelector(".item-img.img-9 > img");
    let imgProductImage10 = document.querySelector(".item-img.img-10 > img");
    let imgProductImage11 = document.querySelector(".item-img.img-11 > img");
    let imgProductImage12 = document.querySelector(".item-img.img-12 > img");

    let itemProduct1 = document.querySelectorAll(".item-1 > .item-list-img");
    let itemProduct2 = document.querySelectorAll(".item-2 > .item-list-img");
    let itemProduct3 = document.querySelectorAll(".item-3 > .item-list-img");
    let itemProduct4 = document.querySelectorAll(".item-4 > .item-list-img");
    let itemProduct5 = document.querySelectorAll(".item-1 > .item-list-img");
    let itemProduct6 = document.querySelectorAll(".item-2 > .item-list-img");
    let itemProduct7 = document.querySelectorAll(".item-3 > .item-list-img");
    let itemProduct8 = document.querySelectorAll(".item-4 > .item-list-img");
    let itemProduct9 = document.querySelectorAll(".item-1 > .item-list-img");
    let itemProduct10 = document.querySelectorAll(".item-2 > .item-list-img");
    let itemProduct11 = document.querySelectorAll(".item-3 > .item-list-img");
    let itemProduct12 = document.querySelectorAll(".item-4 > .item-list-img");

    itemProduct1.forEach((product, index) => {
      product.onclick = (e) => {
        let itemProductActive = document.querySelector(".item-list.item-1 > .item-list-img.active");
        let itemProductAni = document.querySelector(
          ".item-img.img-1 > img.active-ani-1"
        );
        console.log(itemProductAni);
        itemProductActive.classList.remove("active");
        itemProductAni.classList.remove("active-ani-1");
        product.classList.add("active");
        imgProductImage1.src = e.target.src;
        setTimeout(() => {
          imgProductImage1.classList.add("active-ani-1");
        }, 500);
      };
    });

    itemProduct2.forEach((product, index) => {
      product.onclick = (e) => {
        let itemProductActive = document.querySelector(".item-list.item-2 > .item-list-img.active");
        let itemProductAni2 = document.querySelector(
          ".item-img.img-2 > img.active-ani-2"
        );

        itemProductActive.classList.remove("active");
        itemProductAni2.classList.remove("active-ani-2");
        product.classList.add("active");
        imgProductImage2.src = e.target.src;
        setTimeout(() => {
          imgProductImage2.classList.add("active-ani-2");
        }, 500);
      };
    });

    itemProduct3.forEach((product, index) => {
        product.onclick = (e) => {
          let itemProductActive = document.querySelector(".item-list.item-3 > .item-list-img.active");
          let itemProductAni3 = document.querySelector(
            ".item-img.img-3 > img.active-ani-3"
          );
  
          itemProductActive.classList.remove("active");
          itemProductAni3.classList.remove("active-ani-3");
          product.classList.add("active");
          imgProductImage3.src = e.target.src;
          setTimeout(() => {
            imgProductImage3.classList.add("active-ani-3");
          }, 500);
        };
      });

      itemProduct4.forEach((product, index) => {
        product.onclick = (e) => {
          let itemProductActive = document.querySelector(".item-list.item-4 > .item-list-img.active");
          let itemProductAni4 = document.querySelector(
            ".item-img.img-4 > img.active-ani-4"
          );
  
          itemProductActive.classList.remove("active");
          itemProductAni4.classList.remove("active-ani-4");
          product.classList.add("active");
          imgProductImage4.src = e.target.src;
          setTimeout(() => {
            imgProductImage4.classList.add("active-ani-4");
          }, 500);
        };
      });
  }

  activeProduct();
};
