define(function (require, exports, module) {
    require("views/youpin/src/css.css");
    var sTpl = require("views/youpin/markitem.html");
    var iPublic = require("components/public.js");
    var API_GET = iPublic.API_GET;

    var index = Vue.extend({
		template: sTpl,
        data:function () {
            return{
                list:[]
            }
        },
        created:function(){
            //设置返回键
            this.$root.$children[0].showgoback = true;
            this.$root.setTitle('持标明细');
            //设置背景
            this.$root.bodyColor='youpinG';

        }
    });

    module.exports = index;
});
