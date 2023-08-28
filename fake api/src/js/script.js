async function getProduct(){
    const response=await fetch('http://localhost:3000/products');
    const data=await response.json();

   data.map(product=>{
    console.log(product.id);
   })


}

getProduct()