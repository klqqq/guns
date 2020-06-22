package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.RentTenantSelections;
import cn.stylefeng.guns.modular.system.dao.RentTenantSelectionsMapper;
import cn.stylefeng.guns.modular.system.service.IRentTenantSelectionsService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 变更事项选项表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-07
 */
@Service
public class RentTenantSelectionsServiceImpl extends ServiceImpl<RentTenantSelectionsMapper, RentTenantSelections> implements IRentTenantSelectionsService {

    @Override
    public List<Map<String, Object>> getOptions(String condition, String beginTime, String endTime) {
        return this.baseMapper.getOptions(condition,beginTime,endTime);
    }
}
