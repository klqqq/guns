/**
 * 管理初始化
 */
var RentShops = {
    id: "RentShopsTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
RentShops.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '大楼ID', field: 'bid', visible: false, align: 'center', valign: 'middle'},
            {title: '大楼', field: 'bname', visible: true, align: 'center', valign: 'middle',sortable: true,},
            {title: '楼层ID', field: 'fid', visible: false, align: 'center', valign: 'middle'},
            {title: '楼层', field: 'fname', visible: true, align: 'center', valign: 'middle'},
            {title: '商铺ID', field: 'shopsId', visible: false, align: 'center', valign: 'middle'},
            {title: '商铺名称', field: 'shopsName', visible: true, align: 'center', valign: 'middle'},
            {title: '商铺门牌号', field: 'shopsNumber', visible: true, align: 'center', valign: 'middle'},
            {title: '商铺面积', field: 'shopsArea', visible: true, align: 'center', valign: 'middle'},
            {title: '商铺业态类型', field: 'businessType', visible: true, align: 'center', valign: 'middle'},
            {title: '具体地址', field: 'address', visible: false, align: 'center', valign: 'middle'},
            {title: '预算租金', field: 'monthlyRent', visible: true, align: 'center', valign: 'middle'},
            {title: '实际总租金', field: 'paidRent', visible: true, align: 'center', valign: 'middle'},
            {title: '合同租金', field: 'contractFees', visible: true, align: 'center', valign: 'middle'},
            {title: '物业管理费', field: 'propertyFees', visible: true, align: 'center', valign: 'middle'},
            {title: '商业管理费', field: 'businessFees', visible: true, align: 'center', valign: 'middle'},

            {title: '租赁状态', field: 'leaseStatus', visible: true, align: 'center', valign: 'middle',sortable: true,},
            {title: '备注信息', field: 'memo', visible: true, align: 'center', valign: 'middle'},
            {title: '信息创建时间', field: 'createdAt', visible: true, align: 'center', valign: 'middle'},
            {title: '信息更新时间', field: 'updatedAt', visible: true, align: 'center', valign: 'middle'},
            {title: '创建人ID', field: 'userId', visible: true, align: 'center', valign: 'middle'},
            {title: '创建人', field: 'userName', visible: true, align: 'center', valign: 'middle'},
            {title: '管理人ID', field: 'manageId', visible: false, align: 'center', valign: 'middle'},
            {title: '管理人', field: 'manageName', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
RentShops.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        RentShops.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加
 */
var namearr={};
var parentarr={};
RentShops.openAddRentShops = function () {
    var ajax = new $ax(Feng.ctxPath + "/dept/getParent", function(data){
        // console.log(data);
        namearr=new Array();
        for(i=0;i<data.length;i++){
            namearr[i]=data[i].fullname;
            console.log(namearr[i]);
        }
        parentarr=new Array();
        for(i=0;i<data.length;i++){
            parentarr[i]=data[i].id;
            console.log(namearr[i]);
        }
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set();
    ajax.start();
    var index = layer.open({
        type: 2,
        title: '添加',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/rentShops/rentShops_add/'+namearr+'/'+parentarr
    });
    this.layerIndex = index;
};

/**
 * 修改商铺信息
 */

var enamearr={};
var eparentarr={};
RentShops.openRentShopsDetail = function () {
    if (this.check()) {
        // console.info(AxCatData.seItem.image);
        var ajax = new $ax(Feng.ctxPath + "/dept/getParent", function(data){
            // console.log(data);
            enamearr=new Array();
            for(i=0;i<data.length;i++){
                enamearr[i]=data[i].fullname;
                //console.log(namearr[i]);
            }
            eparentarr=new Array();
            for(i=0;i<data.length;i++){
                eparentarr[i]=data[i].id;
                //console.log(namearr[i]);
            }
        },function(data){
            Feng.error("添加失败!" + data.responseJSON.message + "!");
        });
        ajax.set();
        ajax.start();
        var index = layer.open({
            type: 2,
            title: '详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/rentShops/rentShops_update/' + RentShops.seItem.bid+'/'+RentShops.seItem.fid+'/'+RentShops.seItem.shopsId+'/'+enamearr+'/'+eparentarr
        });
        this.layerIndex = index;
    }
};

/**
 * 删除
 */
RentShops.delete = function () {
    if (RentShops.check()) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/rentShops/delete/" + RentShops.seItem.bid + "/" + RentShops.seItem.fid + "/" + RentShops.seItem.shopsId, function (data) {
                Feng.success("删除成功!");
                RentShops.table.refresh();
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
RentShops.resetSearch = function () {
    $("#condition1").val("");
    $("#condition2").val("");
    $("#beginTime").val("");
    $("#endTime").val("");

    RentShops.search();
}

RentShops.search = function () {
    var queryData = {};
    queryData['condition1'] = $("#condition1").val();
    queryData['condition2'] = $("#condition2").val();
    queryData['beginTime'] = $("#beginTime").val();
    queryData['endTime'] = $("#endTime").val();
    RentShops.table.refresh({query: queryData});
};

/**
 * 导出报表
 */
var myDate = new Date();
RentShops.export = function(){
    $('#RentShopsTable').tableExport(
        {
            type:'excel',
            htmlContent:'true',
            title: '商铺 '+ myDate.toLocaleDateString(),
            fileName:'商铺 '+ ' ' +myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate(),

            escape:'false'
        }
    );
}

$(function () {
    var defaultColunms = RentShops.initColumn();
    var table = new BSTable(RentShops.id, "/rentShops/list", defaultColunms);
    table.setPaginationType("client");
    RentShops.table = table.init();
});
