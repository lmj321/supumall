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
            var total=0
            ul.innerHTML=res.map(function(item){
                total=`${item.price}`*`${item.qty}`
                console.log(total)
                return `<li data-guid="${item.id}">
                        <span class="car1">
                        <input type="checkbox" />
                        <img src="${item.imgurl}" class="imgR">
                        </span>
                        <span class="car2">${item.content}</span>
                        <span class="car3">${item.price}
                        </span>
                        <div class="car4"><span class="des">-</span><input type="text"value="${item.qty}">
                        <span class="ase">+</span>
                        </div>
                        <div class="car5">${total}</div>
                        <span class="del"><a>删除</a><br /><a>收藏</a></span>
                        </div>
                    </li>`
            }).join('');
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