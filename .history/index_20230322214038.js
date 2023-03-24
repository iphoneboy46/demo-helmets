window.onload = () =>{
    function activeProduct(){
        let imgProduct = document.querySelector(".item-img");
        let itemProducts = document.querySelectorAll(".item-list-img")
        
        itemProducts.map((product)=>{
            console.log(product);
        })
    }

    activeProduct()
}