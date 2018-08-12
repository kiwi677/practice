//li动态变化
function rotateZ(ele, deg){
    $(ele).css({transform :'rotateZ('+ deg + 'deg)' })
    .find('label').css({transform : 'rotateZ('+ -deg +'deg)'})

}
// 展示、隐藏li
function changeOptions(ele){
    var $wrapper = $(ele).parent();//选出父元素selectot
    $wrapper.toggleClass('open'); //给父元素设置上open类名
    var $li = $wrapper.find('li');//选出所有的li
    var len = $li.length;//算出间距角度
    var deg = 360/len;
    for(var i = 0; i < len; i ++){
        var d = i * deg;//算出每个li所在的角度deg
        $wrapper.hasClass('open') ? rotateZ($li[i], d) : rotateZ($li[i], -360)
    }
}

$('button').click(function(){
    changeOptions(this);
})
setTimeout(function(){
    changeOptions('.wrapper button')
},600)

