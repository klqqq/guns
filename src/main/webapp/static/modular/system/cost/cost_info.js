/**
 * 初始化详情对话框
 */
var CostInfoDlg = {
    costInfoData : {},
    validateFields: {
        amount: {
            validators: {
                notEmpty: {
                    message: '支出总额不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的支出总额'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'支出总额必须为正'
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
CostInfoDlg.clearData = function() {
    this.costInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CostInfoDlg.set = function(key, val) {
    this.costInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CostInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CostInfoDlg.close = function() {
    parent.layer.close(window.parent.Cost.layerIndex);
}
CostInfoDlg.validate = function(){
    $('#costInfoForm').data("bootstrapValidator").resetForm();
    $('#costInfoForm').bootstrapValidator('validate');
    return $("#costInfoForm").data('bootstrapValidator').isValid();

}

/**
 * 收集数据
 */
CostInfoDlg.collectData = function() {
    this
    .set('id')
    .set('amount')
    .set('createdAt')
    .set('updatedAt')
    .set('memo')
    .set('userId');
}

/**
 * 提交添加
 */
CostInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    if(!CostInfoDlg.validate()){
        return;
    }

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cost/add", function(data){
        Feng.success("添加成功!");
        window.parent.Cost.table.refresh();
        CostInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.costInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
CostInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    if(!CostInfoDlg.validate()){
        return;
    }

    //提交信息
    var operation = function () {
        var ajax = new $ax(Feng.ctxPath + "/cost/update", function (data) {
            Feng.success("修改成功!");
            window.parent.Cost.table.refresh();
            CostInfoDlg.close();
        }, function (data) {
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        });
        ajax.set(CostInfoDlg.costInfoData);
        ajax.start();
    }
    Feng.confirm("是否确认修改?",operation);
}

$(function() {
    Feng.initValidator("costInfoForm", CostInfoDlg.validateFields);
});
