/**
 * 初始化详情对话框
 */
var IncomeInfoDlg = {
    incomeInfoData : {},
    validateFields: {
        amount: {
            validators: {
                notEmpty: {
                    message: '收入总额不能为空'
                },
                stringLength:{
                    max:10,
                    message: '请输入正确的收入总额'
                },
                regexp:{
                    regexp:/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                    message:'收入总额必须为正'
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
IncomeInfoDlg.clearData = function() {
    this.incomeInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
IncomeInfoDlg.set = function(key, val) {
    this.incomeInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
IncomeInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
IncomeInfoDlg.close = function() {
    parent.layer.close(window.parent.Income.layerIndex);
}
IncomeInfoDlg.validate = function(){
    $('#incomeInfoForm').data("bootstrapValidator").resetForm();
    $('#incomeInfoForm').bootstrapValidator('validate');
    return $("#incomeInfoForm").data('bootstrapValidator').isValid();

}

/**
 * 收集数据
 */
IncomeInfoDlg.collectData = function() {
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
IncomeInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    if(!IncomeInfoDlg.validate()){
        return;
    }

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/income/add", function(data){
        Feng.success("添加成功!");
        window.parent.Income.table.refresh();
        IncomeInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(IncomeInfoDlg.incomeInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
IncomeInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    if(!IncomeInfoDlg.validate()){
        return;
    }

    //提交信息
    var operation = function () {
        var ajax = new $ax(Feng.ctxPath + "/income/update", function (data) {
            Feng.success("修改成功!");
            window.parent.Income.table.refresh();
            IncomeInfoDlg.close();
        }, function (data) {
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        });
        ajax.set(IncomeInfoDlg.incomeInfoData);
        ajax.start();
    }
    Feng.confirm("是否确认修改?",operation);
}

$(function() {
    Feng.initValidator("incomeInfoForm", IncomeInfoDlg.validateFields);
});
