/**
 * 初始化详情对话框
 */
var RentAdContractPicturesInfoDlg = {
    rentAdContractPicturesInfoData : {}
};
var adConId;
/**
 * 清除数据
 */
RentAdContractPicturesInfoDlg.clearData = function() {
    this.rentAdContractPicturesInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentAdContractPicturesInfoDlg.set = function(key, val) {
    this.rentAdContractPicturesInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
RentAdContractPicturesInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
RentAdContractPicturesInfoDlg.close = function() {
    parent.layer.close(window.parent.RentAdContractPictures.layerIndex);
}

/**
 * 收集数据
 */
RentAdContractPicturesInfoDlg.collectData = function() {
    this
    .set('adConId')
    .set('pictureUrl');
}



/**
 * 提交添加
 */
RentAdContractPicturesInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
  //  alert(adConId);
    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/rentAdContractPictures/add", function(data){
        Feng.success("添加成功!");
        window.parent.RentAdContractPictures.table.refresh();
        RentAdContractPicturesInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.rentAdContractPicturesInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
RentAdContractPicturesInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/rentAdContractPictures/update", function(data){
        Feng.success("修改成功!");
        window.parent.RentAdContractPictures.table.refresh();
        RentAdContractPicturesInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.rentAdContractPicturesInfoData);
    ajax.start();
}



$(function() {

    var mt_img = new $WebUpload("pictureUrl");
    mt_img.init();

});

$(function() {
    adConId=$("#adConId").val();
    // var adConId1=$("#adConId").val();
    // var picarr=$("#picarr").val();
    // console.log(adConId1);
    // console.log(picarr);
});
