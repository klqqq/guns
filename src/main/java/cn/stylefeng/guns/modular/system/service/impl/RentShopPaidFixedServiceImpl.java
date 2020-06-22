package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.RentShopPaidFixed;
import cn.stylefeng.guns.modular.system.dao.RentShopPaidFixedMapper;
import cn.stylefeng.guns.modular.system.service.IRentShopPaidFixedService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 商铺固定费用缴纳租期记录表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-22
 */
@Service
public class RentShopPaidFixedServiceImpl extends ServiceImpl<RentShopPaidFixedMapper, RentShopPaidFixed> implements IRentShopPaidFixedService {

    @Override
    public List<Map<String, Object>> getShopFixed(String condition1,String condition2,String condition3, String beginTime, String endTime, Integer deptId) {
        return this.baseMapper.getShopFixed(condition1,condition2,condition3,beginTime,endTime,deptId);
    }

    @Override
    public void deleteShopFixed(Integer id) {
        this.baseMapper.deleteShopFixed(id);
    }

    @Override
    public void addShopFixed(RentShopPaidFixed rentShopPaidFixed) {
        this.baseMapper.addShopFixed(rentShopPaidFixed);
    }

    @Override
    public void setShopFixed(RentShopPaidFixed rentShopPaidFixed) {
        this.baseMapper.setShopFixed(rentShopPaidFixed);
    }

    @Override
    public List<Map<String, Object>> getMoney(String condition1, String condition2, String condition3, String beginTime, String endTime, Integer deptId) {
        return this.baseMapper.getMoney(condition1, condition2, condition3, beginTime, endTime, deptId);
    }

    @Override
    public List<Map<String, Object>> getTotal(String condition1, String condition2, String condition3, String beginTime, String endTime, Integer deptId) {
        return this.baseMapper.getTotal(condition1, condition2, condition3, beginTime, endTime, deptId);
    }


}
