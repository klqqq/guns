/**
 * 初始化详情对话框
 */
var RentAdLeaseDetailsInfoDlg = {
    rentAdLeaseDetailsInfoData : {},
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
        realRent: {
            validators: {
                notEmpty: {
                    message: '实交月租金不能为空'
                },
                stringLength:{
                    max:5,
                    message: '请输入正确的实交月租金'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'实交月租金必须为正'
                }
            }
        },
        realMargin: {
            validators: {
                notEmpty: {
                    message: '实交保证金不能为空'
                },
                stringLength:{
                    max:5,
                    message: '请输入正确的实交保证金'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'实交保证金必须为正'
                }
            }
        },
        realElectricity: {
            validators: {
                notEmpty: {
                    message: '实交电费单价不能为空'
                },
                stringLength:{
                    max:5,
                    message: '请输入正确的电费单价'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'实交电费单价必须为正'
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
    }
};

/**
 * 清除数据
 */
RentAdLeaseDetailsInfoDlg.clearData = function() {
    this.rentAdLeaseDetailsInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentAdLeaseDetailsInfoDlg.set = function(key, val) {
    this.rentAdLeaseDetailsInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentAdLeaseDetailsInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
RentAdLeaseDetailsInfoDlg.close = function() {
    parent.layer.close(window.parent.RentAdLeaseDetails.layerIndex);
}
RentAdLeaseDetailsInfoDlg.validate = function(){
    $('#rentAdLeaseDetailsInfoForm').data("bootstrapValidator").resetForm();
    $('#rentAdLeaseDetailsInfoForm').bootstrapValidator('validate');
    return $("#rentAdLeaseDetailsInfoForm").data('bootstrapValidator').isValid();

}

/**
 * 收集数据
 */
RentAdLeaseDetailsInfoDlg.collectData = function() {
    this
    .set('id')
    .set('bid')
    .set('fid')
    .set('adNumber')
    .set('adId')
    .set('tenantsId')
    .set('realRent')
    .set('realMargin')
    .set('realElectricity')
    .set('deposit')
    .set('payment')
    .set('beginedAt')
    .set('endedAt')
    .set('leaseMemo')
    .set('createdAt')
    .set('updatedAt')
    .set('userId');
}

/**
 * 提交添加
 */
RentAdLeaseDetailsInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    if (!RentAdLeaseDetailsInfoDlg.validate()) {
        return;
    }

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/rentAdLeaseDetails/add", function(data){
        Feng.success("添加成功!");
        window.parent.RentAdLeaseDetails.table.refresh();
        RentAdLeaseDetailsInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.rentAdLeaseDetailsInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
RentAdLeaseDetailsInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    if (/^\d{4}-\d{2}-\d{2}$/.test(this.rentAdLeaseDetailsInfoData.beginedAt)) {
        var date = this.rentAdLeaseDetailsInfoData.beginedAt;
        this.rentAdLeaseDetailsInfoData.beginedAt= date.replace(/\-/g, "/");
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(this.rentAdLeaseDetailsInfoData.endedAt)) {
        var date = this.rentAdLeaseDetailsInfoData.endedAt;
        this.rentAdLeaseDetailsInfoData.endedAt= date.replace(/\-/g, "/");
    }
    if(RentAdLeaseDetailsInfoDlg.rentAdLeaseDetailsInfoData.beginedAt>RentAdLeaseDetailsInfoDlg.rentAdLeaseDetailsInfoData.endedAt){
        Feng.info("开始日期不能超过到期日期");
        return;
    }

    if(RentAdLeaseDetailsInfoDlg.rentAdLeaseDetailsInfoData.adNumber=='0'){
        Feng.info("请选择广告位编号");
        return;
    }
    //提交信息
    var operation = function () {
        var ajax = new $ax(Feng.ctxPath + "/rentAdLeaseDetails/update", function (data) {
            Feng.success("修改成功!");
            window.parent.RentAdLeaseDetails.table.refresh();
            RentAdLeaseDetailsInfoDlg.close();
        }, function (data) {
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        });
        ajax.set(RentAdLeaseDetailsInfoDlg.rentAdLeaseDetailsInfoData);
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
RentAdLeaseDetailsInfoDlg.getDept = function(index){
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
RentAdLeaseDetailsInfoDlg.getDept1 = function(index){
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
    Feng.initValidator("rentAdLeaseDetailsInfoForm", RentAdLeaseDetailsInfoDlg.validateFields);
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
