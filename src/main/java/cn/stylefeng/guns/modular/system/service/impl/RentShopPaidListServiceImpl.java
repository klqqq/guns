package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.RentShopPaidList;
import cn.stylefeng.guns.modular.system.dao.RentShopPaidListMapper;
import cn.stylefeng.guns.modular.system.service.IRentShopPaidListService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 商铺缴租期记录表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-17
 */
@Service
public class RentShopPaidListServiceImpl extends ServiceImpl<RentShopPaidListMapper, RentShopPaidList> implements IRentShopPaidListService {

    @Override
    public List<Map<String, Object>> getShopPaid(String condition1,String condition2,String condition3, String beginTime, String endTime, Integer deptId) {
        return this.baseMapper.getShopPaid(condition1,condition2,condition3,beginTime,endTime,deptId);
    }

    @Override
    public void addShopPaid(RentShopPaidList rentShopPaidList) {
        this.baseMapper.addShopPaid(rentShopPaidList);
    }

    @Override
    public void deleteShopPaid(Integer id) {
        this.baseMapper.deleteShopPaid(id);
    }

    @Override
    public void setShopPaid(RentShopPaidList rentShopPaidList) {
        this.baseMapper.setShopPaid(rentShopPaidList);
    }
}
