/**
 * 管理初始化
 */
var RentAdBit = {
    id: "RentAdBitTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
RentAdBit.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '大楼ID', field: 'bid', visible: false, align: 'center', valign: 'middle'},
            {title: '大楼', field: 'bname', visible: true, align: 'center', valign: 'middle'},
            {title: '楼层ID', field: 'fid', visible: false, align: 'center', valign: 'middle'},
            {title: '楼层', field: 'fname', visible: true, align: 'center', valign: 'middle'},
            {title: '广告位ID', field: 'adId', visible: false, align: 'center', valign: 'middle'},
            {title: '编号', field: 'adNumber', visible: true, align: 'center', valign: 'middle'},
            {title: '名称', field: 'adName', visible: true, align: 'center', valign: 'middle'},
            {title: '预计面积', field: 'adArea', visible: true, align: 'center', valign: 'middle'},
            {title: '地址', field: 'address', visible: true, align: 'center', valign: 'middle'},
            {title: '状态', field: 'leaseStatus', visible: true, align: 'center', valign: 'middle'},
            {title: '预算月租金', field: 'adRent', visible: true, align: 'center', valign: 'middle'},
            {title: '核定保证金', field: 'adMargin', visible: true, align: 'center', valign: 'middle'},
            {title: '核定电费单价', field: 'adElectricity', visible: true, align: 'center', valign: 'middle'},
            {title: '备注信息', field: 'adMemo', visible: true, align: 'center', valign: 'middle'},
            {title: '创建时间', field: 'createdAt', visible: true, align: 'center', valign: 'middle'},
            {title: '更新时间', field: 'updatedAt', visible: true, align: 'center', valign: 'middle'},
            {title: '创建人ID', field: 'userId', visible: false, align: 'center', valign: 'middle'},
            {title: '创建人', field: 'userName', visible: true, align: 'center', valign: 'middle'},
            {title: '管理人ID', field: 'manageId', visible: false, align: 'center', valign: 'middle'},
            {title: '管理人', field: 'manageName', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
RentAdBit.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        RentAdBit.seItem = selected[0];
        return true;
    }
};


/**
 * 点击添加
 */
var namearr={};
var parentarr={};
RentAdBit.openAddRentAdBit = function () {
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
        content: Feng.ctxPath + '/rentAdBit/rentAdBit_add/'+namearr+'/'+parentarr
    });
    this.layerIndex = index;
};

/**
 * 修改广告位信息
 */

var enamearr={};
var eparentarr={};
RentAdBit.openRentAdBitDetail = function () {
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
            content: Feng.ctxPath + '/rentAdBit/rentAdBit_update/' + RentAdBit.seItem.bid+'/'+RentAdBit.seItem.fid+'/'+RentAdBit.seItem.adId+'/'+enamearr+'/'+eparentarr
        });
        this.layerIndex = index;
    }
};



/**
 * 删除
 */
RentAdBit.delete = function () {
    if (RentAdBit.check()) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/rentAdBit/delete/" + RentAdBit.seItem.bid + "/" + RentAdBit.seItem.fid + "/" + RentAdBit.seItem.adId, function (data) {
                Feng.success("删除成功!");
                RentAdBit.table.refresh();
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
RentAdBit.resetSearch = function () {
    $("#condition1").val("");
    $("#condition2").val("");
    $("#beginTime").val("");
    $("#endTime").val("");

    RentAdBit.search();
}

RentAdBit.search = function () {
    var queryData = {};
    queryData['condition1'] = $("#condition1").val();
    queryData['condition2'] = $("#condition2").val();
    queryData['beginTime'] = $("#beginTime").val();
    queryData['endTime'] = $("#endTime").val();
    RentAdBit.table.refresh({query: queryData});
};

/**
 * 导出报表
 */
var myDate = new Date();
RentAdBit.export = function(){
    $('#RentAdBitTable').tableExport(
        {
            type:'excel',
            htmlContent:'true',
            title: '广告位 '+ myDate.toLocaleDateString(),
            fileName:'广告位 '+ ' ' +myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate(),
            showExport: true,
            exportDataType: 'all',
            escape:'false'
        }
    );

    // $('#RentAdBitTable').bootstrapTable('destroy').bootstrapTable({
    //     method: 'post',
    //     dataType: 'json',
    //     height: 560,
    //     toolbar: '#toolbar',               //工具按钮用哪个容器
    //     pagination: true,                   //是否显示分页（*）
    //     maintainSelected: true,             //设置为 true 在点击分页按钮或搜索按钮时，将记住checkbox的选择项
    //     sidePagination: "client",          //分页方式：client客户端分页，server服务端分页（*）
    //     pageNumber: 1,                       //初始化加载第一页，默认第一页
    //     pageSize: 10,                       //每页的记录行数（*）
    //     pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
    //     search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
    //     strictSearch: false,                //设置为 true启用 全匹配搜索，否则为模糊搜索
    //     showRefresh: true,                  //是否显示刷新按钮
    //     minimumCountColumns: 2,             //最少允许的列数
    //     clickToSelect: true,                //是否启用点击选中行
    //     sortStable: true,
    //
    //     showExport: true,  //是否显示导出按钮
    //     buttonsAlign:"right",  //按钮位置
    //     exportDataType: 'all',   //导出的方式 all全部 selected已选择的  basic', 'all', 'selected'.
    //     Icons:'glyphicon glyphicon-export', //导出图标
    //     exportTypes:[ 'excel','doc','xlsx','csv', 'txt', 'sql' ],  //导出文件类型 'csv', 'txt', 'sql', 'doc', 'excel', 'xlsx', 'pdf'
    //     exportOptions:{
    //         // ignoreColumn: [0,1],  //忽略某一列的索引
    //         fileName: '广告位1 '+ myDate.toLocaleDateString(),  //文件名称设置
    //         worksheetName: 'sheet1',  //表格工作区名称
    //         tableName: '广告位1 '+ myDate.toLocaleDateString(),
    //         // excelstyles: ['background-color', 'color', 'font-size', 'font-weight'], 设置格式
    //     },
    // });

}



$(function () {
    var defaultColunms = RentAdBit.initColumn();
    var table = new BSTable(RentAdBit.id, "/rentAdBit/list", defaultColunms);
    table.setPaginationType("client");
    RentAdBit.table = table.init();
});




