package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.RentTenantShopChange;
import cn.stylefeng.guns.modular.system.dao.RentTenantShopChangeMapper;
import cn.stylefeng.guns.modular.system.service.IRentTenantShopChangeService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 商铺变更事项记录表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-16
 */
@Service
public class RentTenantShopChangeServiceImpl extends ServiceImpl<RentTenantShopChangeMapper, RentTenantShopChange> implements IRentTenantShopChangeService {

    @Override
    public List<Map<String, Object>> getShopChange(String condition1,String condition2,String condition3, String beginTime, String endTime, Integer deptId) {
        return this.baseMapper.getShopChange(condition1,condition2,condition3,beginTime,endTime,deptId);
    }

    @Override
    public void addShopChange(RentTenantShopChange rentTenantShopChange) {
        this.baseMapper.addShopChange(rentTenantShopChange);
    }

    @Override
    public void setShopChange(RentTenantShopChange rentTenantShopChange) {
        this.baseMapper.setShopChange(rentTenantShopChange);
    }

    @Override
    public List<Map<String, Object>> getMoney(String condition1, String condition2, String condition3, String beginTime, String endTime, Integer deptId) {
        return this.baseMapper.getMoney(condition1, condition2, condition3, beginTime, endTime, deptId);
    }
}
