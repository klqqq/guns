/**
 * 初始化详情对话框
 */
var RentAdPaidFixedInfoDlg = {
    rentAdPaidFixedInfoData : {},
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
        adNumber: {
            validators: {
                notEmpty: {
                    message: '广告位编号不能为空'
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

        contractFeesPaid: {
            validators: {
                notEmpty: {
                    message: '实缴合同租金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的实缴合同租金'
                },
                // regexp:{
                //     regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                //     message:'实缴合同租金必须为正'
                // }
            }
        },
        contractMarginPaid: {
            validators: {
                notEmpty: {
                    message: '实缴合同保证金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的实缴合同保证金'
                },
                // regexp:{
                //     regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                //     message:'实缴合同保证金必须为正'
                // }
            }
        },
        propertyMarginPaid: {
            validators: {
                notEmpty: {
                    message: '实缴物业保证金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的实缴物业保证金'
                },
                // regexp:{
                //     regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                //     message:'实缴物业保证金必须为正'
                // }
            }
        },
        propertyFeesPaid: {
            validators: {
                notEmpty: {
                    message: '实缴物业管理费不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的实缴物业管理费'
                },
                // regexp:{
                //     regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                //     message:'实缴物业管理费必须为正'
                // }
            }
        },
        businessMarginPaid: {
            validators: {
                notEmpty: {
                    message: '实缴商业管理保证金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的实缴商业管理保证金'
                },
                // regexp:{
                //     regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                //     message:'实缴商业管理保证金必须为正'
                // }
            }
        },
        businessFeesPaid: {
            validators: {
                notEmpty: {
                    message: '实缴商业管理费不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的实缴商业管理费'
                },
                // regexp:{
                //     regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                //     message:'实缴商业管理费必须为正'
                // }
            }
        },
        waterMarginPaid: {
            validators: {
                notEmpty: {
                    message: '实缴水电保证金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的实缴水电保证金'
                },
                // regexp:{
                //     regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                //     message:'实缴水电保证金必须为正'
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
        }
    }
};

/**
 * 清除数据
 */
RentAdPaidFixedInfoDlg.clearData = function() {
    this.rentAdPaidFixedInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentAdPaidFixedInfoDlg.set = function(key, val) {
    this.rentAdPaidFixedInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentAdPaidFixedInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
RentAdPaidFixedInfoDlg.close = function() {
    parent.layer.close(window.parent.RentAdPaidFixed.layerIndex);
}
RentAdPaidFixedInfoDlg.validate = function(){
    $('#rentAdPaidFixedInfoForm').data("bootstrapValidator").resetForm();
    $('#rentAdPaidFixedInfoForm').bootstrapValidator('validate');
    return $("#rentAdPaidFixedInfoForm").data('bootstrapValidator').isValid();

}

/**
 * 收集数据
 */
RentAdPaidFixedInfoDlg.collectData = function() {
    this
    .set('id')
    .set('tenantsId')
    .set('bid')
    .set('fid')
    .set('adNumber')
    .set('adId')
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
    .set('contractFeesPaid')
    .set('contractMargin')
    .set('contractMarginPaid')
    .set('propertyMargin')
    .set('propertyMarginPaid')
    .set('propertyFees')
    .set('propertyFeesPaid')
    .set('businessMargin')
    .set('businessMarginPaid')
    .set('businessFees')
    .set('businessFeesPaid')
    .set('waterMargin')
    .set('waterMarginPaid');

}

/**
 * 提交添加
 */
RentAdPaidFixedInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    if (!RentAdPaidFixedInfoDlg.validate()) {
        return;
    }
    if(RentAdPaidFixedInfoDlg.rentAdPaidFixedInfoData.paidStart>RentAdPaidFixedInfoDlg.rentAdPaidFixedInfoData.paidEnd){
        Feng.info("开始日期不能超过到期日期");
        return;
    }

    if(RentAdPaidFixedInfoDlg.rentAdPaidFixedInfoData.adNumber=='0'){
        Feng.info("请选择广告位编号");
        return;
    }

    //提交信息
    var operation = function () {
        var ajax = new $ax(Feng.ctxPath + "/rentAdPaidFixed/add", function (data) {
            Feng.success("添加成功!");
            window.parent.RentAdPaidFixed.table.refresh();
            RentAdPaidFixedInfoDlg.close();
        }, function (data) {
            Feng.error("添加失败!" + data.responseJSON.message + "!");
        });
        ajax.set(RentAdPaidFixedInfoDlg.rentAdPaidFixedInfoData);
        ajax.start();
    }
    Feng.confirm("是否确认修改?",operation);
}

/**
 * 提交修改
 */
RentAdPaidFixedInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    if (/^\d{4}-\d{2}-\d{2}$/.test(this.rentAdPaidFixedInfoData.paidStart)) {
        var date = this.rentAdPaidFixedInfoData.paidStart;
        this.rentAdPaidFixedInfoData.paidStart= date.replace(/\-/g, "/");
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(this.rentAdPaidFixedInfoData.paidEnd)) {
        var date = this.rentAdPaidFixedInfoData.paidEnd;
        this.rentAdPaidFixedInfoData.paidEnd= date.replace(/\-/g, "/");
    }
    if(RentAdPaidFixedInfoDlg.rentAdPaidFixedInfoData.paidStart>RentAdPaidFixedInfoDlg.rentAdPaidFixedInfoData.paidEnd){
        Feng.info("开始日期不能超过到期日期");
        return;
    }

    if(RentAdPaidFixedInfoDlg.rentAdPaidFixedInfoData.adNumber=='0'){
        Feng.info("请选择广告位编号");
        return;
    }

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/rentAdPaidFixed/update", function(data){
        Feng.success("修改成功!");
        window.parent.RentAdPaidFixed.table.refresh();
        RentAdPaidFixedInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.rentAdPaidFixedInfoData);
    ajax.start();
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
RentAdPaidFixedInfoDlg.getDept = function(index){
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
RentAdPaidFixedInfoDlg.getDept1 = function(index){
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
    Feng.initValidator("rentAdPaidFixedInfoForm", RentAdPaidFixedInfoDlg.validateFields);
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
            $("#adNumber").empty();
            $("#adNumber").append("<option value='0'"+">请选择</option>");
            for (var temp in city_list){
                $("#fid").append("<option value='"+city_list[temp].id+"'>"+city_list[temp].fullname+"</option>");
            }
            $("#fid option:first").prop("selected", 'selected');
            $("#adNumber option:first").prop("selected", 'selected');
        }, function (data) {
            Feng.error("错误!" + data.responseJSON.message + "!");
        });
        ajax.set("bid",$("#bid").val());
        bid1=$("#bid").val();

        ajax.start();
    })
    $("#fid").change(function () {
        var ajax = new $ax(Feng.ctxPath+"/rentAdContractDetails/adNumber", function (data) {
            var area_list = data;
            //  console.log(area_list[0]);
            $("#adNumber").empty();
            $("#adNumber").append("<option value='0'"+">请选择</option>");
            for (var temp in area_list){
                $("#adNumber").append("<option value='"+area_list[temp].ad_number+"'>"+area_list[temp].ad_number+"</option>");
            }
            $("#adNumber option:first").prop("selected", 'selected');
        }, function (data) {
            Feng.error("错误!" + data.responseJSON.message + "!");
        });
        ajax.set("bid",bid1);
        // alert(bid1);
        ajax.set("fid",$("#fid").val());
        ajax.start();

    })
});

