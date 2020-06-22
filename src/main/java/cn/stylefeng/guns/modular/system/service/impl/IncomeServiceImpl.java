package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.Income;
import cn.stylefeng.guns.modular.system.dao.IncomeMapper;
import cn.stylefeng.guns.modular.system.service.IIncomeService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 收入表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-05-17
 */
@Service
public class IncomeServiceImpl extends ServiceImpl<IncomeMapper, Income> implements IIncomeService {

    @Override
    public List<Map<String, Object>> getIncome(String condition, String beginTime, String endTime) {
        return this.baseMapper.getIncome(condition, beginTime, endTime);
    }

    @Override
    public void addIncome(Income income) {
        this.baseMapper.addIncome(income);
    }

    @Override
    public void setIncome(Income income) {
        this.baseMapper.setIncome(income);
    }
}
