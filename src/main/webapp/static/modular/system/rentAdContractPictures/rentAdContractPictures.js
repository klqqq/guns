/**
 * 管理初始化
 */
var RentAdContractPictures = {
    id: "RentAdContractPicturesTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};
var adConId;
/**
 * 初始化表格的列
 */
RentAdContractPictures.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '广告位合同ID', field: 'adConId', visible: false, align: 'center', valign: 'middle'},
            {title: '照片', field: 'pictureUrl', visible: true, align: 'center', valign: 'middle',formatter:imgFormatter, events: imgEvents}
    ];
};

function imgFormatter(value,row,index){
    if(row.pictureUrl ==null || row.pictureUrl==''){
        return ['/'];
    }
    else {
        return ['<img id="img" style="width:70px;height:30px;"  src="'+Feng.ctxPath+'/kaptcha/'+row.pictureUrl+'"/>'];
    }
}

window.imgEvents = {
    'click #img': function (e, value, row, index){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            area: ['auto', 'auto'],
            skin: 'layui-layer-nobg', //没有背景色
            shadeClose: true,
            content: '<img src="'+Feng.ctxPath+'/kaptcha/'+row.pictureUrl+'"/>'
        });
    }
};

/**
 * 检查是否选中
 */
RentAdContractPictures.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        RentAdContractPictures.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加
 */
RentAdContractPictures.openAddRentAdContractPictures = function () {
    var index = layer.open({
        type: 2,
        title: '添加',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/rentAdContractPictures/rentAdContractPictures_add/'+adConId
    });
    this.layerIndex = index;
};

/**
 * 打开查看详情
 */
RentAdContractPictures.openRentAdContractPicturesDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/rentAdContractPictures/rentAdContractPictures_update/' + RentAdContractPictures.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除
 */
RentAdContractPictures.delete = function () {
    if (this.check()) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/rentAdContractPictures/delete/" + RentAdContractPictures.seItem.adConId + '/' + RentAdContractPictures.seItem.pictureUrl
                , function (data) {
                    Feng.success("删除成功!");
                    RentAdContractPictures.table.refresh();
                }, function (data) {
                    Feng.error("删除失败!" + data.responseJSON.message + "!");
                });
            ajax.set();
            ajax.start();
        }
        Feng.confirm("是否确认删除?",operation);
    }
};

/**
 * 查询列表
 */
RentAdContractPictures.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    RentAdContractPictures.table.refresh({query: queryData});
};

$(function () {
    adConId=$("#adConId").val();
  //  alert(adConId);
    var defaultColunms = RentAdContractPictures.initColumn();
    var table = new BSTable(RentAdContractPictures.id, "/rentAdContractPictures/list/"+adConId  , defaultColunms);
    table.setPaginationType("client");
    RentAdContractPictures.table = table.init();
});
