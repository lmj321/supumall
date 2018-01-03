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
        $('.list_l img').get(0).src=date.imgurl;
        $('.list_logo img').get(0).src=date.imgurls;
        $('.list_t').html(date.introduce);
        $('.list_b').html(date.news);
        $('.list_r p').html(date.content)
    })
})