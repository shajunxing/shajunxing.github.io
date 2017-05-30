document.addEventListener("DOMContentLoaded", function (event) {
    if (!location.search) {
        // 默认页
        load('blog.html');
    } else {
        load(parseQueryString()['load']);
    }
});

function search(e) {
    // 百度站内搜索
    var key = e.which || e.keyCode;
    if (key == 13) {
        window.open('http://www.baidu.com/s?wd=' + e.target.value + ' site:shajunxing.github.io');
    }
}

function load(url) {
    // 通过Ajax加载页面片段到<article>内
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementsByTagName('article')[0].innerHTML = xhr.responseText;
        }
    }
    console.log(encodeURIComponent(url));
    xhr.open("GET", encodeURIComponent(url), true);
    xhr.setRequestHeader('Content-type', 'text/html');
    xhr.send();
}

function parseQueryString() {
    // 解析查询字符串
    var query = window.location.search.substring(1);
    if (query.substring(query.length - 1, query.length) == '/') {
        query = query.substring(0, query.length - 1);
    }
    var vars = query.split('&');
    ret = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        ret[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return ret;
}