package cn.stylefeng.guns.modular.system.dao;

import cn.stylefeng.guns.modular.system.model.RentAdContractPictures;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 广告位合同照片表 Mapper 接口
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-20
 */
public interface RentAdContractPicturesMapper extends BaseMapper<RentAdContractPictures> {
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
