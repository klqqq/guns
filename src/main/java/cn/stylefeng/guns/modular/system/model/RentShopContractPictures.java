package cn.stylefeng.guns.modular.system.model;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 商铺合同照片表
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-23
 */
@TableName("rent_shop_contract_pictures")
public class RentShopContractPictures extends Model<RentShopContractPictures> {

    private static final long serialVersionUID = 1L;

    /**
     * 商铺合同ID
     */
    @TableId("shop_con_id")
    private Integer shopConId;
    /**
     * 照片名
     */
    @TableField("picture_url")
    private String pictureUrl;


    public Integer getShopConId() {
        return shopConId;
    }

    public void setShopConId(Integer shopConId) {
        this.shopConId = shopConId;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    @Override
    protected Serializable pkVal() {
        return this.shopConId;
    }

    @Override
    public String toString() {
        return "RentShopContractPictures{" +
        ", shopConId=" + shopConId +
        ", pictureUrl=" + pictureUrl +
        "}";
    }
}
