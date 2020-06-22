package cn.stylefeng.guns.modular.system.controller;

import cn.stylefeng.guns.core.shiro.ShiroKit;
import cn.stylefeng.guns.modular.system.service.*;
import cn.stylefeng.roses.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import cn.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import cn.stylefeng.guns.modular.system.model.RentTenantShopChange;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-04-16 17:56:03
 */
@Controller
@RequestMapping("/rentTenantShopChange")
public class RentTenantShopChangeController extends BaseController {

    private String PREFIX = "/system/rentTenantShopChange/";

    @Autowired
    private IRentTenantShopChangeService rentTenantShopChangeService;

    @Autowired
    private IRentShopsService rentShopsService;

    @Autowired
    private IRentShopContractDetailsService rentShopContractDetailsService;

    /**
     * 跳转到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "rentTenantShopChange.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/rentTenantShopChange_add")
    public String rentTenantShopChangeAdd() {
        return PREFIX + "rentTenantShopChange_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/rentTenantShopChange_update/{id}")
    public String rentTenantShopChangeUpdate(@PathVariable Integer id, Model model) {
        RentTenantShopChange rentTenantShopChange = rentTenantShopChangeService.selectById(id);
        model.addAttribute("bid1",rentTenantShopChange.getBid());
        model.addAttribute("fid1",rentTenantShopChange.getFid());
        model.addAttribute("shopsNumber1",rentTenantShopChange.getShopsNumber());
        model.addAttribute("item",rentTenantShopChange);
        LogObjectHolder.me().set(rentTenantShopChange);
        return PREFIX + "rentTenantShopChange_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition1,String condition2,String condition3, String beginTime, String endTime) {
        Integer deptId = ShiroKit.getUser().getDeptId();
        return rentTenantShopChangeService.getShopChange(condition1,condition2,condition3,beginTime,endTime,deptId);
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(RentTenantShopChange rentTenantShopChange) {
        Integer bid = rentTenantShopChange.getBid();
        Integer fid = rentTenantShopChange.getFid();
        String shopsNumber = rentTenantShopChange.getShopsNumber();
        Integer shopsId = rentShopsService.getIdByShopsNumber(bid,fid,shopsNumber);
        rentTenantShopChange.setShopsId(shopsId);
        Integer tenantsId = rentShopContractDetailsService.getTenantsId(bid,fid,shopsNumber);
        rentTenantShopChange.setTenantsId(tenantsId);
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        rentTenantShopChange.setCreatedAt(time);
        Integer userId = ShiroKit.getUser().getId();
        rentTenantShopChange.setUserId(userId); //插入创建人ID
        if((rentTenantShopChange.getOptionsId()==1)||(rentTenantShopChange.getOptionsId()==2))
            rentShopContractDetailsService.setFlag(bid,fid,shopsNumber);
        rentTenantShopChangeService.insert(rentTenantShopChange);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete/{id}")
    @ResponseBody
    public Object delete(@PathVariable("id")Integer id) {
        rentTenantShopChangeService.deleteById(id);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(RentTenantShopChange rentTenantShopChange) {
        RentTenantShopChange rentTenantShopChange1 = rentTenantShopChangeService.selectById(rentTenantShopChange.getId());
        if(rentTenantShopChange.getBid()==0)
            rentTenantShopChange.setBid(rentTenantShopChange1.getBid());

        if((rentTenantShopChange.getFid()==null)||(rentTenantShopChange.getFid()==0))
            rentTenantShopChange.setFid(rentTenantShopChange1.getFid());

        if((rentTenantShopChange.getShopsNumber().equals(""))||(rentTenantShopChange.getShopsNumber().equals("0")))
            rentTenantShopChange.setShopsNumber(rentTenantShopChange1.getShopsNumber());

        Integer bid = rentTenantShopChange.getBid();
        Integer fid = rentTenantShopChange.getFid();
        String shopsNumber = rentTenantShopChange.getShopsNumber();
        Integer shopsId = rentShopsService.getIdByShopsNumber(bid,fid,shopsNumber);
        rentTenantShopChange.setShopsId(shopsId);
        Integer tenantsId = rentShopContractDetailsService.getTenantsId(bid,fid,shopsNumber);
        rentTenantShopChange.setTenantsId(tenantsId);
        if((rentTenantShopChange.getOptionsId()==1)||(rentTenantShopChange.getOptionsId()==2))
            rentShopContractDetailsService.setFlag(bid,fid,shopsNumber);
        rentTenantShopChangeService.setShopChange(rentTenantShopChange);
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{rentTenantShopChangeId}")
    @ResponseBody
    public Object detail(@PathVariable("rentTenantShopChangeId") Integer rentTenantShopChangeId) {
        return rentTenantShopChangeService.selectById(rentTenantShopChangeId);
    }

    /**
     * 获取总合计
     */
    @RequestMapping(value = "/money")
    @ResponseBody
    public Object money(String condition1,String condition2,String condition3, String beginTime, String endTime) {
        Integer deptId = ShiroKit.getUser().getDeptId();
        return rentTenantShopChangeService.getMoney(condition1,condition2,condition3,beginTime,endTime,deptId);
    }
}
