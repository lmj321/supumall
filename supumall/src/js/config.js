require.config({
    // baseUrl:
    
    // 配置短路径（别名）
    paths:{
        jquery:'../lib/jquery-3.2.1',
        carousel:'../lib/carousel.min'  
    },

    // 配置依赖
    shim:{
        carousel:['jquery']
    }
});