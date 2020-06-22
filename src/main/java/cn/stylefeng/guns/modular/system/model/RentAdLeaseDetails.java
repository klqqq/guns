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
 * 广告位租赁记录表
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-17
 */
@TableName("rent_ad_lease_details")
public class RentAdLeaseDetails extends Model<RentAdLeaseDetails> {

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
     * 租赁商户ID
     */
    @TableField("tenants_id")
    private Integer tenantsId;
    /**
     * 广告位实交月租金
     */
    @TableField("real_rent")
    private BigDecimal realRent;
    /**
     * 广告位实交保证金
     */
    @TableField("real_margin")
    private BigDecimal realMargin;
    /**
     * 广告位实交电费单价
     */
    @TableField("real_electricity")
    private BigDecimal realElectricity;
    /**
     * 押金，可选押3付6和押2付12
     */
    private Integer deposit;
    /**
     * 付款，可选押3付6和押2付12
     */
    private Integer payment;
    /**
     * 广告位起始时间
     */
    @TableField("begined_at")
    private Date beginedAt;
    /**
     * 广告位到期时间
     */
    @TableField("ended_at")
    private Date endedAt;
    /**
     * 备注信息
     */
    @TableField("lease_memo")
    private String leaseMemo;
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

    public BigDecimal getRealRent() {
        return realRent;
    }

    public void setRealRent(BigDecimal realRent) {
        this.realRent = realRent;
    }

    public BigDecimal getRealMargin() {
        return realMargin;
    }

    public void setRealMargin(BigDecimal realMargin) {
        this.realMargin = realMargin;
    }

    public BigDecimal getRealElectricity() {
        return realElectricity;
    }

    public void setRealElectricity(BigDecimal realElectricity) {
        this.realElectricity = realElectricity;
    }

    public Integer getDeposit() {
        return deposit;
    }

    public void setDeposit(Integer deposit) {
        this.deposit = deposit;
    }

    public Integer getPayment() {
        return payment;
    }

    public void setPayment(Integer payment) {
        this.payment = payment;
    }

    public Date getBeginedAt() {
        return beginedAt;
    }

    public void setBeginedAt(Date beginedAt) {
        this.beginedAt = beginedAt;
    }

    public Date getEndedAt() {
        return endedAt;
    }

    public void setEndedAt(Date endedAt) {
        this.endedAt = endedAt;
    }

    public String getLeaseMemo() {
        return leaseMemo;
    }

    public void setLeaseMemo(String leaseMemo) {
        this.leaseMemo = leaseMemo;
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

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "RentAdLeaseDetails{" +
        ", id=" + id +
        ", bid=" + bid +
        ", fid=" + fid +
        ", adNumber=" + adNumber +
        ", adId=" + adId +
        ", tenantsId=" + tenantsId +
        ", realRent=" + realRent +
        ", realMargin=" + realMargin +
        ", realElectricity=" + realElectricity +
        ", deposit=" + deposit +
        ", payment=" + payment +
        ", beginedAt=" + beginedAt +
        ", endedAt=" + endedAt +
        ", leaseMemo=" + leaseMemo +
        ", createdAt=" + createdAt +
        ", updatedAt=" + updatedAt +
        ", userId=" + userId +
        "}";
    }
}
