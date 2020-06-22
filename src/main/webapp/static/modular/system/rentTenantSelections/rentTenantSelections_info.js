/**
 * 初始化详情对话框
 */
var RentTenantSelectionsInfoDlg = {
    rentTenantSelectionsInfoData : {}
};

/**
 * 清除数据
 */
RentTenantSelectionsInfoDlg.clearData = function() {
    this.rentTenantSelectionsInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentTenantSelectionsInfoDlg.set = function(key, val) {
    this.rentTenantSelectionsInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentTenantSelectionsInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
RentTenantSelectionsInfoDlg.close = function() {
    parent.layer.close(window.parent.RentTenantSelections.layerIndex);
}

/**
 * 收集数据
 */
RentTenantSelectionsInfoDlg.collectData = function() {
    this
    .set('id')
    .set('options')
    .set('createdAt')
    .set('userId');
}

/**
 * 提交添加
 */
RentTenantSelectionsInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/rentTenantSelections/add", function(data){
        Feng.success("添加成功!");
        window.parent.RentTenantSelections.table.refresh();
        RentTenantSelectionsInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.rentTenantSelectionsInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
RentTenantSelectionsInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/rentTenantSelections/update", function(data){
        Feng.success("修改成功!");
        window.parent.RentTenantSelections.table.refresh();
        RentTenantSelectionsInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.rentTenantSelectionsInfoData);
    ajax.start();
}

$(function() {

});
