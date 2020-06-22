/**
 * 管理初始化
 */
var RentAdPaidFixed = {
    id: "RentAdPaidFixedTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
RentAdPaidFixed.initColumn = function () {
    return [
        [{field: 'selectItem', radio: true,colspan: 1, rowspan: 2 },
            {title: '记录ID', field: 'id', visible: false, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
            {title: '大楼ID', field: 'bid', visible: false, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
            {title: '大楼', field: 'bname', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2,formatter:check1},
            {title: '楼层ID', field: 'fid', visible: false, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
            {title: '楼层', field: 'fname', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2,formatter:check2},
            {title: '广告位编号', field: 'adNumber', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2,formatter:check3},
            {title: '广告位ID', field: 'adId', visible: false, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
            {title: '广告位', field: 'adName', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2,formatter:check4},
            {title: '租赁商户ID', field: 'tenantsId', visible: false, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
            {title: '租赁商户', field: 'tenantsName', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2,formatter:check5},
        {title: '合同租金',  visible: true, align: 'center', valign: 'middle',colspan: 2, rowspan: 1},
        {title: '合同保证金', visible: true, align: 'center', valign: 'middle',colspan: 2, rowspan: 1},
        {title: '物业保证金', visible: true, align: 'center', valign: 'middle',colspan: 2, rowspan: 1},
        {title: '物业管理费', visible: true, align: 'center', valign: 'middle',colspan: 2, rowspan: 1},
        {title: '商业管理保证金', visible: true, align: 'center', valign: 'middle',colspan: 2, rowspan: 1},
        {title: '商业管理费', visible: true, align: 'center', valign: 'middle',colspan: 2, rowspan: 1},
        {title: '水电保证金', visible: true, align: 'center', valign: 'middle',colspan: 2, rowspan: 1},

            {title: '缴费起始时间', field: 'paidStart', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
            {title: '缴费终止时间', field: 'paidEnd', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2,formatter:check6},
            {title: '凭证', field: 'voucher', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
            {title: '收据编号', field: 'receipt', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
            {title: '转入账户', field: 'account', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
            {title: '是否缴清', field: 'flag', visible: true, align: 'center', valign: 'middle',sortable: true,colspan: 1, rowspan: 2,formatter:check7},
            {title: '备注信息', field: 'memo', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
            {title: '信息创建时间', field: 'createdAt', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
            {title: '创建人ID', field: 'userId', visible: false, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
            {title: '创建人', field: 'userName', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2}],
            [{title: '应缴', field: 'contractFees', visible: true, align: 'center', valign: 'middle'},
            {title: '实缴', field: 'contractFeesPaid', visible: true, align: 'center', valign: 'middle',formatter:checkContractFees},
            {title: '应缴', field: 'contractMargin', visible: true, align: 'center', valign: 'middle'},
            {title: '实缴', field: 'contractMarginPaid', visible: true, align: 'center', valign: 'middle',formatter:checkContractMargin},
            {title: '应缴', field: 'propertyMargin', visible: true, align: 'center', valign: 'middle'},
            {title: '实缴', field: 'propertyMarginPaid', visible: true, align: 'center', valign: 'middle',formatter:checkPropertyMargin},
            {title: '应缴', field: 'propertyFees', visible: true, align: 'center', valign: 'middle'},
            {title: '实缴', field: 'propertyFeesPaid', visible: true, align: 'center', valign: 'middle',formatter:checkPropertyFees},
            {title: '应缴', field: 'businessMargin', visible: true, align: 'center', valign: 'middle'},
            {title: '实缴', field: 'businessMarginPaid', visible: true, align: 'center', valign: 'middle',formatter:checkBusinessMargin},
            {title: '应缴', field: 'businessFees', visible: true, align: 'center', valign: 'middle'},
            {title: '实缴', field: 'businessFeesPaid', visible: true, align: 'center', valign: 'middle',formatter:checkBusinessFees},
            {title: '应缴', field: 'waterMargin', visible: true, align: 'center', valign: 'middle'},
            {title: '实缴', field: 'waterMarginPaid', visible: true, align: 'center', valign: 'middle',formatter:checkWaterMargin},]


    ];
};

//计算日期相减天数
function DateMinus(sDate){
    var sdate = new Date(sDate.replace(/-/g, "/"));
    var now = new Date();
    var days = sdate.getTime() - now.getTime();
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    return day;
}

function checkContractFees(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.contractFees>row.contractFeesPaid)&&(row.contractFees!=0)&&(days<90)){
        return ['<p style="color: red">']+row.contractFeesPaid+['</p>'];
    }else{
        return row.contractFeesPaid;
    }
};

function checkContractMargin(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.contractMargin>row.contractMarginPaid)&&(row.contractMargin!=0)&&(days<90)){
        return ['<p style="color: red">']+row.contractMarginPaid+['</p>'];
    }else{
        return row.contractMarginPaid;
    }
};

function checkPropertyMargin(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.propertyMargin>row.propertyMarginPaid)&&(row.propertyMargin!=0)&&(days<90)){
        return ['<p style="color: red">']+row.propertyMarginPaid+['</p>'];
    }else{
        return row.propertyMarginPaid;
    }
};

function checkPropertyFees(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.propertyFees>row.propertyFeesPaid)&&(row.propertyFees!=0)&&(days<90)){
        return ['<p style="color: red">']+row.propertyFeesPaid+['</p>'];
    }else{
        return row.propertyFeesPaid;
    }
};

function checkBusinessMargin(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.businessMargin>row.businessMarginPaid)&&(row.businessMargin!=0)&&(days<90)){
        return ['<p style="color: red">']+row.businessMarginPaid+['</p>'];
    }else{
        return row.businessMarginPaid;
    }
};

function checkBusinessFees(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.businessFees>row.businessFeesPaid)&&(row.businessFees!=0)&&(days<90)){
        return ['<p style="color: red">']+row.businessFeesPaid+['</p>'];
    }else{
        return row.businessFeesPaid;
    }
};

function checkWaterMargin(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.waterMargin>row.waterMarginPaid)&&(row.waterMargin!=0)&&(days<90)){
        return ['<p style="color: red">']+row.waterMarginPaid+['</p>'];
    }else{
        return row.waterMarginPaid;
    }
};



function check1(value, row, index) {
    var days = DateMinus(row.paidEnd);
  //  alert(row.flag);
    if((row.contractFees!=0)&&(row.flag=="未缴清")&&(days<90)){
      //  alert("1");
        return ['<p style="color: red">']+row.bname+['</p>'];
    }else{
        return row.bname;
    }
};

function check2(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.contractFees!=0)&&(row.flag=="未缴清")&&(days<90)){
        return ['<p style="color: red">']+row.fname+['</p>'];
    }else{
        return row.fname;
    }
};

function check3(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.contractFees!=0)&&(row.flag=="未缴清")&&(days<90)){
        return ['<p style="color: red">']+row.adNumber+['</p>'];
    }else{
        return row.adNumber;
    }
};

function check4(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.contractFees!=0)&&(row.flag=="未缴清")&&(days<90)){
        return ['<p style="color: red">']+row.adName+['</p>'];
    }else{
        return row.adName;
    }
};

function check5(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.contractFees!=0)&&(row.flag=="未缴清")&&(days<90)){
        return ['<p style="color: red">']+row.tenantsName+['</p>'];
    }else{
        return row.tenantsName;
    }
};

function check6(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.contractFees!=0)&&(row.flag=="未缴清")&&(days<90)){
        return ['<p style="color: red">']+row.paidEnd+['</p>'];
    }else{
        return row.paidEnd;
    }
};

function check7(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.contractFees!=0)&&(row.flag=="未缴清")&&(days<90)){
        return ['<p style="color: red">']+row.flag+['</p>'];
    }else{
        return row.flag;
    }
};

/**
 * 检查是否选中
 */
RentAdPaidFixed.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        RentAdPaidFixed.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加
 */
RentAdPaidFixed.openAddRentAdPaidFixed = function () {
    var index = layer.open({
        type: 2,
        title: '添加',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/rentAdPaidFixed/rentAdPaidFixed_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看详情
 */
RentAdPaidFixed.openRentAdPaidFixedDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/rentAdPaidFixed/rentAdPaidFixed_update/' + RentAdPaidFixed.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除
 */
RentAdPaidFixed.delete = function () {
    if (this.check()) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/rentAdPaidFixed/delete/"+ RentAdPaidFixed.seItem.id, function (data) {
                Feng.success("删除成功!");
                RentAdPaidFixed.table.refresh();
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
RentAdPaidFixed.resetSearch = function () {
    $("#condition1").val("");
    $("#condition2").val("");
    $("#beginTime").val("");
    $("#endTime").val("");

    RentAdPaidFixed.search();
}
RentAdPaidFixed.search = function () {
    var queryData = {};
    queryData['condition1'] = $("#condition1").val();
    queryData['condition2'] = $("#condition2").val();
    queryData['beginTime'] = $("#beginTime").val();
    queryData['endTime'] = $("#endTime").val();
    RentAdPaidFixed.table.refresh({query: queryData});
};

/**
 * 导出报表
 */
var myDate = new Date();
RentAdPaidFixed.export = function(){
    $('#RentAdPaidFixedTable').tableExport(
        {
            type:'excel',
            htmlContent:'true',
            title: '广告位固定费用缴租期记录 '+ myDate.toLocaleDateString(),
            fileName:'广告位固定费用缴租期记录 '+ ' ' +myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate(),

            escape:'false'
        }
    );
}

$(function () {
    var defaultColunms = RentAdPaidFixed.initColumn();
    var table = new BSTable(RentAdPaidFixed.id, "/rentAdPaidFixed/list", defaultColunms);
    table.setPaginationType("client");
    RentAdPaidFixed.table = table.init();


});
