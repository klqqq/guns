/**
 * 初始化详情对话框
 */
var RentShopsInfoDlg = {
    rentShopsInfoData : {},
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
                    message: '商铺编号不能为空'
                },
                stringLength:{
                    min:1,
                    max:30,
                    message: '编号长度不得超过15个字'
                }
            }
        },
        shopsName: {
            validators: {
                stringLength:{
                    max:255,
                    message: '名称长度不得超过127个字'
                }
            }
        },
        shopsArea: {
            validators: {
                notEmpty: {
                    message: '商铺面积不能为空'
                },
                stringLength:{
                    max:5,
                    message: '请输入正确的商铺面积'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'商铺面积必须为正'
                }
            }
        },
        address: {
            validators: {
                stringLength:{
                    max:255,
                    message: '地址长度不得超过127个字'
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
        monthlyRent: {
            validators: {
                notEmpty: {
                    message: '商铺预算月租金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的商铺预算月租金'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'商铺预算月租金必须为正'
                }
            }
        },
        paidRent: {
            validators: {
                notEmpty: {
                    message: '实际总租金不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的实际总租金'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'实际总租金必须为正'
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

var bid1;
var fid1;
var shopsId1;

/**
 * 清除数据
 */
RentShopsInfoDlg.clearData = function() {
    this.rentShopsInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentShopsInfoDlg.set = function(key, val) {
    this.rentShopsInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentShopsInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
RentShopsInfoDlg.close = function() {
    parent.layer.close(window.parent.RentShops.layerIndex);
}
RentShopsInfoDlg.validate = function(){
    $('#rentShopsInfoForm').data("bootstrapValidator").resetForm();
    $('#rentShopsInfoForm').bootstrapValidator('validate');
    return $("#rentShopsInfoForm").data('bootstrapValidator').isValid();

}

/**
 * 收集数据
 */
RentShopsInfoDlg.collectData = function() {
    this
    .set('bid')
    .set('fid')
    .set('shopsId')
    .set('shopsName')
    .set('shopsNumber')
    .set('shopsArea')
    .set('businessType')
    .set('address')
    .set('contractFees')
    .set('propertyFees')
    .set('businessFees')
    .set('monthlyRent')
    .set('paidRent')
    .set('leaseStatus')
    .set('memo')
    .set('createdAt')
    .set('updatedAt')
    .set('userId')
    .set('manageId');
}

/**
 * 提交添加
 */
RentShopsInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    if(!this.validate()){
        return;
    }
    RentShopsInfoDlg.set('fid');

    //提交信息
    if(this.rentShopsInfoData.fid==0){
        Feng.info("请选择一级部门！");
    }else {
        var ajax = new $ax(Feng.ctxPath + "/rentShops/add", function (data) {
            Feng.success("添加成功!");
            window.parent.RentShops.table.refresh();
            RentShopsInfoDlg.close();
        }, function (data) {
            Feng.error("添加失败!" + data.responseJSON.message + "!");
        });
        ajax.set(this.rentShopsInfoData);
        ajax.start();
    }
}

/**
 * 获取子部门
 */
var childnamearr={};
var childarr={};
RentShopsInfoDlg.child = function(index){
    //  alert("1");
    // alert("1"+index);
    var ajax = new $ax(Feng.ctxPath + "/dept/getChild/"+index, function(data){
        //   console.log(data);
        childnamearr=new Array();
        for(i=0;i<data.length;i++){
            childnamearr[i]=data[i].fullname;
            //console.log(namearr[i]);
        }
        childarr=new Array();
        for(i=0;i<data.length;i++){
            childarr[i]=data[i].id;
            //console.log(namearr[i]);
        }
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set();
    ajax.start();
    var x=document. getElementById("childnamearr");
    x.value=childnamearr;
    //console.log(x);
    var y=document. getElementById("childarr");
    y.value=childarr;
    //console.log(y);
};

/**
 * 通过类型ID获取部门名称
 */
var deptname={};
RentShopsInfoDlg.getDept = function(index){
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
RentShopsInfoDlg.getDept1 = function(index){
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
 * 提交修改
 */
RentShopsInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    if(!this.validate()){
        return;
    }
    var flag=1;
    var operation = function () {
        if (document.getElementById('typehidden').style.display == "none") {
            var ajax = new $ax(Feng.ctxPath + "/rentShops/update/" + bid1 + '/' + fid1 + '/' + shopsId1, function (data) {

                Feng.success("修改成功!");
                window.parent.RentShops.table.refresh();
                RentShopsInfoDlg.close();
            }, function (data) {
                Feng.error("修改失败!" + data.responseJSON.message + "!");
            });
            ajax.set(RentShopsInfoDlg.rentShopsInfoData);
            ajax.start();
        }
        else {
            RentShopsInfoDlg
                .set('bid');
            if (this.rentShopsInfoData.bid == 0) {
                Feng.info("请选择一级部门！");
            } else {
                var ajax = new $ax(Feng.ctxPath + "/rentShops/update/" + bid1 + '/' + fid1 + '/' + shopsId1, function (data) {
                    Feng.success("修改成功!");
                    window.parent.RentShops.table.refresh();
                    RentShopsInfoDlg.close();
                }, function (data) {
                    Feng.error("修改失败!" + data.responseJSON.message + "!");
                });
                ajax.set(RentShopsInfoDlg.rentShopsInfoData);
                ajax.start();
            }
        }
    }
    Feng.confirm("是否确认修改?",operation);
}

$(function () {
    Feng.initValidator("rentShopsInfoForm", RentShopsInfoDlg.validateFields);
    $(function () {
        bid1=$("#typeflag1").val();
        // alert("bid+"+bid1);
        fid1=$("#typeflag2").val();
        // alert("fid+"+fid1);
        shopsId1=$("#typeflag3").val();
        // alert("adid+"+adId1);
    });

});
