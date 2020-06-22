package cn.stylefeng.guns.modular.system.model;

import com.baomidou.mybatisplus.enums.IdType;
import java.math.BigDecimal;
import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 广告位变更事项记录表
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-16
 */
@TableName("rent_tenant_ad_change")
public class RentTenantAdChange extends Model<RentTenantAdChange> {

    private static final long serialVersionUID = 1L;

    /**
     * 记录ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 大楼ID
     */
    private Integer bid;
    /**
     * 楼层ID
     */
    private Integer fid;
    /**
     * 广告位编号
     */
    @TableField("ad_number")
    private String adNumber;
    /**
     * 广告位ID
     */
    @TableField("ad_id")
    private Integer adId;
    /**
     * 对应租赁商户ID
     */
    @TableField("tenants_id")
    private Integer tenantsId;
    /**
     * 变更事项ID
     */
    @TableField("options_id")
    private Integer optionsId;
    /**
     * 变更选项具体原因
     */
    @TableField("change_reason")
    private String changeReason;
    /**
     * 电表读数
     */
    @TableField("electric_meter")
    private Integer electricMeter;
    /**
     * 水表读数
     */
    @TableField("water_meter")
    private Integer waterMeter;
    /**
     * 缺勤未关灯次数
     */
    @TableField("off_times")
    private Integer offTimes;
    /**
     * 钥匙数量
     */
    private Integer votes;
    /**
     * 装修押金（元）
     */
    @TableField("fitment_price")
    private BigDecimal fitmentPrice;
    /**
     * 垃圾清运费（元）
     */
    @TableField("garbage_price")
    private BigDecimal garbagePrice;
    /**
     * 施工号牌费（元）
     */
    @TableField("plate_price")
    private BigDecimal platePrice;
    /**
     * 封场POP费（元）
     */
    @TableField("pop_price")
    private BigDecimal popPrice;
    /**
     * 缺勤未关灯罚款（元）
     */
    @TableField("off_price")
    private BigDecimal offPrice;
    /**
     * 证照押金（元）
     */
    @TableField("lisense_price")
    private BigDecimal lisensePrice;
    /**
     * 其他费用（元）
     */
    @TableField("other_price")
    private BigDecimal otherPrice;
    /**
     * 备注信息
     */
    private String memo;
    /**
     * 记录创建时间
     */
    @TableField("created_at")
    private Date createdAt;
    /**
     * 创建人ID
     */
    @TableField("user_id")
    private Integer userId;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getBid() {
        return bid;
    }

    public void setBid(Integer bid) {
        this.bid = bid;
    }

    public Integer getFid() {
        return fid;
    }

    public void setFid(Integer fid) {
        this.fid = fid;
    }

    public String getAdNumber() {
        return adNumber;
    }

    public void setAdNumber(String adNumber) {
        this.adNumber = adNumber;
    }

    public Integer getAdId() {
        return adId;
    }

    public void setAdId(Integer adId) {
        this.adId = adId;
    }

    public Integer getTenantsId() {
        return tenantsId;
    }

    public void setTenantsId(Integer tenantsId) {
        this.tenantsId = tenantsId;
    }

    public Integer getOptionsId() {
        return optionsId;
    }

    public void setOptionsId(Integer optionsId) {
        this.optionsId = optionsId;
    }

    public String getChangeReason() {
        return changeReason;
    }

    public void setChangeReason(String changeReason) {
        this.changeReason = changeReason;
    }

    public Integer getElectricMeter() {
        return electricMeter;
    }

    public void setElectricMeter(Integer electricMeter) {
        this.electricMeter = electricMeter;
    }

    public Integer getWaterMeter() {
        return waterMeter;
    }

    public void setWaterMeter(Integer waterMeter) {
        this.waterMeter = waterMeter;
    }

    public Integer getOffTimes() {
        return offTimes;
    }

    public void setOffTimes(Integer offTimes) {
        this.offTimes = offTimes;
    }

    public Integer getVotes() {
        return votes;
    }

    public void setVotes(Integer votes) {
        this.votes = votes;
    }

    public BigDecimal getFitmentPrice() {
        return fitmentPrice;
    }

    public void setFitmentPrice(BigDecimal fitmentPrice) {
        this.fitmentPrice = fitmentPrice;
    }

    public BigDecimal getGarbagePrice() {
        return garbagePrice;
    }

    public void setGarbagePrice(BigDecimal garbagePrice) {
        this.garbagePrice = garbagePrice;
    }

    public BigDecimal getPlatePrice() {
        return platePrice;
    }

    public void setPlatePrice(BigDecimal platePrice) {
        this.platePrice = platePrice;
    }

    public BigDecimal getPopPrice() {
        return popPrice;
    }

    public void setPopPrice(BigDecimal popPrice) {
        this.popPrice = popPrice;
    }

    public BigDecimal getOffPrice() {
        return offPrice;
    }

    public void setOffPrice(BigDecimal offPrice) {
        this.offPrice = offPrice;
    }

    public BigDecimal getLisensePrice() {
        return lisensePrice;
    }

    public void setLisensePrice(BigDecimal lisensePrice) {
        this.lisensePrice = lisensePrice;
    }

    public BigDecimal getOtherPrice() {
        return otherPrice;
    }

    public void setOtherPrice(BigDecimal otherPrice) {
        this.otherPrice = otherPrice;
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "RentTenantAdChange{" +
        ", id=" + id +
        ", bid=" + bid +
        ", fid=" + fid +
        ", adNumber=" + adNumber +
        ", adId=" + adId +
        ", tenantsId=" + tenantsId +
        ", optionsId=" + optionsId +
        ", changeReason=" + changeReason +
        ", electricMeter=" + electricMeter +
        ", waterMeter=" + waterMeter +
        ", offTimes=" + offTimes +
        ", votes=" + votes +
        ", fitmentPrice=" + fitmentPrice +
        ", garbagePrice=" + garbagePrice +
        ", platePrice=" + platePrice +
        ", popPrice=" + popPrice +
        ", offPrice=" + offPrice +
        ", lisensePrice=" + lisensePrice +
        ", otherPrice=" + otherPrice +
        ", memo=" + memo +
        ", createdAt=" + createdAt +
        ", userId=" + userId +
        "}";
    }
}
