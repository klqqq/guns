package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.RentAdContractDetails;
import cn.stylefeng.guns.modular.system.dao.RentAdContractDetailsMapper;
import cn.stylefeng.guns.modular.system.service.IRentAdContractDetailsService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 租户租赁广告位合同详情表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-14
 */
@Service
public class RentAdContractDetailsServiceImpl extends ServiceImpl<RentAdContractDetailsMapper, RentAdContractDetails> implements IRentAdContractDetailsService {

    @Override
    public List<Map<String, Object>> getAdContract(String condition1,String condition2, String beginTime, String endTime,Integer deptId) {
        return this.baseMapper.getAdContract(condition1,condition2,beginTime,endTime,deptId);
    }

    @Override
    public void deleteAdContract(Integer id) {
        this.baseMapper.deleteAdContract(id);
    }

    @Override
    public void addAdContract(RentAdContractDetails rentAdContractDetails) {
        this.baseMapper.addAdContract(rentAdContractDetails);
    }

    @Override
    public void setAdContract(RentAdContractDetails rentAdContractDetails) {
        this.baseMapper.setAdContract(rentAdContractDetails);
    }

    @Override
    public Integer getTenantsId(Integer bid, Integer fid, String adNumber) {
        return this.baseMapper.getTenantsId(bid,fid,adNumber);
    }

    @Override
    public void setFlag(Integer bid, Integer fid, String adNumber) {
        this.baseMapper.setFlag(bid,fid,adNumber);
    }

    @Override
    public List<Map<String, Object>> getAdNumber(Integer bid, Integer fid) {
        return this.baseMapper.getAdNumber(bid, fid);
    }
}
