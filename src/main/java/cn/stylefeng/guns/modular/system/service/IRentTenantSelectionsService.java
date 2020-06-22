package cn.stylefeng.guns.modular.system.service;

import cn.stylefeng.guns.modular.system.model.RentTenantSelections;
import com.baomidou.mybatisplus.service.IService;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 变更事项选项表 服务类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-07
 */
public interface IRentTenantSelectionsService extends IService<RentTenantSelections> {
    /**
     * 获取变更选项
     */
    List<Map<String, Object>> getOptions(@Param("condition")String condition, @Param("beginTime") String beginTime, @Param("endTime") String endTime);


}
