package cn.stylefeng.guns.modular.system.service;

import cn.stylefeng.guns.modular.system.model.RentShopPaidFixed;
import com.baomidou.mybatisplus.service.IService;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 商铺固定费用缴纳租期记录表 服务类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-22
 */
public interface IRentShopPaidFixedService extends IService<RentShopPaidFixed> {
    /**
     * 获取商铺固定费用缴租期记录
     */
    List<Map<String, Object>> getShopFixed(@Param("condition1")String condition1,@Param("condition2")String condition2,@Param("condition3")String condition3, @Param("beginTime") String beginTime, @Param("endTime") String endTime, @Param("deptId") Integer deptId);

    /**
     * 删除商铺固定费用缴租期记录
     */
    void deleteShopFixed(@Param("id")Integer id);

    /**
     * 添加商铺固定费用缴租期记录
     */
    void addShopFixed(RentShopPaidFixed rentShopPaidFixed);

    /**
     * 修改商铺固定费用缴租期记录
     */
    void setShopFixed(RentShopPaidFixed rentShopPaidFixed);

    /**
     * 获取总应缴合计
     */
    List<Map<String, Object>> getMoney(@Param("condition1")String condition1,@Param("condition2")String condition2,@Param("condition3")String condition3, @Param("beginTime") String beginTime, @Param("endTime") String endTime, @Param("deptId") Integer deptId);

    /**
     * 获取总实缴合计
     */
    List<Map<String, Object>> getTotal(@Param("condition1")String condition1,@Param("condition2")String condition2,@Param("condition3")String condition3, @Param("beginTime") String beginTime, @Param("endTime") String endTime, @Param("deptId") Integer deptId);


}
