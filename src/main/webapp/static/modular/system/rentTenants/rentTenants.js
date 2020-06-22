/**
 * 管理初始化
 */
var RentTenants = {
    id: "RentTenantsTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
RentTenants.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '租赁商户编号', field: 'tenantsId', visible: false, align: 'center', valign: 'middle'},
            {title: '租赁商户姓名', field: 'name', visible: true, align: 'center', valign: 'middle'},
            {title: '性别', field: 'sex', visible: true, align: 'center', valign: 'middle'},
            {title: '手机号码', field: 'mobile', visible: true, align: 'center', valign: 'middle'},
            {title: '身份证号码', field: 'cardNumber', visible: true, align: 'center', valign: 'middle'},
            {title: '联系地址', field: 'address', visible: true, align: 'center', valign: 'middle'},
            {title: '备注信息', field: 'memo', visible: true, align: 'center', valign: 'middle'},
            {title: '信息创建时间', field: 'createdAt', visible: true, align: 'center', valign: 'middle'},
            {title: '信息更新时间', field: 'updatedAt', visible: true, align: 'center', valign: 'middle'},
            {title: '创建人', field: 'userName', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
RentTenants.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        RentTenants.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加
 */
RentTenants.openAddRentTenants = function () {
    var index = layer.open({
        type: 2,
        title: '添加',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/rentTenants/rentTenants_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看详情
 */
RentTenants.openRentTenantsDetail = function () {
    if (RentTenants.check()) {
        var index = layer.open({
            type: 2,
            title: '详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/rentTenants/rentTenants_update/' + RentTenants.seItem.tenantsId,


        });
        this.layerIndex = index;
    }
};

/**
 * 删除
 */
RentTenants.delete = function () {
    if (RentTenants.check()) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/rentTenants/delete/"+RentTenants.seItem.tenantsId, function (data) {
                Feng.success("删除成功!");
                RentTenants.table.refresh();
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
RentTenants.resetSearch = function () {
    $("#condition").val("");
    $("#beginTime").val("");
    $("#endTime").val("");

    RentTenants.search();
}

RentTenants.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    queryData['beginTime'] = $("#beginTime").val();
    queryData['endTime'] = $("#endTime").val();
    RentTenants.table.refresh({query: queryData});
};

/**
 * 导出报表
 */
var myDate = new Date();
RentTenants.export = function(){
    $('#RentTenantsTable').tableExport(
        {
            type:'excel',
            htmlContent:'true',
            title: '租户 '+ myDate.toLocaleDateString(),
            fileName:'租户 '+ ' ' +myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate(),

            escape:'false'
        }
    );
}

$(function () {

    var defaultColunms = RentTenants.initColumn();
    var table = new BSTable(RentTenants.id, "/rentTenants/list", defaultColunms);
    table.setPaginationType("client");
    RentTenants.table = table.init();
});
