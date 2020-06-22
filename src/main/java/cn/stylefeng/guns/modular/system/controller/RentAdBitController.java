package cn.stylefeng.guns.modular.system.controller;

import cn.stylefeng.guns.core.shiro.ShiroKit;
import cn.stylefeng.guns.modular.system.service.impl.RentAdBitServiceImpl;
import cn.stylefeng.roses.core.base.controller.BaseController;
import com.baomidou.mybatisplus.toolkit.CollectionUtils;
import io.swagger.models.auth.In;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Autowired;
import cn.stylefeng.guns.core.log.LogObjectHolder;
import cn.stylefeng.guns.modular.system.model.RentAdBit;
import cn.stylefeng.guns.modular.system.service.IRentAdBitService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.text.ParsePosition;
import java.util.*;
import java.text.SimpleDateFormat;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-04-05 14:03:35
 */
@Controller
@RequestMapping("/rentAdBit")
public class RentAdBitController extends BaseController {

    private String PREFIX = "/system/rentAdBit/";

    @Autowired
    private IRentAdBitService rentAdBitService;

    /**
     * 跳转到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "rentAdBit.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/rentAdBit_add/{namearr}/{parentarr}")
    public String rentAdBitAdd(@PathVariable("namearr") String namearr,@PathVariable("parentarr") String parentarr,Model model) {
        model.addAttribute("namearr",namearr);
        model.addAttribute("parentarr",parentarr);
        return PREFIX + "rentAdBit_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/rentAdBit_update/{bid}/{fid}/{adId}/{enamearr}/{eparentarr}")
    public String rentAdBitUpdate(@PathVariable("bid")Integer bid, @PathVariable("fid") Integer fid,@PathVariable("adId")Integer adId,@PathVariable("enamearr") String enamearr,@PathVariable("eparentarr") String eparentarr, Model model) {
        RentAdBit rentAdBit = rentAdBitService.getAdBitById(bid,fid,adId);
        //System.out.println(1);
        System.out.println(bid+"+"+fid+"+"+adId);
        model.addAttribute("bid1",bid);
        model.addAttribute("fid1",fid);
        model.addAttribute("adId1",adId);
        model.addAttribute("item",rentAdBit);
        System.out.println(rentAdBit);
        model.addAttribute("enamearr",enamearr);
        model.addAttribute("eparentarr",eparentarr);
        LogObjectHolder.me().set(rentAdBit);
        return PREFIX + "rentAdBit_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition1, String condition2, String beginTime, String endTime) {
        Integer deptId = ShiroKit.getUser().getDeptId();
        return rentAdBitService.getAdBit(condition1,condition2,beginTime,endTime,deptId);
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(RentAdBit rentAdBit) {
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        rentAdBit.setCreatedAt(time);
        rentAdBit.setUpdatedAt(time); //插入创建时间
        Integer userId = ShiroKit.getUser().getId();
        rentAdBit.setUserId(userId); //插入创建人ID
        Integer bid = rentAdBit.getBid();
        Integer fid = rentAdBit.getFid();
        Integer maxId = rentAdBitService.maxAdNum(bid,fid);
        if(maxId==null)
            maxId=0;
        rentAdBit.setAdId(maxId+1);
        rentAdBitService.addAdBit(rentAdBit);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete/{bid}/{fid}/{adId}")
    @ResponseBody
    public Object delete(@PathVariable("bid")Integer bid, @PathVariable("fid") Integer fid,@PathVariable("adId")Integer adId) {
        rentAdBitService.deleteAdBit(bid,fid,adId);
        return SUCCESS_TIP;
    }


    /**
     * 修改
     */
    @RequestMapping(value = "/update/{bid1}/{fid1}/{adId1}")
    @ResponseBody
    public Object update(RentAdBit rentAdBit,@PathVariable("bid1")Integer bid1, @PathVariable("fid1") Integer fid1,@PathVariable("adId1")Integer adId1) {
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        rentAdBit.setUpdatedAt(time); //插入更新时间

        if(rentAdBit.getBid()==0&&rentAdBit.getFid()==0)
        {
            rentAdBit.setBid(bid1);
            rentAdBit.setFid(fid1);
           // System.out.println(rentAdBit.getBid()+"+"+rentAdBit.getFid()+"+"+rentAdBit.getAdId());
            rentAdBitService.setAdBit(rentAdBit,bid1,fid1,adId1);
        }
        else
        {
           // System.out.println("1+"+rentAdBit.getBid()+"+"+rentAdBit.getFid()+"+"+rentAdBit.getAdId());
            Integer bid = rentAdBit.getBid();
            Integer fid = rentAdBit.getFid();
            Integer maxId = rentAdBitService.maxAdNum(bid,fid);
            if(maxId==null)
                maxId=0;
            rentAdBit.setAdId(maxId+1);
            rentAdBitService.setAdBit(rentAdBit,bid1,fid1,adId1);
        }
        return SUCCESS_TIP;
    }

    /**
     * 获取当前楼层最大广告位ID
     */
    @RequestMapping(value = "/getMaxAdNum")
    @ResponseBody
    public Object getMaxAdNum(@PathVariable("bid")Integer bid, @PathVariable("fid") Integer fid) {
        return rentAdBitService.maxAdNum(bid,fid);
    }

    /**
     * 修改广告位ID
     */
    @RequestMapping(value = "/updateAdId")
    @ResponseBody
    public Object updateAdId(@PathVariable("bid")Integer bid, @PathVariable("fid") Integer fid,@PathVariable("ad_id")Integer adId) {
        rentAdBitService.setAdId(bid,fid,adId);
        return SUCCESS_TIP;
    }

    /**
     * 获取广告位编号
     */
    @RequestMapping(value = "/adNumber")
    @ResponseBody
    public Object adNumber(@RequestParam("bid")Integer bid, @RequestParam("fid") Integer fid) {
       // System.out.println(bid+"+"+fid);
        List<Map<String,Object>> list = rentAdBitService.getAdNumber(bid,fid);
        return list;
    }

    /**
     * 获取未签合同的广告位编号
     */
    @RequestMapping(value = "/adNumber2")
    @ResponseBody
    public Object adNumber2(@RequestParam("bid")Integer bid, @RequestParam("fid") Integer fid) {
        //System.out.println(bid+"+"+fid);
        List<Map<String,Object>> list = rentAdBitService.getAdNumber2(bid,fid);
        return list;
    }

//    /**
//     * 导出所有数据
//     */
//    @RequestMapping(value = "/export", method = RequestMethod.GET)
//    public void exportUsers(HttpServletRequest request, HttpServletResponse response) {
//        Integer deptId = ShiroKit.getUser().getDeptId();
//        List<Map<String, Object>> rentAdBitList = rentAdBitService.getAllAdBit(deptId);
//        //单元格表头
//        String[] excelHeader = {"大楼","楼层","编号","名称","预计面积","地址","状态","预算月租金","核定保证金","核定电费单价",
//                "备注信息","创建时间","更新时间","创建人","管理人"};
//        //字段名称
//        String[] fileds = {"bname", "fname", "adNumber", "adName","adArea","address","leaseStatus","adRent","adMargin",
//        "adElectricity","adMemo","createdAt","updatedAt","userName","manageName"};
//        //单元格宽度内容格式
//        int[] formats = {4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1};
//        //单元格宽度
//        int[] widths = {256 * 14, 512 * 14, 256 * 14, 512 * 14, 256 * 14, 256 * 14, 256 * 14, 256 * 14, 256 * 14, 256 * 14
//                , 256 * 14, 256 * 14, 256 * 14, 256 * 14, 256 * 14};
//        try {
//            List<Map<String, Object>> excelData = new ArrayList<Map<String, Object>>();
//            if (CollectionUtils.isNotEmpty(rentAdBitList)) {
//                for (Map map : rentAdBitList) {
//                    Map<String, Object> map1 = new HashMap<>();
//                    map1.put("bname", map.get("bname"));
//                    map1.put("fname", map.get("fname"));
//                    map1.put("adNumber", map.get("adNumber"));
//                    map1.put("adName", map.get("adName"));
//                    excelData.add(map1);
//                }
//            }
//            String excelName = "广告位信息" + System.currentTimeMillis();
//            PoiUtil.exportFile(excelName, excelHeader, fileds, formats, widths, excelData, request, response);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
}
