package cn.stylefeng.guns.modular.system.service;

import cn.stylefeng.guns.modular.system.model.RentShopPaidList;
import com.baomidou.mybatisplus.service.IService;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 商铺缴租期记录表 服务类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-17
 */
public interface IRentShopPaidListService extends IService<RentShopPaidList> {
    /**
     * 获取商铺缴租期记录
     */
    List<Map<String, Object>> getShopPaid(@Param("condition1")String condition1,@Param("condition2")String condition2,@Param("condition3")String condition3, @Param("beginTime") String beginTime, @Param("endTime") String endTime, @Param("deptId") Integer deptId);

    /**
     * 添加商铺缴租期记录
     */
    void addShopPaid(RentShopPaidList rentShopPaidList);

    /**
     * 删除商铺缴租期记录
     */
    void deleteShopPaid(@Param("id")Integer id);

    /**
     * 修改商铺缴租期记录
     */
    void setShopPaid(RentShopPaidList rentShopPaidList);

}
