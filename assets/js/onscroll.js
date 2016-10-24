/**
 * Created by cnre on 2016/10/24.
 */
(function(){
    var timer=false;
    var boundary=162;
    var s = document.getElementById('FixedTopBar').style;
    window.onscroll = function(ev) {
        if(window.scrollY<boundary){
            if(s.opacity!=0){s.opacity=0;};
            clearTimeout(timer);
            timer=setTimeout(
                function(){
                    (s.display!='none')?s.display='none':null;
                },600);
            //timer='aa';
            //console.log(timer);
        }else{
            //console.log(timer);
            if(timer){clearTimeout(timer)};
            (s.display!='block')?s.display='block':null;
            timer=setTimeout(
                function(){
                    (s.opacity!=1)?s.opacity=1:null;
                },0);
        }
    };
})();