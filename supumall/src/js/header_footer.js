require(['jquery'],function($){

        $('#Head').load('../html/header_footer.html #header',function(){

            var username = sessionStorage.getItem("key"); 
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

        $('.btn').click(function(){
          
            var serch =$('.input').val()
        
            $.post('../api/serch.php',{'serch':serch},function(result){
                       console.log(result)  

                sessionStorage.setItem("key1", result);
                location.href='http://localhost:1234/html/list.html'  
                })
            })
        });
   
        $('#Foot').load('../html/header_footer.html #footer');
    
        $('#Aside').load('../html/header_footer.html #aside');

});