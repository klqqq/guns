package cn.stylefeng.guns.modular.system.controller;

import cn.stylefeng.guns.core.shiro.ShiroKit;
import cn.stylefeng.guns.modular.system.model.*;

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

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-04-15 17:44:23
 */
@Controller
@RequestMapping("/rentShopContractDetails")
public class RentShopContractDetailsController extends BaseController {

    private String PREFIX = "/system/rentShopContractDetails/";

    @Autowired
    private IRentShopContractDetailsService rentShopContractDetailsService;

    @Autowired
    private IRentTenantsService rentTenantsService;

    @Autowired
    private IRentShopsService rentShopsService;

    @Autowired
    private IRentShopLeaseDetailsService rentShopLeaseDetailsService;

    @Autowired
    private IRentShopPaidFixedService rentShopPaidFixedService;

    /**
     * 跳转到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "rentShopContractDetails.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/rentShopContractDetails_add")
    public String rentShopContractDetailsAdd() {
        return PREFIX + "rentShopContractDetails_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/rentShopContractDetails_update/{id}")
    public String rentShopContractDetailsUpdate(@PathVariable Integer id, Model model) {
        RentShopContractDetails rentShopContractDetails = rentShopContractDetailsService.selectById(id);
        model.addAttribute("bid1",rentShopContractDetails.getBid());
        model.addAttribute("fid1",rentShopContractDetails.getFid());
        model.addAttribute("shopsNumber1",rentShopContractDetails.getShopsNumber());
        model.addAttribute("item",rentShopContractDetails);
        LogObjectHolder.me().set(rentShopContractDetails);
        return PREFIX + "rentShopContractDetails_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition1,String condition2, String beginTime, String endTime) {
        Integer deptId = ShiroKit.getUser().getDeptId();
        return rentShopContractDetailsService.getShopContract(condition1,condition2,beginTime,endTime,deptId);
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(RentShopContractDetails rentShopContractDetails) {
        String cardNumber = rentShopContractDetails.getCardNumber();
        Integer tenantsId = rentTenantsService.getIdByCardNumber(cardNumber);
        rentShopContractDetails.setTenantsId(tenantsId);
        Integer bid = rentShopContractDetails.getBid();
        Integer fid = rentShopContractDetails.getFid();
        String shopsNumber = rentShopContractDetails.getShopsNumber();
        Integer shopsId = rentShopsService.getIdByShopsNumber(bid,fid,shopsNumber);
        rentShopsService.setStatus(bid,fid,shopsNumber);
        rentShopContractDetails.setShopsId(shopsId);
        Integer userId = ShiroKit.getUser().getId();
        rentShopContractDetails.setUserId(userId); //插入创建人ID
        rentShopContractDetails.setFlag(0);

//        RentShopLeaseDetails rentShopLeaseDetails = new RentShopLeaseDetails();
//        rentShopLeaseDetails.setBid(bid);
//        rentShopLeaseDetails.setFid(fid);
//        rentShopLeaseDetails.setShopsNumber(shopsNumber);
//        rentShopLeaseDetails.setShopsId(shopsId);
//        rentShopLeaseDetails.setTenantsId(tenantsId);
//        rentShopLeaseDetails.setRealRent(new BigDecimal(0));
//        rentShopLeaseDetails.setRealMargin(new BigDecimal(0));
//        rentShopLeaseDetails.setRealElectricity(new BigDecimal(0));
//        rentShopLeaseDetails.setDeposit(rentShopContractDetails.getDeposit());
//        rentShopLeaseDetails.setPayment(rentShopContractDetails.getPayment());
//
//        rentShopLeaseDetails.setBeginedAt(rentShopContractDetails.getBeginedAt());
//        rentShopLeaseDetails.setEndedAt(rentShopContractDetails.getEndedAt());
//        java.util.Date datetime=new java.util.Date();
//        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
//        rentShopLeaseDetails.setCreatedAt(time);
//        rentShopLeaseDetails.setUpdatedAt(time);
//        rentShopLeaseDetails.setUserId(userId);
//        rentShopLeaseDetailsService.addShopLease(rentShopLeaseDetails);

//        RentShopPaidFixed rentShopPaidFixed = new RentShopPaidFixed();
//        rentShopPaidFixed.setBid(bid);
//        rentShopPaidFixed.setFid(fid);
//        rentShopPaidFixed.setShopsNumber(shopsNumber);
//        rentShopPaidFixed.setShopsId(shopsId);
//        rentShopPaidFixed.setTenantsId(tenantsId);
//        rentShopPaidFixed.setCreatedAt(time);
//        rentShopPaidFixed.setUserId(userId);
//        rentShopPaidFixed.setFlag(0);
//        rentShopPaidFixed.setContractFees(new BigDecimal(0));
//        rentShopPaidFixed.setContractFeesPaid(new BigDecimal(0));
//        rentShopPaidFixed.setContractMargin(new BigDecimal(0));
//        rentShopPaidFixed.setContractMarginPaid(new BigDecimal(0));
//        rentShopPaidFixed.setPropertyFees(new BigDecimal(0));
//        rentShopPaidFixed.setPropertyFeesPaid(new BigDecimal(0));
//        rentShopPaidFixed.setPropertyMargin(new BigDecimal(0));
//        rentShopPaidFixed.setPropertyMarginPaid(new BigDecimal(0));
//        rentShopPaidFixed.setBusinessFees(new BigDecimal(0));
//        rentShopPaidFixed.setBusinessFeesPaid(new BigDecimal(0));
//        rentShopPaidFixed.setBusinessMargin(new BigDecimal(0));
//        rentShopPaidFixed.setBusinessMarginPaid(new BigDecimal(0));
//        rentShopPaidFixed.setWaterMargin(new BigDecimal(0));
//        rentShopPaidFixed.setWaterMarginPaid(new BigDecimal(0));
//        rentShopPaidFixed.setLisensePrice(new BigDecimal(0));
//        rentShopPaidFixed.setLisensePricePaid(new BigDecimal(0));
//        rentShopPaidFixed.setPaidStart(time);
//        rentShopPaidFixed.setPaidEnd(time);
//        for(int i=0;i<rentShopContractDetails.getPeriod();i++)
//            rentShopPaidFixedService.addShopFixed(rentShopPaidFixed);

        rentShopContractDetailsService.addShopContract(rentShopContractDetails);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete/{id}")
    @ResponseBody
    public Object delete(@PathVariable("id") Integer id) {
        rentShopContractDetailsService.deleteShopContract(id);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(RentShopContractDetails rentShopContractDetails) {
        if(rentShopContractDetails.getBid()==0){
            RentShopContractDetails rentShopContractDetails1 = rentShopContractDetailsService.selectById(rentShopContractDetails.getId());
            rentShopContractDetails.setBid(rentShopContractDetails1.getBid());
        }
        if((rentShopContractDetails.getFid()==null)||(rentShopContractDetails.getFid()==0)){
            RentShopContractDetails rentShopContractDetails1 = rentShopContractDetailsService.selectById(rentShopContractDetails.getId());
            rentShopContractDetails.setFid(rentShopContractDetails1.getFid());
        }
        if(((rentShopContractDetails.getShopsNumber()).equals(""))||((rentShopContractDetails.getShopsNumber()).equals("0"))){
            RentShopContractDetails rentShopContractDetails1 = rentShopContractDetailsService.selectById(rentShopContractDetails.getId());
            rentShopContractDetails.setShopsNumber(rentShopContractDetails1.getShopsNumber());
        }
        String cardNumber = rentShopContractDetails.getCardNumber();
        Integer tenantsId = rentTenantsService.getIdByCardNumber(cardNumber);
        rentShopContractDetails.setTenantsId(tenantsId);
        Integer bid = rentShopContractDetails.getBid();
        Integer fid = rentShopContractDetails.getFid();
        String shopsNumber = rentShopContractDetails.getShopsNumber();
        Integer shopsId = rentShopsService.getIdByShopsNumber(bid,fid,shopsNumber);
        rentShopContractDetails.setShopsId(shopsId);
        java.sql.Timestamp beginTime=new java.sql.Timestamp(rentShopContractDetails.getBeginedAt().getTime());
        java.sql.Timestamp endTime=new java.sql.Timestamp(rentShopContractDetails.getEndedAt().getTime());
        rentShopContractDetails.setBeginedAt(beginTime);
        rentShopContractDetails.setEndedAt(endTime);
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        if(endTime.before(time))
            rentShopContractDetailsService.setFlag(bid,fid,shopsNumber);
        System.out.println(rentShopContractDetails);
        rentShopContractDetailsService.setShopContract(rentShopContractDetails);
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{rentShopContractDetailsId}")
    @ResponseBody
    public Object detail(@PathVariable("rentShopContractDetailsId") Integer rentShopContractDetailsId) {
        return rentShopContractDetailsService.selectById(rentShopContractDetailsId);
    }

    /**
     * 获取商铺门牌号
     */
    @RequestMapping(value = "/shopsNumber")
    @ResponseBody
    public Object shopsNumber(@RequestParam("bid")Integer bid, @RequestParam("fid") Integer fid) {
        System.out.println(bid+"+"+fid);
        List<Map<String,Object>> list = rentShopContractDetailsService.getShopsNumber(bid,fid);
        return list;
    }
}
