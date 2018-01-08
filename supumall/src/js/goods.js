require(['config'],function(){
  require(['jquery','header_footer','gdsZoom','parabola','gdsZoom'],function($,home,gdsZoom,parabola,gdsZoom){
    var res=location.search;
    res=res.slice(1);
    res=res.split('&');

    var date={};
    res.forEach(function(item){
      // 以等号拆分数组
      var arr=item.split('=');
      //把内容写进对象里
      date[arr[0]]=decodeURI(arr[1]);
    })
        console.log(date);
        $('.describe').html(date.describe);
        $('.Img').get(0).src=$('.Img').get(1).src=date.imgurl;
        $('.Img').get(0).setAttribute("data-big",date.imgurl);
        
        $('#flyItem img').get(0).src=date.imgurl;
        $('.goods_r_m1').html(date.news);
        $('.goods_r_m3').html(date.describe);
        $('.goods_sale2').html(date.price);
        $('.goods_sale4').html(date.sales);
        var now_price=date.sales*1-date.price*1;
        console.log(now_price)
        $('.save').html(now_price.toFixed(1));

$('.goods_pic').gdsZoom();
$('.smallList img').click(function(){
        $('.Img').attr({
          'src':this.src,
          'data-big':$(this).attr('data-big') || this.src
    });
  })

var eleFlyElement = document.querySelector("#flyItem"), 
 eleShopCart = document.querySelector(".shoppingCar");
var numberItem = 0;
// 抛物线运动
var myParabola = funParabola(eleFlyElement, eleShopCart, {
  speed: 400, //抛物线速度
  curvature: 0.0008, //控制抛物线弧度
  complete: function() {
    eleFlyElement.style.visibility = "hidden";
    eleShopCart.querySelector("span").innerHTML = ++numberItem;
  }
});

var qty =document.querySelector('.qty')

qty.value=1;
$('.reduce').click(function(){
    if(qty.value<=1){
        return
    }else{
        qty.value--;
    }

})
$('.add').click(function(){
    console.log(555)
    qty.value++;
})
console.log( qty.value)
var username = sessionStorage.getItem("key"); 
var imgurl= $('.Img').get(0).src;
console.log(imgurl)
var content=$('.goods_r_m3').text();
var price=$('.goods_sale2').text()
var sales=$('.goods_sale4').text()

// 绑定点击事
if (eleFlyElement && eleShopCart) {
  console.log(666)
  $('.Bag').click(function(event) {
      // 滚动大小
      var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0,
          scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
      eleFlyElement.style.left = event.clientX + scrollLeft + "px";
      eleFlyElement.style.top = event.clientY + scrollTop + "px";
      eleFlyElement.style.visibility = "visible";
      
      // 需要重定位
      myParabola.position().move(); 
      if(username==null){
        alert('你还未登录，请登录')
         location.href='login.html'
      }else{
        $.post('../api/carinser.php',{
            imgurl:imgurl,content:content,username:username,price:price,sales:sales,qty:qty.value
        },function(res){
            console.log(res)
        })
      }

    });
  }


//     var site = localStorage.getItem("site");
 console.log(username);
   
    if(username!=null){
         var tel = username.substr(0, 3) + '*****' + username.substr(8);  
       $('.head_l').html(
        'Hi<a>'+tel+'</a>欢迎来到速普商城！<a href="index.html"class="exit">[退出]</a>'
        )
    }
    $('.exit').click(function(){
        sessionStorage.removeItem("key");

    })

    })
})