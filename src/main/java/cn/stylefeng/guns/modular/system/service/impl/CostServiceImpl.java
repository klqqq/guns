package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.Cost;
import cn.stylefeng.guns.modular.system.dao.CostMapper;
import cn.stylefeng.guns.modular.system.service.ICostService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 支出表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-05-17
 */
@Service
public class CostServiceImpl extends ServiceImpl<CostMapper, Cost> implements ICostService {

    @Override
    public List<Map<String, Object>> getCost(String condition, String beginTime, String endTime) {
        return this.baseMapper.getCost(condition, beginTime, endTime);
    }

    @Override
    public void addCost(Cost cost) {
        this.baseMapper.addCost(cost);
    }

    @Override
    public void setCost(Cost cost) {
        this.baseMapper.setCost(cost);
    }
}
