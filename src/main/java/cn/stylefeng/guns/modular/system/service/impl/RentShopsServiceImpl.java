package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.RentShops;
import cn.stylefeng.guns.modular.system.dao.RentShopsMapper;
import cn.stylefeng.guns.modular.system.service.IRentShopsService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 商铺分布表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-06
 */
@Service
public class RentShopsServiceImpl extends ServiceImpl<RentShopsMapper, RentShops> implements IRentShopsService {

    @Override
    public List<Map<String, Object>> getShops(String condition1, String condition2, String beginTime, String endTime,Integer deptId) {
        return this.baseMapper.getShops(condition1,condition2,beginTime,endTime,deptId);
    }

    @Override
    public void deleteShops(Integer bid, Integer fid, Integer shopsId) {
        this.baseMapper.deleteShops(bid,fid,shopsId);
    }

    @Override
    public void addShops(RentShops rentShops) {
        this.baseMapper.addShops(rentShops);
    }

    @Override
    public Integer maxShopsNum(Integer bid, Integer fid) {
        return this.baseMapper.maxShopsNum(bid,fid);
    }

    @Override
    public void setShops(RentShops rentShops, Integer bid1, Integer fid1, Integer shopsId1) {
        this.baseMapper.setShops(rentShops,bid1,fid1,shopsId1);
    }

    @Override
    public RentShops getShopsById(Integer bid, Integer fid, Integer shopsId) {
        return this.baseMapper.getShopsById(bid,fid,shopsId);
    }

    @Override
    public Integer getIdByShopsNumber(Integer bid, Integer fid, String shopsNumber) {
        return this.baseMapper.getIdByShopsNumber(bid,fid,shopsNumber);
    }

    @Override
    public List<Map<String, Object>> getShopsNumber(Integer bid, Integer fid) {
        return this.baseMapper.getShopsNumber(bid,fid);
    }

    @Override
    public List<Map<String, Object>> getShopsNumber2(Integer bid, Integer fid) {
        return this.baseMapper.getShopsNumber2(bid, fid);
    }

    @Override
    public void setStatus(Integer bid, Integer fid, String shopsNumber) {
        this.baseMapper.setStatus(bid, fid, shopsNumber);
    }


}
