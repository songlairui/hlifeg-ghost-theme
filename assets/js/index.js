/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

            allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({ scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({ scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({ scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);

/* 将缩略图图片显示成完整图片*/
// 图片添加 左右滑动事件 
(function () {
    var pool = document.getElementsByClassName('post-content')[0];
    if (pool) {
        var targets = pool.getElementsByTagName('img');
        for (var i = 0; i < targets.length; i++) {
            // 使用图片占位符方式
            (function (i) {
                // 添加 滑动 事件
                var mc = new Hammer(targets[i])
                mc.on('swipeleft', function (ev) {
                    // console.log('swipeleft', 'do thing 1')
                    // 左滑，上一页
                    var to = document.querySelector('a.read-next-story')
                    if(to)
                        to.click()
                    else 
                        console.info('没有上一页')
                })
                mc.on('swiperight', function (ev) {
                    // console.log('swiperight', 'do thing 2')
                    // 右滑，下一页
                    var to = document.querySelector('a.read-next-story.prev')
                    if(to)
                        to.click()
                    else 
                        console.info('没有下一页')
                })
                // 图片占位
                var url_thumb = targets[i].src
                var url_large = url_thumb.replace(/\?imageView2\S+/g, '');
                var tmpImg = document.createElement('img')
                tmpImg.src = url_large
                tmpImg.onload = function () {
                    // 占位图片加载完毕
                    targets[i].src = url_large
                }
            })(i)
            // targets[i].src=targets[i].src.replace(/\?imageView2\S+/g,'');
        }
    }
})();