package cn.stylefeng.guns.modular.system.service;

import cn.stylefeng.guns.modular.system.model.RentTenantAdChange;
import com.baomidou.mybatisplus.service.IService;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 广告位变更事项记录表 服务类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-16
 */
public interface IRentTenantAdChangeService extends IService<RentTenantAdChange> {
    /**
     * 获取广告位变更事项
     */
    List<Map<String, Object>> getAdChange(@Param("condition1")String condition1,@Param("condition2")String condition2, @Param("beginTime") String beginTime, @Param("endTime") String endTime,@Param("deptId") Integer deptId);

    /**
     * 添加广告位变更事项
     */
    void addAdChange(RentTenantAdChange rentTenantAdChange);

    /**
     * 修改广告位变更事项
     */
    void setAdChange(RentTenantAdChange rentTenantAdChange);

}
