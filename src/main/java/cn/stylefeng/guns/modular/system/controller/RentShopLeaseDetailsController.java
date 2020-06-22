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
import cn.stylefeng.guns.modular.system.model.RentShopLeaseDetails;
import cn.stylefeng.guns.modular.system.service.IRentShopLeaseDetailsService;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-04-17 18:40:24
 */
@Controller
@RequestMapping("/rentShopLeaseDetails")
public class RentShopLeaseDetailsController extends BaseController {

    private String PREFIX = "/system/rentShopLeaseDetails/";

    @Autowired
    private IRentShopLeaseDetailsService rentShopLeaseDetailsService;

    @Autowired
    private IRentShopsService rentShopsService;

    @Autowired
    private IRentShopContractDetailsService rentShopContractDetailsService;

    /**
     * 跳转到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "rentShopLeaseDetails.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/rentShopLeaseDetails_add")
    public String rentShopLeaseDetailsAdd() {
        return PREFIX + "rentShopLeaseDetails_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/rentShopLeaseDetails_update/{id}")
    public String rentShopLeaseDetailsUpdate(@PathVariable Integer id, Model model) {
        RentShopLeaseDetails rentShopLeaseDetails = rentShopLeaseDetailsService.selectById(id);
        model.addAttribute("bid1",rentShopLeaseDetails.getBid());
        model.addAttribute("fid1",rentShopLeaseDetails.getFid());
        model.addAttribute("shopsNumber1",rentShopLeaseDetails.getShopsNumber());
        model.addAttribute("item",rentShopLeaseDetails);
        LogObjectHolder.me().set(rentShopLeaseDetails);
        return PREFIX + "rentShopLeaseDetails_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition1,String condition2, String beginTime, String endTime) {
        Integer deptId = ShiroKit.getUser().getDeptId();
        return rentShopLeaseDetailsService.getShopLease(condition1,condition2,beginTime,endTime,deptId);
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(RentShopLeaseDetails rentShopLeaseDetails) {
        rentShopLeaseDetailsService.insert(rentShopLeaseDetails);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete/{id}")
    @ResponseBody
    public Object delete(@PathVariable("id") Integer id) {
        rentShopLeaseDetailsService.deleteShopLease(id);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(RentShopLeaseDetails rentShopLeaseDetails) {
        RentShopLeaseDetails rentShopLeaseDetails1 = rentShopLeaseDetailsService.selectById(rentShopLeaseDetails.getId());
        if(rentShopLeaseDetails.getBid()==0)
            rentShopLeaseDetails.setBid(rentShopLeaseDetails1.getBid());
        if((rentShopLeaseDetails.getFid()==null)||(rentShopLeaseDetails.getFid()==0))
            rentShopLeaseDetails.setFid(rentShopLeaseDetails1.getFid());
        if(((rentShopLeaseDetails.getShopsNumber()).equals(""))||((rentShopLeaseDetails.getShopsNumber()).equals("0")))
            rentShopLeaseDetails.setShopsNumber(rentShopLeaseDetails1.getShopsNumber());
        Integer bid = rentShopLeaseDetails.getBid();
        Integer fid = rentShopLeaseDetails.getFid();
        String shopsNumber = rentShopLeaseDetails.getShopsNumber();
        Integer shopsId = rentShopsService.getIdByShopsNumber(bid,fid,shopsNumber);
        rentShopLeaseDetails.setShopsId(shopsId);
        Integer tenantsId = rentShopContractDetailsService.getTenantsId(bid,fid,shopsNumber);
        rentShopLeaseDetails.setTenantsId(tenantsId);
        java.sql.Timestamp beginTime=new java.sql.Timestamp(rentShopLeaseDetails.getBeginedAt().getTime());
        java.sql.Timestamp endTime=new java.sql.Timestamp(rentShopLeaseDetails.getEndedAt().getTime());
        rentShopLeaseDetails.setBeginedAt(beginTime);
        rentShopLeaseDetails.setEndedAt(endTime);
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        rentShopLeaseDetails.setUpdatedAt(time);
        rentShopLeaseDetailsService.setShopLease(rentShopLeaseDetails);
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{rentShopLeaseDetailsId}")
    @ResponseBody
    public Object detail(@PathVariable("rentShopLeaseDetailsId") Integer rentShopLeaseDetailsId) {
        return rentShopLeaseDetailsService.selectById(rentShopLeaseDetailsId);
    }
}
