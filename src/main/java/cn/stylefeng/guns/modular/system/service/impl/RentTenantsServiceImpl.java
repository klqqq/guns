package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.RentTenants;
import cn.stylefeng.guns.modular.system.dao.RentTenantsMapper;
import cn.stylefeng.guns.modular.system.service.IRentTenantsService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 租户基本信息表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-06
 */
@Service
public class RentTenantsServiceImpl extends ServiceImpl<RentTenantsMapper, RentTenants> implements IRentTenantsService {

    @Override
    public List<Map<String, Object>> getTenants(String condition, String beginTime, String endTime) {
        return this.baseMapper.getTenants(condition,beginTime,endTime);
    }

    @Override
    public void addTenants(RentTenants rentTenants) {
        this.baseMapper.addTenants(rentTenants);
    }

    @Override
    public void setTenants(RentTenants rentTenants) {
        this.baseMapper.setTenants(rentTenants);
    }

    @Override
    public Integer getIdByCardNumber(String cardNumber) {
        return this.baseMapper.getIdByCardNumber(cardNumber);
    }
}
