window.onload = () =>{
    function activeProduct(){
        let imgProduct = document.querySelector(".item-img");
        let itemProduct1 = document.querySelectorAll(".item1 > .item-list-img");
        
        console.log(imgProduct);
        itemProduct1.forEach((product)=>{
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