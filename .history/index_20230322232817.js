window.onload = () =>{
    function activeProduct(){
    
        let imgProductImage = document.querySelector(".item-img > img");
        let itemProduct1 = document.querySelectorAll(".item-1 > .item-list-img");
       
        itemProduct1.forEach((product,index)=>{
            product.onclick=(e)=>{
                let itemProductActive = document.querySelector(".item-list-img.active");
                let itemProductAni = document.querySelector(".item-img > img.active-ani");
                console.log(itemProductAni);
                itemProductActive.classList.remove("active");
                itemProductAni.classList.remove("active-ani");
                product.classList.add("active");
                imgProductImage.src = e.target.src;
                setTimeout(()=>{
                    imgProductImage.classList.add("active-ani");
                },500)
               
                   
            
                
            }
        })
    }

    activeProduct()
}