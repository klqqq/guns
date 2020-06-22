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
import cn.stylefeng.guns.modular.system.model.Cost;
import cn.stylefeng.guns.modular.system.service.ICostService;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-05-17 16:58:45
 */
@Controller
@RequestMapping("/cost")
public class CostController extends BaseController {

    private String PREFIX = "/system/cost/";

    @Autowired
    private ICostService costService;

    /**
     * 跳转到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "cost.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/cost_add")
    public String costAdd() {
        return PREFIX + "cost_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/cost_update/{costId}")
    public String costUpdate(@PathVariable Integer costId, Model model) {
        Cost cost = costService.selectById(costId);
        model.addAttribute("item",cost);
        LogObjectHolder.me().set(cost);
        return PREFIX + "cost_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition,String beginTime, String endTime) {
        return costService.getCost(condition, beginTime, endTime);
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(Cost cost) {
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        cost.setCreatedAt(time);
        cost.setUpdatedAt(time); //插入创建时间
        Integer userId = ShiroKit.getUser().getId();
        cost.setUserId(userId); //插入创建人ID
        costService.addCost(cost);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer costId) {
        costService.deleteById(costId);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(Cost cost) {
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        cost.setUpdatedAt(time); //插入创建时间
        costService.setCost(cost);
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{costId}")
    @ResponseBody
    public Object detail(@PathVariable("costId") Integer costId) {
        return costService.selectById(costId);
    }
}
