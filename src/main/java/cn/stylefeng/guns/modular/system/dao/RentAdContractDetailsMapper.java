package cn.stylefeng.guns.modular.system.dao;

import cn.stylefeng.guns.modular.system.model.RentAdContractDetails;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 租户租赁广告位合同详情表 Mapper 接口
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-14
 */
public interface RentAdContractDetailsMapper extends BaseMapper<RentAdContractDetails> {
    /**
     * 获取广告位合同
     */
    List<Map<String, Object>> getAdContract(@Param("condition1")String condition1,@Param("condition2")String condition2, @Param("beginTime") String beginTime, @Param("endTime") String endTime,@Param("deptId") Integer deptId);

    /**
     * 删除广告位合同
     */
    void deleteAdContract(@Param("id")Integer id);

    /**
     * 添加广告位合同
     */
    void addAdContract(RentAdContractDetails rentAdContractDetails);

    /**
     * 修改广告位合同
     */
    void setAdContract(RentAdContractDetails rentAdContractDetails);

    /**
     * 获取租户ID
     */
    Integer getTenantsId(@Param("bid")Integer bid, @Param("fid")Integer fid, @Param("adNumber")String adNumber);

    /**
     * 终止合同
     */
    void setFlag(@Param("bid")Integer bid, @Param("fid")Integer fid, @Param("adNumber")String adNumber);

    /**
     * 获取广告位编号
     */
    List<Map<String, Object>> getAdNumber(@Param("bid")Integer bid, @Param("fid")Integer fid);

}
