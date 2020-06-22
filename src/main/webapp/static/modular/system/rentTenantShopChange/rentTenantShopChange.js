/**
 * 管理初始化
 */
var RentTenantShopChange = {
    id: "RentTenantShopChangeTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
RentTenantShopChange.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '记录ID', field: 'id', visible: false, align: 'center', valign: 'middle'},
            {title: '大楼ID', field: 'bid', visible: false, align: 'center', valign: 'middle'},
            {title: '大楼', field: 'bname', visible: true, align: 'center', valign: 'middle'},
            {title: '楼层ID', field: 'fid', visible: false, align: 'center', valign: 'middle'},
            {title: '楼层', field: 'fname', visible: true, align: 'center', valign: 'middle'},
            {title: '商铺门牌号', field: 'shopsNumber', visible: true, align: 'center', valign: 'middle'},
            {title: '对应商铺ID', field: 'shopsId', visible: false, align: 'center', valign: 'middle'},
            {title: '商铺', field: 'shopsName', visible: true, align: 'center', valign: 'middle'},
            {title: '对应租赁商户ID', field: 'tenantsId', visible: false, align: 'center', valign: 'middle'},
            {title: '对应租赁商户', field: 'tenantsName', visible: true, align: 'center', valign: 'middle'},
            {title: '变更事项ID', field: 'optionsId', visible: false, align: 'center', valign: 'middle'},
            {title: '变更事项', field: 'options', visible: true, align: 'center', valign: 'middle'},
            {title: '变更选项具体原因', field: 'changeReason', visible: true, align: 'center', valign: 'middle'},
            {title: '电费缴纳类型', field: 'electricityType', visible: true, align: 'center', valign: 'middle'},
            {title: '核定电费', field: 'electricityPrice', visible: true, align: 'center', valign: 'middle'},
            {title: '核定水费', field: 'waterPrice', visible: true, align: 'center', valign: 'middle'},
            {title: '电表读数', field: 'electricMeter', visible: true, align: 'center', valign: 'middle'},
            {title: '水表读数', field: 'waterMeter', visible: true, align: 'center', valign: 'middle'},
            {title: '缺勤未关灯次数', field: 'offTimes', visible: true, align: 'center', valign: 'middle'},
            {title: '钥匙数量', field: 'votes', visible: true, align: 'center', valign: 'middle'},
            {title: '合同保证金', field: 'contractMargin', visible: true, align: 'center', valign: 'middle'},
            {title: '物业保证金', field: 'propertyMargin', visible: true, align: 'center', valign: 'middle'},
            {title: '商管保证金', field: 'businessMargin', visible: true, align: 'center', valign: 'middle'},
            {title: '广告位保证金', field: 'adMargin', visible: true, align: 'center', valign: 'middle'},
            {title: '水电保证金', field: 'waterMargin', visible: true, align: 'center', valign: 'middle'},
            {title: '证照押金', field: 'lisensePrice', visible: true, align: 'center', valign: 'middle'},
            {title: '租金', field: 'contractFees', visible: true, align: 'center', valign: 'middle'},
            {title: '物业费', field: 'propertyFees', visible: true, align: 'center', valign: 'middle'},
            {title: '商管费', field: 'businessFees', visible: true, align: 'center', valign: 'middle'},
            {title: '广告位租金', field: 'adRent', visible: true, align: 'center', valign: 'middle'},
            {title: '装修押金', field: 'fitmentPrice', visible: true, align: 'center', valign: 'middle'},
            {title: '垃圾清运费', field: 'garbagePrice', visible: true, align: 'center', valign: 'middle'},
            {title: '施工号牌费', field: 'platePrice', visible: true, align: 'center', valign: 'middle'},
            {title: '封场POP费', field: 'popPrice', visible: true, align: 'center', valign: 'middle'},
            {title: '缺勤未关灯罚款', field: 'offPrice', visible: true, align: 'center', valign: 'middle'},
            {title: '工具费', field: 'toolPrice', visible: true, align: 'center', valign: 'middle'},
            {title: '退场电费', field: 'exitElectricity', visible: true, align: 'center', valign: 'middle'},
            {title: '退场水费', field: 'exitWater', visible: true, align: 'center', valign: 'middle'},
            {title: '生活垃圾费', field: 'trashPrice', visible: true, align: 'center', valign: 'middle'},
            {title: '其他费用', field: 'otherPrice', visible: true, align: 'center', valign: 'middle'},
            {title: '合计', field: 'total', visible: true, align: 'center', valign: 'middle'},
            {title: '备注信息', field: 'memo', visible: true, align: 'center', valign: 'middle'},
            {title: '记录创建时间', field: 'createdAt', visible: true, align: 'center', valign: 'middle'},
            {title: '创建人ID', field: 'userId', visible: true, align: 'center', valign: 'middle'},
            {title: '创建人', field: 'userName', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
RentTenantShopChange.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        RentTenantShopChange.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加
 */
RentTenantShopChange.openAddRentTenantShopChange = function () {
    var index = layer.open({
        type: 2,
        title: '添加',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/rentTenantShopChange/rentTenantShopChange_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看详情
 */
RentTenantShopChange.openRentTenantShopChangeDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/rentTenantShopChange/rentTenantShopChange_update/' + RentTenantShopChange.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除
 */
RentTenantShopChange.delete = function () {
    if (this.check()) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/rentTenantShopChange/delete/"+RentTenantShopChange.seItem.id, function (data) {
                Feng.success("删除成功!");
                RentTenantShopChange.table.refresh();
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
RentTenantShopChange.resetSearch = function () {
    $("#condition1").val("");
    $("#condition2").val("");
    $("#condition3").val("");
    $("#beginTime").val("");
    $("#endTime").val("");

    RentTenantShopChange.search();
}
RentTenantShopChange.search = function () {
    var queryData = {};
    queryData['condition1'] = $("#condition1").val();
    queryData['condition2'] = $("#condition2").val();
    queryData['condition3'] = $("#condition3").val();
    queryData['beginTime'] = $("#beginTime").val();
    queryData['endTime'] = $("#endTime").val();
    RentTenantShopChange.table.refresh({query: queryData});
    $.post(Feng.ctxPath+"/rentTenantShopChange/money",queryData,function (data,status) {
        if (data==''||data==null){
            $("#saleAmount").val(0)
        }
        else {
            $("#saleAmount").val(data[0].saleAmount)
        }

    })
};

/**
 * 导出报表
 */
var myDate = new Date();
RentTenantShopChange.export = function(){
    $('#RentTenantShopChangeTable').tableExport(
        {
            type:'excel',
            htmlContent:'true',
            title: '商铺变更事项 '+ myDate.toLocaleDateString(),
            fileName:'商铺变更事项 '+ ' ' +myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate(),

            escape:'false'
        }
    );
}

$(function () {
    var defaultColunms = RentTenantShopChange.initColumn();
    var table = new BSTable(RentTenantShopChange.id, "/rentTenantShopChange/list", defaultColunms);
    table.setPaginationType("client");
    RentTenantShopChange.table = table.init();
    $.post(Feng.ctxPath+"/rentTenantShopChange/money",function (data,status) {
        if (data==''||data==null){
            $("#saleAmount").val(0)
        }
        else {
            $("#saleAmount").val(data[0].saleAmount)
        }

    })
});
