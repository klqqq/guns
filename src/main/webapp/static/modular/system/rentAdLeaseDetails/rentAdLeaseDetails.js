/**
 * 管理初始化
 */
var RentAdLeaseDetails = {
    id: "RentAdLeaseDetailsTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
RentAdLeaseDetails.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '记录ID', field: 'id', visible: false, align: 'center', valign: 'middle'},
            {title: '大楼ID', field: 'bid', visible: false, align: 'center', valign: 'middle'},
            {title: '大楼', field: 'bname', visible: true, align: 'center', valign: 'middle'},
            {title: '楼层ID', field: 'fid', visible: false, align: 'center', valign: 'middle'},
            {title: '楼层', field: 'fname', visible: true, align: 'center', valign: 'middle'},
            {title: '广告位编号', field: 'adNumber', visible: true, align: 'center', valign: 'middle'},
            {title: '广告位ID', field: 'adId', visible: false, align: 'center', valign: 'middle'},
            {title: '广告位', field: 'adName', visible: true, align: 'center', valign: 'middle'},
            {title: '租赁商户ID', field: 'tenantsId', visible: false, align: 'center', valign: 'middle'},
            {title: '租赁商户', field: 'tenantsName', visible: true, align: 'center', valign: 'middle'},
            {title: '实交月租金', field: 'realRent', visible: true, align: 'center', valign: 'middle'},
            {title: '实交保证金', field: 'realMargin', visible: true, align: 'center', valign: 'middle'},
            {title: '实交电费单价', field: 'realElectricity', visible: true, align: 'center', valign: 'middle'},
            {title: '押金', field: 'deposit', visible: false, align: 'center', valign: 'middle'},
            {title: '付款', field: 'payment', visible: false, align: 'center', valign: 'middle'},
            {title: '押付类型', field: 'dap', visible: true, align: 'center', valign: 'middle'},
            {title: '起始时间', field: 'beginedAt', visible: true, align: 'center', valign: 'middle'},
            {title: '到期时间', field: 'endedAt', visible: true, align: 'center', valign: 'middle'},
            {title: '备注信息', field: 'leaseMemo', visible: true, align: 'center', valign: 'middle'},
            {title: '信息创建时间', field: 'createdAt', visible: true, align: 'center', valign: 'middle'},
            {title: '信息更新时间', field: 'updatedAt', visible: true, align: 'center', valign: 'middle'},
            {title: '创建人ID', field: 'userId', visible: false, align: 'center', valign: 'middle'},
            {title: '创建人', field: 'userName', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
RentAdLeaseDetails.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        RentAdLeaseDetails.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加
 */
RentAdLeaseDetails.openAddRentAdLeaseDetails = function () {
    var index = layer.open({
        type: 2,
        title: '添加',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/rentAdLeaseDetails/rentAdLeaseDetails_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看详情
 */
RentAdLeaseDetails.openRentAdLeaseDetailsDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/rentAdLeaseDetails/rentAdLeaseDetails_update/' + RentAdLeaseDetails.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除
 */
RentAdLeaseDetails.delete = function () {
    if (this.check()) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/rentAdLeaseDetails/delete/"+RentAdLeaseDetails.seItem.id, function (data) {
                Feng.success("删除成功!");
                RentAdLeaseDetails.table.refresh();
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
RentAdLeaseDetails.resetSearch = function () {
    $("#condition1").val("");
    $("#condition2").val("");
    $("#beginTime").val("");
    $("#endTime").val("");

    RentAdLeaseDetails.search();
}
RentAdLeaseDetails.search = function () {
    var queryData = {};
    queryData['condition1'] = $("#condition1").val();
    queryData['condition2'] = $("#condition2").val();
    queryData['beginTime'] = $("#beginTime").val();
    queryData['endTime'] = $("#endTime").val();
    RentAdLeaseDetails.table.refresh({query: queryData});
};

/**
 * 导出报表
 */
var myDate = new Date();
RentAdLeaseDetails.export = function(){
    $('#RentAdLeaseDetailsTable').tableExport(
        {
            type:'excel',
            htmlContent:'true',
            title: '广告位租赁记录 '+ myDate.toLocaleDateString(),
            fileName:'广告位租赁记录 '+ ' ' +myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate(),

            escape:'false'
        }
    );
}

$(function () {
    var defaultColunms = RentAdLeaseDetails.initColumn();
    var table = new BSTable(RentAdLeaseDetails.id, "/rentAdLeaseDetails/list", defaultColunms);
    table.setPaginationType("client");
    RentAdLeaseDetails.table = table.init();
});
