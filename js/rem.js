// JavaScript Document

var rem = 100;
(function(doc, win) {
    var docEl = doc.documentElement, resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', recalc = function() {
        var w = window.innerWidth/*docEl.clientWidth*/;
        var h = window.innerHeight/*docEl.clientHeight*/;
        try{
            //document.getElementsByTagName('html')[0].style.minHeight = h + 'px';
            //document.getElementsByTagName('body')[0].style.minHeight = h + 'px';
        }catch(e){}

        if (!w)
            return;
        if (w <= h || /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase())) {
            docEl.style.fontSize = rem * (w / 320.0) + 'px';
        } else {
            var w2 = h / 480 * 320;
            docEl.style.fontSize = rem * (w2 / 320.0) + 'px';
            docEl.style.width = w2 + 'px';
            docEl.style['margin'] = '0 ' + (w - w2) / 2 + 'px';
        }
    };
    if (!doc.addEventListener)
        return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
})(document, window);
