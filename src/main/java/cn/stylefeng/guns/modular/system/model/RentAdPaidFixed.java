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
 * 广告位固定费用缴纳租期记录表
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-21
 */
@TableName("rent_ad_paid_fixed")
public class RentAdPaidFixed extends Model<RentAdPaidFixed> {

    private static final long serialVersionUID = 1L;

    /**
     * 记录ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 租赁商户ID
     */
    @TableField("tenants_id")
    private Integer tenantsId;
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
     * 备注信息
     */
    private String memo;
    /**
     * 信息创建时间
     */
    @TableField("created_at")
    private Date createdAt;
    /**
     * 创建人ID
     */
    @TableField("user_id")
    private Integer userId;
    /**
     * 缴租期开始时间
     */
    @TableField("paid_start")
    private Date paidStart;
    /**
     * 缴租期结束时间
     */
    @TableField("paid_end")
    private Date paidEnd;
    /**
     * 凭证
     */
    private String voucher;
    /**
     * 收据编号
     */
    private String receipt;
    /**
     * 账户
     */
    private String account;
    /**
     * 是否收齐：0未收齐，1已收齐
     */
    private Integer flag;
    /**
     * 应缴合同租金（元）
     */
    @TableField("contract_fees")
    private BigDecimal contractFees;
    /**
     * 实缴合同租金（元）
     */
    @TableField("contract_fees_paid")
    private BigDecimal contractFeesPaid;
    /**
     * 应缴合同保证金（元）
     */
    @TableField("contract_margin")
    private BigDecimal contractMargin;
    /**
     * 实缴合同保证金（元）
     */
    @TableField("contract_margin_paid")
    private BigDecimal contractMarginPaid;
    /**
     * 应缴物业保证金（元）
     */
    @TableField("property_margin")
    private BigDecimal propertyMargin;
    /**
     * 实缴物业保证金（元）
     */
    @TableField("property_margin_paid")
    private BigDecimal propertyMarginPaid;
    /**
     * 应缴物业管理费（元）
     */
    @TableField("property_fees")
    private BigDecimal propertyFees;
    /**
     * 实缴物业管理费（元）
     */
    @TableField("property_fees_paid")
    private BigDecimal propertyFeesPaid;
    /**
     * 应缴商业管理保证金（元）
     */
    @TableField("business_margin")
    private BigDecimal businessMargin;
    /**
     * 实缴商业管理保证金（元）
     */
    @TableField("business_margin_paid")
    private BigDecimal businessMarginPaid;
    /**
     * 应缴商业管理费（元）
     */
    @TableField("business_fees")
    private BigDecimal businessFees;
    /**
     * 实缴商业管理费（元）
     */
    @TableField("business_fees_paid")
    private BigDecimal businessFeesPaid;
    /**
     * 应缴水电保证金（元）
     */
    @TableField("water_margin")
    private BigDecimal waterMargin;
    /**
     * 实缴水电保证金（元）
     */
    @TableField("water_margin_paid")
    private BigDecimal waterMarginPaid;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getTenantsId() {
        return tenantsId;
    }

    public void setTenantsId(Integer tenantsId) {
        this.tenantsId = tenantsId;
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

    public Date getPaidStart() {
        return paidStart;
    }

    public void setPaidStart(Date paidStart) {
        this.paidStart = paidStart;
    }

    public Date getPaidEnd() {
        return paidEnd;
    }

    public void setPaidEnd(Date paidEnd) {
        this.paidEnd = paidEnd;
    }

    public String getVoucher() {
        return voucher;
    }

    public void setVoucher(String voucher) {
        this.voucher = voucher;
    }

    public String getReceipt() {
        return receipt;
    }

    public void setReceipt(String receipt) {
        this.receipt = receipt;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public Integer getFlag() {
        return flag;
    }

    public void setFlag(Integer flag) {
        this.flag = flag;
    }

    public BigDecimal getContractFees() {
        return contractFees;
    }

    public void setContractFees(BigDecimal contractFees) {
        this.contractFees = contractFees;
    }

    public BigDecimal getContractFeesPaid() {
        return contractFeesPaid;
    }

    public void setContractFeesPaid(BigDecimal contractFeesPaid) {
        this.contractFeesPaid = contractFeesPaid;
    }

    public BigDecimal getContractMargin() {
        return contractMargin;
    }

    public void setContractMargin(BigDecimal contractMargin) {
        this.contractMargin = contractMargin;
    }

    public BigDecimal getContractMarginPaid() {
        return contractMarginPaid;
    }

    public void setContractMarginPaid(BigDecimal contractMarginPaid) {
        this.contractMarginPaid = contractMarginPaid;
    }

    public BigDecimal getPropertyMargin() {
        return propertyMargin;
    }

    public void setPropertyMargin(BigDecimal propertyMargin) {
        this.propertyMargin = propertyMargin;
    }

    public BigDecimal getPropertyMarginPaid() {
        return propertyMarginPaid;
    }

    public void setPropertyMarginPaid(BigDecimal propertyMarginPaid) {
        this.propertyMarginPaid = propertyMarginPaid;
    }

    public BigDecimal getPropertyFees() {
        return propertyFees;
    }

    public void setPropertyFees(BigDecimal propertyFees) {
        this.propertyFees = propertyFees;
    }

    public BigDecimal getPropertyFeesPaid() {
        return propertyFeesPaid;
    }

    public void setPropertyFeesPaid(BigDecimal propertyFeesPaid) {
        this.propertyFeesPaid = propertyFeesPaid;
    }

    public BigDecimal getBusinessMargin() {
        return businessMargin;
    }

    public void setBusinessMargin(BigDecimal businessMargin) {
        this.businessMargin = businessMargin;
    }

    public BigDecimal getBusinessMarginPaid() {
        return businessMarginPaid;
    }

    public void setBusinessMarginPaid(BigDecimal businessMarginPaid) {
        this.businessMarginPaid = businessMarginPaid;
    }

    public BigDecimal getBusinessFees() {
        return businessFees;
    }

    public void setBusinessFees(BigDecimal businessFees) {
        this.businessFees = businessFees;
    }

    public BigDecimal getBusinessFeesPaid() {
        return businessFeesPaid;
    }

    public void setBusinessFeesPaid(BigDecimal businessFeesPaid) {
        this.businessFeesPaid = businessFeesPaid;
    }

    public BigDecimal getWaterMargin() {
        return waterMargin;
    }

    public void setWaterMargin(BigDecimal waterMargin) {
        this.waterMargin = waterMargin;
    }

    public BigDecimal getWaterMarginPaid() {
        return waterMarginPaid;
    }

    public void setWaterMarginPaid(BigDecimal waterMarginPaid) {
        this.waterMarginPaid = waterMarginPaid;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "RentAdPaidFixed{" +
        ", id=" + id +
        ", tenantsId=" + tenantsId +
        ", bid=" + bid +
        ", fid=" + fid +
        ", adNumber=" + adNumber +
        ", adId=" + adId +
        ", memo=" + memo +
        ", createdAt=" + createdAt +
        ", userId=" + userId +
        ", paidStart=" + paidStart +
        ", paidEnd=" + paidEnd +
        ", voucher=" + voucher +
        ", receipt=" + receipt +
        ", account=" + account +
        ", flag=" + flag +
        ", contractFees=" + contractFees +
        ", contractFeesPaid=" + contractFeesPaid +
        ", contractMargin=" + contractMargin +
        ", contractMarginPaid=" + contractMarginPaid +
        ", propertyMargin=" + propertyMargin +
        ", propertyMarginPaid=" + propertyMarginPaid +
        ", propertyFees=" + propertyFees +
        ", propertyFeesPaid=" + propertyFeesPaid +
        ", businessMargin=" + businessMargin +
        ", businessMarginPaid=" + businessMarginPaid +
        ", businessFees=" + businessFees +
        ", businessFeesPaid=" + businessFeesPaid +
        ", waterMargin=" + waterMargin +
        ", waterMarginPaid=" + waterMarginPaid +
        "}";
    }
}
