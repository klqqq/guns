package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.RentAdContractPictures;
import cn.stylefeng.guns.modular.system.dao.RentAdContractPicturesMapper;
import cn.stylefeng.guns.modular.system.service.IRentAdContractPicturesService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 广告位合同照片表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-20
 */
@Service
public class RentAdContractPicturesServiceImpl extends ServiceImpl<RentAdContractPicturesMapper, RentAdContractPictures> implements IRentAdContractPicturesService {

    @Override
    public List<Map<String, Object>> getUrl(Integer adConId) {
        return this.baseMapper.getUrl(adConId);
    }

    @Override
    public void addUrl(RentAdContractPictures rentAdContractPictures) {
        this.baseMapper.addUrl(rentAdContractPictures);
    }

    @Override
    public void deleteUrl(Integer adConId, String pictureUrl) {
        this.baseMapper.deleteUrl(adConId,pictureUrl);
    }
}
