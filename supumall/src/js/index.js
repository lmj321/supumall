require(['config'],function(){
  require(['jquery'],function($){
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
        console.log(ul)
        $('.main_list ul').append(ul);
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
        console.log(ul)
        $('.main_middle ul').append(ul);
    })


  })
})