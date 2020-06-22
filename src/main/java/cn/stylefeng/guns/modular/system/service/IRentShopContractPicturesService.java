package cn.stylefeng.guns.modular.system.service;

import cn.stylefeng.guns.modular.system.model.RentShopContractPictures;
import com.baomidou.mybatisplus.service.IService;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 商铺合同照片表 服务类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-23
 */
public interface IRentShopContractPicturesService extends IService<RentShopContractPictures> {
    /**
     * 获取合同照片URL
     */
    List<Map<String, Object>> getUrl(@Param("shopConId")Integer shopConId);

    /**
     * 添加图片
     */
    void addUrl(RentShopContractPictures rentShopContractPictures);

    /**
     * 删除图片
     */
    void deleteUrl(@Param("shopConId")Integer shopConId,@Param("pictureUrl")String pictureUrl);

}
