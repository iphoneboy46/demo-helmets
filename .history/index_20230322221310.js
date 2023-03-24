window.onload = () =>{
    function activeProduct(){
        let imgProduct1 = document.querySelector(".item-1 > img");
        let itemProducts = document.querySelectorAll(".item-list-img");
        
        itemProducts.forEach((product)=>{
            product.onclick=(e)=>{
                let itemProductActive = document.querySelector(".item-list-img.active");
                itemProductActive.classList.remove("active");
                product.classList.add("active");
                console.log(imgProduct1);
                imgProduct1.src = e.target.src;
            }
        })
    }

    activeProduct()
}