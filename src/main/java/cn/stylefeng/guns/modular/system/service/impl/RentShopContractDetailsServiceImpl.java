package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.RentShopContractDetails;
import cn.stylefeng.guns.modular.system.dao.RentShopContractDetailsMapper;
import cn.stylefeng.guns.modular.system.service.IRentShopContractDetailsService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 租户租赁商铺合同详情表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-15
 */
@Service
public class RentShopContractDetailsServiceImpl extends ServiceImpl<RentShopContractDetailsMapper, RentShopContractDetails> implements IRentShopContractDetailsService {

    @Override
    public List<Map<String, Object>> getShopContract(String condition1,String condition2, String beginTime, String endTime,Integer deptId) {
        return this.baseMapper.getShopContract(condition1,condition2,beginTime,endTime,deptId);
    }

    @Override
    public void deleteShopContract(Integer id) {
        this.baseMapper.deleteShopContract(id);
    }

    @Override
    public void addShopContract(RentShopContractDetails rentShopContractDetails) {
        this.baseMapper.addShopContract(rentShopContractDetails);
    }

    @Override
    public void setShopContract(RentShopContractDetails rentShopContractDetails) {
        this.baseMapper.setShopContract(rentShopContractDetails);
    }

    @Override
    public Integer getTenantsId(Integer bid, Integer fid, String shopsNumber) {
        return this.baseMapper.getTenantsId(bid,fid,shopsNumber);
    }

    @Override
    public void setFlag(Integer bid, Integer fid, String shopsNumber) {
        this.baseMapper.setFlag(bid,fid,shopsNumber);
    }

    @Override
    public List<Map<String, Object>> getShopsNumber(Integer bid, Integer fid) {
        return this.baseMapper.getShopsNumber(bid, fid);
    }
}
