package cn.stylefeng.guns.modular.system.controller;

import cn.stylefeng.guns.core.shiro.ShiroKit;
import cn.stylefeng.guns.modular.system.service.IRentShopContractDetailsService;
import cn.stylefeng.guns.modular.system.service.IRentShopsService;
import cn.stylefeng.roses.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import cn.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import cn.stylefeng.guns.modular.system.model.RentShopPaidFixed;
import cn.stylefeng.guns.modular.system.service.IRentShopPaidFixedService;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-04-22 12:05:49
 */
@Controller
@RequestMapping("/rentShopPaidFixed")
public class RentShopPaidFixedController extends BaseController {

    private String PREFIX = "/system/rentShopPaidFixed/";

    @Autowired
    private IRentShopPaidFixedService rentShopPaidFixedService;

    @Autowired
    private IRentShopsService rentShopsService;

    @Autowired
    private IRentShopContractDetailsService rentShopContractDetailsService;

    /**
     * 跳转到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "rentShopPaidFixed.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/rentShopPaidFixed_add")
    public String rentShopPaidFixedAdd() {
        return PREFIX + "rentShopPaidFixed_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/rentShopPaidFixed_update/{id}")
    public String rentShopPaidFixedUpdate(@PathVariable Integer id, Model model) {
        RentShopPaidFixed rentShopPaidFixed = rentShopPaidFixedService.selectById(id);
        model.addAttribute("bid1",rentShopPaidFixed.getBid());
        model.addAttribute("fid1",rentShopPaidFixed.getFid());
        model.addAttribute("shopsNumber1",rentShopPaidFixed.getShopsNumber());
        model.addAttribute("item",rentShopPaidFixed);
        LogObjectHolder.me().set(rentShopPaidFixed);
        return PREFIX + "rentShopPaidFixed_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition1,String condition2,String condition3, String beginTime, String endTime) {
        Integer deptId = ShiroKit.getUser().getDeptId();
        return rentShopPaidFixedService.getShopFixed(condition1,condition2,condition3,beginTime,endTime,deptId);
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(RentShopPaidFixed rentShopPaidFixed) {
        Integer bid = rentShopPaidFixed.getBid();
        Integer fid = rentShopPaidFixed.getFid();
        String shopsNumber = rentShopPaidFixed.getShopsNumber();
        Integer shopsId = rentShopsService.getIdByShopsNumber(bid,fid,shopsNumber);
        rentShopPaidFixed.setShopsId(shopsId);

        Integer tenantsId = rentShopContractDetailsService.getTenantsId(bid,fid,shopsNumber);
        rentShopPaidFixed.setTenantsId(tenantsId);

        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        rentShopPaidFixed.setCreatedAt(time);
        Integer userId = ShiroKit.getUser().getId();
        rentShopPaidFixed.setUserId(userId); //插入创建人ID
        rentShopPaidFixedService.addShopFixed(rentShopPaidFixed);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete/{id}")
    @ResponseBody
    public Object delete(@PathVariable("id") Integer id) {
        rentShopPaidFixedService.deleteShopFixed(id);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(RentShopPaidFixed rentShopPaidFixed) {
        RentShopPaidFixed rentShopPaidFixed1 = rentShopPaidFixedService.selectById(rentShopPaidFixed.getId());
        if(rentShopPaidFixed.getBid()==0)
            rentShopPaidFixed.setBid(rentShopPaidFixed1.getBid());
        if((rentShopPaidFixed.getFid()==null)||(rentShopPaidFixed.getFid()==0))
            rentShopPaidFixed.setFid(rentShopPaidFixed1.getFid());
        if(((rentShopPaidFixed.getShopsNumber()).equals(""))||((rentShopPaidFixed.getShopsNumber()).equals("0")))
            rentShopPaidFixed.setShopsNumber(rentShopPaidFixed1.getShopsNumber());
        Integer bid = rentShopPaidFixed.getBid();
        Integer fid = rentShopPaidFixed.getFid();
        String shopsNumber = rentShopPaidFixed.getShopsNumber();
        Integer shopsId = rentShopsService.getIdByShopsNumber(bid,fid,shopsNumber);
        rentShopPaidFixed.setShopsId(shopsId);
        Integer tenantsId = rentShopContractDetailsService.getTenantsId(bid,fid,shopsNumber);
        rentShopPaidFixed.setTenantsId(tenantsId);
        rentShopPaidFixedService.setShopFixed(rentShopPaidFixed);
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{rentShopPaidFixedId}")
    @ResponseBody
    public Object detail(@PathVariable("rentShopPaidFixedId") Integer rentShopPaidFixedId) {
        return rentShopPaidFixedService.selectById(rentShopPaidFixedId);
    }

    /**
     * 获取总应缴合计
     */
    @RequestMapping(value = "/money")
    @ResponseBody
    public Object money(String condition1,String condition2,String condition3, String beginTime, String endTime) {
        Integer deptId = ShiroKit.getUser().getDeptId();
        return rentShopPaidFixedService.getMoney(condition1,condition2,condition3,beginTime,endTime,deptId);
    }

    /**
     * 获取总实缴合计
     */
    @RequestMapping(value = "/total")
    @ResponseBody
    public Object total(String condition1,String condition2,String condition3, String beginTime, String endTime) {
        Integer deptId = ShiroKit.getUser().getDeptId();
        System.out.println(rentShopPaidFixedService.getTotal(condition1,condition2,condition3,beginTime,endTime,deptId));
        return rentShopPaidFixedService.getTotal(condition1,condition2,condition3,beginTime,endTime,deptId);
    }
}
