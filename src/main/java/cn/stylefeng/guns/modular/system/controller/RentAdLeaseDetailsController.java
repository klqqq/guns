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
import cn.stylefeng.guns.modular.system.model.RentAdLeaseDetails;
import cn.stylefeng.guns.modular.system.service.IRentAdLeaseDetailsService;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-04-17 17:35:08
 */
@Controller
@RequestMapping("/rentAdLeaseDetails")
public class RentAdLeaseDetailsController extends BaseController {

    private String PREFIX = "/system/rentAdLeaseDetails/";

    @Autowired
    private IRentAdLeaseDetailsService rentAdLeaseDetailsService;

    @Autowired
    private IRentAdBitService rentAdBitService;

    @Autowired
    private IRentAdContractDetailsService rentAdContractDetailsService;

    /**
     * 跳转到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "rentAdLeaseDetails.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/rentAdLeaseDetails_add")
    public String rentAdLeaseDetailsAdd() {
        return PREFIX + "rentAdLeaseDetails_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/rentAdLeaseDetails_update/{id}")
    public String rentAdLeaseDetailsUpdate(@PathVariable Integer id, Model model) {
        RentAdLeaseDetails rentAdLeaseDetails = rentAdLeaseDetailsService.selectById(id);
        model.addAttribute("bid1",rentAdLeaseDetails.getBid());
        model.addAttribute("fid1",rentAdLeaseDetails.getFid());
        model.addAttribute("adNumber1",rentAdLeaseDetails.getAdNumber());
        model.addAttribute("item",rentAdLeaseDetails);
        LogObjectHolder.me().set(rentAdLeaseDetails);
        return PREFIX + "rentAdLeaseDetails_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition1,String condition2, String beginTime, String endTime) {
        Integer deptId = ShiroKit.getUser().getDeptId();
        return rentAdLeaseDetailsService.getAdLease(condition1,condition2,beginTime,endTime,deptId);
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(RentAdLeaseDetails rentAdLeaseDetails) {
        rentAdLeaseDetailsService.insert(rentAdLeaseDetails);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete/{id}")
    @ResponseBody
    public Object delete(@PathVariable("id") Integer id) {
        rentAdLeaseDetailsService.deleteAdLease(id);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(RentAdLeaseDetails rentAdLeaseDetails) {
        RentAdLeaseDetails rentAdLeaseDetails1 = rentAdLeaseDetailsService.selectById(rentAdLeaseDetails.getId());
        if(rentAdLeaseDetails.getBid()==0)
            rentAdLeaseDetails.setBid(rentAdLeaseDetails1.getBid());
        if((rentAdLeaseDetails.getFid()==null)||(rentAdLeaseDetails.getFid()==0))
            rentAdLeaseDetails.setFid(rentAdLeaseDetails1.getFid());
        if(((rentAdLeaseDetails.getAdNumber()).equals(""))||((rentAdLeaseDetails.getAdNumber()).equals("0")))
            rentAdLeaseDetails.setAdNumber(rentAdLeaseDetails1.getAdNumber());
        Integer bid = rentAdLeaseDetails.getBid();
        Integer fid = rentAdLeaseDetails.getFid();
        String adNumber = rentAdLeaseDetails.getAdNumber();
        Integer adId = rentAdBitService.getIdByAdNumber(bid,fid,adNumber);
        rentAdLeaseDetails.setAdId(adId);
        Integer tenantsId = rentAdContractDetailsService.getTenantsId(bid,fid,adNumber);
        rentAdLeaseDetails.setTenantsId(tenantsId);
        java.sql.Timestamp beginTime=new java.sql.Timestamp(rentAdLeaseDetails.getBeginedAt().getTime());
        java.sql.Timestamp endTime=new java.sql.Timestamp(rentAdLeaseDetails.getEndedAt().getTime());
        rentAdLeaseDetails.setBeginedAt(beginTime);
        rentAdLeaseDetails.setEndedAt(endTime);
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        rentAdLeaseDetails.setUpdatedAt(time);

        rentAdLeaseDetailsService.setAdLease(rentAdLeaseDetails);
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{rentAdLeaseDetailsId}")
    @ResponseBody
    public Object detail(@PathVariable("rentAdLeaseDetailsId") Integer rentAdLeaseDetailsId) {
        return rentAdLeaseDetailsService.selectById(rentAdLeaseDetailsId);
    }
}
