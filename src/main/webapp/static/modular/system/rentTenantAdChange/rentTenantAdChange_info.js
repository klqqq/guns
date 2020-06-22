/**
 * 初始化详情对话框
 */
var RentTenantAdChangeInfoDlg = {
    rentTenantAdChangeInfoData : {},
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
        adNumber: {
            validators: {
                notEmpty: {
                    message: '广告位编号不能为空'
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
    }
};

/**
 * 清除数据
 */
RentTenantAdChangeInfoDlg.clearData = function() {
    this.rentTenantAdChangeInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentTenantAdChangeInfoDlg.set = function(key, val) {
    this.rentTenantAdChangeInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentTenantAdChangeInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
RentTenantAdChangeInfoDlg.close = function() {
    parent.layer.close(window.parent.RentTenantAdChange.layerIndex);
}
RentTenantAdChangeInfoDlg.validate = function(){
    $('#rentTenantAdChangeInfoForm').data("bootstrapValidator").resetForm();
    $('#rentTenantAdChangeInfoForm').bootstrapValidator('validate');
    return $("#rentTenantAdChangeInfoForm").data('bootstrapValidator').isValid();

}

/**
 * 收集数据
 */
RentTenantAdChangeInfoDlg.collectData = function() {
    this
    .set('id')
    .set('bid')
    .set('fid')
    .set('adNumber')
    .set('adId')
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
    .set('userId');
}

/**
 * 提交添加
 */
RentTenantAdChangeInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    if (!RentTenantAdChangeInfoDlg.validate()) {
        return;
    }

    if(RentTenantAdChangeInfoDlg.rentTenantAdChangeInfoData.adNumber=='0'){
        Feng.info("请选择广告位编号");
        return;
    }

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/rentTenantAdChange/add", function(data){
        Feng.success("添加成功!");
        window.parent.RentTenantAdChange.table.refresh();
        RentTenantAdChangeInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.rentTenantAdChangeInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
RentTenantAdChangeInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    if(RentTenantAdChangeInfoDlg.rentTenantAdChangeInfoData.adNumber=='0'){
        Feng.info("请选择广告位编号");
        return;
    }

    //提交信息
    var operation = function () {
        var ajax = new $ax(Feng.ctxPath + "/rentTenantAdChange/update", function (data) {
            Feng.success("修改成功!");
            window.parent.RentTenantAdChange.table.refresh();
            RentTenantAdChangeInfoDlg.close();
        }, function (data) {
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        });
        ajax.set(RentTenantAdChangeInfoDlg.rentTenantAdChangeInfoData);
        ajax.start();
    }
    Feng.confirm("是否确认修改?",operation);
}

/**
 * 通过类型ID获取部门名称
 */
var deptname={};
RentTenantAdChangeInfoDlg.getDept = function(index){
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
RentTenantAdChangeInfoDlg.getDept1 = function(index){
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
    Feng.initValidator("rentTenantAdChangeInfoForm", RentTenantAdChangeInfoDlg.validateFields);
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

