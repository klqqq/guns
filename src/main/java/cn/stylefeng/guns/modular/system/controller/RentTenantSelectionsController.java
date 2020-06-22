package cn.stylefeng.guns.modular.system.controller;

import cn.stylefeng.guns.core.shiro.ShiroKit;
import cn.stylefeng.roses.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import cn.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import cn.stylefeng.guns.modular.system.model.RentTenantSelections;
import cn.stylefeng.guns.modular.system.service.IRentTenantSelectionsService;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-04-07 14:37:29
 */
@Controller
@RequestMapping("/rentTenantSelections")
public class RentTenantSelectionsController extends BaseController {

    private String PREFIX = "/system/rentTenantSelections/";

    @Autowired
    private IRentTenantSelectionsService rentTenantSelectionsService;

    /**
     * 跳转到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "rentTenantSelections.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/rentTenantSelections_add")
    public String rentTenantSelectionsAdd() {
        return PREFIX + "rentTenantSelections_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/rentTenantSelections_update/{rentTenantSelectionsId}")
    public String rentTenantSelectionsUpdate(@PathVariable Integer rentTenantSelectionsId, Model model) {
        RentTenantSelections rentTenantSelections = rentTenantSelectionsService.selectById(rentTenantSelectionsId);
        model.addAttribute("item",rentTenantSelections);
        LogObjectHolder.me().set(rentTenantSelections);
        return PREFIX + "rentTenantSelections_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition, String beginTime, String endTime) {
        return rentTenantSelectionsService.getOptions(condition,beginTime,endTime);
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(RentTenantSelections rentTenantSelections) {
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        rentTenantSelections.setCreatedAt(time);
        Integer userId = ShiroKit.getUser().getId();
        rentTenantSelections.setUserId(userId); //插入创建人ID
        rentTenantSelectionsService.insert(rentTenantSelections);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer rentTenantSelectionsId) {
        rentTenantSelectionsService.deleteById(rentTenantSelectionsId);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(RentTenantSelections rentTenantSelections) {
        rentTenantSelectionsService.updateById(rentTenantSelections);
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{rentTenantSelectionsId}")
    @ResponseBody
    public Object detail(@PathVariable("rentTenantSelectionsId") Integer rentTenantSelectionsId) {
        return rentTenantSelectionsService.selectById(rentTenantSelectionsId);
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list1")
    @ResponseBody
    public Object list1() {
        return rentTenantSelectionsService.getOptions(null,null,null);
    }
}
