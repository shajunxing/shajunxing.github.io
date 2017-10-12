function search(e) {
    // 百度站内搜索
    var key = e.which || e.keyCode;
    if (key == 13) {
        window.open('http://www.baidu.com/s?wd=' + e.target.value + ' site:shajunxing.github.io');
    }
}
