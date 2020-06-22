package cn.stylefeng.guns.modular.system.service;

import cn.stylefeng.guns.modular.system.model.Cost;
import com.baomidou.mybatisplus.service.IService;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 支出表 服务类
 * </p>
 *
 * @author stylefeng
 * @since 2019-05-17
 */
public interface ICostService extends IService<Cost> {
    /**
     * 获取支出记录
     */
    List<Map<String, Object>> getCost(@Param("condition")String condition, @Param("beginTime") String beginTime, @Param("endTime") String endTime);

    /**
     * 新增支出记录
     */
    void addCost(Cost cost);

    /**
     * 修改支出记录
     */
    void setCost(Cost cost);

}
