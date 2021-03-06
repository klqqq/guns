package cn.stylefeng.guns.modular.system.dao;

import cn.stylefeng.guns.modular.system.model.RentAdLeaseDetails;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 广告位租赁记录表 Mapper 接口
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-17
 */
public interface RentAdLeaseDetailsMapper extends BaseMapper<RentAdLeaseDetails> {
    /**
     * 获取广告位租赁记录
     */
    List<Map<String, Object>> getAdLease(@Param("condition1")String condition1,@Param("condition2")String condition2, @Param("beginTime") String beginTime, @Param("endTime") String endTime, @Param("deptId") Integer deptId);

    /**
     * 添加广告位租赁记录
     */
    void addAdLease(RentAdLeaseDetails rentAdLeaseDetails);

    /**
     * 修改广告位租赁记录
     */
    void setAdLease(RentAdLeaseDetails rentAdLeaseDetails);

    /**
     * 删除广告位租赁记录
     */
    void deleteAdLease(@Param("id")Integer id);

}
