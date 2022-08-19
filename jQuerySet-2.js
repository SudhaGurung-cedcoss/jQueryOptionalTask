var products=[{"name":"Mouse","image":"download.jpeg","quantity":1,"price":14.99,"total":14.99},{"name":"Keyboard","image":"keyboard.jpeg","quantity":1,"price":79.99,"total":79.99},{"name":"Earphones","image":"earphones.png","quantity":1,"price":17.99,"total":17.99}];
populate(products);

//  dynamic product listing
function populate(products){
    $subtotal=0;
     let  text=""; 
     for(i=0;i<products.length;i++){ 
      text+="<div class='productList product'><div class='item'><img src="+products[i].image+"></div>"+"<div class='item2'><div class='flexItem'><span>"+products[i].name+"</span><p class='p1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas quae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas quae</p></div>"+"<div class='flexItem2'><button class='btn btnAdd'>+</button><span class='display'>"+products[i].quantity+"</span><button class='btn btnRemove'>-</button><span class='span'>"+products[i].price+"$"+"</span><button class='btn2'>"+(products[i].total*products[i].quantity).toFixed(2)+"$"+"</button></div></div></div>";
      $subtotal+=products[i].quantity*products[i].price; 
     
     }
     $tax=(5/100)*$subtotal;
     $total=$tax+$subtotal;
    $("#products").html(text);
    $("#subtotal").html("Subtotal :"+$subtotal.toFixed(2)+"$");
    $("#tax").html("Taxes(%5):"+$tax.toFixed(1)+"$");
    $("#total").html("Total :"+$total.toFixed(2)+"$");
}
$(document).ready(function(){

      
        $("#products").on("click",".btnAdd",function(){

            $index=$(this).parent().parent().parent().index();
            products[$index].quantity=++products[$index].quantity;
            products[$index].price=products[$index].total;
            $(this).next().html(products[$index].quantity);
            $(this).next().next().next().next().html((products[$index].price*products[$index].quantity).toFixed(2));
            populate(products);
        })


        $("#products").on("click",".btnRemove",function(){

            $index=$(this).parent().parent().parent().index();
            products[$index].quantity=--products[$index].quantity;
         
           if(products[$index].quantity==0)
           {
            products[$index].price=0;
           }

            if(products[$index].quantity<0){
                alert("Quantity can't be negative");
                products[$index].quantity=0;
            

            }    
            else{
                $(this).prev().html(products[$index].quantity);
                $(this).next().next().html((products[$index].price*products[$index].quantity).toFixed(2));
                populate(products);
            }

        
        })

})