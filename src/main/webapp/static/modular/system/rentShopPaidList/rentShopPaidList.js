/**
 * 管理初始化
 */
var RentShopPaidList = {
    id: "RentShopPaidListTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
RentShopPaidList.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '记录ID', field: 'id', visible: false, align: 'center', valign: 'middle'},
            {title: '大楼ID', field: 'bid', visible: false, align: 'center', valign: 'middle'},
            {title: '大楼', field: 'bname', visible: true, align: 'center', valign: 'middle',formatter:check1},
            {title: '楼层ID', field: 'fid', visible: false, align: 'center', valign: 'middle'},
            {title: '楼层', field: 'fname', visible: true, align: 'center', valign: 'middle',formatter:check2},
            {title: '商铺门牌号', field: 'shopsNumber', visible: true, align: 'center', valign: 'middle',formatter:check3},
            {title: '对应商铺ID', field: 'shopsId', visible: false, align: 'center', valign: 'middle'},
            {title: '商铺', field: 'shopsName', visible: true, align: 'center', valign: 'middle',formatter:check4},
            {title: '租赁商户ID', field: 'tenantsId', visible: false, align: 'center', valign: 'middle'},
            {title: '租赁商户', field: 'tenantsName', visible: true, align: 'center', valign: 'middle',formatter:check5},
            {title: '应缴纳金额', field: 'price', visible: true, align: 'center', valign: 'middle'},
            {title: '实缴纳金额', field: 'paidPrice', visible: true, align: 'center', valign: 'middle',formatter:check8},
            {title: '缴费起始时间', field: 'paidStart', visible: true, align: 'center', valign: 'middle'},
            {title: '缴费终止时间', field: 'paidEnd', visible: true, align: 'center', valign: 'middle',formatter:check6},
            {title: '凭证', field: 'voucher', visible: true, align: 'center', valign: 'middle'},
            {title: '收据编号', field: 'receipt', visible: true, align: 'center', valign: 'middle'},
            {title: '转入账户', field: 'account', visible: true, align: 'center', valign: 'middle'},
            {title: '是否缴清', field: 'flag', visible: true, align: 'center', valign: 'middle',sortable: true,formatter:check7},
            {title: '备注信息', field: 'memo', visible: true, align: 'center', valign: 'middle'},
            {title: '信息创建时间', field: 'createdAt', visible: true, align: 'center', valign: 'middle'},
            {title: '创建人ID', field: 'userId', visible: true, align: 'center', valign: 'middle'},
            {title: '创建人', field: 'userName', visible: true, align: 'center', valign: 'middle'}
    ];
};

//计算日期相减天数
function DateMinus(sDate){
    //var sdate = new Date(sDate.replace(/-/g, "/"));
    var sdate = new Date(sDate);
    var now = new Date();
    var days = sdate.getTime() - now.getTime();
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    return day;
}

function check1(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.price!=0)&&(row.flag=="未缴清")&&(days<45)){
        return ['<p style="color: red">']+row.bname+['</p>'];
    }else{
        return row.bname;
    }
};

function check2(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.price!=0)&&(row.flag=="未缴清")&&(days<45)){
        return ['<p style="color: red">']+row.fname+['</p>'];
    }else{
        return row.fname;
    }
};

function check3(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.price!=0)&&(row.flag=="未缴清")&&(days<45)){
        return ['<p style="color: red">']+row.shopsNumber+['</p>'];
    }else{
        return row.shopsNumber;
    }
};

function check4(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.price!=0)&&(row.flag=="未缴清")&&(days<45)){
        return ['<p style="color: red">']+row.shopsName+['</p>'];
    }else{
        return row.shopsName;
    }
};

function check5(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.price!=0)&&(row.flag=="未缴清")&&(days<45)){
        return ['<p style="color: red">']+row.tenantsName+['</p>'];
    }else{
        return row.tenantsName;
    }
};

function check6(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.price!=0)&&(row.flag=="未缴清")&&(days<45)){
        return ['<p style="color: red">']+row.paidEnd+['</p>'];
    }else{
        return row.paidEnd;
    }
};

function check7(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.price!=0)&&(row.flag=="未缴清")&&(days<45)){
        return ['<p style="color: red">']+row.flag+['</p>'];
    }else{
        return row.flag;
    }
};

function check8(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.price>row.paidPrice)&&(row.price!=0)&&(row.flag=="未缴清")&&(days<45)){
        return ['<p style="color: red">']+row.paidPrice+['</p>'];
    }else{
        return row.paidPrice;
    }
};

/**
 * 检查是否选中
 */
RentShopPaidList.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        RentShopPaidList.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加
 */
RentShopPaidList.openAddRentShopPaidList = function () {
    var index = layer.open({
        type: 2,
        title: '添加',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/rentShopPaidList/rentShopPaidList_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看详情
 */
RentShopPaidList.openRentShopPaidListDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/rentShopPaidList/rentShopPaidList_update/' + RentShopPaidList.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除
 */
RentShopPaidList.delete = function () {
    if (this.check()) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/rentShopPaidList/delete/"+RentShopPaidList.seItem.id, function (data) {
                Feng.success("删除成功!");
                RentShopPaidList.table.refresh();
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
RentShopPaidList.resetSearch = function () {
    $("#condition1").val("");
    $("#condition2").val("");
    $("#condition3").val("");
    $("#beginTime").val("");
    $("#endTime").val("");

    RentShopPaidList.search();
}
RentShopPaidList.search = function () {
    var queryData = {};
    queryData['condition1'] = $("#condition1").val();
    queryData['condition2'] = $("#condition2").val();
    queryData['condition3'] = $("#condition3").val();
    queryData['beginTime'] = $("#beginTime").val();
    queryData['endTime'] = $("#endTime").val();
    RentShopPaidList.table.refresh({query: queryData});
};

/**
 * 导出报表
 */
var myDate = new Date();
RentShopPaidList.export = function(){
    $('#RentShopPaidListTable').tableExport(
        {
            type:'excel',
            htmlContent:'true',
            title: '商铺其他费用缴租期记录 '+ myDate.toLocaleDateString(),
            fileName:'商铺其他费用缴租期记录 '+ ' ' +myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate(),

            escape:'false'
        }
    );
}

$(function () {
    var defaultColunms = RentShopPaidList.initColumn();
    var table = new BSTable(RentShopPaidList.id, "/rentShopPaidList/list", defaultColunms);
    table.setPaginationType("client");
    RentShopPaidList.table = table.init();
});
