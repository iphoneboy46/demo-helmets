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
    let itemProduct5 = document.querySelectorAll(".item-5 > .item-list-img");
    let itemProduct6 = document.querySelectorAll(".item-6 > .item-list-img");
    let itemProduct7 = document.querySelectorAll(".item-7 > .item-list-img");
    let itemProduct8 = document.querySelectorAll(".item-8 > .item-list-img");
    let itemProduct9 = document.querySelectorAll(".item-9 > .item-list-img");
    let itemProduct10 = document.querySelectorAll(".item-10 > .item-list-img");
    let itemProduct11 = document.querySelectorAll(".item-11 > .item-list-img");
    let itemProduct12 = document.querySelectorAll(".item-12 > .item-list-img");

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

      itemProduct5.forEach((product, index) => {
        product.onclick = (e) => {
          let itemProductActive = document.querySelector(".item-list.item-5 > .item-list-img.active");
          let itemProductAni = document.querySelector(
            ".item-img.img-5 > img.active-ani-5"
          );
          console.log(itemProductAni);
          itemProductActive.classList.remove("active");
          itemProductAni.classList.remove("active-ani-5");
          product.classList.add("active");
          imgProductImage5.src = e.target.src;
          setTimeout(() => {
            imgProductImage5.classList.add("active-ani-5");
          }, 500);
        };
      });

      itemProduct6.forEach((product, index) => {
        product.onclick = (e) => {
          let itemProductActive = document.querySelector(".item-list.item-6 > .item-list-img.active");
          let itemProductAni = document.querySelector(
            ".item-img.img-6 > img.active-ani-6"
          );
          console.log(itemProductAni);
          itemProductActive.classList.remove("active");
          itemProductAni.classList.remove("active-ani-6");
          product.classList.add("active");
          imgProductImage6.src = e.target.src;
          setTimeout(() => {
            imgProductImage6.classList.add("active-ani-6");
          }, 500);
        };
      });

      itemProduct7.forEach((product, index) => {
        product.onclick = (e) => {
          let itemProductActive = document.querySelector(".item-list.item-7 > .item-list-img.active");
          let itemProductAni = document.querySelector(
            ".item-img.img-7 > img.active-ani-7"
          );
          console.log(itemProductAni);
          itemProductActive.classList.remove("active");
          itemProductAni.classList.remove("active-ani-7");
          product.classList.add("active");
          imgProductImage7.src = e.target.src;
          setTimeout(() => {
            imgProductImage7.classList.add("active-ani-7");
          }, 500);
        };
      });

      itemProduct8.forEach((product, index) => {
        product.onclick = (e) => {
          let itemProductActive = document.querySelector(".item-list.item-8 > .item-list-img.active");
          let itemProductAni = document.querySelector(
            ".item-img.img-8 > img.active-ani-8"
          );
          console.log(itemProductAni);
          itemProductActive.classList.remove("active");
          itemProductAni.classList.remove("active-ani-8");
          product.classList.add("active");
          imgProductImage8.src = e.target.src;
          setTimeout(() => {
            imgProductImage8.classList.add("active-ani-8");
          }, 500);
        };
      });

      itemProduct9.forEach((product, index) => {
        product.onclick = (e) => {
          let itemProductActive = document.querySelector(".item-list.item-9 > .item-list-img.active");
          let itemProductAni = document.querySelector(
            ".item-img.img-9 > img.active-ani-9"
          );
          console.log(itemProductAni);
          itemProductActive.classList.remove("active");
          itemProductAni.classList.remove("active-ani-9");
          product.classList.add("active");
          imgProductImage9.src = e.target.src;
          setTimeout(() => {
            imgProductImage9.classList.add("active-ani-9");
          }, 500);
        };
      });

      itemProduct10.forEach((product, index) => {
        product.onclick = (e) => {
          let itemProductActive = document.querySelector(".item-list.item-10 > .item-list-img.active");
          let itemProductAni = document.querySelector(
            ".item-img.img-10 > img.active-ani-10"
          );
          console.log(itemProductAni);
          itemProductActive.classList.remove("active");
          itemProductAni.classList.remove("active-ani-10");
          product.classList.add("active");
          imgProductImage10.src = e.target.src;
          setTimeout(() => {
            imgProductImage10.classList.add("active-ani-10");
          }, 500);
        };
      });

      itemProduct11.forEach((product, index) => {
        product.onclick = (e) => {
          let itemProductActive = document.querySelector(".item-list.item-11 > .item-list-img.active");
          let itemProductAni = document.querySelector(
            ".item-img.img-11 > img.active-ani-11"
          );
          console.log(itemProductAni);
          itemProductActive.classList.remove("active");
          itemProductAni.classList.remove("active-ani-11");
          product.classList.add("active");
          imgProductImage11.src = e.target.src;
          setTimeout(() => {
            imgProductImage11.classList.add("active-ani-11");
          }, 500);
        };
      });

      itemProduct12.forEach((product, index) => {
        product.onclick = (e) => {
          let itemProductActive = document.querySelector(".item-list.item-12 > .item-list-img.active");
          let itemProductAni = document.querySelector(
            ".item-img.img-12 > img.active-ani-12"
          );
          console.log(itemProductAni);
          itemProductActive.classList.remove("active");
          itemProductAni.classList.remove("active-ani-12");
          product.classList.add("active");
          imgProductImage12.src = e.target.src;
          setTimeout(() => {
            imgProductImage12.classList.add("active-ani-12");
          }, 500);
        };
      });
  }

  activeProduct();

  function activeMenu(){
    let items = document.querySelectorAll(".header_menu > ul > li > a");

    items.forEach((item,index) => {
    let itemActiveMenu = document.querySelector(".link.active-link");
   
    console.log(index);
        itemActiveMenu.classList.remove("active-link");
        item.onclick = () =>{
            console.log(item);
            item.classList.add("active-link");
        }
    })

   
  }

  activeMenu();
};
