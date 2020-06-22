/**
 * 初始化详情对话框
 */
var RentShopContractDetailsInfoDlg = {
    rentShopContractDetailsInfoData : {},
    validateFields: {
        cardNumber: {
            validators: {
                notEmpty: {
                    message: '身份证号不能为空'
                },
                regexp:{
                    regexp:/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
                    message:'身份证号格式不对'
                }
            }
        },
        bid: {
            validators: {
                notEmpty: {
                    message: '大楼不能为空'
                },
                regexp:{
                    regexp:/^[1-9][0-9]*$/,
                    message:'请选择楼层'
                }
            }
        },
        fid: {
            validators: {
                notEmpty: {
                    message: '楼层不能为空'
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
        deposit: {
            validators: {
                notEmpty: {
                    message: '押金不能为空'
                },
                stringLength:{
                    max:4,
                    message: '请输入正确的押金'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'押金必须为正'
                }
            }
        },
        payment: {
            validators: {
                notEmpty: {
                    message: '付款不能为空'
                },
                stringLength:{
                    max:4,
                    message: '请输入正确的付款'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'付款必须为正'
                }
            }
        },
        period: {
            validators: {
                notEmpty: {
                    message: '缴费次数不能为空'
                },
                stringLength:{
                    max:4,
                    message: '请输入正确的缴费次数'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'缴费次数必须为正'
                }
            }
        },
        electricityPrice: {
            validators: {
                notEmpty: {
                    message: '核定电费单价不能为空'
                },
                stringLength:{
                    max:5,
                    message: '请输入正确的核定电费单价'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'核定电费单价必须为正'
                }
            }
        },
        contractFees: {
            validators: {
                notEmpty: {
                    message: '合同租金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的合同租金'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'合同租金必须为正'
                }
            }
        },
        contractMargin: {
            validators: {
                notEmpty: {
                    message: '合同保证金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的核定电费单价'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'合同保证金必须为正'
                }
            }
        },
        propertyMargin: {
            validators: {
                notEmpty: {
                    message: '物业保证金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的物业保证金'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'物业保证金必须为正'
                }
            }
        },
        propertyFees: {
            validators: {
                notEmpty: {
                    message: '物业管理费不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的物业管理费'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'物业管理费必须为正'
                }
            }
        },
        businessMargin: {
            validators: {
                notEmpty: {
                    message: '商业管理保证金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的商业管理保证金'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'商业管理保证金必须为正'
                }
            }
        },
        businessFees: {
            validators: {
                notEmpty: {
                    message: '商业管理费不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的商业管理费'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'商业管理费必须为正'
                }
            }
        },
        waterMargin: {
            validators: {
                notEmpty: {
                    message: '水电保证金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的水电保证金'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'水电保证金必须为正'
                }
            }
        },
        lisensePrice: {
            validators: {
                notEmpty: {
                    message: '证照押金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的证照押金'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'证照押金必须为正'
                }
            }
        },
        beginedAt: {
            validators: {
                notEmpty: {
                    message: '开始时间不能为空'
                }
            }
        },
        endedAt: {
            validators: {
                notEmpty: {
                    message: '到期时间不能为空'
                }
            }
        },
        leaseMemo: {
            validators: {
                stringLength:{
                    max:255,
                    message: '备注信息不得超过127个字'
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
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'装修押金必须为正'
                }
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
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'垃圾清运费必须为正'
                }
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
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'施工号牌费必须为正'
                }
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
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'封场POP费必须为正'
                }
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
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'缺勤未关灯罚款必须为正'
                }
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
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'其他费用必须为正'
                }
            }
        },
        waterPrice: {
            validators: {
                notEmpty: {
                    message: '核定水费单价不能为空'
                },
                stringLength:{
                    max:5,
                    message: '请输入正确的核定水费单价'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'核定水费单价必须为正'
                }
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
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'工具费必须为正'
                }
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
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'退场电费必须为正'
                }
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
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'退场水费必须为正'
                }
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
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'广告位保证金必须为正'
                }
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
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'广告位租金必须为正'
                }
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
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'生活垃圾费必须为正'
                }
            }
        },

    }
};

/**
 * 清除数据
 */
RentShopContractDetailsInfoDlg.clearData = function() {
    this.rentShopContractDetailsInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentShopContractDetailsInfoDlg.set = function(key, val) {
    this.rentShopContractDetailsInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentShopContractDetailsInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
RentShopContractDetailsInfoDlg.close = function() {
    parent.layer.close(window.parent.RentShopContractDetails.layerIndex);
}
RentShopContractDetailsInfoDlg.validate = function(){
    $('#rentShopContractDetailsInfoForm').data("bootstrapValidator").resetForm();
    $('#rentShopContractDetailsInfoForm').bootstrapValidator('validate');
    return $("#rentShopContractDetailsInfoForm").data('bootstrapValidator').isValid();

}

/**
 * 收集数据
 */
RentShopContractDetailsInfoDlg.collectData = function() {
    this
    .set('id')
    .set('tenantsId')
    .set('cardNumber')
    .set('bid')
    .set('fid')
    .set('shopsNumber')
    .set('shopsId')
    .set('deposit')
    .set('payment')
    .set('period')
    .set('rentStatus')
    .set('electricityType')
    .set('electricityPrice')
    .set('contractFees')
    .set('contractMargin')
    .set('propertyMargin')
    .set('propertyFees')
    .set('businessMargin')
    .set('businessFees')
    .set('waterMargin')
    .set('lisensePrice')
    .set('beginedAt')
    .set('endedAt')
    .set('contractPic')
    .set('leaseMemo')
    .set('userId')
    .set('flag')
    .set('fitmentPrice')
    .set('garbagePrice')
    .set('platePrice')
    .set('popPrice')
    .set('offPrice')
    .set('otherPrice')
    .set('waterPrice')
    .set('toolPrice')
    .set('exitElectricity')
    .set('exitWater')
    .set('adMargin')
    .set('adRent')
    .set('trashPrice')
    ;
}

/**
 * 提交添加
 */
RentShopContractDetailsInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    if (!RentShopContractDetailsInfoDlg.validate()) {
        return;
    }
    if(RentShopContractDetailsInfoDlg.rentShopContractDetailsInfoData.beginedAt>RentShopContractDetailsInfoDlg.rentShopContractDetailsInfoData.endedAt){
        Feng.info("开始日期不能超过到期日期");
        return;
    }

    if(RentShopContractDetailsInfoDlg.rentShopContractDetailsInfoData.adNumber=='0'){
        Feng.info("请选择商铺门牌号");
        return;
    }

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/rentShopContractDetails/add", function(data){
        Feng.success("添加成功!");
        window.parent.RentShopContractDetails.table.refresh();
        RentShopContractDetailsInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.rentShopContractDetailsInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
RentShopContractDetailsInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    if (/^\d{4}-\d{2}-\d{2}$/.test(this.rentShopContractDetailsInfoData.beginedAt)) {
        var date = this.rentShopContractDetailsInfoData.beginedAt;
        this.rentShopContractDetailsInfoData.beginedAt= date.replace(/\-/g, "/");
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(this.rentShopContractDetailsInfoData.endedAt)) {
        var date = this.rentShopContractDetailsInfoData.endedAt;
        this.rentShopContractDetailsInfoData.endedAt= date.replace(/\-/g, "/");
    }
    if(RentShopContractDetailsInfoDlg.rentShopContractDetailsInfoData.beginedAt>RentShopContractDetailsInfoDlg.rentShopContractDetailsInfoData.endedAt){
        Feng.info("开始日期不能超过到期日期");
        return;
    }

    if(RentShopContractDetailsInfoDlg.rentShopContractDetailsInfoData.adNumber=='0'){
        Feng.info("请选择商铺门牌号");
        return;
    }

    //提交信息
    var operation = function () {
        var ajax = new $ax(Feng.ctxPath + "/rentShopContractDetails/update", function (data) {
            Feng.success("修改成功!");
            window.parent.RentShopContractDetails.table.refresh();
            RentShopContractDetailsInfoDlg.close();
        }, function (data) {
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        });
        ajax.set(RentShopContractDetailsInfoDlg.rentShopContractDetailsInfoData);
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

$(function() {
    Feng.initValidator("rentShopContractDetailsInfoForm", RentShopContractDetailsInfoDlg.validateFields);
    var mt_img = new $WebUpload("contractPic");
    mt_img.init();

});

/**
 * 通过类型ID获取部门名称
 */
var deptname={};
RentShopContractDetailsInfoDlg.getDept = function(index){
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
RentShopContractDetailsInfoDlg.getDept1 = function(index){
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
    Feng.initValidator("rentShopContractDetailsInfoForm", RentShopContractDetailsInfoDlg.validateFields);
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
        var ajax = new $ax(Feng.ctxPath+"/rentShops/shopsNumber2", function (data) {
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
