/**
 * 管理初始化
 */
var RentAdContractDetails = {
    id: "RentAdContractDetailsTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};


/**
 * 初始化表格的列
 */
RentAdContractDetails.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '合同ID', field: 'id', visible: false, align: 'center', valign: 'middle'},
            {title: '租赁商户ID', field: 'tenantsId', visible: false, align: 'center', valign: 'middle'},
            {title: '身份证号', field: 'cardNumber', visible: true, align: 'center', valign: 'middle',formatter:check1},
            {title: '租户名', field: 'tenantsName', visible: true, align: 'center', valign: 'middle',formatter:check2},
            {title: '大楼ID', field: 'bid', visible: false, align: 'center', valign: 'middle'},
            {title: '大楼名称', field: 'bname', visible: true, align: 'center', valign: 'middle',formatter:check3},
            {title: '楼层ID', field: 'fid', visible: false, align: 'center', valign: 'middle'},
            {title: '楼层', field: 'fname', visible: true, align: 'center', valign: 'middle',formatter:check4},
            {title: '广告位编号', field: 'adNumber', visible: true, align: 'center', valign: 'middle',formatter:check5},
            {title: '广告位ID', field: 'adId', visible: false, align: 'center', valign: 'middle'},
            {title: '广告位', field: 'adName', visible: true, align: 'center', valign: 'middle',formatter:check6},
            {title: '押金', field: 'deposit', visible: false, align: 'center', valign: 'middle'},
            {title: '付款', field: 'payment', visible: false, align: 'center', valign: 'middle'},
            {title: '押付类型', field: 'dap', visible: true, align: 'center', valign: 'middle'},
            {title: '缴费次数', field: 'period', visible: true, align: 'center', valign: 'middle'},
            {title: '租赁状态', field: 'rentStatus', visible: true, align: 'center', valign: 'middle'},
            {title: '电费缴纳类型', field: 'electricityType', visible: true, align: 'center', valign: 'middle'},
            {title: '核定电费单价', field: 'electricityPrice', visible: true, align: 'center', valign: 'middle'},
            {title: '合同租金', field: 'contractFees', visible: true, align: 'center', valign: 'middle'},
            {title: '合同保证金', field: 'contractMargin', visible: true, align: 'center', valign: 'middle'},
            {title: '物业保证金', field: 'propertyMargin', visible: true, align: 'center', valign: 'middle'},
            {title: '物业管理费', field: 'propertyFees', visible: true, align: 'center', valign: 'middle'},
            {title: '商业管理保证金', field: 'businessMargin', visible: true, align: 'center', valign: 'middle'},
            {title: '商业管理费', field: 'businessFees', visible: true, align: 'center', valign: 'middle'},
            {title: '水电保证金', field: 'waterMargin', visible: true, align: 'center', valign: 'middle'},
            {title: '合同开始时间', field: 'beginedAt', visible: true, align: 'center', valign: 'middle'},
            {title: '合同到期时间', field: 'endedAt', visible: true, align: 'center', valign: 'middle',formatter:check7},
            {title: '合同照片', field:'operation', visible: true, align: 'center', valign: 'middle',formatter:operateFormatter1, events: operateEvents1},
            {title: '备注信息', field: 'leaseMemo', visible: true, align: 'center', valign: 'middle'},
            {title: '创建人ID', field: 'userId', visible: false, align: 'center', valign: 'middle'},
            {title: '创建人', field: 'userName', visible: true, align: 'center', valign: 'middle'},
            {title: '状态', field: 'flag', visible: true, sortable:true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 每列增加查看证据按钮
 */
function operateFormatter1(value, row, index) {
    return ['<button type="button" class="btn btn-primary">查看</button>'];
};

window.operateEvents1 = {
    'click .btn': function (e, value, row, index){
            RentAdContractDetails.openPictures(row);

    }
};

//计算日期相减天数
function DateMinus(sDate){
    var sdate = new Date(sDate.replace(/-/g, "/"));
    var now = new Date();
    var days = sdate.getTime() - now.getTime();
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    return day;
}

function check1(value, row, index) {
    var days = DateMinus(row.endedAt);
    if(days>=0&&days<90){
        return ['<p style="color: red">']+row.cardNumber+['</p>'];
    }else{
        return row.cardNumber;
    }
};

function check2(value, row, index) {
    var days = DateMinus(row.endedAt);
    if(days>=0&&days<90){
        return ['<p style="color: red">']+row.tenantsName+['</p>'];
    }else{
        return row.tenantsName;
    }
};

function check3(value, row, index) {
    var days = DateMinus(row.endedAt);
    if(days>=0&&days<90){
        return ['<p style="color: red">']+row.bname+['</p>'];
    }else{
        return row.bname;
    }
};

function check4(value, row, index) {
    var days = DateMinus(row.endedAt);
    if(days>=0&&days<90){
        return ['<p style="color: red">']+row.fname+['</p>'];
    }else{
        return row.fname;
    }
};

function check5(value, row, index) {
    var days = DateMinus(row.endedAt);
    if(days>=0&&days<90){
        return ['<p style="color: red">']+row.adNumber+['</p>'];
    }else{
        return row.adNumber;
    }
};

function check6(value, row, index) {
    var days = DateMinus(row.endedAt);
    if(days>=0&&days<90){
        return ['<p style="color: red">']+row.adName+['</p>'];
    }else{
        return row.adName;
    }
};

function check7(value, row, index) {
    var days = DateMinus(row.endedAt);
    if(days>=0&&days<90){
        return ['<p style="color: red">']+row.endedAt+['</p>'];
    }else{
        return row.endedAt;
    }
};

/**
 * 检查是否选中
 */
RentAdContractDetails.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        RentAdContractDetails.seItem = selected[0];
        return true;
    }
};



/**
 * 点击查看图片
 */

RentAdContractDetails.openPictures = function (row) {
    var index = layer.open({
        type: 2,
        title: '合同照片查看',
        area: ['900px', '550px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/rentAdContractPictures/'+row.id,
    });
    this.layerIndex = index;
};


/**
 * 点击添加
 */

RentAdContractDetails.openAddRentAdContractDetails = function () {

    var index = layer.open({
        type: 2,
        title: '添加',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/rentAdContractDetails/rentAdContractDetails_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看详情
 */
RentAdContractDetails.openRentAdContractDetailsDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/rentAdContractDetails/rentAdContractDetails_update/' + RentAdContractDetails.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除
 */
RentAdContractDetails.delete = function () {
    if (RentAdContractDetails.check()) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/rentAdContractDetails/delete/"+RentAdContractDetails.seItem.id, function (data) {
                Feng.success("删除成功!");
                RentAdContractDetails.table.refresh();
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
 * 点击添加图片
 */
RentAdContractDetails.openAddRentAdContractPictures = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '添加',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/rentAdContractPictures/rentAdContractPictures_add/' + RentAdContractDetails.seItem.id
        });
        this.layerIndex = index;
    }
};



/**
 * 查询列表
 */
RentAdContractDetails.resetSearch = function () {
    $("#condition1").val("");
    $("#condition2").val("");
    $("#beginTime").val("");
    $("#endTime").val("");

    RentAdContractDetails.search();
}

RentAdContractDetails.search = function () {
    var queryData = {};
    queryData['condition1'] = $("#condition1").val();
    queryData['condition2'] = $("#condition2").val();
    queryData['beginTime'] = $("#beginTime").val();
    queryData['endTime'] = $("#endTime").val();
    RentAdContractDetails.table.refresh({query: queryData});
};

/**
 * 导出报表
 */
var myDate = new Date();
RentAdContractDetails.export = function(){
    $('#RentAdContractDetailsTable').tableExport(
        {
            type:'excel',
            htmlContent:'true',
            title: '广告位合同 '+ myDate.toLocaleDateString(),
            fileName:'广告位合同 '+ ' ' +myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate(),

            escape:'false'
        }
    );
}

$(function () {

    var defaultColunms = RentAdContractDetails.initColumn();
    var table = new BSTable(RentAdContractDetails.id, "/rentAdContractDetails/list", defaultColunms);
    table.setPaginationType("client");
    RentAdContractDetails.table = table.init();
});




