package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.RentAdPaidList;
import cn.stylefeng.guns.modular.system.dao.RentAdPaidListMapper;
import cn.stylefeng.guns.modular.system.service.IRentAdPaidListService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 广告位缴纳租期记录表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-17
 */
@Service
public class RentAdPaidListServiceImpl extends ServiceImpl<RentAdPaidListMapper, RentAdPaidList> implements IRentAdPaidListService {

    @Override
    public List<Map<String, Object>> getAdPaid(String condition1,String condition2, String beginTime, String endTime, Integer deptId) {
        return this.baseMapper.getAdPaid(condition1,condition2,beginTime,endTime,deptId);
    }

    @Override
    public void addAdPaid(RentAdPaidList rentAdPaidList) {
        this.baseMapper.addAdPaid(rentAdPaidList);
    }

    @Override
    public void setAdPaid(RentAdPaidList rentAdPaidList) {
        this.baseMapper.setAdPaid(rentAdPaidList);
    }

    @Override
    public void deleteAdPaid(Integer id) {
        this.baseMapper.deleteAdPaid(id);
    }
}
