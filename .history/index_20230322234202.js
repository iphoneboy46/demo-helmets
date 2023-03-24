window.onload = () => {
  function activeProduct() {
    let imgProductImage1 = document.querySelector(".item-img.img-1 > img");
    let imgProductImage2 = document.querySelector(".item-img.img-2 > img");

    let itemProduct1 = document.querySelectorAll(".item-1 > .item-list-img");
    let itemProduct2 = document.querySelectorAll(".item-2 > .item-list-img");

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
        imgProductImage.src = e.target.src;
        setTimeout(() => {
          imgProductImage2.classList.add("active-ani-2");
        }, 500);
      };
    });
  }

  activeProduct();
};
