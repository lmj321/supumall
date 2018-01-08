jQuery(function($){

    $('.btn').click(function(){
        var  username= $('.phone input').val();
    var password =$('.password input').val();
        console.log(username)
        console.log(password)
        $.post('http://localhost:1234/api/login.php',{username:username,password:password},function(res){
            console.log(res)
             if(res==='fail'){
                alert('登录名或密码错误')
             }
             if(res==='success'){
                console.log(res)
                 window.onbeforeunload = function() { 
                 return "登录成功，是否离开当前页面?";
               }
                sessionStorage.setItem("key", username); 
               location.href='http://localhost:1234'
             }
        })
    })

})