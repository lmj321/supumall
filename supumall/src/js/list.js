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
        $('.list_r p').html(date.content);

     
    var pageSize=12;
    var currentPage=1;
    var List=document.querySelector('#list');
    var px=document.querySelector('.paixu');
      var page =document.querySelector('.page')

    lists()
    list=[]
    function lists(){
   $.post('../api/list.php',{sql:'select * from list',pageSize:pageSize,currentPage:currentPage},res=>{
                            res = JSON.parse(res);
                            console.log(res.data)
                          list=res.data;
                        aa();

                 $('.list_r em').html(`${res.total}`); 
        //生成分页
        var page_len=Math.ceil(res.total/pageSize);
        //底下的页码
      
          page.innerHTML='';
          for(var i=0;i<page_len;i++){
            var span=document.createElement('span');
            span.innerText=i+1;
            if(i+1===currentPage){
              span.className='active';
            }
            page.appendChild(span);        
        }
         chuan(); 
    });   
}
    
    $('.page').click(function(e){
      if(e.target.tagName.toLowerCase() === 'span'){
        currentPage=e.target.innerText*1;
          lists()
      }
    })
function sun(){
 $.post('../api/list.php',{sql:'select * from list order by price DESC',pageSize:pageSize,currentPage:currentPage},res=>{
            res=JSON.parse(res)
            list=res.data;
            aa()
             chuan(); 
            console.log(res.data);
               $('.list_r em').html(`${res.total}`); 
        
        //生成分页
        var page_len=Math.ceil(res.total/pageSize);
        //底下的页码
          page.innerHTML='';
          for(var i=0;i<page_len;i++){
            var span=document.createElement('span');
            span.innerText=i+1;
            if(i+1===currentPage){
              span.className='active';
            }
            page.appendChild(span);        
        }
          })
}
function ab(){
 $.post('../api/list.php',{sql:'select * from list order by price ASC',pageSize:pageSize,currentPage:currentPage},res=>{

            res=JSON.parse(res)
             list=res.data;
            aa()
             // chuan(); 
            console.log(res.data);
              $('.list_r em').html(`${res.total}`); 
        
        //生成分页
        var page_len=Math.ceil(res.total/pageSize);
        //底下的页码
          page.innerHTML='';
          for(var i=0;i<page_len;i++){
            var span=document.createElement('span');
            span.innerText=i+1;
            if(i+1===currentPage){
              span.className='active';
            }
            page.appendChild(span);        
        }
          })
}
 var flag=false;
    function ss(){
        if(flag){
         currentPage=1;
        ab(); 
         page.onclick=function(e){
          if(e.target.tagName.toLowerCase() === 'span'){
            currentPage=e.target.innerText*1;
              ab(); 
            }
        }            
        chuan();
        $('.tops').css("display","block")
         $('.xia').css("display","none")
        }
        else{
            currentPage=1;
            sun();
            $('.page').click(function(e){
                if(e.target.tagName.toLowerCase() === 'span'){
                     currentPage=e.target.innerText*1;
               sun(); 
            }
        })  
        chuan();
          $('.xia').css("display","block")
            $('.tops').css("display","none")
      }
      flag=!flag
       
    }
    px.onclick=ss
 //    console.log(flag)

    aa();
    // chuan()  
    function chuan(){
      var imgR=document.getElementsByClassName('imgR');
        // console.log(imgR)
        for(let i=0;i<imgR.length;i++){
            imgR[i].onclick=()=>{
            chuanCan(i,list);
            }
        }
    }
    function chuanCan(idx,data){
        var str='';
        for(var arr in data[idx]){
            str+=arr+'='+encodeURI(data[idx][arr])+'&';
        }
        //去除多余的&
        str=str.slice(0,-1);
        // 跳转页面
        console.log(str);
        location.href='goods.html?'+str;
    }
    function aa(){
          var html ='<ul>'
          for(var i=0;i<list.length;i++){
              html+='<li data-gid="'+ list[i].id+'">'+
                '<img src="'+ list[i].imgurl +'" class="imgR">'+
                '<div class="list1">'+list[i].describe+ '</div>'+'<div class="clearfix">'+
                '<span class="list2">'+list[i].price+'</span>'+
                '<span class="list3">'+list[i].sales+'</span>'+
                '<div class="list4">'+list[i].news+'</div></div>'+
                '<div class="list5"><span>加入购物车</span></div>'+
                '</li>';
            }
              html+='</ul>';
              List.innerHTML=html ;
        }
    })
})