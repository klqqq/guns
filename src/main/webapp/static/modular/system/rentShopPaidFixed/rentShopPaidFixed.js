/**
 * 管理初始化
 */
var RentShopPaidFixed = {
    id: "RentShopPaidFixedTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
RentShopPaidFixed.initColumn = function () {
    return [
        // [{field: 'selectItem', radio: true,colspan: 1, rowspan: 2 },
        //     {title: '记录ID', field: 'id', visible: false, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
        //     {title: '大楼ID', field: 'bid', visible: false, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
        //     {title: '大楼', field: 'bname', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2,formatter:check1},
        //     {title: '楼层ID', field: 'fid', visible: false, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
        //     {title: '楼层', field: 'fname', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2,formatter:check2},
        //     {title: '商铺门牌号', field: 'shopsNumber', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2,formatter:check3},
        //     {title: '对应商铺ID', field: 'shopsId', visible: false, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
        //     {title: '商铺', field: 'shopsName', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2,formatter:check4},
        //     {title: '租赁商户ID', field: 'tenantsId', visible: false, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
        //     {title: '租赁商户', field: 'tenantsName', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2,formatter:check5},
        //     {title: '合同租金', visible: true, align: 'center', valign: 'middle',colspan: 2, rowspan: 1},
        //     {title: '合同保证金', visible: true, align: 'center', valign: 'middle',colspan: 2, rowspan: 1},
        //     {title: '物业保证金', visible: true, align: 'center', valign: 'middle',colspan: 2, rowspan: 1},
        //     {title: '物业管理费', visible: true, align: 'center', valign: 'middle',colspan: 2, rowspan: 1},
        //     {title: '商业管理保证金', visible: true, align: 'center', valign: 'middle',colspan: 2, rowspan: 1},
        //     {title: '商业管理费', visible: true, align: 'center', valign: 'middle',colspan: 2, rowspan: 1},
        //     {title: '水电保证金', visible: true, align: 'center', valign: 'middle',colspan: 2, rowspan: 1},
        //     {title: '证照押金', visible: true, align: 'center', valign: 'middle',colspan: 2, rowspan: 1},
        //     {title: '缴费起始时间', field: 'paidStart', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
        //     {title: '缴费终止时间', field: 'paidEnd', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2,formatter:check6},
        //     {title: '凭证', field: 'voucher', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
        //     {title: '收据编号', field: 'receipt', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
        //     {title: '转入账户', field: 'account', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
        //     {title: '是否缴清', field: 'flag', visible: true, align: 'center', valign: 'middle',sortable: true, colspan: 1, rowspan: 2,formatter:check7},
        //     {title: '备注信息', field: 'memo', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
        //     {title: '信息创建时间', field: 'createdAt', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
        //     {title: '创建人ID', field: 'userId', visible: false, align: 'center', valign: 'middle',colspan: 1, rowspan: 2},
        //     {title: '创建人', field: 'userName', visible: true, align: 'center', valign: 'middle',colspan: 1, rowspan: 2}],
            // [{title: '应缴', field: 'contractFees', visible: true, align: 'center', valign: 'middle'},
            // {title: '实缴', field: 'contractFeesPaid', visible: true, align: 'center', valign: 'middle',formatter:checkContractFees},
            // {title: '应缴', field: 'contractMargin', visible: true, align: 'center', valign: 'middle'},
            // {title: '实缴', field: 'contractMarginPaid', visible: true, align: 'center', valign: 'middle',formatter:checkContractMargin},
            // {title: '应缴', field: 'propertyMargin', visible: true, align: 'center', valign: 'middle'},
            // {title: '实缴', field: 'propertyMarginPaid', visible: true, align: 'center', valign: 'middle',formatter:checkPropertyMargin},
            // {title: '应缴', field: 'propertyFees', visible: true, align: 'center', valign: 'middle'},
            // {title: '实缴', field: 'propertyFeesPaid', visible: true, align: 'center', valign: 'middle',formatter:checkPropertyFees},
            // {title: '应缴', field: 'businessMargin', visible: true, align: 'center', valign: 'middle'},
            // {title: '实缴', field: 'businessMarginPaid', visible: true, align: 'center', valign: 'middle',formatter:checkBusinessMargin},
            // {title: '应缴', field: 'businessFees', visible: true, align: 'center', valign: 'middle'},
            // {title: '实缴', field: 'businessFeesPaid', visible: true, align: 'center', valign: 'middle',formatter:checkBusinessFees},
            // {title: '应缴', field: 'waterMargin', visible: true, align: 'center', valign: 'middle'},
            // {title: '实缴', field: 'waterMarginPaid', visible: true, align: 'center', valign: 'middle',formatter:checkWaterMargin},
            // {title: '应缴', field: 'lisensePrice', visible: true, align: 'center', valign: 'middle'},
            // {title: '实缴', field: 'lisensePricePaid', visible: true, align: 'center', valign: 'middle',formatter:checkLisensePrice}],
{field: 'selectItem', radio: true, },
            {title: '记录ID', field: 'id', visible: false, align: 'center', valign: 'middle',},
            {title: '大楼ID', field: 'bid', visible: false, align: 'center', valign: 'middle',},
            {title: '大楼', field: 'bname', visible: true, align: 'center', valign: 'middle',formatter:check1},
            {title: '楼层ID', field: 'fid', visible: false, align: 'center', valign: 'middle',},
            {title: '楼层', field: 'fname', visible: true, align: 'center', valign: 'middle',formatter:check2},
            {title: '商铺门牌号', field: 'shopsNumber', visible: true, align: 'center', valign: 'middle',formatter:check3},
            {title: '对应商铺ID', field: 'shopsId', visible: false, align: 'center', valign: 'middle',},
            {title: '商铺', field: 'shopsName', visible: true, align: 'center', valign: 'middle',formatter:check4},
            {title: '租赁商户ID', field: 'tenantsId', visible: false, align: 'center', valign: 'middle',},
            {title: '租赁商户', field: 'tenantsName', visible: true, align: 'center', valign: 'middle',formatter:check5},
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
            {title: '应缴合计', field: 'total', visible: true, align: 'center', valign: 'middle'},
            {title: '实缴合计', field: 'moneyPaid', visible: true, align: 'center', valign: 'middle'},
            {title: '缴费起始时间', field: 'paidStart', visible: true, align: 'center', valign: 'middle',},
            {title: '缴费终止时间', field: 'paidEnd', visible: true, align: 'center', valign: 'middle',formatter:check6},
            {title: '凭证', field: 'voucher', visible: true, align: 'center', valign: 'middle',},
            {title: '收据编号', field: 'receipt', visible: true, align: 'center', valign: 'middle',},
            {title: '转入账户', field: 'account', visible: true, align: 'center', valign: 'middle',},
            {title: '是否缴清', field: 'flag', visible: true, align: 'center', valign: 'middle',sortable: true, formatter:check7},
            {title: '备注信息', field: 'memo', visible: true, align: 'center', valign: 'middle',},
            {title: '信息创建时间', field: 'createdAt', visible: true, align: 'center', valign: 'middle',},
            {title: '创建人ID', field: 'userId', visible: false, align: 'center', valign: 'middle',},
            {title: '创建人', field: 'userName', visible: true, align: 'center', valign: 'middle',},
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

// function checkContractFees(value, row, index) {
//     var days = DateMinus(row.paidEnd);
//     if((total!=moneyPaid)&&(days<90)){
//         return ['<p style="color: red">']+row.contractFeesPaid+['</p>'];
//     }else{
//         return row.contractFeesPaid;
//     }
// };
//
// function checkContractMargin(value, row, index) {
//     var days = DateMinus(row.paidEnd);
//     if((total!=moneyPaid)&&(days<90)){
//         return ['<p style="color: red">']+row.contractMarginPaid+['</p>'];
//     }else{
//         return row.contractMarginPaid;
//     }
// };
//
// function checkPropertyMargin(value, row, index) {
//     var days = DateMinus(row.paidEnd);
//     if((total!=moneyPaid)&&(days<90)){
//         return ['<p style="color: red">']+row.propertyMarginPaid+['</p>'];
//     }else{
//         return row.propertyMarginPaid;
//     }
// };
//
// function checkPropertyFees(value, row, index) {
//     var days = DateMinus(row.paidEnd);
//     if((row.propertyFees>row.propertyFeesPaid)&&(row.propertyFees!=0)&&(days<90)){
//         return ['<p style="color: red">']+row.propertyFeesPaid+['</p>'];
//     }else{
//         return row.propertyFeesPaid;
//     }
// };
//
// function checkBusinessMargin(value, row, index) {
//     var days = DateMinus(row.paidEnd);
//     if((row.businessMargin>row.businessMarginPaid)&&(row.businessMargin!=0)&&(days<90)){
//         return ['<p style="color: red">']+row.businessMarginPaid+['</p>'];
//     }else{
//         return row.businessMarginPaid;
//     }
// };
//
// function checkBusinessFees(value, row, index) {
//     var days = DateMinus(row.paidEnd);
//     if((row.businessFees>row.businessFeesPaid)&&(row.businessFees!=0)&&(days<90)){
//         return ['<p style="color: red">']+row.businessFeesPaid+['</p>'];
//     }else{
//         return row.businessFeesPaid;
//     }
// };
//
// function checkWaterMargin(value, row, index) {
//     var days = DateMinus(row.paidEnd);
//     if((row.waterMargin>row.waterMarginPaid)&&(row.waterMargin!=0)&&(days<90)){
//         return ['<p style="color: red">']+row.waterMarginPaid+['</p>'];
//     }else{
//         return row.waterMarginPaid;
//     }
// };
//
// function checkLisensePrice(value, row, index) {
//     var days = DateMinus(row.paidEnd);
//     if((row.lisensePrice>row.lisensePricePaid)&&(row.lisensePrice!=0)&&(days<90)){
//         return ['<p style="color: red">']+row.lisensePricePaid+['</p>'];
//     }else{
//         return row.lisensePricePaid;
//     }
// };

function check1(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.total!=row.moneyPaid)&&(row.flag=="未缴清")&&(days<90)){
        return ['<p style="color: red">']+row.bname+['</p>'];
    }else{
        return row.bname;
    }
};

function check2(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.total!=row.moneyPaid)&&(row.flag=="未缴清")&&(days<90)){
        return ['<p style="color: red">']+row.fname+['</p>'];
    }else{
        return row.fname;
    }
};

function check3(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.total!=row.moneyPaid)&&(row.flag=="未缴清")&&(days<90)){
        return ['<p style="color: red">']+row.shopsNumber+['</p>'];
    }else{
        return row.shopsNumber;
    }
};

function check4(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.total!=row.moneyPaid)&&(row.flag=="未缴清")&&(days<90)){
        return ['<p style="color: red">']+row.shopsName+['</p>'];
    }else{
        return row.shopsName;
    }
};

function check5(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.total!=row.moneyPaid)&&(row.flag=="未缴清")&&(days<90)){
        return ['<p style="color: red">']+row.tenantsName+['</p>'];
    }else{
        return row.tenantsName;
    }
};

function check6(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.total!=row.moneyPaid)&&(row.flag=="未缴清")&&(days<90)){
        return ['<p style="color: red">']+row.paidEnd+['</p>'];
    }else{
        return row.paidEnd;
    }
};

function check7(value, row, index) {
    var days = DateMinus(row.paidEnd);
    if((row.total!=row.moneyPaid)&&(row.flag=="未缴清")&&(days<90)){
        return ['<p style="color: red">']+row.flag+['</p>'];
    }else{
        return row.flag;
    }
};

/**
 * 检查是否选中
 */
RentShopPaidFixed.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        RentShopPaidFixed.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加
 */
RentShopPaidFixed.openAddRentShopPaidFixed = function () {
    var index = layer.open({
        type: 2,
        title: '添加',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/rentShopPaidFixed/rentShopPaidFixed_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看详情
 */
RentShopPaidFixed.openRentShopPaidFixedDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/rentShopPaidFixed/rentShopPaidFixed_update/' + RentShopPaidFixed.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除
 */
RentShopPaidFixed.delete = function () {
    if (this.check()) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/rentShopPaidFixed/delete/"+ RentShopPaidFixed.seItem.id, function (data) {
                Feng.success("删除成功!");
                RentShopPaidFixed.table.refresh();
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
RentShopPaidFixed.resetSearch = function () {
    $("#condition1").val("");
    $("#condition2").val("");
    $("#condition3").val("");
    $("#beginTime").val("");
    $("#endTime").val("");

    RentShopPaidFixed.search();

}
RentShopPaidFixed.search = function () {
    var queryData = {};
    queryData['condition1'] = $("#condition1").val();
    queryData['condition2'] = $("#condition2").val();
    queryData['condition3'] = $("#condition3").val();
    queryData['beginTime'] = $("#beginTime").val();
    queryData['endTime'] = $("#endTime").val();
    RentShopPaidFixed.table.refresh({query: queryData});
    $.post(Feng.ctxPath+"/rentShopPaidFixed/total",queryData,function (data,status) {
        if (data==''||data==null){
            $("#totalAmount").val(0)
        }
        else {
            $("#totalAmount").val(data[0].totalAmount)
        }
    })
    $.post(Feng.ctxPath+"/rentShopPaidFixed/money",queryData,function (data,status) {
        if (data==''||data==null){
            $("#saleAmount").val(0)
        }
        else {
            $("#saleAmount").val(data[0].saleAmount)
        }

    });

};

/**
 * 导出报表
 */
var myDate = new Date();
RentShopPaidFixed.export = function(){
    $('#RentShopPaidFixedTable').tableExport(
        {
            type:'excel',
            htmlContent:'true',
            title: '商铺固定费用缴租期记录 '+ myDate.toLocaleDateString(),
            fileName:'商铺固定费用缴租期记录 '+ ' ' +myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate(),

            escape:'false'
        }
    );
}

$(function () {
    var defaultColunms = RentShopPaidFixed.initColumn();
    var table = new BSTable(RentShopPaidFixed.id, "/rentShopPaidFixed/list", defaultColunms);
    table.setPaginationType("client");
    RentShopPaidFixed.table = table.init();
    $.post(Feng.ctxPath+"/rentShopPaidFixed/total",function (data,status) {
        if (data==''||data==null){
            $("#totalAmount").val(0)
        }
        else {
            $("#totalAmount").val(data[0].totalAmount)
        }
    })
    $.post(Feng.ctxPath+"/rentShopPaidFixed/money",function (data,status) {
        if (data==''||data==null){
            $("#saleAmount").val(0)
        }
        else {
            $("#saleAmount").val(data[0].saleAmount)
        }
    });

});
