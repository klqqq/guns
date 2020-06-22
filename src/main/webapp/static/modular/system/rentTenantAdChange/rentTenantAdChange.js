/**
 * 管理初始化
 */
var RentTenantAdChange = {
    id: "RentTenantAdChangeTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
RentTenantAdChange.initColumn = function () {
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
            {title: '对应租赁商户ID', field: 'tenantsId', visible: false, align: 'center', valign: 'middle'},
            {title: '对应租赁商户', field: 'tenantsName', visible: true, align: 'center', valign: 'middle'},
            {title: '变更事项ID', field: 'optionsId', visible: false, align: 'center', valign: 'middle'},
            {title: '变更事项', field: 'options', visible: true, align: 'center', valign: 'middle'},
            {title: '变更选项具体原因', field: 'changeReason', visible: true, align: 'center', valign: 'middle'},
            {title: '电表读数', field: 'electricMeter', visible: true, align: 'center', valign: 'middle'},
            {title: '水表读数', field: 'waterMeter', visible: true, align: 'center', valign: 'middle'},
            {title: '缺勤未关灯次数', field: 'offTimes', visible: true, align: 'center', valign: 'middle'},
            {title: '钥匙数量', field: 'votes', visible: true, align: 'center', valign: 'middle'},
            {title: '装修押金', field: 'fitmentPrice', visible: true, align: 'center', valign: 'middle'},
            {title: '垃圾清运费', field: 'garbagePrice', visible: true, align: 'center', valign: 'middle'},
            {title: '施工号牌费', field: 'platePrice', visible: true, align: 'center', valign: 'middle'},
            {title: '封场POP费', field: 'popPrice', visible: true, align: 'center', valign: 'middle'},
            {title: '缺勤未关灯罚款', field: 'offPrice', visible: true, align: 'center', valign: 'middle'},
            {title: '证照押金', field: 'lisensePrice', visible: true, align: 'center', valign: 'middle'},
            {title: '其他费用', field: 'otherPrice', visible: true, align: 'center', valign: 'middle'},
            {title: '备注信息', field: 'memo', visible: true, align: 'center', valign: 'middle'},
            {title: '记录创建时间', field: 'createdAt', visible: true, align: 'center', valign: 'middle'},
            {title: '创建人ID', field: 'userId', visible: false, align: 'center', valign: 'middle'},
            {title: '创建人', field: 'userName', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
RentTenantAdChange.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        RentTenantAdChange.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加
 */
RentTenantAdChange.openAddRentTenantAdChange = function () {
    var index = layer.open({
        type: 2,
        title: '添加',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/rentTenantAdChange/rentTenantAdChange_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看详情
 */
RentTenantAdChange.openRentTenantAdChangeDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/rentTenantAdChange/rentTenantAdChange_update/' + RentTenantAdChange.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除
 */
RentTenantAdChange.delete = function () {
    if (this.check()) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/rentTenantAdChange/delete/"+RentTenantAdChange.seItem.id, function (data) {
                Feng.success("删除成功!");
                RentTenantAdChange.table.refresh();
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
RentTenantAdChange.resetSearch = function () {
    $("#condition1").val("");
    $("#condition2").val("");
    $("#beginTime").val("");
    $("#endTime").val("");

    RentTenantAdChange.search();
}
RentTenantAdChange.search = function () {
    var queryData = {};
    queryData['condition1'] = $("#condition1").val();
    queryData['condition2'] = $("#condition2").val();
    queryData['beginTime'] = $("#beginTime").val();
    queryData['endTime'] = $("#endTime").val();
    RentTenantAdChange.table.refresh({query: queryData});
};

/**
 * 导出报表
 */
var myDate = new Date();
RentTenantAdChange.export = function(){
    $('#RentTenantAdChangeTable').tableExport(
        {
            type:'excel',
            htmlContent:'true',
            title: '广告位变更事项 '+ myDate.toLocaleDateString(),
            fileName:'广告位变更事项 '+ ' ' +myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate(),

            escape:'false'
        }
    );
}

$(function () {
    var defaultColunms = RentTenantAdChange.initColumn();
    var table = new BSTable(RentTenantAdChange.id, "/rentTenantAdChange/list", defaultColunms);
    table.setPaginationType("client");
    RentTenantAdChange.table = table.init();
});
