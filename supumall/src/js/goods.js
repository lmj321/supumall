require(['config'],function(){
  require(['jquery','header_footer','blowup'],function($,home,blowup){
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
        $('.describe').html(date.describe);
        $('img').get(0).src=date.imgurl;
        $('.goods_r_m1').html(date.news);
        $('.goods_r_m3').html(date.describe);
        $('.goods_sale2').html(date.price);
        $('.goods_sale4').html(date.sales);
        var now_price=date.sales*1-date.price*1;
        console.log(now_price)
        $('.save').html(now_price.toFixed(1));


  $.fn.blowup = function (attributes) {

    var $element = this;

    // If the target element is not an image
    if (!$element.is("img")) {
      console.log("%c Blowup.js Error: " + "%cTarget element is not an image.", 
        "background: #FCEBB6; color: #F07818; font-size: 17px; font-weight: bold;",
        "background: #FCEBB6; color: #F07818; font-size: 17px;");
      return;
    }

    // Constants
    var $IMAGE_URL    = $element.attr("src");
    var $IMAGE_WIDTH  = $element.width();
    var $IMAGE_HEIGHT = $element.height();
    var NATIVE_IMG    = new Image();
    NATIVE_IMG.src    = $element.attr("src");

    // Default attributes
    var defaults = {
      round      : true,
      width      : 300,
      height     : 300,
      background : "#FFF",
      shadow     : "0 8px 17px 0 rgba(0, 0, 0, 0.2)",
      border     : "3px solid #FFF",
      cursor     : true,
      zIndex     : 999999
    }

    // Update defaults with custom attributes
    var $options = $.extend(defaults, attributes);

    // Modify target image
    $element.on('dragstart', function (e) { e.preventDefault(); });
    $element.css("cursor", $options.cursor ? "crosshair" : "none");

    // Create magnification lens element
    var lens = document.createElement("div");
    lens.id = "BlowupLens";

    // Attack the element to the body
    $("body").append(lens);

    // Updates styles
    $blowupLens = $("#BlowupLens");

    $blowupLens.css({
      "position"          : "absolute",
      "visibility"        : "hidden",
      "pointer-events"    : "none",
      "zIndex"            : $options.zIndex,
      "width"             : $options.width,
      "height"            : $options.height,
      "border"            : $options.border,
      "background"        : $options.background,
      "border-radius"     : $options.round ? "50%" : "none",
      "box-shadow"        : $options.shadow,
      "background-repeat" : "no-repeat",
    });

    // Show magnification lens
    $element.mouseenter(function () {
      $blowupLens.css("visibility", "visible");
    })

    // Mouse motion on image
    $element.mousemove(function (e) {

      // Lens position coordinates
      var lensX = e.pageX - $options.width / 2;
      var lensY = e.pageY - $options.height / 2;

      // Relative coordinates of image
      var relX = e.pageX - this.offsetLeft;
      var relY = e.pageY - this.offsetTop;
     
      // Zoomed image coordinates 
      var zoomX = -Math.floor(relX / $element.width() * NATIVE_IMG.width - $options.width / 2);
      var zoomY = -Math.floor(relY / $element.height() * NATIVE_IMG.height - $options.height / 2);

      // Apply styles to lens
      $blowupLens.css({
        left                  : lensX,
        top                   : lensY,
        "background-image"    : "url(" + $IMAGE_URL + ")",
        "background-position" : zoomX + " " + zoomY
      });

    })

    // Hide magnification lens
    $element.mouseleave(function () {
      $blowupLens.css("visibility", "hidden");
    })

  }
        $('.Img').blowup({
             background : "#ccc"
            });
    })
})