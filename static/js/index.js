$(function(){
    $('.submitWeCharPayment').eq(0).click(function(){
        let  Extend1 = $('.Extend1').val();
        let  Extend7 = $('.Extend7').val();
        let  Extend8 = $('.Extend8').val();
        let  Extend3 = $('.Extend3').is(':checked');
        let  Extend4 = $('.Extend4').is(':checked');
        let checked = Extend3 || Extend4;
        let Extend5 = $('.Extend5').val();
        let Extend6 = $('.Extend6').val();
        if( Extend1 != '' && checked && Extend5 != '请选择' & Extend6 != '' ){
            $('.no-finished-must').hide();
            $.ajax({
                type:'GET',
                url:'http://dbcache4.api.huiyiguanjia.com/dbcache4/dbcache/Setdbcache',
                data:{
                    key:'wechatpay_setting',
                    value:'{"Extend1":""+Extend1+"","Extend2":""+Extend6+"","Extend3":""+Extend8+"","Extend4":""+Extend7+""}',
                    tokenid:'b01a5163-8aca-492b-baf5-ffd38a87ba29',
                    mid:'4900310296747830231'
                },
                success:function(data){
                    if(data.Enum == 1){
                        console.log('保存成功');
                    }
                }
            })
        }else{
            $('.no-finished-must').show();
        }
    });
})