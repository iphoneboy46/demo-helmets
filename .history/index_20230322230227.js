window.onload = () =>{
    function activeProduct(){
        let imgProduct = document.querySelector(".item-img");
        let imgProductImage = document.querySelector(".item-img > img");
        let itemProduct1 = document.querySelectorAll(".item-1 > .item-list-img");
        console.log(imgProduct);
        
        console.log(imgProduct);
        itemProduct1.forEach((product)=>{
            product.onclick=(e)=>{
                let itemProductActive = document.querySelector(".item-list-img.active");
                itemProductActive.classList.remove("active");
                product.classList.add("active");
                imgProductImage.src = e.target.src;
                if(itemProductActive){
                    console.log("asdas");
                    imgProduct.style.transform= "scale(1)";
                imgProduct.style.opacity= "1";
                }
            }
        })
    }

    activeProduct()
}