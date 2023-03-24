window.onload = () =>{
    function activeProduct(){
        let imgProduct = document.querySelector(".item-img");
        let itemProducts = document.querySelectorAll(".item-list-img")
        
        itemProducts.forEach((product)=>{
            product.onclick=(e)=>{
                console.log(e.classList.add("active"));
            }
        })
    }

    activeProduct()
}