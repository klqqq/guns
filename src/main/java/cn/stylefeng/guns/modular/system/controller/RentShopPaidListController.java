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
import cn.stylefeng.guns.modular.system.model.RentShopPaidList;
import cn.stylefeng.guns.modular.system.service.IRentShopPaidListService;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-04-17 16:35:16
 */
@Controller
@RequestMapping("/rentShopPaidList")
public class RentShopPaidListController extends BaseController {

    private String PREFIX = "/system/rentShopPaidList/";

    @Autowired
    private IRentShopPaidListService rentShopPaidListService;

    @Autowired
    private IRentShopsService rentShopsService;

    @Autowired
    private IRentShopContractDetailsService rentShopContractDetailsService;

    /**
     * 跳转到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "rentShopPaidList.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/rentShopPaidList_add")
    public String rentShopPaidListAdd() {
        return PREFIX + "rentShopPaidList_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/rentShopPaidList_update/{id}")
    public String rentShopPaidListUpdate(@PathVariable Integer id, Model model) {
        RentShopPaidList rentShopPaidList = rentShopPaidListService.selectById(id);
    //    System.out.println(rentShopPaidList);
        model.addAttribute("bid1",rentShopPaidList.getBid());
        model.addAttribute("fid1",rentShopPaidList.getFid());
        model.addAttribute("shopsNumber1",rentShopPaidList.getShopsNumber());
        model.addAttribute("item",rentShopPaidList);
        LogObjectHolder.me().set(rentShopPaidList);
        return PREFIX + "rentShopPaidList_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition1,String condition2,String condition3, String beginTime, String endTime) {
        Integer deptId = ShiroKit.getUser().getDeptId();
        return rentShopPaidListService.getShopPaid(condition1,condition2,condition3,beginTime,endTime,deptId);
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(RentShopPaidList rentShopPaidList) {
        Integer bid = rentShopPaidList.getBid();
        Integer fid = rentShopPaidList.getFid();
        String shopsNumber = rentShopPaidList.getShopsNumber();
        Integer shopsId = rentShopsService.getIdByShopsNumber(bid,fid,shopsNumber);
        rentShopPaidList.setShopsId(shopsId);
        Integer tenantsId = rentShopContractDetailsService.getTenantsId(bid,fid,shopsNumber);
        rentShopPaidList.setTenantsId(tenantsId);
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        rentShopPaidList.setCreatedAt(time);
        Integer userId = ShiroKit.getUser().getId();
        rentShopPaidList.setUserId(userId); //插入创建人ID
        rentShopPaidListService.insert(rentShopPaidList);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete/{id}")
    @ResponseBody
    public Object delete(@PathVariable("id")Integer id) {
        rentShopPaidListService.deleteShopPaid(id);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(RentShopPaidList rentShopPaidList) {
        RentShopPaidList rentShopPaidList1 = rentShopPaidListService.selectById(rentShopPaidList.getId());
        System.out.println(rentShopPaidList1.getBid()+"+"+rentShopPaidList1.getFid()+"+"+rentShopPaidList1.getShopsNumber());
        if(rentShopPaidList.getBid()==0)
            rentShopPaidList.setBid(rentShopPaidList1.getBid());
        if((rentShopPaidList.getFid()==null)||(rentShopPaidList.getFid()==0))
            rentShopPaidList.setFid(rentShopPaidList1.getFid());
        if(((rentShopPaidList.getShopsNumber()).equals(""))||((rentShopPaidList.getShopsNumber()).equals("0")))
            rentShopPaidList.setShopsNumber(rentShopPaidList1.getShopsNumber());
        Integer bid = rentShopPaidList.getBid();
        Integer fid = rentShopPaidList.getFid();
        String shopsNumber = rentShopPaidList.getShopsNumber();
        System.out.println(bid+"+"+fid+"+"+shopsNumber);
        Integer shopsId = rentShopsService.getIdByShopsNumber(bid,fid,shopsNumber);
        rentShopPaidList.setShopsId(shopsId);
        Integer tenantsId = rentShopContractDetailsService.getTenantsId(bid,fid,shopsNumber);
        rentShopPaidList.setTenantsId(tenantsId);
        rentShopPaidListService.updateById(rentShopPaidList);
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{rentShopPaidListId}")
    @ResponseBody
    public Object detail(@PathVariable("rentShopPaidListId") Integer rentShopPaidListId) {
        return rentShopPaidListService.selectById(rentShopPaidListId);
    }
}
