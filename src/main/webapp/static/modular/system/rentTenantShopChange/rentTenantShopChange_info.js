/**
 * 初始化详情对话框
 */
var RentTenantShopChangeInfoDlg = {
    rentTenantShopChangeInfoData : {},
    validateFields: {
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
        changeReason: {
            validators: {
                notEmpty: {
                    message: '变更选项具体原因不能为空'
                },
                stringLength:{
                    min:1,
                    max:255,
                    message: '变更选项具体原因不得超过127个字'
                }
            }
        },
        electricMeter: {
            validators: {
                notEmpty: {
                    message: '电表读数不能为空'
                },
                stringLength:{
                    max:11,
                    message: '请输入正确的电表读数'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'电表读数必须为正'
                }
            }
        },
        waterMeter: {
            validators: {
                notEmpty: {
                    message: '水表读数不能为空'
                },
                stringLength:{
                    max:11,
                    message: '请输入正确的水表读数'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'水表读数必须为正'
                }
            }
        },
        offTimes: {
            validators: {
                notEmpty: {
                    message: '缺勤未关灯次数不能为空'
                },
                stringLength:{
                    max:11,
                    message: '请输入正确的缺勤未关灯次数'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'缺勤未关灯次数必须为正'
                }
            }
        },
        votes: {
            validators: {
                notEmpty: {
                    message: '钥匙数量不能为空'
                },
                stringLength:{
                    max:11,
                    message: '请输入正确的钥匙数量'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'钥匙数量必须为正'
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
        lisensePrice: {
            validators: {
                notEmpty: {
                    message: '证照押金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的证照押金'
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
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'其他费用必须为正'
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

    }
};

/**
 * 清除数据
 */
RentTenantShopChangeInfoDlg.clearData = function() {
    this.rentTenantShopChangeInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentTenantShopChangeInfoDlg.set = function(key, val) {
    this.rentTenantShopChangeInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentTenantShopChangeInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
RentTenantShopChangeInfoDlg.close = function() {
    parent.layer.close(window.parent.RentTenantShopChange.layerIndex);
}
RentTenantShopChangeInfoDlg.validate = function(){
    $('#rentTenantShopChangeInfoForm').data("bootstrapValidator").resetForm();
    $('#rentTenantShopChangeInfoForm').bootstrapValidator('validate');
    return $("#rentTenantShopChangeInfoForm").data('bootstrapValidator').isValid();

}

/**
 * 收集数据
 */
RentTenantShopChangeInfoDlg.collectData = function() {
    this
    .set('id')
    .set('bid')
    .set('fid')
    .set('shopsNumber')
    .set('shopsId')
    .set('tenantsId')
    .set('optionsId')
    .set('changeReason')
    .set('electricMeter')
    .set('waterMeter')
    .set('offTimes')
    .set('votes')
    .set('fitmentPrice')
    .set('garbagePrice')
    .set('platePrice')
    .set('popPrice')
    .set('offPrice')
    .set('lisensePrice')
    .set('otherPrice')
    .set('memo')
    .set('createdAt')
    .set('userId')
    .set('contractFees')
    .set('contractMargin')
    .set('propertyMargin')
    .set('propertyFees')
    .set('businessMargin')
    .set('businessFees')
    .set('waterMargin')
    .set('toolPrice')
    .set('exitElectricity')
    .set('exitWater')
    .set('adMargin')
    .set('adRent')
    .set('trashPrice')
    .set('electricityType')
    .set('electricityPrice')
    .set('waterPrice')
    ;
}

/**
 * 提交添加
 */
RentTenantShopChangeInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    if (!RentTenantShopChangeInfoDlg.validate()) {
        return;
    }

    if(RentTenantShopChangeInfoDlg.rentTenantShopChangeInfoData.adNumber=='0'){
        Feng.info("请选择商铺门牌号");
        return;
    }

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/rentTenantShopChange/add", function(data){
        Feng.success("添加成功!");
        window.parent.RentTenantShopChange.table.refresh();
        RentTenantShopChangeInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.rentTenantShopChangeInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
RentTenantShopChangeInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    if(RentTenantShopChangeInfoDlg.rentTenantShopChangeInfoData.adNumber=='0'){
        Feng.info("请选择商铺门牌号");
        return;
    }

    //提交信息
    var operation = function () {
        var ajax = new $ax(Feng.ctxPath + "/rentTenantShopChange/update", function (data) {
            Feng.success("修改成功!");
            window.parent.RentTenantShopChange.table.refresh();
            RentTenantShopChangeInfoDlg.close();
        }, function (data) {
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        });
        ajax.set(RentTenantShopChangeInfoDlg.rentTenantShopChangeInfoData);
        ajax.start();
    }
    Feng.confirm("是否确认修改?",operation);
}

/**
 * 通过类型ID获取部门名称
 */
var deptname={};
RentTenantShopChangeInfoDlg.getDept = function(index){
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
RentTenantShopChangeInfoDlg.getDept1 = function(index){
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
    Feng.initValidator("rentTenantShopChangeInfoForm", RentTenantShopChangeInfoDlg.validateFields);
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
