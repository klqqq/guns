/**
 * 管理初始化
 */
var Income = {
    id: "IncomeTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Income.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'},
            {title: '收入总额', field: 'amount', visible: true, align: 'center', valign: 'middle'},
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
Income.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Income.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加
 */
Income.openAddIncome = function () {
    var index = layer.open({
        type: 2,
        title: '添加',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/income/income_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看详情
 */
Income.openIncomeDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/income/income_update/' + Income.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除
 */
Income.delete = function () {
    if (this.check()) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/income/delete", function (data) {
                Feng.success("删除成功!");
                Income.table.refresh();
            }, function (data) {
                Feng.error("删除失败!" + data.responseJSON.message + "!");
            });
            ajax.set("incomeId", Income.seItem.id);
            ajax.start();
        }
    }
    Feng.confirm("是否确认删除?",operation);
};

/**
 * 导出报表
 */
var myDate = new Date();
Income.export = function() {
    $('#IncomeTable').tableExport(
        {
            type: 'excel',
            htmlContent: 'true',
            title: '收入记录 ' + myDate.toLocaleDateString(),
            fileName: '收入记录 ' + ' ' + myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate(),
            showExport: true,
            exportDataType: 'all',
            escape: 'false'
        }
    );
}

/**
 * 查询列表
 */
Income.resetSearch = function () {
    $("#condition").val("");
    $("#beginTime").val("");
    $("#endTime").val("");
    Income.search();
};

Income.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    queryData['beginTime'] = $("#beginTime").val();
    queryData['endTime'] = $("#endTime").val();
    Income.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Income.initColumn();
    var table = new BSTable(Income.id, "/income/list", defaultColunms);
    table.setPaginationType("client");
    Income.table = table.init();
})
