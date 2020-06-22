/**
 * 初始化详情对话框
 */
var RentAdContractDetailsInfoDlg = {
    rentAdContractDetailsInfoData : {},
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


var adConId1;
var picarr2;
var beginedAt1;
var endedAt1;

/**
 * 清除数据
 */
RentAdContractDetailsInfoDlg.clearData = function() {
    this.rentAdContractDetailsInfoData = {};
}


/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentAdContractDetailsInfoDlg.set = function(key, val) {
    this.rentAdContractDetailsInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentAdContractDetailsInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
RentAdContractDetailsInfoDlg.close = function() {
    parent.layer.close(window.parent.RentAdContractDetails.layerIndex);
}
RentAdContractDetailsInfoDlg.validate = function(){
    $('#rentAdContractDetailsInfoForm').data("bootstrapValidator").resetForm();
    $('#rentAdContractDetailsInfoForm').bootstrapValidator('validate');
    return $("#rentAdContractDetailsInfoForm").data('bootstrapValidator').isValid();

}

/**
 * 收集数据
 */
RentAdContractDetailsInfoDlg.collectData = function() {
    this
    .set('id')
    .set('tenantsId')
    .set('cardNumber')
    .set('bid')
    .set('fid')
    .set('adNumber')
    .set('adId')
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
    .set('beginedAt')
    .set('endedAt')
    .set('contractPic')
    .set('leaseMemo')
    .set('userId')
    .set('adConId')
    .set('picarr');

}

/**
 * 提交添加
 */
RentAdContractDetailsInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    if (!RentAdContractDetailsInfoDlg.validate()) {
     //   alert(RentAdContractDetailsInfoDlg.rentAdContractDetailsInfoData.beginedAt+"+"+RentAdContractDetailsInfoDlg.rentAdContractDetailsInfoData.endedAt);
     //   alert(RentAdContractDetailsInfoDlg.rentAdContractDetailsInfoData.beginedAt>RentAdContractDetailsInfoDlg.rentAdContractDetailsInfoData.endedAt);
        return;
    }

    if(RentAdContractDetailsInfoDlg.rentAdContractDetailsInfoData.beginedAt>RentAdContractDetailsInfoDlg.rentAdContractDetailsInfoData.endedAt){
        Feng.info("开始日期不能超过到期日期");
        return;
    }

    if(RentAdContractDetailsInfoDlg.rentAdContractDetailsInfoData.adNumber=='0'){
        Feng.info("请选择广告位编号");
        return;
    }

            var ajax = new $ax(Feng.ctxPath + "/rentAdContractDetails/add", function (data) {
                Feng.success("添加成功!");
                window.parent.RentAdContractDetails.table.refresh();
                RentAdContractDetailsInfoDlg.close();
            }, function (data) {
                Feng.error("添加失败!" + data.responseJSON.message + "!");
            });
            ajax.set(this.rentAdContractDetailsInfoData);
            ajax.start();

}



/**
 * 提交修改
 */
RentAdContractDetailsInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    if (/^\d{4}-\d{2}-\d{2}$/.test(this.rentAdContractDetailsInfoData.beginedAt)) {
        var date = this.rentAdContractDetailsInfoData.beginedAt;
        this.rentAdContractDetailsInfoData.beginedAt= date.replace(/\-/g, "/");
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(this.rentAdContractDetailsInfoData.endedAt)) {
        var date = this.rentAdContractDetailsInfoData.endedAt;
        this.rentAdContractDetailsInfoData.endedAt= date.replace(/\-/g, "/");
    }
    if(RentAdContractDetailsInfoDlg.rentAdContractDetailsInfoData.beginedAt>RentAdContractDetailsInfoDlg.rentAdContractDetailsInfoData.endedAt){
        Feng.info("开始日期不能超过到期日期");
        return;
    }

    if(RentAdContractDetailsInfoDlg.rentAdContractDetailsInfoData.adNumber=='0'){
        Feng.info("请选择广告位编号");
        return;
    }


    //提交信息
    var operation = function () {
        var ajax = new $ax(Feng.ctxPath + "/rentAdContractDetails/update", function (data) {
            Feng.success("修改成功!");
            window.parent.RentAdContractDetails.table.refresh();
            RentAdContractDetailsInfoDlg.close();
        }, function (data) {
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        });
        ajax.set(RentAdContractDetailsInfoDlg.rentAdContractDetailsInfoData);
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
    var mt_img = new $WebUpload("pictureUrl");
    mt_img.init();

});

/**
 * 通过类型ID获取部门名称
 */
var deptname={};
RentAdContractDetailsInfoDlg.getDept = function(index){
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
RentAdContractDetailsInfoDlg.getDept1 = function(index){
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

/**
 * 显示下一张图片
 */
var p=0;
RentAdContractDetailsInfoDlg.nextPic = function(){

    this.clearData();
    this.collectData();
    var picarr=this.rentAdContractDetailsInfoData.picarr;
   // alert(picarr);
    var picarr1 = picarr.split(",");
    // console.log(picarr1.length);

    if(p>=picarr1.length-1){
        Feng.info("已是最后一张图片");
    }else {
        p=p+1;
        console.log(p);
        var x = document.getElementById("myPic");
        x.src = Feng.ctxPath+'/kaptcha/' +picarr1[p];
    //    pictureUrl=picarr1[p];
    }
}
/**
 * 显示上一张图片
 */
RentAdContractDetailsInfoDlg.lastPic = function(){
    this.clearData();
    this.collectData();
    var picarr=this.rentAdContractDetailsInfoData.picarr;
 //   alert(picarr);
    var picarr1 = picarr.split(",");
    if(p<1){
        Feng.info("已是第一张图片");
    }else {
        p=p-1;
        console.log(p);
        var x = document.getElementById("myPic");
        x.src = Feng.ctxPath+'/kaptcha/' +picarr1[p];
     //   pictureUrl=picarr1[p];
    }
}




$(function() {
    var bid1;
    Feng.initValidator("rentAdContractDetailsInfoForm", RentAdContractDetailsInfoDlg.validateFields);
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
        var ajax = new $ax(Feng.ctxPath+"/rentAdBit/adNumber2", function (data) {
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

