/**
 * 管理初始化
 */
var Cost = {
    id: "CostTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Cost.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'},
            {title: '支出总额', field: 'amount', visible: true, align: 'center', valign: 'middle'},
            {title: '备注信息', field: 'memo', visible: true, align: 'center', valign: 'middle'},
            {title: '创建时间', field: 'createdAt', visible: true, align: 'center', valign: 'middle'},
            {title: '更新时间', field: 'updatedAt', visible: true, align: 'center', valign: 'middle'},
            {title: '创建人ID', field: 'userId', visible: false, align: 'center', valign: 'middle'},
            {title: '创建人', field: 'userName', visible: true, align: 'center', valign: 'middle'},
    ];
};

/**
 * 检查是否选中
 */
Cost.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Cost.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加
 */
Cost.openAddCost = function () {
    var index = layer.open({
        type: 2,
        title: '添加',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/cost/cost_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看详情
 */
Cost.openCostDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/cost/cost_update/' + Cost.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除
 */
Cost.delete = function () {
    if (this.check()) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/cost/delete", function (data) {
                Feng.success("删除成功!");
                Cost.table.refresh();
            }, function (data) {
                Feng.error("删除失败!" + data.responseJSON.message + "!");
            });
            ajax.set("costId", Cost.seItem.id);
            ajax.start();
        }
    }
    Feng.confirm("是否确认删除?",operation);
};

/**
 * 导出报表
 */
var myDate = new Date();
Cost.export = function() {
    $('#CostTable').tableExport(
        {
            type: 'excel',
            htmlContent: 'true',
            title: '支出记录 ' + myDate.toLocaleDateString(),
            fileName: '支出记录 ' + ' ' + myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate(),
            showExport: true,
            exportDataType: 'all',
            escape: 'false'
        }
    );
}

/**
 * 查询列表
 */
Cost.resetSearch = function () {
    $("#condition").val("");
    $("#beginTime").val("");
    $("#endTime").val("");
    Cost.search();
}
Cost.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    queryData['beginTime'] = $("#beginTime").val();
    queryData['endTime'] = $("#endTime").val();
    Cost.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Cost.initColumn();
    var table = new BSTable(Cost.id, "/cost/list", defaultColunms);
    table.setPaginationType("client");
    Cost.table = table.init();
});
