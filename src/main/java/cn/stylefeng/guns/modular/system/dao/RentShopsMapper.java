package cn.stylefeng.guns.modular.system.dao;

import cn.stylefeng.guns.modular.system.model.RentShops;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 商铺分布表 Mapper 接口
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-06
 */
public interface RentShopsMapper extends BaseMapper<RentShops> {
    /**
     * 获取商铺信息
     */
    List<Map<String, Object>> getShops(@Param("condition1")String condition1,@Param("condition2")String condition2, @Param("beginTime") String beginTime, @Param("endTime") String endTime,@Param("deptId") Integer deptId);

    /**
     * 删除商铺
     */
    void deleteShops(@Param("bid")Integer bid, @Param("fid")Integer fid, @Param("shopsId")Integer shopsId);

    /**
     * 添加商铺
     */
    void addShops(RentShops rentShops);

    /**
     * 获取最大店铺ID
     */
    Integer maxShopsNum(@Param("bid")Integer bid, @Param("fid")Integer fid);

    /**
     * 修改商铺信息
     */
    void setShops(@Param("rentShops") RentShops rentShops,@Param("bid1")Integer bid1, @Param("fid1")Integer fid1, @Param("shopsId1")Integer shopsId1);

    /**
     * 根据ID获取商铺
     */
    RentShops getShopsById(@Param("bid")Integer bid, @Param("fid")Integer fid, @Param("shopsId")Integer shopsId);

    /**
     * 根据商铺门牌号获取商铺ID
     */
    Integer getIdByShopsNumber(@Param("bid")Integer bid, @Param("fid")Integer fid, @Param("shopsNumber")String shopsNumber);

    /**
     * 获取商铺门牌号
     */
    List<Map<String, Object>> getShopsNumber(@Param("bid")Integer bid, @Param("fid")Integer fid);

    /**
     * 修改商铺状态
     */
    void setStatus(@Param("bid")Integer bid, @Param("fid")Integer fid, @Param("shopsNumber")String shopsNumber);

    /**
     * 获取未签合同的商铺门牌号
     */
    List<Map<String, Object>> getShopsNumber2(@Param("bid")Integer bid, @Param("fid")Integer fid);

}
