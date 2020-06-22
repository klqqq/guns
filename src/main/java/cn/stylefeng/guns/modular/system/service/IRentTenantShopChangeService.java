package cn.stylefeng.guns.modular.system.service;

import cn.stylefeng.guns.modular.system.model.RentTenantShopChange;
import com.baomidou.mybatisplus.service.IService;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 商铺变更事项记录表 服务类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-16
 */
public interface IRentTenantShopChangeService extends IService<RentTenantShopChange> {
    /**
     * 获取商铺变更事项
     */
    List<Map<String, Object>> getShopChange(@Param("condition1")String condition1,@Param("condition2")String condition2, @Param("condition3")String condition3, @Param("beginTime") String beginTime, @Param("endTime") String endTime, @Param("deptId") Integer deptId);

    /**
     * 添加商铺变更事项
     */
    void addShopChange(RentTenantShopChange rentTenantShopChange);

    /**
     * 修改商铺变更事项
     */
    void setShopChange(RentTenantShopChange rentTenantShopChange);

    /**
     * 获取总合计
     */
    List<Map<String, Object>> getMoney(@Param("condition1")String condition1,@Param("condition2")String condition2,@Param("condition3")String condition3, @Param("beginTime") String beginTime, @Param("endTime") String endTime, @Param("deptId") Integer deptId);


}
