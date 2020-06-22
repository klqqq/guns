package cn.stylefeng.guns.modular.system.dao;

import cn.stylefeng.guns.modular.system.model.RentShopLeaseDetails;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 商铺租赁记录表 Mapper 接口
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-17
 */
public interface RentShopLeaseDetailsMapper extends BaseMapper<RentShopLeaseDetails> {
    /**
     * 获取商铺租赁记录
     */
    List<Map<String, Object>> getShopLease(@Param("condition1")String condition1,@Param("condition2")String condition2, @Param("beginTime") String beginTime, @Param("endTime") String endTime, @Param("deptId") Integer deptId);

    /**
     * 删除商铺租赁记录
     */
    void deleteShopLease(@Param("id")Integer id);

    /**
     * 添加商铺租赁记录
     */
    void addShopLease(RentShopLeaseDetails rentShopLeaseDetails);

    /**
     * 修改商铺租赁记录
     */
    void setShopLease(RentShopLeaseDetails rentShopLeaseDetails);

}
