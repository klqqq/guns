/**
 * 初始化详情对话框
 */
var RentShopContractPicturesInfoDlg = {
    rentShopContractPicturesInfoData : {}
};

/**
 * 清除数据
 */
RentShopContractPicturesInfoDlg.clearData = function() {
    this.rentShopContractPicturesInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentShopContractPicturesInfoDlg.set = function(key, val) {
    this.rentShopContractPicturesInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentShopContractPicturesInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
RentShopContractPicturesInfoDlg.close = function() {
    parent.layer.close(window.parent.RentShopContractPictures.layerIndex);
}

/**
 * 收集数据
 */
RentShopContractPicturesInfoDlg.collectData = function() {
    this
    .set('shopConId')
    .set('pictureUrl');
}

/**
 * 提交添加
 */
RentShopContractPicturesInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/rentShopContractPictures/add", function(data){
        Feng.success("添加成功!");
        window.parent.RentShopContractPictures.table.refresh();
        RentShopContractPicturesInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.rentShopContractPicturesInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
RentShopContractPicturesInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/rentShopContractPictures/update", function(data){
        Feng.success("修改成功!");
        window.parent.RentShopContractPictures.table.refresh();
        RentShopContractPicturesInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.rentShopContractPicturesInfoData);
    ajax.start();
}

$(function() {

    var mt_img = new $WebUpload("pictureUrl");
    mt_img.init();

});

$(function() {
    shopConId=$("#shopConId").val();
});
