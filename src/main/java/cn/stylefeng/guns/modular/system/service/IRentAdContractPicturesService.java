package cn.stylefeng.guns.modular.system.service;

import cn.stylefeng.guns.modular.system.model.RentAdContractPictures;
import com.baomidou.mybatisplus.service.IService;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 广告位合同照片表 服务类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-20
 */
public interface IRentAdContractPicturesService extends IService<RentAdContractPictures> {
    /**
     * 获取合同图片URL
     */
    List<Map<String, Object>> getUrl(@Param("adConId")Integer adConId);

    /**
     * 添加图片
     */
    void addUrl(RentAdContractPictures rentAdContractPictures);

    /**
     * 删除图片
     */
    void deleteUrl(@Param("adConId")Integer adConId,@Param("pictureUrl")String pictureUrl);

}
