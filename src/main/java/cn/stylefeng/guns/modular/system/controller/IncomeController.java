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
import cn.stylefeng.guns.modular.system.model.Income;
import cn.stylefeng.guns.modular.system.service.IIncomeService;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-05-17 16:02:15
 */
@Controller
@RequestMapping("/income")
public class IncomeController extends BaseController {

    private String PREFIX = "/system/income/";

    @Autowired
    private IIncomeService incomeService;

    /**
     * 跳转到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "income.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/income_add")
    public String incomeAdd() {
        return PREFIX + "income_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/income_update/{incomeId}")
    public String incomeUpdate(@PathVariable Integer incomeId, Model model) {
        Income income = incomeService.selectById(incomeId);
        model.addAttribute("item",income);
        LogObjectHolder.me().set(income);
        return PREFIX + "income_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition,String beginTime, String endTime) {
        return incomeService.getIncome(condition, beginTime, endTime);
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(Income income) {
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        income.setCreatedAt(time);
        income.setUpdatedAt(time); //插入创建时间
        Integer userId = ShiroKit.getUser().getId();
        income.setUserId(userId); //插入创建人ID
        incomeService.addIncome(income);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer incomeId) {
        incomeService.deleteById(incomeId);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(Income income) {
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        income.setUpdatedAt(time); //插入创建时间
        incomeService.setIncome(income);
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{incomeId}")
    @ResponseBody
    public Object detail(@PathVariable("incomeId") Integer incomeId) {
        return incomeService.selectById(incomeId);
    }
}
