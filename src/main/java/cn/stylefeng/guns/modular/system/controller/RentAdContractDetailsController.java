package cn.stylefeng.guns.modular.system.controller;

import cn.stylefeng.guns.config.properties.GunsProperties;
import cn.stylefeng.guns.core.common.exception.BizExceptionEnum;
import cn.stylefeng.guns.core.shiro.ShiroKit;
import cn.stylefeng.guns.modular.system.model.RentAdLeaseDetails;
import cn.stylefeng.guns.modular.system.model.RentAdPaidFixed;
import cn.stylefeng.guns.modular.system.service.*;
import cn.stylefeng.roses.core.base.controller.BaseController;
import cn.stylefeng.roses.kernel.model.exception.ServiceException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Autowired;
import cn.stylefeng.guns.core.log.LogObjectHolder;
import cn.stylefeng.guns.modular.system.model.RentAdContractDetails;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-04-14 15:02:57
 */
@Controller
@RequestMapping("/rentAdContractDetails")
public class RentAdContractDetailsController extends BaseController {

    private String PREFIX = "/system/rentAdContractDetails/";

    @Autowired
    private GunsProperties gunsProperties;

    @Autowired
    private IRentAdContractDetailsService rentAdContractDetailsService;

    @Autowired
    private IRentTenantsService rentTenantsService;

    @Autowired
    private IRentAdBitService rentAdBitService;

    @Autowired
    private IRentAdLeaseDetailsService rentAdLeaseDetailsService;

    @Autowired
    private IRentAdPaidFixedService rentAdPaidFixedService;

    /**
     * 跳转到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "rentAdContractDetails.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/rentAdContractDetails_add")
    public String rentAdContractDetailsAdd() {

        return PREFIX + "rentAdContractDetails_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/rentAdContractDetails_update/{id}")
    public String rentAdContractDetailsUpdate(@PathVariable Integer id, Model model) {
        RentAdContractDetails rentAdContractDetails = rentAdContractDetailsService.selectById(id);
        model.addAttribute("bid1",rentAdContractDetails.getBid());
        model.addAttribute("fid1",rentAdContractDetails.getFid());
        model.addAttribute("adNumber1",rentAdContractDetails.getAdNumber());
        model.addAttribute("item",rentAdContractDetails);
        LogObjectHolder.me().set(rentAdContractDetails);
        return PREFIX + "rentAdContractDetails_edit.html";
    }

    /**
     * 跳转到添加合同照片
     */
    @RequestMapping("/rentAdContractPictures_add/{id}")
    public String rentAdContractPicturesAdd() {
        return PREFIX + "rentAdContractPictures_add.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition1,String condition2, String beginTime, String endTime) {
        Integer deptId = ShiroKit.getUser().getDeptId();
        return rentAdContractDetailsService.getAdContract(condition1,condition2,beginTime,endTime,deptId);
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(RentAdContractDetails rentAdContractDetails) {
        String cardNumber = rentAdContractDetails.getCardNumber();
        Integer tenantsId = rentTenantsService.getIdByCardNumber(cardNumber);
        rentAdContractDetails.setTenantsId(tenantsId);
        Integer bid = rentAdContractDetails.getBid();
        Integer fid = rentAdContractDetails.getFid();
        String adNumber = rentAdContractDetails.getAdNumber();
        Integer adId = rentAdBitService.getIdByAdNumber(bid,fid,adNumber);
        rentAdBitService.setStatus(bid,fid,adNumber);
        rentAdContractDetails.setAdId(adId);
        Integer userId = ShiroKit.getUser().getId();
        rentAdContractDetails.setUserId(userId); //插入创建人ID
        rentAdContractDetails.setFlag(0);

        RentAdLeaseDetails rentAdLeaseDetails = new RentAdLeaseDetails();
        rentAdLeaseDetails.setBid(bid);
        rentAdLeaseDetails.setFid(fid);
        rentAdLeaseDetails.setAdNumber(adNumber);
        rentAdLeaseDetails.setAdId(adId);
        rentAdLeaseDetails.setTenantsId(tenantsId);
        rentAdLeaseDetails.setRealRent(new BigDecimal(0));
        rentAdLeaseDetails.setRealMargin(new BigDecimal(0));
        rentAdLeaseDetails.setRealElectricity(new BigDecimal(0));
        rentAdLeaseDetails.setDeposit(rentAdContractDetails.getDeposit());
        rentAdLeaseDetails.setPayment(rentAdContractDetails.getPayment());
        rentAdLeaseDetails.setBeginedAt(rentAdContractDetails.getBeginedAt());
        rentAdLeaseDetails.setEndedAt(rentAdContractDetails.getEndedAt());
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        rentAdLeaseDetails.setCreatedAt(time);
        rentAdLeaseDetails.setUpdatedAt(time);
        rentAdLeaseDetails.setUserId(userId);
        rentAdLeaseDetailsService.addAdLease(rentAdLeaseDetails);

        RentAdPaidFixed rentAdPaidFixed = new RentAdPaidFixed();
        rentAdPaidFixed.setBid(bid);
        rentAdPaidFixed.setFid(fid);
        rentAdPaidFixed.setAdNumber(adNumber);
        rentAdPaidFixed.setAdId(adId);
        rentAdPaidFixed.setTenantsId(tenantsId);
        rentAdPaidFixed.setCreatedAt(time);
        rentAdPaidFixed.setUserId(userId);
        rentAdPaidFixed.setFlag(0);
        rentAdPaidFixed.setContractFees(new BigDecimal(0));
        rentAdPaidFixed.setContractFeesPaid(new BigDecimal(0));
        rentAdPaidFixed.setContractMargin(new BigDecimal(0));
        rentAdPaidFixed.setContractMarginPaid(new BigDecimal(0));
        rentAdPaidFixed.setPropertyFees(new BigDecimal(0));
        rentAdPaidFixed.setPropertyFeesPaid(new BigDecimal(0));
        rentAdPaidFixed.setPropertyMargin(new BigDecimal(0));
        rentAdPaidFixed.setPropertyMarginPaid(new BigDecimal(0));
        rentAdPaidFixed.setBusinessFees(new BigDecimal(0));
        rentAdPaidFixed.setBusinessFeesPaid(new BigDecimal(0));
        rentAdPaidFixed.setBusinessMargin(new BigDecimal(0));
        rentAdPaidFixed.setBusinessMarginPaid(new BigDecimal(0));
        rentAdPaidFixed.setWaterMargin(new BigDecimal(0));
        rentAdPaidFixed.setWaterMarginPaid(new BigDecimal(0));
        rentAdPaidFixed.setPaidStart(time);
        rentAdPaidFixed.setPaidEnd(time);
        for(int i=0;i<rentAdContractDetails.getPeriod();i++)
            rentAdPaidFixedService.addAdFixed(rentAdPaidFixed);

        rentAdContractDetailsService.addAdContract(rentAdContractDetails);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete/{id}")
    @ResponseBody
    public Object delete(@PathVariable("id") Integer id) {
        rentAdContractDetailsService.deleteAdContract(id);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(RentAdContractDetails rentAdContractDetails) {
        if(rentAdContractDetails.getBid()==0){
            RentAdContractDetails rentAdContractDetails1 = rentAdContractDetailsService.selectById(rentAdContractDetails.getId());
            rentAdContractDetails.setBid(rentAdContractDetails1.getBid());
        }
        if((rentAdContractDetails.getFid()==null)||(rentAdContractDetails.getFid()==0)){
            RentAdContractDetails rentAdContractDetails1 = rentAdContractDetailsService.selectById(rentAdContractDetails.getId());
            rentAdContractDetails.setFid(rentAdContractDetails1.getFid());
        }
        if(((rentAdContractDetails.getAdNumber()).equals(""))||((rentAdContractDetails.getAdNumber()).equals("0"))){
            RentAdContractDetails rentAdContractDetails1 = rentAdContractDetailsService.selectById(rentAdContractDetails.getId());
            rentAdContractDetails.setAdNumber(rentAdContractDetails1.getAdNumber());
        }
        String cardNumber = rentAdContractDetails.getCardNumber();
        Integer tenantsId = rentTenantsService.getIdByCardNumber(cardNumber);
        rentAdContractDetails.setTenantsId(tenantsId);
        Integer bid = rentAdContractDetails.getBid();
        Integer fid = rentAdContractDetails.getFid();
        String adNumber = rentAdContractDetails.getAdNumber();
        Integer adId = rentAdBitService.getIdByAdNumber(bid,fid,adNumber);
        rentAdContractDetails.setAdId(adId);
        java.sql.Timestamp beginTime=new java.sql.Timestamp(rentAdContractDetails.getBeginedAt().getTime());
        java.sql.Timestamp endTime=new java.sql.Timestamp(rentAdContractDetails.getEndedAt().getTime());
        rentAdContractDetails.setBeginedAt(beginTime);
        rentAdContractDetails.setEndedAt(endTime);
        java.util.Date datetime=new java.util.Date();
        java.sql.Timestamp time=new java.sql.Timestamp(datetime.getTime());
        if(endTime.before(time))
            rentAdContractDetailsService.setFlag(bid,fid,adNumber);

        rentAdContractDetailsService.setAdContract(rentAdContractDetails);
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{rentAdContractDetailsId}")
    @ResponseBody
    public Object detail(@PathVariable("rentAdContractDetailsId") Integer rentAdContractDetailsId) {
        return rentAdContractDetailsService.selectById(rentAdContractDetailsId);
    }


    /**
     * 上传图片
     */
    @RequestMapping(method = RequestMethod.POST, path = "/upload")
    @ResponseBody
    public String upload(@RequestPart("file") MultipartFile picture) {
        String pictureName = UUID.randomUUID().toString() + ".jpg";
        try {
            String fileSavePath = gunsProperties.getFileUploadPath();
            picture.transferTo(new File(fileSavePath + pictureName));
        } catch (Exception e) {
            throw new ServiceException(BizExceptionEnum.UPLOAD_ERROR);
        }
        return pictureName;
    }

    /**
     * 获取广告位编号
     */
    @RequestMapping(value = "/adNumber")
    @ResponseBody
    public Object adNumber(@RequestParam("bid")Integer bid, @RequestParam("fid") Integer fid) {
        // System.out.println(bid+"+"+fid);
        List<Map<String,Object>> list = rentAdContractDetailsService.getAdNumber(bid,fid);
        return list;
    }
}
