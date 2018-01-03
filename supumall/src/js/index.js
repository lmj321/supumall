require(['config'],function(){
  require(['jquery','header_footer','carousel'],function($,home,carousel){

    $("#carousel_1").FtCarousel();
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
                        </li>`
            }).join('');

        $('.main_middle ul').append(ul);
    })   
  })
})