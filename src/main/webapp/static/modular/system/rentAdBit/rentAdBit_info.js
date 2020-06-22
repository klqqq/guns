/**
 * 初始化详情对话框
 */
var RentAdBitInfoDlg = {
    rentAdBitInfoData : {},
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
                },
                stringLength:{
                    min:1,
                    max:30,
                    message: '编号长度不得超过15个字'
                }

            }
        },
        adName: {
            validators: {
                stringLength:{
                    max:255,
                    message: '名称长度不得超过127个字'
                }
            }
        },
        adArea: {
            validators: {
                notEmpty: {
                    message: '广告位面积不能为空'
                },
                stringLength:{
                    max:5,
                    message: '请输入正确的广告位面积'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'广告位面积必须为正'
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
        adRent: {
            validators: {
                notEmpty: {
                    message: '广告位预算月租金不能为空'
                },
                stringLength:{
                    max:5,
                    message: '请输入正确的广告位预算月租金'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'广告位预算月租金必须为正'
                }
            }
        },
        adMargin: {
            validators: {
                notEmpty: {
                    message: '广告位核定保证金不能为空'
                },
                stringLength:{
                    max:5,
                    message: '请输入正确的广告位核定保证金'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'广告位核定保证金必须为正'
                }
            }
        },
        adElectricity: {
            validators: {
                notEmpty: {
                    message: '广告位核定电费单价不能为空'
                },
                stringLength:{
                    max:5,
                    message: '请输入正确的广告位核定电费单价'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'广告位核定电费单价必须为正'
                }
            }
        },
        adMemo: {
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
var adId1;
/**
 * 清除数据
 */
RentAdBitInfoDlg.clearData = function() {
    this.rentAdBitInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentAdBitInfoDlg.set = function(key, val) {
    this.rentAdBitInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentAdBitInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
RentAdBitInfoDlg.close = function() {
    parent.layer.close(window.parent.RentAdBit.layerIndex);
}
RentAdBitInfoDlg.validate = function(){
    $('#rentAdBitInfoForm').data("bootstrapValidator").resetForm();
    $('#rentAdBitInfoForm').bootstrapValidator('validate');
    return $("#rentAdBitInfoForm").data('bootstrapValidator').isValid();

}

/**
 * 收集数据
 */
RentAdBitInfoDlg.collectData = function() {
    this
    .set('bid')
    .set('fid')
    .set('adId')
    .set('adNumber')
    .set('adName')
    .set('adArea')
    .set('address')
    .set('leaseStatus')
    .set('adRent')
    .set('adMargin')
    .set('adElectricity')
    .set('adMemo')
    .set('createdAt')
    .set('updatedAt')
    .set('userId')
    .set('manageId');
}

/**
 * 提交添加
 */
RentAdBitInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    if(!this.validate()){
        return;
    }
    RentAdBitInfoDlg.set('fid');


    //提交信息
    if(this.rentAdBitInfoData.fid==0){
        Feng.info("请选择一级部门！");
    }else {
        var ajax = new $ax(Feng.ctxPath + "/rentAdBit/add", function (data) {
            Feng.success("添加成功!");
            window.parent.RentAdBit.table.refresh();
            RentAdBitInfoDlg.close();
        }, function (data) {
            Feng.error("添加失败!" + data.responseJSON.message + "!");
        });
        ajax.set(this.rentAdBitInfoData);
        ajax.start();
    }
}

/**
 * 获取子部门
 */
var childnamearr={};
var childarr={};
RentAdBitInfoDlg.child = function(index){
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
RentAdBitInfoDlg.getDept = function(index){
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
RentAdBitInfoDlg.getDept1 = function(index){
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
RentAdBitInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    if(!this.validate()){
        return;
    }

    var flag=1;
    var operation = function () {
        if(document.getElementById('typehidden').style.display=="none"){
            var ajax = new $ax(Feng.ctxPath + "/rentAdBit/update/" + bid1+'/'+fid1+'/'+adId1, function (data) {

                Feng.success("修改成功!");
                window.parent.RentAdBit.table.refresh();
                RentAdBitInfoDlg.close();
            }, function (data) {
                Feng.error("修改失败!" + data.responseJSON.message + "!");
            });
            ajax.set(RentAdBitInfoDlg.rentAdBitInfoData);
            ajax.start();
        }
        else {
            RentAdBitInfoDlg
                .set('bid');
            if (this.rentAdBitInfoData.bid == 0) {
                Feng.info("请选择一级部门！");
            } else {
                var ajax = new $ax(Feng.ctxPath + "/rentAdBit/update/" + bid1 + '/' + fid1 + '/' + adId1, function (data) {
                    Feng.success("修改成功!");
                    window.parent.RentAdBit.table.refresh();
                    RentAdBitInfoDlg.close();
                }, function (data) {
                    Feng.error("修改失败!" + data.responseJSON.message + "!");
                });
                ajax.set(RentAdBitInfoDlg.rentAdBitInfoData);
                ajax.start();
            }
        }
    }
    Feng.confirm("是否确认修改?",operation);
}

$(function () {
    Feng.initValidator("rentAdBitInfoForm", RentAdBitInfoDlg.validateFields);
    $(function () {
         bid1=$("#typeflag1").val();
        // alert("bid+"+bid1);
         fid1=$("#typeflag2").val();
       // alert("fid+"+fid1);
         adId1=$("#typeflag3").val();
       // alert("adid+"+adId1);
    });

});


