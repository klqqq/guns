package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.RentAdPaidFixed;
import cn.stylefeng.guns.modular.system.dao.RentAdPaidFixedMapper;
import cn.stylefeng.guns.modular.system.service.IRentAdPaidFixedService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 广告位固定费用缴纳租期记录表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-21
 */
@Service
public class RentAdPaidFixedServiceImpl extends ServiceImpl<RentAdPaidFixedMapper, RentAdPaidFixed> implements IRentAdPaidFixedService {

    @Override
    public List<Map<String, Object>> getAdFixed(String condition1,String condition2, String beginTime, String endTime, Integer deptId) {
        return this.baseMapper.getAdFixed(condition1,condition2,beginTime,endTime,deptId);
    }

    @Override
    public void deleteAdFixed(Integer id) {
        this.baseMapper.deleteAdFixed(id);
    }

    @Override
    public void addAdFixed(RentAdPaidFixed rentAdPaidFixed) {
        this.baseMapper.addAdFixed(rentAdPaidFixed);
    }

    @Override
    public void setAdFixed(RentAdPaidFixed rentAdPaidFixed) {
        this.baseMapper.setAdFixed(rentAdPaidFixed);
    }
}
