jQuery(function($){

    $('.exit').click(function(){
        sessionStorage.removeItem("key");
    })
      
    var username = sessionStorage.getItem("key"); 
    var ul=document.querySelector('.carList');
    console.log(username)
    if(username!=null){
        console.log(666)
         $.post('../api/car.php',{username:username},function(res){
            res=JSON.parse(res)
            var total=0;
            var Total=0;
            var qty=0;
            ul.innerHTML=res.map(function(item){
                total=`${item.price}`*`${item.qty}`
                Total+= total;
                qty+=Number(`${item.qty}`)
                // console.log(Total)
                // console.log(total)
                return `<li data-guid="${item.id}">
                        <span class="car1">
                        <input type="checkbox"class="checkbox" />
                        <img src="${item.imgurl}" class="imgR">
                        </span>
                        <span class="car2">${item.content}</span>
                        <span class="car3">${item.price}
                        </span>
                        <div class="car4"><span class="des">-</span><input type="text"value="${item.qty}"class="Qty">
                        <span class="ase">+</span>
                        </div>
                        <div class="car5">${total}</div>
                        <span class="del"><a class="remove">删除</a><br /><a>收藏</a></span>
                        </div>
                    </li>`
            }).join('');
            $('.counts').text(qty);
            sessionStorage.setItem("car", qty); 
            $('.Total').text(Total);
            $('.carList').click(function(e){
                if(e.target.className.toLowerCase()==='des'){
                   var goodsId=e.target.parentNode.parentNode.getAttribute('data-guid');
                   var Qty=e.target.nextSibling.value;
                   Qty--;
                   if(Qty<=1){
                        $('.des').text('')
                        return
                   }
                   console.log(goodsId,Qty)
                    $.ajax({
                        type:'POST',
                        url:'../api/update.php',
                        data:{'goodsId':goodsId,'Qty':Qty},
                        success:function(res){
                          console.log(res)
                         }
                    });
                     window.location.reload();
                }
                if(e.target.className.toLowerCase()==='ase'){
                   var goodsId=e.target.parentNode.parentNode.getAttribute('data-guid');
                   var Qty=e.target.previousSibling.previousSibling.value;
                   console.log(Qty)
                   Qty++;
                   if(Qty<=1){
                        $('.des').text('')
                        return
                   }
                   console.log(goodsId,Qty)
                    $.ajax({
                        type:'POST',
                        url:'../api/update.php',
                        data:{'goodsId':goodsId,'Qty':Qty},
                        success:function(res){
                          console.log(res)
                         }
                    });
                     window.location.reload();
                }
                if(e.target.className.toLowerCase()==='remove'){
                    var goodsId=e.target.parentNode.parentNode.getAttribute('data-guid');
                    $.ajax({
                        type:'POST',
                        url:'../api/delete.php',
                        data:{'goodsId':goodsId},
                        success:function(res){
                          console.log(res)
                         }
                    });
                     window.location.reload();
                }
            })
        })
    }
    var carlist=$('.group ul').get(0)
    $.post('../api/goods.php',{sql:'select * from recommend'},function(res){
        res=JSON.parse(res);
        carlist.innerHTML=res.map(function(item){
            return `<li data-guid="${item.id}">
                     <div class="xi">
                         <img src="${item.imgurl}">
                         <span class="content">${item.content}<span>
                         <span class="price">${item.price}<span>
                     </div>
                    </li>`
        }).join('');
    })
})