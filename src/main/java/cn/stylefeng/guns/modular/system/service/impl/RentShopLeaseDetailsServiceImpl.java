package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.RentShopLeaseDetails;
import cn.stylefeng.guns.modular.system.dao.RentShopLeaseDetailsMapper;
import cn.stylefeng.guns.modular.system.service.IRentShopLeaseDetailsService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 商铺租赁记录表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-17
 */
@Service
public class RentShopLeaseDetailsServiceImpl extends ServiceImpl<RentShopLeaseDetailsMapper, RentShopLeaseDetails> implements IRentShopLeaseDetailsService {

    @Override
    public List<Map<String, Object>> getShopLease(String condition1,String condition2, String beginTime, String endTime, Integer deptId) {
        return this.baseMapper.getShopLease(condition1,condition2,beginTime,endTime,deptId);
    }

    @Override
    public void deleteShopLease(Integer id) {
        this.baseMapper.deleteShopLease(id);
    }

    @Override
    public void addShopLease(RentShopLeaseDetails rentShopLeaseDetails) {
        this.baseMapper.addShopLease(rentShopLeaseDetails);
    }

    @Override
    public void setShopLease(RentShopLeaseDetails rentShopLeaseDetails) {
        this.baseMapper.setShopLease(rentShopLeaseDetails);
    }
}
