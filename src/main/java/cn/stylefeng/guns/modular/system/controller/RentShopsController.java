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
import cn.stylefeng.guns.modular.system.model.RentShops;
import cn.stylefeng.guns.modular.system.service.IRentShopsService;

import java.util.List;
import java.util.Map;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-04-06 14:29:24
 */
@Controller
@RequestMapping("/rentShops")
public class RentShopsController extends BaseController {

    private String PREFIX = "/system/rentShops/";

    @Autowired
    private IRentShopsService rentShopsService;

    /**
     * 跳转到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "rentShops.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/rentShops_add/{namearr}/{parentarr}")
    public String rentShopsAdd(@PathVariable("namearr") String namearr,@PathVariable("parentarr") String parentarr,Model model) {
        model.addAttribute("namearr",namearr);
        model.addAttribute("parentarr",parentarr);
        return PREFIX + "rentShops_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/rentShops_update/{bid}/{fid}/{shopsId}/{enamearr}/{eparentarr}")
    public String rentShopsUpdate(@PathVariable("bid")Integer bid, @PathVariable("fid") Integer fid,@PathVariable("shopsId")Integer shopsId,@PathVariable("enamearr") String enamearr,@PathVariable("eparentarr") String eparentarr, Model model) {
        RentShops rentShops = rentShopsService.getShopsById(bid,fid,shopsId);
        model.addAttribute("bid1",bid);
        model.addAttribute("fid1",fid);
        model.addAttribute("shopsId1",shopsId);
        model.addAttribute("item",rentShops);
        model.addAttribute("enamearr",enamearr);
        model.addAttribute("eparentarr",eparentarr);
        LogObjectHolder.me().set(rentShops);
        return PREFIX + "rentShops_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition1,String condition2, String beginTime, String endTime) {
        Integer deptId = ShiroKit.getUser().getDeptId();
        return rentShopsService.getShops(condition1,condition2,beginTime,endTime,deptId);
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(RentShops rentShops) {
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        rentShops.setCreatedAt(time);
        rentShops.setUpdatedAt(time); //插入创建时间
        Integer userId = ShiroKit.getUser().getId();
        rentShops.setUserId(userId); //插入创建人ID
        Integer bid = rentShops.getBid();
        Integer fid = rentShops.getFid();
        Integer maxId = rentShopsService.maxShopsNum(bid,fid);
        if(maxId==null)
            maxId=0;
        rentShops.setShopsId(maxId+1);
        System.out.println(rentShops);
        rentShopsService.addShops(rentShops);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete/{bid}/{fid}/{shopsId}")
    @ResponseBody
    public Object delete(@PathVariable("bid")Integer bid, @PathVariable("fid") Integer fid,@PathVariable("shopsId")Integer shopsId) {
        rentShopsService.deleteShops(bid,fid,shopsId);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update/{bid1}/{fid1}/{shopsId1}")
    @ResponseBody
    public Object update(RentShops rentShops,@PathVariable("bid1")Integer bid1, @PathVariable("fid1") Integer fid1,@PathVariable("shopsId1")Integer shopsId1) {
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        rentShops.setUpdatedAt(time); //插入更新时间

        if(rentShops.getBid()==0&&rentShops.getFid()==0)
        {
            rentShops.setBid(bid1);
            rentShops.setFid(fid1);
            rentShopsService.setShops(rentShops,bid1,fid1,shopsId1);
        }
        else
        {
            Integer bid = rentShops.getBid();
            Integer fid = rentShops.getFid();
            Integer maxId = rentShopsService.maxShopsNum(bid,fid);
            if(maxId==null)
                maxId=0;
            rentShops.setShopsId(maxId+1);
            rentShopsService.setShops(rentShops,bid1,fid1,shopsId1);
        }
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{rentShopsId}")
    @ResponseBody
    public Object detail(@PathVariable("rentShopsId") Integer rentShopsId) {
        return rentShopsService.selectById(rentShopsId);
    }

    /**
     * 获取最大商铺ID
     */
    @RequestMapping(value = "/getMaxShopsNum")
    @ResponseBody
    public Object getMaxShopsNum(@PathVariable("bid")Integer bid, @PathVariable("fid") Integer fid) {
        return rentShopsService.maxShopsNum(bid,fid);
    }

    /**
     * 获取商铺门牌号
     */
    @RequestMapping(value = "/shopsNumber")
    @ResponseBody
    public Object shopsNumber(@RequestParam("bid")Integer bid, @RequestParam("fid") Integer fid) {
        System.out.println(bid+"+"+fid);
        List<Map<String,Object>> list = rentShopsService.getShopsNumber(bid,fid);
        return list;
    }

    /**
     * 获取未签合同的商铺门牌号
     */
    @RequestMapping(value = "/shopsNumber2")
    @ResponseBody
    public Object shopsNumber2(@RequestParam("bid")Integer bid, @RequestParam("fid") Integer fid) {
        System.out.println(bid+"+"+fid);
        List<Map<String,Object>> list = rentShopsService.getShopsNumber2(bid,fid);
        return list;
    }

}
