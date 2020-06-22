@/*
图片参数的说明:
name : 名称
id : 图片的id
@*/
<div class="form-group">
    <label class="col-sm-3 control-label head-scu-label">${name}</label>
    <div class="col-sm-4">
        <div id="${id}PreId">
            <div><img width="100px" height="100px"
                      @if(isEmpty(picImg)){
                      src="${ctxPath}/static/img/upload.jpg"></div>
            @}else{
            src="${ctxPath}/kaptcha/${picImg}"></div>
        @}
    </div>
</div>
<div class="col-sm-2">
    <div class="head-scu-btn upload-btn" id="${id}BtnId">
        <i class="fa fa-upload"></i>&nbsp;选择图片
    </div>
</div>
<input type="hidden" id="${id}" value="${picImg!}"/>
</div>
@if(isNotEmpty(underline) && underline == 'true'){
<div class="hr-line-dashed"></div>
@}


