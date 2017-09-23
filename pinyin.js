var pinyin	=	require("pinyin");
var woshinidaye =	pinyin("我是一个有钱人!", {
        style: pinyin.STYLE_NORMAL,
        // 设置拼音风格
        heteronym: true
});
//var wostring	=	woshinidaye.tostring();
//https://github.com/hotoo/pinyin
console.log(woshinidaye);
