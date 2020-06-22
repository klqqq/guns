package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.RentAdLeaseDetails;
import cn.stylefeng.guns.modular.system.dao.RentAdLeaseDetailsMapper;
import cn.stylefeng.guns.modular.system.service.IRentAdLeaseDetailsService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 广告位租赁记录表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-17
 */
@Service
public class RentAdLeaseDetailsServiceImpl extends ServiceImpl<RentAdLeaseDetailsMapper, RentAdLeaseDetails> implements IRentAdLeaseDetailsService {

    @Override
    public List<Map<String, Object>> getAdLease(String condition1,String condition2, String beginTime, String endTime, Integer deptId) {
        return this.baseMapper.getAdLease(condition1,condition2,beginTime,endTime,deptId);
    }

    @Override
    public void addAdLease(RentAdLeaseDetails rentAdLeaseDetails) {
        this.baseMapper.addAdLease(rentAdLeaseDetails);
    }

    @Override
    public void setAdLease(RentAdLeaseDetails rentAdLeaseDetails) {
        this.baseMapper.setAdLease(rentAdLeaseDetails);
    }

    @Override
    public void deleteAdLease(Integer id) {
        this.baseMapper.deleteAdLease(id);
    }
}
