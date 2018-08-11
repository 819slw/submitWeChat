$(function(){


    function input(a){   //   1    7     6
        return `<div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">`+a.Explan+`</label>
                    <div class="col-sm-10">
                        <div class="flex-sp-bt">
                            <input type="email" class="form-control Extend1" placeholder="`+a.Remark+`">
                            <button type="button" class="btn btn-danger">必填</button>
                        </div>
                        <p>说明：这个是单行输入框，用于输入</p>
                    </div>
                </div>`;
    }

    function textarea(a){      //    2
        return `<div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">`+a.Explan+`</label>
                    <div class="col-sm-10">
                        <textarea class="form-control Extend8" rows="4" placeholder="`+a.Remark+`"></textarea>
                        <p>说明：这个是单行输入框，用于输入</p>
                    </div>
                </div>`;
    }    
             
    
    function radioBox(a){      //    3
        let str = '';
        a.OptionValue.forEach((e,i)=>{
            str += `<div class="radio">
            <label>
                <input type="radio" name="optionsRadios" value="option1" checked>`+e.name+`
            </label>
        </div>`;
        });
        return `			<div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">单选按钮</label>
        <div class="col-sm-10">
            <div class="flex-sp-bt">
                <div>
                    `+str+`
                </div>
                <button type="button" class="btn btn-danger">必填</button>
            </div>
            <p>说明：这个是单行输入框，用于输入</p>
        </div>
    </div>`;
    }  

    function checkBox(a){      //    4
        let str = '';
        a.OptionValue.forEach((e,i)=>{
            str += `<div class="checkbox">
                        <label>
                            <input type="checkbox" class="Extend3" value=""> `+e.Name+`
                        </label>
                    </div>`;
        });
        return `<div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">多选按钮</label>
                <div class="col-sm-10">
                    <div class="flex-sp-bt">
                        <div>
                            `+str+`
                        </div>
                        <button type="button" class="btn btn-danger">必填</button>
                    </div>
                    <p>说明：这个是单行输入框，用于输入</p>
                </div>
            </div>`;
    }  

    function select(a){      //    5
        let str = '';
        a.OptionValue.forEach((e,i)=>{
            str += `<option value="`+e.Name+`">`+e.Name+`</option>`;
        });
        return `<div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">下拉菜单</label>
                    <div class="col-sm-10">
                        <div class="flex-sp-bt">
                            <select class="form-control Extend5">
                                <option value="请选择">请选择</option>
                                `+str+`
                            </select>
                            <button type="button" class="btn btn-danger">必填</button>
                        </div>
                        <p>说明：这个是单行输入框，用于输入</p>
                    </div>
                </div>`;
    }  


    var form=[{ 
            "ExtendId":1, 
            "Explan":"微信公众号AppID", 
            "Remark":"请输入：微信公众号AppID",
            "IsCheck":0, 
            "IsExtend":1, 
            "CreateTime":"2018-08-11T10:19:47.783", 
            "UpdateTime":"2018-08-11T10:19:47.783", 
            "IsDelete":0, 
            "Sort":2, 
            "FieldName":"Extend1", 
            "FieldType":1, 
            "OptionValue":"[]", 
            "IsForManage":0, 
            "DefaultValue":"", 
            "Id":"4620862804785589577" 
            }, 
            { 
            "ExtendId":2, 
            "Explan":"微信商户号MCHID", 
            "Remark":"请输入：微信商户号MCHID", 
            "IsCheck":0, 
            "IsExtend":1, 
            "CreateTime":"2018-08-11T10:19:47.783", 
            "UpdateTime":"2018-08-11T10:19:47.783", 
            "IsDelete":0, 
            "Sort":3, 
            "FieldName":"Extend2", 
            "FieldType":2, 
            "OptionValue":"[]", 
            "IsForManage":0, 
            "DefaultValue":"", 
            "Id":"4664685776034679710" 
            }, 
            { 
            "ExtendId":5, 
            "Explan":"多行文本", 
            "Remark":"请输入：多行文本", 
            "IsCheck":0, 
            "IsExtend":1, 
            "CreateTime":"2018-08-11T10:19:47.783", 
            "UpdateTime":"2018-08-11T10:19:47.783", 
            "IsDelete":0, 
            "Sort":6, 
            "FieldName":"Extend5", 
            "FieldType":2, 
            "OptionValue":"[]", 
            "IsForManage":0, 
            "DefaultValue":"", 
            "Id":"4840151082200093338" 
            }, 
            { 
            "ExtendId":10, 
            "Explan":"日期", 
            "Remark":"请输入：日期", 
            "IsCheck":0, 
            "IsExtend":1, 
            "CreateTime":"2018-08-11T10:19:47.787", 
            "UpdateTime":"2018-08-11T10:19:47.787", 
            "IsDelete":0, 
            "Sort":11, 
            "FieldName":"Extend10", 
            "FieldType":7, 
            "OptionValue":"[]", 
            "IsForManage":0, 
            "DefaultValue":"", 
            "Id":"4853208140648913390" 
            }, 
            { 
            "ExtendId":7, 
            "Explan":"多项选择", 
            "Remark":"", 
            "IsCheck":0, 
            "IsExtend":1, 
            "CreateTime":"2018-08-11T10:19:47.787", 
            "UpdateTime":"2018-08-11T10:19:47.787", 
            "IsDelete":0, 
            "Sort":8, 
            "FieldName":"Extend7", 
            "FieldType":4, 
            "OptionValue":[ 
            { 
            "Id":"4997199472363100902", 
            "Name":"选项1", 
            "IsDelete":0 
            }, 
            { 
            "Id":"5365309316936854547", 
            "Name":"选项2", 
            "IsDelete":0 
            } 
            ], 
            "IsForManage":0, 
            "DefaultValue":"", 
            "Id":"5254227403979853455" 
            }, 
            { 
            "ExtendId":6, 
            "Explan":"单项选择", 
            "Remark":"", 
            "IsCheck":0, 
            "IsExtend":1, 
            "CreateTime":"2018-08-11T10:19:47.783", 
            "UpdateTime":"2018-08-11T10:19:47.783", 
            "IsDelete":0, 
            "Sort":7, 
            "FieldName":"Extend6", 
            "FieldType":3, 
            "OptionValue":[ 
            { 
            "Id":"4796499740530893015", 
            "Name":"选项A", 
            "IsDelete":0 
            }, 
            { 
            "Id":"4881328809004288186", 
            "Name":"选项B", 
            "IsDelete":0 
            } 
            ], 
            "IsForManage":0, 
            "DefaultValue":"", 
            "Id":"5392803356594259493" 
            }, 
            { 
            "ExtendId":3, 
            "Explan":"商户平台API密钥 KEY", 
            "Remark":"请输入：商户平台API密钥 KEY", 
            "IsCheck":0, 
            "IsExtend":1, 
            "CreateTime":"2018-08-11T10:19:47.783", 
            "UpdateTime":"2018-08-11T10:19:47.783", 
            "IsDelete":0, 
            "Sort":4, 
            "FieldName":"Extend3", 
            "FieldType":2, 
            "OptionValue":"[]", 
            "IsForManage":0, 
            "DefaultValue":"", 
            "Id":"5430961425393144038" 
            }, 
            { 
            "ExtendId":9, 
            "Explan":"日期时间", 
            "Remark":"请输入：日期时间", 
            "IsCheck":0, 
            "IsExtend":1, 
            "CreateTime":"2018-08-11T10:19:47.787", 
            "UpdateTime":"2018-08-11T10:19:47.787", 
            "IsDelete":0, 
            "Sort":10, 
            "FieldName":"Extend9", 
            "FieldType":6, 
            "OptionValue":"[]", 
            "IsForManage":0, 
            "DefaultValue":"", 
            "Id":"5448087482725918133" 
            }, 
            { 
            "ExtendId":4, 
            "Explan":"微信公众号APPSECRET", 
            "Remark":"请输入：微信公众号APPSECRET", 
            "IsCheck":0, 
            "IsExtend":1, 
            "CreateTime":"2018-08-11T10:19:47.783", 
            "UpdateTime":"2018-08-11T10:19:47.783", 
            "IsDelete":0, 
            "Sort":5, 
            "FieldName":"Extend4", 
            "FieldType":1, 
            "OptionValue":"[]", 
            "IsForManage":0, 
            "DefaultValue":"", 
            "Id":"5536961966228478917" 
            }, 
            { 
            "ExtendId":8, 
            "Explan":"下拉菜单", 
            "Remark":"", 
            "IsCheck":0, 
            "IsExtend":1, 
            "CreateTime":"2018-08-11T10:19:47.787", 
            "UpdateTime":"2018-08-11T10:19:47.787", 
            "IsDelete":0, 
            "Sort":9, 
            "FieldName":"Extend8", 
            "FieldType":5, 
            "OptionValue":[ 
            { 
            "Id":"4796998959428084297", 
            "Name":"选项a", 
            "IsDelete":0 
            }, 
            { 
            "Id":"5237960959206594187", 
            "Name":"选项b", 
            "IsDelete":0 
            } 
            ], 
            "IsForManage":0, 
            "DefaultValue":"", 
            "Id":"5546227226304360413" 
            }, 
            { 
            "ExtendId":0, 
            "Explan":"姓名", 
            "Remark":"姓名", 
            "IsCheck":1, 
            "IsExtend":0, 
            "CreateTime":"2018-08-11T10:19:47.783", 
            "UpdateTime":"2018-08-11T10:19:47.783", 
            "IsDelete":0, 
            "Sort":1, 
            "FieldName":"Name", 
            "FieldType":1, 
            "OptionValue":"[]", 
            "IsForManage":0, 
            "DefaultValue":"", 
            "Id":"5747078693459460032" 
            } 
        ] 
        GetFormInfo();

    //获取用户的列表
    function GetFormInfo(){
        let str = '';
        form.forEach((e,i)=>{
            let key = e.FieldType;
            switch (key) {
                case 1:
                    str += input(e);
                    break;
                case 7:
                str += input(e);
                    break;
                case 6:
                str += input(e);
                    break;
                case 2:
                str += textarea(e);
                    break;
                case 3:
                str += radioBox(e);
                    break;
                case 4:
                str += checkBox(e);
                    break;
                case 5:
                str += select(e);
                    break;
                default:
                    break;
            }
        });
        console.log(str);
        $('.form-horizontal').prepend(str);
    }


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
                    value:'{"Extend1":"'+Extend1+'","Extend2":"'+Extend6+'","Extend3":"'+Extend8+'","Extend4":"'+Extend7+'"}',
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