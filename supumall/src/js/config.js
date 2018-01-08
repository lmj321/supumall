require.config({
    // baseUrl:
    
    // 配置短路径（别名）
    paths:{
        jquery:'../lib/jquery-3.2.1',
        parabola:'../lib/parabola',
        carousel:'../lib/carousel.min',
       gdsZoom:'../lib/jquery.gdsZoom' ,
       head_foot:'../js/head_foot' ,
       gdsZoom:'../lib/jquery-gdsZoom/jquery.gdsZoom'
    },

    // 配置依赖
    shim:{
        carousel:['jquery'],
         gdsZoom:['jquery'],
         head_foot:['jquery'],
         gdsZoom:['jquery']
    }
});