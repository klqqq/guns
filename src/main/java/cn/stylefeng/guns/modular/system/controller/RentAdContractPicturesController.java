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
import cn.stylefeng.guns.modular.system.model.RentAdContractPictures;
import cn.stylefeng.guns.modular.system.service.IRentAdContractPicturesService;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * 控制器
 *
 * @author fengshuonan
 * @Date 2019-04-20 14:31:53
 */
@Controller
@RequestMapping("/rentAdContractPictures")
public class RentAdContractPicturesController extends BaseController {

    private String PREFIX = "/system/rentAdContractPictures/";

    @Autowired
    private GunsProperties gunsProperties;

    @Autowired
    private IRentAdContractPicturesService rentAdContractPicturesService;

    /**
     * 跳转到首页
     */
    @RequestMapping("/{id}")
    public String index(@PathVariable("id") Integer id,Model model) {
        model.addAttribute("adConId",id);
        return PREFIX + "rentAdContractPictures.html";
    }

    /**
     * 跳转到添加
     */
    @RequestMapping("/rentAdContractPictures_add/{id}")
    public String rentAdContractPicturesAdd(@PathVariable Integer id) {

        return PREFIX + "rentAdContractPictures_add.html";
    }

    /**
     * 跳转到修改
     */
    @RequestMapping("/rentAdContractPictures_update/{rentAdContractPicturesId}")
    public String rentAdContractPicturesUpdate(@PathVariable Integer rentAdContractPicturesId, Model model) {
        RentAdContractPictures rentAdContractPictures = rentAdContractPicturesService.selectById(rentAdContractPicturesId);
        model.addAttribute("item",rentAdContractPictures);
        LogObjectHolder.me().set(rentAdContractPictures);
        return PREFIX + "rentAdContractPictures_edit.html";
    }

    /**
     * 获取列表
     */
    @RequestMapping(value = "/list/{adConId}")
    @ResponseBody
    public Object list(@PathVariable Integer adConId) {

        List<Map<String, Object>> list1 =  rentAdContractPicturesService.getUrl(adConId);
        System.out.println(list1);
        return list1;
    }

    /**
     * 新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(RentAdContractPictures rentAdContractPictures) {

        rentAdContractPicturesService.addUrl(rentAdContractPictures);
        return SUCCESS_TIP;
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete/{adConId}/{pictureUrl}")
    @ResponseBody
    public Object delete(@PathVariable("adConId") Integer adConId,@PathVariable("pictureUrl") String pictureUrl) {
        rentAdContractPicturesService.deleteUrl(adConId, pictureUrl);
        return SUCCESS_TIP;
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(RentAdContractPictures rentAdContractPictures) {
        rentAdContractPicturesService.updateById(rentAdContractPictures);
        return SUCCESS_TIP;
    }

    /**
     * 详情
     */
    @RequestMapping(value = "/detail/{rentAdContractPicturesId}")
    @ResponseBody
    public Object detail(@PathVariable("rentAdContractPicturesId") Integer rentAdContractPicturesId) {
        return rentAdContractPicturesService.selectById(rentAdContractPicturesId);
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
