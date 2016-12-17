/*
组件详情 内在灵魂，沉稳坚毅
 生成时间：Sat Dec 17 2016   破门狂人R2-D2为您服务！
*/
define('details',[
    'avalon',
    'text!../../package/details/details.html',
    'css!../../package/details/details.css'
], function (avalon, html, css) {
    var vm=avalon.define({
        $id:"details",
        ready: function (i) {
            var obj=''
            if(obj!=""){
                require(['../../obj/Management/'+obj+'.js'], function () {
                    start()
                })
            }else{
                start()
            }

            function start(){
                vm.reset()
                index.html=html

                //以及其他方法
            }


        },
        reset: function () {
            avalon.mix(vm,{
                //要重置的东西最后都放回到这里
            })
        },

    })
    return window[vm.$id]=vm
})