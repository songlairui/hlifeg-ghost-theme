/**
 * Created by cnre on 2016/10/24.
 */
(function(){
    var timer=false;
    var boundary=162;
    var s = document.getElementById('FixedTopBar').style;
    var s1 = document.getElementById('scroll2Top').style;
    window.onscroll = function(ev) {
        if(window.scrollY<boundary){
            if(s.opacity!=0){s.opacity=0;};
            if(s1.opacity!=0){s1.opacity=0;};
            clearTimeout(timer);
            timer=setTimeout(
                function(){
                    (s.display!='none')?s.display='none':null;
                    (s1.display!='none')?s1.display='none':null;
                },600);
            //timer='aa';
            //console.log(timer);
        }else{
            //console.log(timer);
            if(timer){clearTimeout(timer)};
            (s.display!='block')?s.display='block':null;
            (s1.display!='block')?s1.display='block':null;
            timer=setTimeout(
                function(){
                    (s.opacity!=1)?s.opacity=1:null;
                    (s1.opacity!=1)?s1.opacity=1:null;
                },0);
        }
    };
})();