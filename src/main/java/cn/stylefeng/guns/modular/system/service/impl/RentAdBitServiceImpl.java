package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.RentAdBit;
import cn.stylefeng.guns.modular.system.dao.RentAdBitMapper;
import cn.stylefeng.guns.modular.system.service.IRentAdBitService;
import cn.stylefeng.roses.core.datascope.DataScope;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 广告位详情表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-05
 */
@Service
public class RentAdBitServiceImpl extends ServiceImpl<RentAdBitMapper, RentAdBit> implements IRentAdBitService {

    @Override
    public List<Map<String, Object>> getAdBit(String condition1, String condition2, String beginTime, String endTime, Integer deptId) {
        return this.baseMapper.getAdBit(condition1,condition2,beginTime,endTime,deptId);
    }

    @Override
    public void deleteAdBit(Integer bid, Integer fid, Integer adId) {
        this.baseMapper.deleteAdBit(bid,fid,adId);
    }

    @Override
    public void addAdBit(RentAdBit rentAdBit) {
        this.baseMapper.addAdBit(rentAdBit);
    }

    @Override
    public Integer maxAdNum(Integer bid, Integer fid) {
        return this.baseMapper.maxAdNum(bid,fid);
    }

    @Override
    public void setAdId(Integer bid, Integer fid, Integer adId) {
        this.baseMapper.setAdId(bid,fid,adId);
    }

    @Override
    public void setAdBit(RentAdBit rentAdBit, Integer bid1, Integer fid1, Integer adId1) {
        this.baseMapper.setAdBit(rentAdBit,bid1,fid1,adId1);
    }


    @Override
    public RentAdBit getAdBitById(Integer bid, Integer fid, Integer adId) {
        return this.baseMapper.getAdBitById(bid,fid,adId);
    }

    @Override
    public Integer getIdByAdNumber(Integer bid, Integer fid, String adNumber) {
        return this.baseMapper.getIdByAdNumber(bid,fid,adNumber);
    }

    @Override
    public List<Map<String, Object>> getAdNumber(Integer bid, Integer fid) {
        return this.baseMapper.getAdNumber(bid,fid);
    }

    @Override
    public List<Map<String, Object>> getAdNumber2(Integer bid, Integer fid) {
        return this.baseMapper.getAdNumber2(bid, fid);
    }

    @Override
    public void setStatus(Integer bid, Integer fid, String adNumber) {
        this.baseMapper.setStatus(bid, fid, adNumber);
    }

//    @Override
//    public List<Map<String, Object>> getAllAdBit(Integer deptId) {
//        return this.baseMapper.getAllAdBit(deptId);
//    }
}
