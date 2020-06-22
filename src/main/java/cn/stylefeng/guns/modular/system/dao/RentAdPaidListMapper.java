package cn.stylefeng.guns.modular.system.dao;

import cn.stylefeng.guns.modular.system.model.RentAdPaidList;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 广告位缴纳租期记录表 Mapper 接口
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-17
 */
public interface RentAdPaidListMapper extends BaseMapper<RentAdPaidList> {
    /**
     * 获取广告位缴租期记录
     */
    List<Map<String, Object>> getAdPaid(@Param("condition1")String condition1,@Param("condition2")String condition2,  @Param("beginTime") String beginTime, @Param("endTime") String endTime, @Param("deptId") Integer deptId);

    /**
     * 添加广告位缴租期记录
     */
    void addAdPaid(RentAdPaidList rentAdPaidList);

    /**
     * 修改广告位缴租期记录
     */
    void setAdPaid(RentAdPaidList rentAdPaidList);

    /**
     * 删除广告位缴租期
     */
    void deleteAdPaid(@Param("id")Integer id);

}
