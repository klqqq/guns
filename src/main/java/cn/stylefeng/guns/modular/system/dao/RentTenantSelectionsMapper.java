package cn.stylefeng.guns.modular.system.dao;

import cn.stylefeng.guns.modular.system.model.RentTenantSelections;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 变更事项选项表 Mapper 接口
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-07
 */
public interface RentTenantSelectionsMapper extends BaseMapper<RentTenantSelections> {
    /**
     * 获取变更选项
     */
    List<Map<String, Object>> getOptions(@Param("condition")String condition, @Param("beginTime") String beginTime, @Param("endTime") String endTime);

}
