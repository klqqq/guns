package cn.stylefeng.guns.modular.system.service;

import cn.stylefeng.guns.modular.system.model.RentTenants;
import com.baomidou.mybatisplus.service.IService;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 租户基本信息表 服务类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-06
 */
public interface IRentTenantsService extends IService<RentTenants> {
    /**
     * 获取租户信息
     */
    List<Map<String,Object>> getTenants(@Param("condition")String condition, @Param("beginTime") String beginTime, @Param("endTime") String endTime);

    /**
     * 添加租户
     */
    void addTenants(RentTenants rentTenants);

    /**
     * 修改租户信息
     */
    void setTenants(RentTenants rentTenants);

    /**
     * 根据身份证号获取用户ID
     */
    Integer getIdByCardNumber(String cardNumber);

}
