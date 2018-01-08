require(['config'],function(){
  require(['jquery','header_footer','carousel'],function($,head_foot,carousel){

    // $('#Head').load('../html/header_footer.html #header');
   
    // $('#Foot').load('../html/header_footer.html #footer');
    
    // $('#Aside').load('../html/header_footer.html #aside');
    $("#carousel_1").FtCarousel();

    var time_now =document.querySelector('.time_now');
    function chuanCan(idx,data){
        var str='';
        for(var arr in data[idx]){
            str+=arr+'='+encodeURI(data[idx][arr])+'&';
        }
        //去除多余的&
        str=str.slice(0,-1);
        // 跳转页面
        console.log(str);
        location.href='html/goods.html?'+str;
    }
    function chuancan(idx,data){
        var str='';
        for(var arr in data[idx]){
            str+=arr+'='+encodeURI(data[idx][arr])+'&';
        }
        //去除多余的&
        str=str.slice(0,-1);
        // 跳转页面
        console.log(str);
        location.href='html/list.html?'+str;
    }
    $.post('http://localhost:1234/api/goods.php',{sql:"select * from goods"},res=>{
        res=JSON.parse(res);
        let ul=res.map(function(item){
            return `<li>
                        <div>
                            <img src="${item.imgurl}">
                        </div>
                        <div class="describe">
                            <a>${item.describe}
                            </a>
                        </div>
                        <div class="price">${item.price}
                        </div>
                        <div class="sales">${item.sales}
                        </div>
                    </li>`
            }).join('');
        $('.main_list ul').append(ul);
        var List=$('.List img')
        console.log(List)
        for(let i=0;i<List.length;i++){  
            List.get(i).onclick=function(){
                chuanCan(i,res)
            }
        }
    })
    // var username= aaaa;
    // sessionStorage.setItem("key", 'username'); 
    // localStorage.setItem("site", "js8.in");

     $.post('http://localhost:1234/api/goods.php',{sql:"select * from sale"},res=>{
        res=JSON.parse(res)
        console.log(res);
        let ul=res.map(function(item){
                return `<li>
                            <div class="sale_list">
                                <div class="picture">
                                    <img src="${item.imgurl}">
                                    <div class="hidden">
                                        <h2>
                                            <img src="${item.imgurls}"class="fl">
                                        </h2>
                                        <h3>
                                            <span class="fl">
                                                ${item.introduce}
                                            </span>
                                        </h3>
                                        <p>
                                            ${item.news}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="position"></div>
                        </li>`
            }).join('');
            $('.main_middle ul').append(ul);
            var  position =document.querySelectorAll('.position');
            console.log(position);
        
 var end = '2018-9-28 14:49:50';
        var timer = setInterval(groupBuy,1000);
            groupBuy()
            function groupBuy(){
                // 每秒计算差值,得到秒数
                var offset = Math.floor((Date.parse(end) - Date.now())/1000);

                // 5）倒计时结束时，处理
                if(offset<=0){
                    clearInterval(timer);
                }

                 secLeft = offset%60;
                 minLeft = Math.floor(offset/60)%60;
                 hourLeft = Math.floor(offset/60/60)%24;
                 day = Math.floor(offset/60/60/24);

                // 补0操作
                secLeft = (secLeft<10 ? '0' : '') + secLeft;
                minLeft = (minLeft<10 ? '0' : '') + minLeft;
                hourLeft = (hourLeft<10 ? '0' : '') + hourLeft;

                // 4）拼接时间格式，写入页面
                time_now.innerHTML = '距离本场结束还剩'+hourLeft + '时' + minLeft + '分' + secLeft + '秒';
                for(i=0;i<position.length;i++){
                    position[i].innerHTML='还有:'+day+'天'+hourLeft + '时' + minLeft + '分' + secLeft + '秒结束'
                }
            }

        var Lists=$('.picture>img')
        console.log(Lists)
        for(let i=0;i<Lists.length;i++){  
            Lists.get(i).onclick=function(){
                chuancan(i,res)
            }
        }
    }) 

            
  })
})