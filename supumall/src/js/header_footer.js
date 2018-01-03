require(['jquery'],function($){

        $('#Head').load('../html/header_footer.html #header');
        // if($('#Foot')[0]===undefined){
        //     $('#Foot1').load('../html/head_foot.html #foot1');
            
        // }else{
            $('#Foot').load('../html/header_footer.html #footer');
        // }
        $('#Aside').load('../html/header_footer.html #aside')
    });