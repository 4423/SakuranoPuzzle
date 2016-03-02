// 配列をシャッフルして要素に追加 → フェード表示
// concatで配列のクローンを作成しているので重いかも
$(function() {
    shuffle(img_list.concat()).forEach(function(e,i,a){
        var liStr = "<li>" + '<span hidden>' + img_list.indexOf(e) + '</span>' + '<img src="./img/' + e  + '" />' + "</li>";
        var liObj = $(liStr);
        liObj.delay(i*(60)).css({opacity:'0'}).animate({opacity:'1'},900);        
        $("#sortable-li").append(liObj);
    })
});


function shuffle(array) {
  var n = array.length, t, i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }
  return array;
}


var img_list = [
    "sakura_op.mpg_20160117_075019.290.jpg",
    "sakura_op.mpg_20160117_075049.610.jpg",
    "sakura_op.mpg_20160117_075057.594.jpg",
    "sakura_op.mpg_20160117_075057.595.jpg",
    "sakura_op.mpg_20160117_075208.322.jpg",
    "sakura_op.mpg_20160117_075227.625.jpg",
    "sakura_op.mpg_20160117_075423.129.jpg",
    "sakura_op.mpg_20160117_075425.673.jpg",
    "sakura_op.mpg_20160117_075425.674.jpg",
    "sakura_op.mpg_20160117_075446.305.jpg",
    "sakura_op.mpg_20160117_075547.513.jpg",
    "sakura_op.mpg_20160117_075551.545.jpg",
    "sakura_op.mpg_20160117_075552.594.jpg",
    "sakura_op.mpg_20160117_075604.497.jpg",
    "sakura_op.mpg_20160117_075802.113.jpg",
    "sakura_op.mpg_20160117_075817.553.jpg",
    "sakura_op.mpg_20160117_075855.961.jpg",
    "sakura_op.mpg_20160117_075923.289.jpg",
    "sakura_op.mpg_20160117_075941.553.jpg",
    "sakura_op.mpg_20160117_080114.257.jpg",
    "sakura_op.mpg_20160117_080237.421.jpg",
    "sakura_op.mpg_20160117_080238.311.jpg",
    "sakura_op.mpg_20160117_080239.037.jpg",
    "sakura_op.mpg_20160117_080239.796.jpg",
    "sakura_op.mpg_20160117_080240.721.jpg",
    "sakura_op.mpg_20160117_080241.644.jpg",
    "sakura_op.mpg_20160117_080242.372.jpg",
    "sakura_op.mpg_20160117_080557.569.jpg",
    "sakura_op.mpg_20160117_080606.641.jpg",
    "sakura_op.mpg_20160117_080650.258.jpg",
    "sakura_op.mpg_20160117_080652.105.jpg",
    "sakura_op.mpg_20160117_080654.441.jpg",
    "sakura_op.mpg_20160117_080659.361.jpg",
    "sakura_op.mpg_20160117_080701.441.jpg",
    "sakura_op.mpg_20160117_080825.864.jpg",
    "sakura_op.mpg_20160117_080829.144.jpg",
    "sakura_op.mpg_20160117_080857.992.jpg",
    "sakura_op.mpg_20160117_080910.336.jpg",
    "sakura_op.mpg_20160117_080918.329.jpg",
    "sakura_op.mpg_20160117_080925.752.jpg",
    "sakura_op.mpg_20160117_081007.528.jpg",
    "sakura_op.mpg_20160117_081025.736.jpg",
    "sakura_op.mpg_20160117_081040.256.jpg",
    "sakura_op.mpg_20160117_081050.166.jpg",
    "sakura_op.mpg_20160117_081147.456.jpg",
    "sakura_op.mpg_20160117_081159.864.jpg",
    "sakura_op.mpg_20160117_081206.864.jpg",
    "sakura_op.mpg_20160117_081217.600.jpg",
    "sakura_op.mpg_20160117_081218.462.jpg",
    "sakura_op.mpg_20160117_081220.195.jpg",
    "sakura_op.mpg_20160117_081430.784.jpg",
    "sakura_op.mpg_20160117_081433.472.jpg",
    "sakura_op.mpg_20160117_081437.168.jpg",
    "sakura_op.mpg_20160117_081456.744.jpg",
    "sakura_op.mpg_20160117_081636.695.jpg",
    "sakura_op.mpg_20160117_081725.808.jpg"
];