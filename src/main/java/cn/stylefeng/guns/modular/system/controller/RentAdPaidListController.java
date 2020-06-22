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
import cn.stylefeng.guns.modular.system.model.RentAdPaidList;
import cn.stylefeng.guns.modular.system.service.IRentAdPaidListService;

import java.sql.Timestamp;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-04-17 15:39:30
 */
@Controller
@RequestMapping("/rentAdPaidList")
public class RentAdPaidListController extends BaseController {

    private String PREFIX = "/system/rentAdPaidList/";

    @Autowired
    private IRentAdPaidListService rentAdPaidListService;

    @Autowired
    private IRentAdBitService rentAdBitService;

    @Autowired
    private IRentAdContractDetailsService rentAdContractDetailsService;

    /**
     * 跳转到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "rentAdPaidList.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/rentAdPaidList_add")
    public String rentAdPaidListAdd() {
        return PREFIX + "rentAdPaidList_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/rentAdPaidList_update/{id}")
    public String rentAdPaidListUpdate(@PathVariable Integer id, Model model) {
        RentAdPaidList rentAdPaidList = rentAdPaidListService.selectById(id);
        model.addAttribute("bid1",rentAdPaidList.getBid());
        model.addAttribute("fid1",rentAdPaidList.getFid());
        model.addAttribute("adNumber1",rentAdPaidList.getAdNumber());
        model.addAttribute("item",rentAdPaidList);
        LogObjectHolder.me().set(rentAdPaidList);
        return PREFIX + "rentAdPaidList_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition1,String condition2, String beginTime, String endTime) {
        Integer deptId = ShiroKit.getUser().getDeptId();
        return rentAdPaidListService.getAdPaid(condition1,condition2,beginTime,endTime,deptId);
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(RentAdPaidList rentAdPaidList) {
        
        Integer bid = rentAdPaidList.getBid();
        Integer fid = rentAdPaidList.getFid();
        String adNumber = rentAdPaidList.getAdNumber();
        Integer adId = rentAdBitService.getIdByAdNumber(bid,fid,adNumber);
        rentAdPaidList.setAdId(adId);
        Integer tenantsId = rentAdContractDetailsService.getTenantsId(bid,fid,adNumber);
        rentAdPaidList.setTenantsId(tenantsId);
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        rentAdPaidList.setCreatedAt(time);
        Integer userId = ShiroKit.getUser().getId();
        rentAdPaidList.setUserId(userId); //插入创建人ID
//        Timestamp a = Timestamp.valueOf("0000-00-00 00:00:00");

//        if(!(rentAdPaidList.getPaidStart().after(a))){
//            rentAdPaidList.setPaidStart(a);
//        }
//        if(!(rentAdPaidList.getPaidEnd().after(a))){
//            rentAdPaidList.setPaidEnd(a);
//        }
        rentAdPaidListService.addAdPaid(rentAdPaidList);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete/{id}")
    @ResponseBody
    public Object delete(@PathVariable("id")Integer id) {
        rentAdPaidListService.deleteAdPaid(id);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(RentAdPaidList rentAdPaidList) {
        RentAdPaidList rentAdPaidList1 = rentAdPaidListService.selectById(rentAdPaidList.getId());
        if(rentAdPaidList.getBid()==0)
            rentAdPaidList.setBid(rentAdPaidList1.getBid());
        if((rentAdPaidList.getFid()==null)||(rentAdPaidList.getFid()==0))
            rentAdPaidList.setFid(rentAdPaidList1.getFid());
        if(((rentAdPaidList.getAdNumber()).equals(""))||((rentAdPaidList.getAdNumber()).equals("0")))
            rentAdPaidList.setAdNumber(rentAdPaidList1.getAdNumber());
        Integer bid = rentAdPaidList.getBid();
        Integer fid = rentAdPaidList.getFid();
        String adNumber = rentAdPaidList.getAdNumber();
        Integer adId = rentAdBitService.getIdByAdNumber(bid,fid,adNumber);
        rentAdPaidList.setAdId(adId);
        Integer tenantsId = rentAdContractDetailsService.getTenantsId(bid,fid,adNumber);
        rentAdPaidList.setTenantsId(tenantsId);
        rentAdPaidListService.setAdPaid(rentAdPaidList);
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{rentAdPaidListId}")
    @ResponseBody
    public Object detail(@PathVariable("rentAdPaidListId") Integer rentAdPaidListId) {
        return rentAdPaidListService.selectById(rentAdPaidListId);
    }
}
