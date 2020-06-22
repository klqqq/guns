package cn.stylefeng.guns.modular.system.service;

import cn.stylefeng.guns.modular.system.model.RentAdBit;
import cn.stylefeng.roses.core.datascope.DataScope;
import com.baomidou.mybatisplus.service.IService;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 广告位详情表 服务类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-05
 */
public interface IRentAdBitService extends IService<RentAdBit> {
    /**
     * 获取广告位信息
     */
    List<Map<String, Object>> getAdBit(@Param("condition1")String condition1,@Param("condition2")String condition2, @Param("beginTime") String beginTime, @Param("endTime") String endTime,@Param("deptId") Integer deptId);

    /**
     * 删除广告位
     */
    void deleteAdBit(@Param("bid")Integer bid, @Param("fid")Integer fid, @Param("adId")Integer adId);

    /**
     * 添加广告位
     */
    void addAdBit(RentAdBit rentAdBit);

    /**
     * 获取当前楼层最大广告位ID
     */
    Integer maxAdNum(@Param("bid")Integer bid, @Param("fid")Integer fid);

    /**
     * 修改广告位ID
     */
    void setAdId(@Param("bid")Integer bid, @Param("fid")Integer fid, @Param("adId")Integer adId);

    /**
     * 修改广告位信息
     */
    void setAdBit(@Param("rentAdBit")RentAdBit rentAdBit,@Param("bid1")Integer bid1, @Param("fid1")Integer fid1, @Param("adId1")Integer adId1);

    /**
     * 根据ID获取广告位
     */
    RentAdBit getAdBitById(@Param("bid")Integer bid, @Param("fid")Integer fid, @Param("adId")Integer adId);

    /**
     * 根据广告位编号获取广告位ID
     */
    Integer getIdByAdNumber(@Param("bid")Integer bid, @Param("fid")Integer fid, @Param("adNumber")String adNumber);

    /**
     * 获取广告位编号
     */
    List<Map<String,Object>> getAdNumber(@Param("bid")Integer bid, @Param("fid")Integer fid);

    /**
     * 获取未签合同的广告位编号
     */
    List<Map<String,Object>> getAdNumber2(@Param("bid")Integer bid, @Param("fid")Integer fid);

    /**
     * 修改广告位状态
     */
    void setStatus(@Param("bid")Integer bid, @Param("fid")Integer fid, @Param("adNumber")String adNumber);

//    /**
//     * 获取所有广告位信息
//     */
//    List<Map<String, Object>> getAllAdBit(@Param("deptId") Integer deptId);

}
