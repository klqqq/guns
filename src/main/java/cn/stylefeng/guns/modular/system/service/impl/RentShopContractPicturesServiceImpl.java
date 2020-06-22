package cn.stylefeng.guns.modular.system.service.impl;

import cn.stylefeng.guns.modular.system.model.RentShopContractPictures;
import cn.stylefeng.guns.modular.system.dao.RentShopContractPicturesMapper;
import cn.stylefeng.guns.modular.system.service.IRentShopContractPicturesService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 商铺合同照片表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-23
 */
@Service
public class RentShopContractPicturesServiceImpl extends ServiceImpl<RentShopContractPicturesMapper, RentShopContractPictures> implements IRentShopContractPicturesService {

    @Override
    public List<Map<String, Object>> getUrl(Integer shopConId) {
        return this.baseMapper.getUrl(shopConId);
    }

    @Override
    public void addUrl(RentShopContractPictures rentShopContractPictures) {
        this.baseMapper.addUrl(rentShopContractPictures);
    }

    @Override
    public void deleteUrl(Integer shopConId, String pictureUrl) {
        this.baseMapper.deleteUrl(shopConId,pictureUrl);
    }
}
