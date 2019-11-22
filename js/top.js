// $(function(){
//     $(".mainSite").css("display", "none");});

//     $(function(){
//         $(".mainSite").css({opacity:'0'});
//         setTimeout(function(){
//         $(".mainSite").css("display", "block");
//         $(".mainSite").stop().animate({opacity:'1'},1000);
//         },3000);
//     });

/*
$(function () {
    $(".mainSite").css("display", "none");//アニメーション中は非表示

});
*/

$(function () {
    setTimeout(function () {
        // $(".mainSite").stop().animate({ opacity: '1' }, 1000);//1秒かけてコンテンツを表示
        $(".mainSite").css("opacity", "1");
    }, 6000);//約4秒後に
});
