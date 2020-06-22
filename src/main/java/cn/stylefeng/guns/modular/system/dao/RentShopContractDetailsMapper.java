package cn.stylefeng.guns.modular.system.dao;

import cn.stylefeng.guns.modular.system.model.RentShopContractDetails;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 租户租赁商铺合同详情表 Mapper 接口
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-15
 */
public interface RentShopContractDetailsMapper extends BaseMapper<RentShopContractDetails> {
    /**
     * 获取商铺合同
     */
    List<Map<String, Object>> getShopContract(@Param("condition1")String condition1,@Param("condition2")String condition2, @Param("beginTime") String beginTime, @Param("endTime") String endTime,@Param("deptId") Integer deptId);

    /**
     * 删除商铺合同
     */
    void deleteShopContract(@Param("id")Integer id);

    /**
     * 添加商铺合同
     */
    void addShopContract(RentShopContractDetails rentShopContractDetails);

    /**
     * 修改商铺合同
     */
    void setShopContract(RentShopContractDetails rentShopContractDetails);

    /**
     * 获取租户ID
     */
    Integer getTenantsId(@Param("bid")Integer bid, @Param("fid")Integer fid, @Param("shopsNumber")String shopsNumber);

    /**
     * 终止合同
     */
    void setFlag(@Param("bid")Integer bid, @Param("fid")Integer fid, @Param("shopsNumber")String shopsNumber);

    /**
     * 获取商铺门牌号
     */
    List<Map<String, Object>> getShopsNumber(@Param("bid")Integer bid, @Param("fid")Integer fid);

}
