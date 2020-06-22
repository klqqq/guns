/**
 * 管理初始化
 */
var RentShopContractPictures = {
    id: "RentShopContractPicturesTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};
var shopConId;

/**
 * 初始化表格的列
 */
RentShopContractPictures.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '商铺合同ID', field: 'shopConId', visible: false, align: 'center', valign: 'middle'},
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
RentShopContractPictures.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        RentShopContractPictures.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加
 */
RentShopContractPictures.openAddRentShopContractPictures = function () {
    var index = layer.open({
        type: 2,
        title: '添加',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/rentShopContractPictures/rentShopContractPictures_add/'+shopConId
    });
    this.layerIndex = index;
};

/**
 * 打开查看详情
 */
RentShopContractPictures.openRentShopContractPicturesDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/rentShopContractPictures/rentShopContractPictures_update/' + RentShopContractPictures.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除
 */
RentShopContractPictures.delete = function () {
    if (this.check()) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/rentShopContractPictures/delete/"+RentShopContractPictures.seItem.shopConId + '/' + RentShopContractPictures.seItem.pictureUrl
                , function (data) {
                Feng.success("删除成功!");
                RentShopContractPictures.table.refresh();
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
RentShopContractPictures.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    RentShopContractPictures.table.refresh({query: queryData});
};

$(function () {
    shopConId=$("#shopConId").val();
    var defaultColunms = RentShopContractPictures.initColumn();
    var table = new BSTable(RentShopContractPictures.id, "/rentShopContractPictures/list/"+shopConId, defaultColunms);
    table.setPaginationType("client");
    RentShopContractPictures.table = table.init();
});
