package cn.stylefeng.guns.modular.system.dao;

import cn.stylefeng.guns.modular.system.model.Income;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 收入表 Mapper 接口
 * </p>
 *
 * @author stylefeng
 * @since 2019-05-17
 */
public interface IncomeMapper extends BaseMapper<Income> {
    /**
     * 获取收入记录
     */
    List<Map<String, Object>> getIncome(@Param("condition")String condition, @Param("beginTime") String beginTime, @Param("endTime") String endTime);

    /**
     * 新增收入记录
     */
    void addIncome(Income income);

    /**
     * 修改收入记录
     */
    void setIncome(Income income);
}
