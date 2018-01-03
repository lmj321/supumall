require(['config'],function(){
  require(['jquery','header_footer'],function($,home){
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
        $('img').get(0).src=date.imgurl;
        $('.goods_r_m1').html(date.news);
        $('.goods_r_m3').html(date.describe);
        $('.goods_sale2').html(date.price);
        $('.goods_sale4').html(date.sales);
        var now_price=date.sales*1-date.price*1;
        console.log(now_price)
        $('.save').html(now_price.toFixed(1));
    })
})