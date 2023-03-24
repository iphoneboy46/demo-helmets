window.onload = () =>{
    function activeProduct(){
        let imgProduct = document.querySelector(".item-img > img");
        let itemProducts = document.querySelectorAll(".item-list-img");
        
        itemProducts.forEach((product)=>{
            product.onclick=(e)=>{
                let itemProductActive = document.querySelector(".item-list-img.active");
                itemProductActive.classList.remove("active");
                product.classList.add("active");
                console.log(imgProduct.setAttribute);
                console.log(imgProduct);
                imgProduct.src = e.target.src;
            }
        })
    }

    activeProduct()
}