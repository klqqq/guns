package cn.stylefeng.guns.modular.system.controller;

import cn.stylefeng.guns.config.properties.GunsProperties;
import cn.stylefeng.guns.core.common.exception.BizExceptionEnum;
import cn.stylefeng.roses.core.base.controller.BaseController;
import cn.stylefeng.roses.kernel.model.exception.ServiceException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Autowired;
import cn.stylefeng.guns.core.log.LogObjectHolder;
import cn.stylefeng.guns.modular.system.model.RentShopContractPictures;
import cn.stylefeng.guns.modular.system.service.IRentShopContractPicturesService;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.UUID;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-04-23 15:54:29
 */
@Controller
@RequestMapping("/rentShopContractPictures")
public class RentShopContractPicturesController extends BaseController {

    private String PREFIX = "/system/rentShopContractPictures/";

    @Autowired
    private GunsProperties gunsProperties;

    @Autowired
    private IRentShopContractPicturesService rentShopContractPicturesService;

    /**
     * 跳转到首页
     */
    @RequestMapping("/{id}")
    public String index(@PathVariable("id") Integer id,Model model) {
        model.addAttribute("shopConId",id);
        return PREFIX + "rentShopContractPictures.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/rentShopContractPictures_add/{id}")
    public String rentShopContractPicturesAdd(@PathVariable Integer id) {
        return PREFIX + "rentShopContractPictures_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/rentShopContractPictures_update/{rentShopContractPicturesId}")
    public String rentShopContractPicturesUpdate(@PathVariable Integer rentShopContractPicturesId, Model model) {
        RentShopContractPictures rentShopContractPictures = rentShopContractPicturesService.selectById(rentShopContractPicturesId);
        model.addAttribute("item",rentShopContractPictures);
        LogObjectHolder.me().set(rentShopContractPictures);
        return PREFIX + "rentShopContractPictures_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list/{shopConId}")
    @ResponseBody
    public Object list(@PathVariable Integer shopConId) {
        return rentShopContractPicturesService.getUrl(shopConId);
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(RentShopContractPictures rentShopContractPictures) {
        rentShopContractPicturesService.addUrl(rentShopContractPictures);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete/{shopConId}/{pictureUrl}")
    @ResponseBody
    public Object delete(@PathVariable("shopConId") Integer shopConId,@PathVariable("pictureUrl") String pictureUrl) {
        rentShopContractPicturesService.deleteUrl(shopConId, pictureUrl);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(RentShopContractPictures rentShopContractPictures) {
        rentShopContractPicturesService.updateById(rentShopContractPictures);
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{rentShopContractPicturesId}")
    @ResponseBody
    public Object detail(@PathVariable("rentShopContractPicturesId") Integer rentShopContractPicturesId) {
        return rentShopContractPicturesService.selectById(rentShopContractPicturesId);
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
}
