package cn.stylefeng.guns.modular.system.model;

import java.math.BigDecimal;
import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 广告位详情表
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-05
 */
@TableName("rent_ad_bit")
public class RentAdBit extends Model<RentAdBit> {

    private static final long serialVersionUID = 1L;

    /**
     * 大楼ID
     */
    private Integer bid;
    /**
     * 楼层ID
     */
    private Integer fid;
    /**
     * 广告位ID
     */
    @TableField("ad_id")
    private Integer adId;
    /**
     * 广告位编号
     */
    @TableField("ad_number")
    private String adNumber;
    /**
     * 广告位名称
     */
    @TableField("ad_name")
    private String adName;
    /**
     * 广告位预计面积（m^2）
     */
    @TableField("ad_area")
    private BigDecimal adArea;
    /**
     * 广告位地址
     */
    private String address;
    /**
     * 广告位状态：1未出租，2已出租
     */
    @TableField("lease_status")
    private Integer leaseStatus;
    /**
     * 广告位预算月租金
     */
    @TableField("ad_rent")
    private BigDecimal adRent;
    /**
     * 广告位核定保证金
     */
    @TableField("ad_margin")
    private BigDecimal adMargin;
    /**
     * 广告位核定电费单价
     */
    @TableField("ad_electricity")
    private BigDecimal adElectricity;
    /**
     * 备注信息
     */
    @TableField("ad_memo")
    private String adMemo;
    /**
     * 信息创建时间
     */
    @TableField("created_at")
    private Date createdAt;
    /**
     * 信息更新时间
     */
    @TableField("updated_at")
    private Date updatedAt;
    /**
     * 创建人ID
     */
    @TableField("user_id")
    private Integer userId;
    /**
     * 管理人ID
     */
    @TableField("manage_id")
    private Integer manageId;



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

    public Integer getAdId() {
        return adId;
    }

    public void setAdId(Integer adId) {
        this.adId = adId;
    }

    public String getAdNumber() {
        return adNumber;
    }

    public void setAdNumber(String adNumber) {
        this.adNumber = adNumber;
    }

    public String getAdName() {
        return adName;
    }

    public void setAdName(String adName) {
        this.adName = adName;
    }

    public BigDecimal getAdArea() {
        return adArea;
    }

    public void setAdArea(BigDecimal adArea) {
        this.adArea = adArea;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getLeaseStatus() {
        return leaseStatus;
    }

    public void setLeaseStatus(Integer leaseStatus) {
        this.leaseStatus = leaseStatus;
    }

    public BigDecimal getAdRent() {
        return adRent;
    }

    public void setAdRent(BigDecimal adRent) {
        this.adRent = adRent;
    }

    public BigDecimal getAdMargin() {
        return adMargin;
    }

    public void setAdMargin(BigDecimal adMargin) {
        this.adMargin = adMargin;
    }

    public BigDecimal getAdElectricity() {
        return adElectricity;
    }

    public void setAdElectricity(BigDecimal adElectricity) {
        this.adElectricity = adElectricity;
    }

    public String getAdMemo() {
        return adMemo;
    }

    public void setAdMemo(String adMemo) {
        this.adMemo = adMemo;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getManageId() {
        return manageId;
    }

    public void setManageId(Integer manageId) {
        this.manageId = manageId;
    }

    @Override
    protected Serializable pkVal() {
        return this.bid;
    }

    @Override
    public String toString() {
        return "RentAdBit{" +
        ", bid=" + bid +
        ", fid=" + fid +
        ", adId=" + adId +
        ", adNumber=" + adNumber +
        ", adName=" + adName +
        ", adArea=" + adArea +
        ", address=" + address +
        ", leaseStatus=" + leaseStatus +
        ", adRent=" + adRent +
        ", adMargin=" + adMargin +
        ", adElectricity=" + adElectricity +
        ", adMemo=" + adMemo +
        ", createdAt=" + createdAt +
        ", updatedAt=" + updatedAt +
        ", userId=" + userId +
        ", manageId=" + manageId +
        "}";
    }
}
