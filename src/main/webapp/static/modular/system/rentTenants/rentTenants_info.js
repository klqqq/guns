/**
 * 初始化详情对话框
 */
var RentTenantsInfoDlg = {
    rentTenantsInfoData : {},
    validateFields: {
        name: {
            validators: {
                notEmpty: {
                    message: '姓名不能为空'
                }
            }
        },
        mobile: {
            validators: {
                notEmpty: {
                    message: '手机号不能为空'
                },
                regexp:{
                    regexp:/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/,
                    message:'手机号格式不对'
                }
            }
        },
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
    }
};

/**
 * 清除数据
 */
RentTenantsInfoDlg.clearData = function() {
    this.rentTenantsInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentTenantsInfoDlg.set = function(key, val) {
    this.rentTenantsInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentTenantsInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
RentTenantsInfoDlg.close = function() {
    parent.layer.close(window.parent.RentTenants.layerIndex);
}
RentTenantsInfoDlg.validate = function(){
    $('#rentTenantsInfoForm').data("bootstrapValidator").resetForm();
    $('#rentTenantsInfoForm').bootstrapValidator('validate');
    return $("#rentTenantsInfoForm").data('bootstrapValidator').isValid();

}

/**
 * 收集数据
 */
RentTenantsInfoDlg.collectData = function() {
    this
    .set('tenantsId')
    .set('name')
    .set('sex')
    .set('mobile')
    .set('cardNumber')
    .set('address')
    .set('memo')
    .set('createdAt')
    .set('updatedAt')
    .set('userId');
}

/**
 * 提交添加
 */
RentTenantsInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    if(!this.validate()){
        return;
    }

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/rentTenants/add", function(data){
        Feng.success("添加成功!");
        window.parent.RentTenants.table.refresh();
        RentTenantsInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.rentTenantsInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
RentTenantsInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    if(!this.validate()){
        return;
    }
    //提交信息
    var operation = function () {
        var ajax = new $ax(Feng.ctxPath + "/rentTenants/update", function (data) {
            Feng.success("修改成功!");
            window.parent.RentTenants.table.refresh();
            RentTenantsInfoDlg.close();
        }, function (data) {
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        });
        ajax.set(RentTenantsInfoDlg.rentTenantsInfoData);
        ajax.start();
    }
    Feng.confirm("是否确认修改?",operation);
}

$(function() {
    Feng.initValidator("rentTenantsInfoForm", RentTenantsInfoDlg.validateFields);
});
