/**
 * 管理初始化
 */
var RentTenantSelections = {
    id: "RentTenantSelectionsTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
RentTenantSelections.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '选项ID', field: 'id', visible: false, align: 'center', valign: 'middle'},
            {title: '选项名称', field: 'options', visible: true, align: 'center', valign: 'middle'},
            {title: '信息创建时间', field: 'createdAt', visible: true, align: 'center', valign: 'middle'},
            {title: '创建人', field: 'userName', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
RentTenantSelections.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        RentTenantSelections.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加
 */
RentTenantSelections.openAddRentTenantSelections = function () {
    var index = layer.open({
        type: 2,
        title: '添加',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/rentTenantSelections/rentTenantSelections_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看详情
 */
RentTenantSelections.openRentTenantSelectionsDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/rentTenantSelections/rentTenantSelections_update/' + RentTenantSelections.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除
 */
RentTenantSelections.delete = function () {
    if (RentTenantSelections.check()) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/rentTenantSelections/delete", function (data) {
                Feng.success("删除成功!");
                RentTenantSelections.table.refresh();
            }, function (data) {
                Feng.error("删除失败!" + data.responseJSON.message + "!");
            });
            ajax.set("rentTenantSelectionsId", RentTenantSelections.seItem.id);
            ajax.start();
        }
        Feng.confirm("是否确认删除?",operation);
    }
};

/**
 * 查询列表
 */
RentTenantSelections.resetSearch = function () {
    $("#condition").val("");
    $("#beginTime").val("");
    $("#endTime").val("");

    RentTenantSelections.search();
}

RentTenantSelections.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    queryData['beginTime'] = $("#beginTime").val();
    queryData['endTime'] = $("#endTime").val();
    RentTenantSelections.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = RentTenantSelections.initColumn();
    var table = new BSTable(RentTenantSelections.id, "/rentTenantSelections/list", defaultColunms);
    table.setPaginationType("client");
    RentTenantSelections.table = table.init();
});
