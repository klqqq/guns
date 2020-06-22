package cn.stylefeng.guns.modular.system.model;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 广告位合同照片表
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-20
 */
@TableName("rent_ad_contract_pictures")
public class RentAdContractPictures extends Model<RentAdContractPictures> {

    private static final long serialVersionUID = 1L;

    /**
     * 广告位合同ID
     */
    @TableId("ad_con_id")
    private Integer adConId;
    /**
     * 照片名
     */
    @TableField("picture_url")
    private String pictureUrl;


    public Integer getAdConId() {
        return adConId;
    }

    public void setAdConId(Integer adConId) {
        this.adConId = adConId;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    @Override
    protected Serializable pkVal() {
        return this.adConId;
    }

    @Override
    public String toString() {
        return "RentAdContractPictures{" +
        ", adConId=" + adConId +
        ", pictureUrl=" + pictureUrl +
        "}";
    }
}
