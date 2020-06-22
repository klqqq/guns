package cn.stylefeng.guns.modular.system.service;

import cn.stylefeng.guns.modular.system.model.RentAdPaidFixed;
import com.baomidou.mybatisplus.service.IService;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 广告位固定费用缴纳租期记录表 服务类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-21
 */
public interface IRentAdPaidFixedService extends IService<RentAdPaidFixed> {
    /**
     * 获取广告位固定费用
     */
    List<Map<String, Object>> getAdFixed(@Param("condition1")String condition1,@Param("condition2")String condition2, @Param("beginTime") String beginTime, @Param("endTime") String endTime, @Param("deptId") Integer deptId);

    /**
     * 删除广告位固定费用记录
     */
    void deleteAdFixed(@Param("id") Integer id);

    /**
     * 添加广告位固定费用记录
     */
    void addAdFixed(RentAdPaidFixed rentAdPaidFixed);

    /**
     * 修改广告位固定费用记录
     */
    void setAdFixed(RentAdPaidFixed rentAdPaidFixed);

}
