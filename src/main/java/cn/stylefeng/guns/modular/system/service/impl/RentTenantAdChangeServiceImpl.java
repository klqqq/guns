package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.RentTenantAdChange;
import cn.stylefeng.guns.modular.system.dao.RentTenantAdChangeMapper;
import cn.stylefeng.guns.modular.system.service.IRentTenantAdChangeService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 广告位变更事项记录表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-16
 */
@Service
public class RentTenantAdChangeServiceImpl extends ServiceImpl<RentTenantAdChangeMapper, RentTenantAdChange> implements IRentTenantAdChangeService {

    @Override
    public List<Map<String, Object>> getAdChange(String condition1,String condition2, String beginTime, String endTime,Integer deptId) {
        return this.baseMapper.getAdChange(condition1,condition2,beginTime,endTime,deptId);
    }

    @Override
    public void addAdChange(RentTenantAdChange rentTenantAdChange) {
        this.baseMapper.addAdChange(rentTenantAdChange);
    }

    @Override
    public void setAdChange(RentTenantAdChange rentTenantAdChange) {
        this.baseMapper.setAdChange(rentTenantAdChange);
    }


}
