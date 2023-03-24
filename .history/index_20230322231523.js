window.onload = () =>{
    function activeProduct(){
    
        let imgProductImage = document.querySelector(".item-img > img");
        let itemProduct1 = document.querySelectorAll(".item-1 > .item-list-img");
       
        itemProduct1.forEach((product)=>{
            product.onclick=(e)=>{
                let itemProductActive = document.querySelector(".item-list-img.active");
                let itemProductAni = document.querySelector(".item-img.active-ani")
                itemProductActive.classList.remove("active");
                itemProductAni.classList.remove("active");
                product.classList.add("active");
                imgProductImage.src = e.target.src;
                imgProductImage.classList.add("active-ani");
                   
            
                
            }
        })
    }

    activeProduct()
}