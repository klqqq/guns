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
import cn.stylefeng.guns.modular.system.model.RentTenants;
import cn.stylefeng.guns.modular.system.service.IRentTenantsService;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-04-06 15:29:53
 */
@Controller
@RequestMapping("/rentTenants")
public class RentTenantsController extends BaseController {

    private String PREFIX = "/system/rentTenants/";

    @Autowired
    private IRentTenantsService rentTenantsService;

    /**
     * 跳转到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "rentTenants.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/rentTenants_add")
    public String rentTenantsAdd() {
        return PREFIX + "rentTenants_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/rentTenants_update/{tenantsId}")
    public String rentTenantsUpdate(@PathVariable("tenantsId") Integer tenantsId, Model model) {
        RentTenants rentTenants = rentTenantsService.selectById(tenantsId);
        System.out.println(rentTenants.getSex());
        model.addAttribute("item",rentTenants);
        LogObjectHolder.me().set(rentTenants);
        return PREFIX + "rentTenants_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition, String beginTime, String endTime) {
        return rentTenantsService.getTenants(condition,beginTime,endTime);
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(RentTenants rentTenants) {
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        rentTenants.setCreatedAt(time);
        rentTenants.setUpdatedAt(time); //插入创建时间
        Integer userId = ShiroKit.getUser().getId();
        rentTenants.setUserId(userId); //插入创建人ID
        rentTenantsService.addTenants(rentTenants);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete/{tenantsId}")
    @ResponseBody
    public Object delete(@PathVariable("tenantsId")Integer tenantsId) {
        rentTenantsService.deleteById(tenantsId);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(RentTenants rentTenants) {
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        rentTenants.setUpdatedAt(time);
        rentTenantsService.updateById(rentTenants);
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{rentTenantsId}")
    @ResponseBody
    public Object detail(@PathVariable("rentTenantsId") Integer rentTenantsId) {
        return rentTenantsService.selectById(rentTenantsId);
    }
}
