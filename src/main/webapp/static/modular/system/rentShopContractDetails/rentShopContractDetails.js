/**
 * 管理初始化
 */
var RentShopContractDetails = {
    id: "RentShopContractDetailsTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
RentShopContractDetails.initColumn = function () {
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
            {title: '商铺编号', field: 'shopsNumber', visible: true, align: 'center', valign: 'middle',formatter:check5},
            {title: '商铺ID', field: 'shopsId', visible: false, align: 'center', valign: 'middle'},
            {title: '商铺', field: 'shopsName', visible: true, align: 'center', valign: 'middle',formatter:check6},
            {title: '押金', field: 'deposit', visible: false, align: 'center', valign: 'middle'},
            {title: '付款', field: 'payment', visible: false, align: 'center', valign: 'middle'},
            {title: '押付类型', field: 'dap', visible: true, align: 'center', valign: 'middle'},
            {title: '缴费次数', field: 'period', visible: true, align: 'center', valign: 'middle'},
            {title: '合同开始时间', field: 'beginedAt', visible: true, align: 'center', valign: 'middle'},
            {title: '合同到期时间', field: 'endedAt', visible: true, align: 'center', valign: 'middle',formatter:check7},
            {title: '租赁状态', field: 'rentStatus', sortable: true, visible: true, align: 'center', valign: 'middle'},
            {title: '电费缴纳类型', field: 'electricityType', visible: true, align: 'center', valign: 'middle'},
            {title: '核定电费', field: 'electricityPrice', visible: true, align: 'center', valign: 'middle'},
            {title: '核定水费', field: 'waterPrice', visible: true, align: 'center', valign: 'middle'},
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
            {title: '合同照片', field: 'operation', visible: true, align: 'center', valign: 'middle',formatter:operateFormatter1, events: operateEvents1},
            {title: '备注信息', field: 'leaseMemo', visible: true, align: 'center', valign: 'middle'},
            {title: '创建人ID', field: 'userId', visible: false, align: 'center', valign: 'middle'},
            {title: '创建人', field: 'userName', visible: true, align: 'center', valign: 'middle'},
            {title: '状态', field: 'flag', visible: true, sortable:true, align: 'center', valign: 'middle'},

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
        RentShopContractDetails.openPictures(row);

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
        return ['<p style="color: red">']+row.shopsNumber+['</p>'];
    }else{
        return row.shopsNumber;
    }
};

function check6(value, row, index) {
    var days = DateMinus(row.endedAt);
    if(days>=0&&days<90){
        return ['<p style="color: red">']+row.shopsName+['</p>'];
    }else{
        return row.shopsName;
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

RentShopContractDetails.openPictures = function (row) {
    var index = layer.open({
        type: 2,
        title: '合同照片查看',
        area: ['900px', '550px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/rentShopContractPictures/'+row.id,
    });
    this.layerIndex = index;
};

/**
 * 检查是否选中
 */
RentShopContractDetails.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        RentShopContractDetails.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加
 */
RentShopContractDetails.openAddRentShopContractDetails = function () {
    var index = layer.open({
        type: 2,
        title: '添加',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/rentShopContractDetails/rentShopContractDetails_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看详情
 */
RentShopContractDetails.openRentShopContractDetailsDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/rentShopContractDetails/rentShopContractDetails_update/' + RentShopContractDetails.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除
 */
RentShopContractDetails.delete = function () {
    if (this.check()) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/rentShopContractDetails/delete/"+RentShopContractDetails.seItem.id, function (data) {
                Feng.success("删除成功!");
                RentShopContractDetails.table.refresh();
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
RentShopContractDetails.resetSearch = function () {
    $("#condition1").val("");
    $("#condition2").val("");
    $("#beginTime").val("");
    $("#endTime").val("");

    RentShopContractDetails.search();
}
RentShopContractDetails.search = function () {
    var queryData = {};
    queryData['condition1'] = $("#condition1").val();
    queryData['condition2'] = $("#condition2").val();
    queryData['beginTime'] = $("#beginTime").val();
    queryData['endTime'] = $("#endTime").val();
    RentShopContractDetails.table.refresh({query: queryData});
};

/**
 * 导出报表
 */
var myDate = new Date();
RentShopContractDetails.export = function(){
    $('#RentShopContractDetailsTable').tableExport(
        {
            type:'excel',
            htmlContent:'true',
            title: '商铺合同 '+ myDate.toLocaleDateString(),
            fileName:'商铺合同 '+ ' ' +myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate(),

            escape:'false'
        }
    );
}

$(function () {
    var defaultColunms = RentShopContractDetails.initColumn();
    var table = new BSTable(RentShopContractDetails.id, "/rentShopContractDetails/list", defaultColunms);
    table.setPaginationType("client");
    RentShopContractDetails.table = table.init();
    var ajax = new $ax(Feng.ctxPath+"/dept/getChild2", function (data) {
        var city_list = data;
        for (var temp in city_list){
            $("#fid").append("<option value='"+city_list[temp].id+"'>"+city_list[temp].fullname+"</option>");
        }
    }, function (data) {
        Feng.error("错误!" + data.responseJSON.message + "!");
    });
    ajax.set("bid",$("#bid").val());
});
