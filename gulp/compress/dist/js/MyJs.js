var myfun={dofun:function(){this.paly()},paly:function(){var s=0;$(".btn").on("click",function(){s=5===++s?0:s,$(".shape li").eq(s).addClass("oncolumn").siblings().removeClass("oncolumn"),$(".txtlist li").eq(s).addClass("showCon").siblings().removeClass("showCon"),$(".txtConList p").eq(s).addClass("showTxt").siblings().removeClass("showTxt")}),$(".shape li").on("mouseover",function(){s=$(this).index(),$(this).addClass("oncolumn").siblings().removeClass("oncolumn"),$(".txtConList p").eq(s).addClass("showTxt").siblings().removeClass("showTxt"),$(".txtlist li").eq(s).addClass("showCon").siblings().removeClass("showCon")})}};