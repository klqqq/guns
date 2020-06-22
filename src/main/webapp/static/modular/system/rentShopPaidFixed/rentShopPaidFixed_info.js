/**
 * 初始化详情对话框
 */
var RentShopPaidFixedInfoDlg = {
    rentShopPaidFixedInfoData : {},
    validateFields: {
        cardNumber: {
            validators: {
                notEmpty: {
                    message: '身份证号不能为空'
                }
            }
        },
        bid: {
            validators: {
                notEmpty: {
                    message: '大楼不能为空'
                }
            }
        },
        fid: {
            validators: {
                notEmpty: {
                    message: '楼层不能为空'
                },
                regexp:{
                    regexp:/^[1-9][0-9]*$/,
                    message:'请选择楼层'
                }
            }
        },
        shopsNumber: {
            validators: {
                notEmpty: {
                    message: '商铺门牌号不能为空'
                }
            }
        },
        memo: {
            validators: {
                stringLength:{
                    max:255,
                    message: '备注信息不得超过127个字'
                }
            }
        },
        voucher: {
            validators: {
                stringLength:{
                    max:255,
                    message: '凭证不得超过127个字'
                }
            }
        },
        receipt: {
            validators: {
                stringLength:{
                    max:255,
                    message: '单据不得超过127个字'
                }
            }
        },
        account: {
            validators: {
                stringLength:{
                    max:255,
                    message: '账户不得超过127个字'
                }
            }
        },
        contractFees: {
            validators: {
                notEmpty: {
                    message: '应缴合同租金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的应缴合同租金'
                },
                // regexp:{
                //     regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                //     message:'应缴合同租金必须为正'
                // }
            }
        },
        contractMargin: {
            validators: {
                notEmpty: {
                    message: '应缴合同保证金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的应缴合同保证金'
                },
                // regexp:{
                //     regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                //     message:'应缴合同保证金必须为正'
                // }
            }
        },
        propertyMargin: {
            validators: {
                notEmpty: {
                    message: '应缴物业保证金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的应缴物业保证金'
                },
                // regexp:{
                //     regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                //     message:'应缴物业保证金必须为正'
                // }
            }
        },
        propertyFees: {
            validators: {
                notEmpty: {
                    message: '应缴物业管理费不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的应缴物业管理费'
                },
                // regexp:{
                //     regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                //     message:'应缴物业管理费必须为正'
                // }
            }
        },
        businessMargin: {
            validators: {
                notEmpty: {
                    message: '应缴商业管理保证金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的应缴商业管理保证金'
                },
                // regexp:{
                //     regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                //     message:'应缴商业管理保证金必须为正'
                // }
            }
        },
        businessFees: {
            validators: {
                notEmpty: {
                    message: '应缴商业管理费不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的应缴商业管理费'
                },
                // regexp:{
                //     regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                //     message:'应缴商业管理费必须为正'
                // }
            }
        },
        waterMargin: {
            validators: {
                notEmpty: {
                    message: '应缴水电保证金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的应缴水电保证金'
                },
                // regexp:{
                //     regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                //     message:'应缴水电保证金必须为正'
                // }
            }
        },
        lisensePrice: {
            validators: {
                notEmpty: {
                    message: '应缴证照押金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的应缴证照押金'
                },
                // regexp:{
                //     regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                //     message:'应缴证照押金必须为正'
                // }
            }
        },
        paidStart: {
            validators: {
                notEmpty: {
                    message: '开始时间不能为空'
                }
            }
        },
        paidEnd: {
            validators: {
                notEmpty: {
                    message: '到期时间不能为空'
                }
            }
        },
        fitmentPrice: {
            validators: {
                notEmpty: {
                    message: '装修押金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的装修押金'
                },

            }
        },
        garbagePrice: {
            validators: {
                notEmpty: {
                    message: '垃圾清运费不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的垃圾清运费'
                },

            }
        },
        platePrice: {
            validators: {
                notEmpty: {
                    message: '施工号牌费不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的施工号牌费'
                },

            }
        },
        popPrice: {
            validators: {
                notEmpty: {
                    message: '封场POP费不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的封场POP费'
                },

            }
        },
        offPrice: {
            validators: {
                notEmpty: {
                    message: '缺勤未关灯罚款不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的缺勤未关灯罚款'
                },

            }
        },
        otherPrice: {
            validators: {
                notEmpty: {
                    message: '其他费用不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的其他费用'
                },

            }
        },
        toolPrice: {
            validators: {
                notEmpty: {
                    message: '工具费不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的工具费'
                },

            }
        },
        exitElectricity: {
            validators: {
                notEmpty: {
                    message: '退场电费不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的退场电费'
                },

            }
        },
        exitWater: {
            validators: {
                notEmpty: {
                    message: '退场水费不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的退场水费'
                },

            }
        },
        adMargin: {
            validators: {
                notEmpty: {
                    message: '广告位保证金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的广告位保证金'
                },

            }
        },
        adRent: {
            validators: {
                notEmpty: {
                    message: '广告位租金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的广告位租金'
                },

            }
        },
        trashPrice: {
            validators: {
                notEmpty: {
                    message: '生活垃圾费不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的生活垃圾费'
                },

            }
        },
        moneyPaid: {
            validators: {
                notEmpty: {
                    message: '应缴合计不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的应缴合计'
                },

            }
        },
    }
};

/**
 * 清除数据
 */
RentShopPaidFixedInfoDlg.clearData = function() {
    this.rentShopPaidFixedInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentShopPaidFixedInfoDlg.set = function(key, val) {
    this.rentShopPaidFixedInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentShopPaidFixedInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
RentShopPaidFixedInfoDlg.close = function() {
    parent.layer.close(window.parent.RentShopPaidFixed.layerIndex);
}
RentShopPaidFixedInfoDlg.validate = function(){
    $('#rentShopPaidFixedInfoForm').data("bootstrapValidator").resetForm();
    $('#rentShopPaidFixedInfoForm').bootstrapValidator('validate');
    return $("#rentShopPaidFixedInfoForm").data('bootstrapValidator').isValid();

}

/**
 * 收集数据
 */
RentShopPaidFixedInfoDlg.collectData = function() {
    this
    .set('id')
    .set('tenantsId')
    .set('bid')
    .set('fid')
    .set('shopsNumber')
    .set('shopsId')
    .set('memo')
    .set('createdAt')
    .set('userId')
    .set('paidStart')
    .set('paidEnd')
    .set('voucher')
    .set('receipt')
    .set('account')
    .set('flag')
    .set('contractFees')
    .set('contractMargin')
    .set('propertyMargin')
    .set('propertyFees')
    .set('businessMargin')
    .set('businessFees')
    .set('waterMargin')
    .set('lisensePrice')
    .set('fitmentPrice')
    .set('garbagePrice')
    .set('platePrice')
    .set('popPrice')
    .set('offPrice')
    .set('otherPrice')
    .set('toolPrice')
    .set('exitElectricity')
    .set('exitWater')
    .set('adMargin')
    .set('adRent')
    .set('trashPrice')
    .set('moneyPaid')
    ;
}

/**
 * 提交添加
 */
RentShopPaidFixedInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    if (!RentShopPaidFixedInfoDlg.validate()) {
        return;
    }
    if(RentShopPaidFixedInfoDlg.rentShopPaidFixedInfoData.paidStart>RentShopPaidFixedInfoDlg.rentShopPaidFixedInfoData.paidEnd){
        Feng.info("开始日期不能超过到期日期");
        return;
    }

    if(RentShopPaidFixedInfoDlg.rentShopPaidFixedInfoData.adNumber=='0'){
        Feng.info("请选择商铺门牌号");
        return;
    }


    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/rentShopPaidFixed/add", function(data){
        Feng.success("添加成功!");
        window.parent.RentShopPaidFixed.table.refresh();
        RentShopPaidFixedInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.rentShopPaidFixedInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
RentShopPaidFixedInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    if (/^\d{4}-\d{2}-\d{2}$/.test(this.rentShopPaidFixedInfoData.paidStart)) {
        var date = this.rentShopPaidFixedInfoData.paidStart;
        this.rentShopPaidFixedInfoData.paidStart= date.replace(/\-/g, "/");
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(this.rentShopPaidFixedInfoData.paidEnd)) {
        var date = this.rentShopPaidFixedInfoData.paidEnd;
        this.rentShopPaidFixedInfoData.paidEnd= date.replace(/\-/g, "/");
    }
    if(RentShopPaidFixedInfoDlg.rentShopPaidFixedInfoData.paidStart>RentShopPaidFixedInfoDlg.rentShopPaidFixedInfoData.paidEnd){
        Feng.info("开始日期不能超过到期日期");
        return;
    }

    if(RentShopPaidFixedInfoDlg.rentShopPaidFixedInfoData.adNumber=='0'){
        Feng.info("请选择商铺门牌号");
        return;
    }

    //提交信息
    var operation = function () {
        var ajax = new $ax(Feng.ctxPath + "/rentShopPaidFixed/update", function (data) {
            Feng.success("修改成功!");
            window.parent.RentShopPaidFixed.table.refresh();
            RentShopPaidFixedInfoDlg.close();
        }, function (data) {
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        });
        ajax.set(RentShopPaidFixedInfoDlg.rentShopPaidFixedInfoData);
        ajax.start();
    }
    Feng.confirm("是否确认修改?",operation);
}

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日

    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/**
 * 通过类型ID获取部门名称
 */
var deptname={};
RentShopPaidFixedInfoDlg.getDept = function(index){
    var ajax = new $ax(Feng.ctxPath + "/dept/getDept/"+index, function(data){
        //alert(data);
        deptname=data[0].fullname;
        // alert(deptname);
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set();
    ajax.start();
    //console.log("catname:"+catname)
    var x=document. getElementById("building");
    x.value=deptname;
};

/**
 * 通过类型ID获取子部门名称
 */
var deptname1={};
RentShopPaidFixedInfoDlg.getDept1 = function(index){
    var ajax = new $ax(Feng.ctxPath + "/dept/getDept/"+index, function(data){
        //alert(data);
        deptname1=data[0].fullname;
        // alert(deptname1);
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set();
    ajax.start();
    //console.log("catname:"+catname)
    var x=document. getElementById("floor");
    x.value=deptname1;
};

$(function() {
    var bid1;
    Feng.initValidator("rentShopPaidFixedInfoForm", RentShopPaidFixedInfoDlg.validateFields);
    $("#bid").append("<option value='0'"+">请选择</option>");
    $.get(Feng.ctxPath+"/dept/getParent",function (data,status) {
        var province_list = data;
        //console.log("province"+data);
        for (var temp in province_list){
            $("#bid").append("<option value='"+province_list[temp].id+"'>"+province_list[temp].fullname+"</option>");
        }

    });

    $("#bid").change(function () {
        //alert(bid);
        var ajax = new $ax(Feng.ctxPath+"/dept/getChild2", function (data) {
            var city_list = data;
            $("#fid").empty();
            $("#fid").append("<option value='0'"+">请选择</option>");
            $("#shopsNumber").empty();
            $("#shopsNumber").append("<option value='0'"+">请选择</option>");
            for (var temp in city_list){
                $("#fid").append("<option value='"+city_list[temp].id+"'>"+city_list[temp].fullname+"</option>");
            }
            $("#fid option:first").prop("selected", 'selected');
            $("#shopsNumber option:first").prop("selected", 'selected');
        }, function (data) {
            Feng.error("错误!" + data.responseJSON.message + "!");
        });
        ajax.set("bid",$("#bid").val());
        bid1=$("#bid").val();

        ajax.start();
    })
    $("#fid").change(function () {
        var ajax = new $ax(Feng.ctxPath+"/rentShopContractDetails/shopsNumber", function (data) {
            var area_list = data;
            // console.log(area_list[0]);
            $("#shopsNumber").empty();
            $("#shopsNumber").append("<option value='0'"+">请选择</option>");
            for (var temp in area_list){
                $("#shopsNumber").append("<option value='"+area_list[temp].shops_number+"'>"+area_list[temp].shops_number+"</option>");
            }
            $("#shopsNumber option:first").prop("selected", 'selected');
        }, function (data) {
            Feng.error("错误!" + data.responseJSON.message + "!");
        });
        ajax.set("bid",bid1);
        // alert(bid1);
        ajax.set("fid",$("#fid").val());
        ajax.start();

    })
});

