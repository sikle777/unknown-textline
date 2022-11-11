$(document).ready(function(){

//당연하지만 웹의 매체를 빌린 이 글줄의 기반은 계속해서 수정됩니다.
//코드가 정리되지 않아 복잡합니다. 
//언젠간 정리되기를 기원합니다.
$(".fake_text").click(function(){
    $(".about").css({
        'display' : 'none'
    })
    var backspace = jQuery.Event( "keydown", { keyCode: 8 } );
    $(this).trigger( backspace );
});


$(function (){
    $(".fake_text").on("propertychange change keyup keydown paste input", function (){check()});
})

var txt = " "; 
//txt is reg exp

function check(){
    var txtarea = $(".fake_text");
    var val = $(txtarea).val();

    if(val.match('^'+txt)){
        //do nothing
    }
    else
    {
        $(txtarea).val(txt);
    }
}


function printName()  {
    var typing = document.getElementById('typing').value;
    
}

    
//입력내용 적용

var cnt = 1;

$(document).on("propertychange change keyup keydown paste input",function(){

   
    
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)

    var colors = [
        'black',
        'red'
    ];

    function random (a) {
        return a[Math.floor(Math.random() * a.length)];

    }

    function getAreaColors() {
        var color = '#FFF';
        for (var i = 0; i < 3; i++) {
            color += Math.floor(Math.random() * 10);
        }
        return color ;
    }
    //색상범위지정


    function randomString() {
        var code = '#';
        var chars = "abcdef3456";
        var string_length = 6;
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
        }
        return code + randomstring;
    }
    //파스텔톤

    for (var i = 1; i <= cnt; i++){
    
        $(".text"+i).text(typing.value[i-1]);
        $(".text"+i).css({
            'font-size' : [$(".on_textdiv"+i).width() * 0.9] + 'px',
            'transform' : 'scale(' + 1 + ',' + $(".on_textdiv"+i).height()/$(".on_textdiv"+i).width() + ')'
        })



        $(window).resize(function() {
            $(".text"+i).css({
                'font-size' : $(".on_textdiv"+i).width() + 'px',
                'transform' : 'scale(' + 1 + ',' + $(".on_textdiv"+i).height()/$(".on_textdiv"+i).width() + ')'    
            })
        })
        };
    //문자반영


    if (typing.value[i-1] === undefined) {
        $(".on_textdiv"+i).remove();
        $(".text"+i).remove();
        
    }
    else {
        var $newDiv = $("<div/>")
            .addClass("on_textdiv")
            .addClass("on_textdiv"+i)
        
        var $newText = $("<div/>")
            .addClass("text")
            .addClass("text"+i)



    
            
    if ($(".on_textdiv"+i).length > 0) {
        
    }

    else{

        // typing.value.match(/\s/g).length

        var space = /\s/g;
        var spaceMatch = typing.value.match(space);
        var spaceLength = spaceMatch.length;

        var $newFrame = $("<div/>")
        .addClass("frame")
        .addClass("frame"+spaceLength)

        var $flex1 = $("<div/>")
        .addClass("flex")
        .addClass("flex1")
        .addClass("flex_c")







        if (spaceLength > 1) {



            var k = 2;

            if(spaceLength % 2 == 0){
            //짝수(수직)

                if($(".flex1").length > 0){

                }
                else{
                    $(".frame1").wrap($flex1)    
                }
                //flex1 생성


                if($(".flex"+(spaceLength-1)).length > 0){
                }
                else {
                    $(".flex"+(spaceLength-2)).wrap("<div class='flex flex"+(spaceLength-1)+" flex_c'>")            
                }
                if($(".frame"+spaceLength).length > 0){

                }
                else {
                    
                    $(".flex"+(spaceLength-1)).append($newFrame);
                }


                $(".frame"+spaceLength).append($newDiv);


                    for(var x=1; x<=spaceLength; x++){

                        var parentsCLength = $(".frame"+x).parents(".flex_c").length;
                        var flexParentsCLength = $(".flex"+x).parents(".flex_c").length;

                        $(".frame"+x).css({
                            'height' : '100'/[k**parentsCLength] + 'vh'
                        });
                        $(".frame"+x).children(".on_textdiv").css({
                            'height' : '100'/[k**parentsCLength] + 'vh', 
                            'border-radius' : '75'/[k**parentsCLength] + 'px'
                        });
                        $(".flex"+x).css({
                            'height' : '100'/[k**flexParentsCLength] + 'vh'
                        });
                        //생성
                    }
                    
            }
            else {
            //홀수(수평)

                if($(".flex"+(spaceLength-1)).length > 0){

                }
                else {
                    $(".flex"+(spaceLength-2)).wrap("<div class='flex flex"+(spaceLength-1)+" flex_r'>")            
                }
                if($(".frame"+spaceLength).length > 0){

                }
                else {
                    
                    $(".flex"+(spaceLength-1)).append($newFrame);
                }


                $(".frame"+spaceLength).append($newDiv);

                    for(var y=1; y<=spaceLength; y++){

                        var parentsRLength = $(".frame"+y).parents(".flex_r").length;
                        var flexParentsRLength = $(".flex"+y).parents(".flex_r").length;

                        $(".frame"+y).css({
                            'width' : '100'/[k**parentsRLength] + 'vw'
                        })
                        $(".frame"+y).children(".on_textdiv").css({
                            'width' : '100'/[k**parentsRLength] + 'vw',
                            'border-radius' : '75'/[k**parentsCLength] + 'px'
                        })
                        $(".flex"+y).css({
                            'width' : '100'/[k**flexParentsRLength] + 'vw'
                        })       
                        //생성
                        
                        
                        // var FrameChildText = $(".frame"+y).children(".on_textdiv").children(".text").length;

                        // if(FrameChildText == 0){
                        //     $(".frame"+y).css({
                        //         'width' : '0vw'
                        //     });
                        //     $(".frame"+y).children(".on_textdiv").css({
                        //         'width' : '0vw' 
                        //     });
                        //     $(".flex"+y).css({
                        //         'width' : '0vw'
                        //     });
                        // }

                    }
            }
            
        }
        


        else {
            $(".frame1").append($newDiv);
        }

        $(".on_textdiv"+i).css({
            'background-color' : randomString(),
            'color' : 'black'
        })

        // if(i % 2 ==0){
        //     $(".on_textdiv"+i).css({
        //         'background-color' : 'black',
        //         'color' : 'white'
        //     })
        // }
        // else{
        //     $(".on_textdiv"+i).css({
        //         'background-color' : 'white',
        //         'color' : 'black'
        //     })
        // }
        //텍스트div 흑백

        // if(spaceLength % 2 ==0){
        //     $(".frame"+spaceLength).css({
        //         'background-color' : 'black',
        //         'color' : 'white'
        //     })
        // }
        // else{
        //     $(".frame"+spaceLength).css({
        //         'background-color' : 'white',
        //         'color' : 'black'
        //     })

        // }
        //프레임div 흑백
        $(".on_textdiv"+i).append($newText);
    }
    }
    
    cnt = typing.value.length;

    //
});



});

