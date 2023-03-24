window.onload = () =>{
    function activeProduct(){
        let imgProduct = document.querySelector(".item-img");
        let itemProducts = document.querySelectorAll(".item-list-img")
        
        itemProducts.forEach((product)=>{
            console.log(product);
        })
    }

    activeProduct()
}