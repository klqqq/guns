package cn.stylefeng.guns.modular.system.controller;

import cn.stylefeng.guns.core.shiro.ShiroKit;
import cn.stylefeng.guns.modular.system.service.IRentAdBitService;
import cn.stylefeng.guns.modular.system.service.IRentAdContractDetailsService;
import cn.stylefeng.roses.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import cn.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import cn.stylefeng.guns.modular.system.model.RentAdPaidFixed;
import cn.stylefeng.guns.modular.system.service.IRentAdPaidFixedService;

import java.math.BigDecimal;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-04-21 21:19:35
 */
@Controller
@RequestMapping("/rentAdPaidFixed")
public class RentAdPaidFixedController extends BaseController {

    private String PREFIX = "/system/rentAdPaidFixed/";

    @Autowired
    private IRentAdPaidFixedService rentAdPaidFixedService;

    @Autowired
    private IRentAdBitService rentAdBitService;

    @Autowired
    private IRentAdContractDetailsService rentAdContractDetailsService;

    /**
     * 跳转到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "rentAdPaidFixed.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/rentAdPaidFixed_add")
    public String rentAdPaidFixedAdd() {
        return PREFIX + "rentAdPaidFixed_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/rentAdPaidFixed_update/{id}")
    public String rentAdPaidFixedUpdate(@PathVariable Integer id, Model model) {
        RentAdPaidFixed rentAdPaidFixed = rentAdPaidFixedService.selectById(id);
        model.addAttribute("bid1",rentAdPaidFixed.getBid());
        model.addAttribute("fid1",rentAdPaidFixed.getFid());
        model.addAttribute("adNumber1",rentAdPaidFixed.getAdNumber());
        model.addAttribute("item",rentAdPaidFixed);
        LogObjectHolder.me().set(rentAdPaidFixed);
        return PREFIX + "rentAdPaidFixed_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition1,String condition2, String beginTime, String endTime) {
        Integer deptId = ShiroKit.getUser().getDeptId();
        return rentAdPaidFixedService.getAdFixed(condition1,condition2,beginTime,endTime,deptId);
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(RentAdPaidFixed rentAdPaidFixed) {
        Integer bid = rentAdPaidFixed.getBid();
        Integer fid = rentAdPaidFixed.getFid();
        String adNumber = rentAdPaidFixed.getAdNumber();
        Integer adId = rentAdBitService.getIdByAdNumber(bid,fid,adNumber);
        rentAdPaidFixed.setAdId(adId);
        Integer tenantsId = rentAdContractDetailsService.getTenantsId(bid,fid,adNumber);
        rentAdPaidFixed.setTenantsId(tenantsId);
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        rentAdPaidFixed.setCreatedAt(time);
        Integer userId = ShiroKit.getUser().getId();
        rentAdPaidFixed.setUserId(userId); //插入创建人ID
//        rentAdPaidFixed.setFlag(0);
//        rentAdPaidFixed.setContractFees(new BigDecimal("0"));
//        rentAdPaidFixed.setContractFeesPaid(new BigDecimal("0"));
//        rentAdPaidFixed.setContractMargin(new BigDecimal("0"));
//        rentAdPaidFixed.setContractMarginPaid(new BigDecimal("0"));
//        rentAdPaidFixed.setPropertyMargin(new BigDecimal("0"));
//        rentAdPaidFixed.setContractMarginPaid(new BigDecimal("0"));
//        rentAdPaidFixed.setPropertyFees(new BigDecimal("0"));
//        rentAdPaidFixed.setPropertyFeesPaid(new BigDecimal("0"));
//        rentAdPaidFixed.setBusinessMargin(new BigDecimal("0"));
//        rentAdPaidFixed.setBusinessMarginPaid(new BigDecimal("0"));
//        rentAdPaidFixed.setBusinessFees(new BigDecimal("0"));
//        rentAdPaidFixed.setBusinessFeesPaid(new BigDecimal("0"));
//        rentAdPaidFixed.setWaterMargin(new BigDecimal("0"));
//        rentAdPaidFixed.setWaterMarginPaid(new BigDecimal("0"));
        rentAdPaidFixedService.addAdFixed(rentAdPaidFixed);

        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete/{id}")
    @ResponseBody
    public Object delete(@PathVariable("id")Integer id) {
        rentAdPaidFixedService.deleteAdFixed(id);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(RentAdPaidFixed rentAdPaidFixed) {
        RentAdPaidFixed rentAdPaidFixed1 = rentAdPaidFixedService.selectById(rentAdPaidFixed.getId());
        if(rentAdPaidFixed.getBid()==0)
            rentAdPaidFixed.setBid(rentAdPaidFixed1.getBid());

        if((rentAdPaidFixed.getFid()==null)||(rentAdPaidFixed.getFid()==0))
            rentAdPaidFixed.setFid(rentAdPaidFixed1.getFid());

        if(((rentAdPaidFixed.getAdNumber()).equals(""))||((rentAdPaidFixed.getAdNumber()).equals("0")))
            rentAdPaidFixed.setAdNumber(rentAdPaidFixed1.getAdNumber());

        Integer bid = rentAdPaidFixed.getBid();
        Integer fid = rentAdPaidFixed.getFid();
        String adNumber = rentAdPaidFixed.getAdNumber();
        Integer adId = rentAdBitService.getIdByAdNumber(bid,fid,adNumber);
        rentAdPaidFixed.setAdId(adId);
        Integer tenantsId = rentAdContractDetailsService.getTenantsId(bid,fid,adNumber);
        rentAdPaidFixed.setTenantsId(tenantsId);
        rentAdPaidFixedService.setAdFixed(rentAdPaidFixed);
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{rentAdPaidFixedId}")
    @ResponseBody
    public Object detail(@PathVariable("rentAdPaidFixedId") Integer rentAdPaidFixedId) {
        return rentAdPaidFixedService.selectById(rentAdPaidFixedId);
    }
}
