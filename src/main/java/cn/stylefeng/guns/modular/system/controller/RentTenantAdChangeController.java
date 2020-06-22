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
import cn.stylefeng.guns.modular.system.model.RentTenantAdChange;
import cn.stylefeng.guns.modular.system.service.IRentTenantAdChangeService;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-04-16 14:59:22
 */
@Controller
@RequestMapping("/rentTenantAdChange")
public class RentTenantAdChangeController extends BaseController {

    private String PREFIX = "/system/rentTenantAdChange/";

    @Autowired
    private IRentTenantAdChangeService rentTenantAdChangeService;

    @Autowired
    private IRentAdBitService rentAdBitService;

    @Autowired
    private IRentAdContractDetailsService rentAdContractDetailsService;

    /**
     * 跳转到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "rentTenantAdChange.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/rentTenantAdChange_add")
    public String rentTenantAdChangeAdd() {
        return PREFIX + "rentTenantAdChange_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/rentTenantAdChange_update/{id}")
    public String rentTenantAdChangeUpdate(@PathVariable Integer id, Model model) {
        RentTenantAdChange rentTenantAdChange = rentTenantAdChangeService.selectById(id);
        model.addAttribute("bid1",rentTenantAdChange.getBid());
        model.addAttribute("fid1",rentTenantAdChange.getFid());
        model.addAttribute("adNumber1",rentTenantAdChange.getAdNumber());
        model.addAttribute("item",rentTenantAdChange);
        LogObjectHolder.me().set(rentTenantAdChange);
        return PREFIX + "rentTenantAdChange_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition1,String condition2, String beginTime, String endTime) {
        Integer deptId = ShiroKit.getUser().getDeptId();
        return rentTenantAdChangeService.getAdChange(condition1,condition2,beginTime,endTime,deptId);
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(RentTenantAdChange rentTenantAdChange) {
        Integer bid = rentTenantAdChange.getBid();
        Integer fid = rentTenantAdChange.getFid();
        String adNumber = rentTenantAdChange.getAdNumber();
        Integer adId = rentAdBitService.getIdByAdNumber(bid,fid,adNumber);
        rentTenantAdChange.setAdId(adId);
        Integer tenantsId = rentAdContractDetailsService.getTenantsId(bid,fid,adNumber);
        rentTenantAdChange.setTenantsId(tenantsId);
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        rentTenantAdChange.setCreatedAt(time);
        Integer userId = ShiroKit.getUser().getId();
        rentTenantAdChange.setUserId(userId); //插入创建人ID
        if((rentTenantAdChange.getOptionsId()==1)||(rentTenantAdChange.getOptionsId()==2))
            rentAdContractDetailsService.setFlag(bid,fid,adNumber);
        rentTenantAdChangeService.insert(rentTenantAdChange);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete/{id}")
    @ResponseBody
    public Object delete(@PathVariable("id")Integer id) {
        rentTenantAdChangeService.deleteById(id);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(RentTenantAdChange rentTenantAdChange) {
        RentTenantAdChange rentTenantAdChange1 = rentTenantAdChangeService.selectById(rentTenantAdChange.getId());
        if(rentTenantAdChange.getBid()==0)
            rentTenantAdChange.setBid(rentTenantAdChange1.getBid());

        if((rentTenantAdChange.getFid()==null)||(rentTenantAdChange.getFid()==0))
            rentTenantAdChange.setFid(rentTenantAdChange1.getFid());

        if((rentTenantAdChange.getAdNumber().equals(""))||(rentTenantAdChange.getAdNumber().equals("0")))
            rentTenantAdChange.setAdNumber(rentTenantAdChange1.getAdNumber());

        Integer bid = rentTenantAdChange.getBid();
        Integer fid = rentTenantAdChange.getFid();
        String adNumber = rentTenantAdChange.getAdNumber();
        Integer adId = rentAdBitService.getIdByAdNumber(bid,fid,adNumber);
        rentTenantAdChange.setAdId(adId);
        Integer tenantsId = rentAdContractDetailsService.getTenantsId(bid,fid,adNumber);
        rentTenantAdChange.setTenantsId(tenantsId);
        if((rentTenantAdChange.getOptionsId()==1)||(rentTenantAdChange.getOptionsId()==2))
            rentAdContractDetailsService.setFlag(bid,fid,adNumber);
        rentTenantAdChangeService.updateById(rentTenantAdChange);
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{rentTenantAdChangeId}")
    @ResponseBody
    public Object detail(@PathVariable("rentTenantAdChangeId") Integer rentTenantAdChangeId) {
        return rentTenantAdChangeService.selectById(rentTenantAdChangeId);
    }
}
