require(['config'],function(){
    require(['jquery','header_footer','parabola'],function($,header_footer,parabola){
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

        var car_qty = sessionStorage.getItem("car_qty");
        $('.count').text(car_qty);
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
                console.log($('.list4'))
                for(i=0;i<$('.list4').length;i++){
                if($('.list4').get(i).innerHTML=="null"){
                    $('.list4').get(i).innerHTML=='';
                    }
                }
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
            }else{
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
                '<div class="list5"><span class="gw">加入购物车</span></div>'+
                '</li>';
            }
            html+='</ul>';
            List.innerHTML=html ;
        }

       

        var eleFlyElement = document.querySelector("#flyItem");

        var b =document.querySelector('#aside')
        eleShopCart = document.querySelector(".shoppingCar");
        console.log(b)
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
        console.log(eleFlyElement);
        console.log(eleShopCart);
        var username = sessionStorage.getItem("key"); 
        // 绑定点击事件
        if (eleFlyElement && eleShopCart) {
            console.log(666)
            $('#list').click(function(e) {
              // 滚动大小
                if(e.target.className.toLowerCase() === 'gw'){
                    var imgurl=e.target.parentNode.parentNode.children[0].src;
                    var content=e.target.parentNode.parentNode.children[1].innerText;
                    var price=e.target.parentNode.previousSibling.children[0].innerText;
                    var sales =e.target.parentNode.previousSibling.children[1].innerText;
                    console.log(price)
                    qty=1;
                    console.log(content)
                    if(username==null){
                        alert('你还未登录，请登录')
                        location.href='login.html'
                    }else{
                        $.post('../api/carinser.php',{
                        imgurl:imgurl,content:content,username:username,price:price,sales:sales,qty:qty
                        },function(res){
                            console.log(res)
                        });
                    }
                    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0,
                      scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
                      eleFlyElement.style.left = event.clientX + scrollLeft + "px";
                      eleFlyElement.style.top = event.clientY + scrollTop + "px";
                      eleFlyElement.style.visibility = "visible";
                  
                    // 需要重定位
                    myParabola.position().move(); 
                    $('#flyItem img').get(0).src=imgurl;
                    
                    $.ajax({
                      type:'POST',
                      url:'../api/goods.php',
                      data:{sql:'select * from car'},
                      success:function(res){
                        res=JSON.parse(res);

                        var car_qty=0;
                        res.map(function(item){
                          car_qty+=Number(item.qty);
                        })
                        console.log(car_qty)
                        sessionStorage.setItem("car_count", car_qty); 
                         $('.count').text(car_qty)
                       }
                    });
                }    
            });
        }
        var car_count = sessionStorage.getItem("car_count");
        $('.count').text(car_count);


        var result= sessionStorage.getItem("key1"); 
        //     var site = localStorage.getItem("site");
        console.log(result);
        if(result){
            $('#list').html('');
            list=JSON.parse(result)
            console.log(list)
            aa()
            sessionStorage.removeItem("key1"); 
        }
    })
})