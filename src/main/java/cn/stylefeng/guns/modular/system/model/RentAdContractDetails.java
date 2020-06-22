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
 * 租户租赁广告位合同详情表
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-14
 */
@TableName("rent_ad_contract_details")
public class RentAdContractDetails extends Model<RentAdContractDetails> {

    private static final long serialVersionUID = 1L;

    /**
     * 合同ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 租赁商户ID
     */
    @TableField("tenants_id")
    private Integer tenantsId;
    /**
     * 身份证号
     */
    @TableField("card_number")
    private String cardNumber;
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
     * 押金：可选押3付6和押2付12
     */
    private Integer deposit;
    /**
     * 付款，可选押2付6和押2付12
     */
    private Integer payment;
    /**
     * 缴费周期
     */
    private Integer period;
    /**
     * 租赁状态：1新租，2续租
     */
    @TableField("rent_status")
    private Integer rentStatus;
    /**
     * 电费缴纳类型：1独立抄表，2核定用电量（xx元/月）
     */
    @TableField("electricity_type")
    private Integer electricityType;
    /**
     * 核定电费单价（xx元/月）
     */
    @TableField("electricity_price")
    private BigDecimal electricityPrice;
    /**
     * 合同租金（元）
     */
    @TableField("contract_fees")
    private BigDecimal contractFees;
    /**
     * 合同保证金（元）
     */
    @TableField("contract_margin")
    private BigDecimal contractMargin;
    /**
     * 物业保证金（元）
     */
    @TableField("property_margin")
    private BigDecimal propertyMargin;
    /**
     * 物业管理费（元）
     */
    @TableField("property_fees")
    private BigDecimal propertyFees;
    /**
     * 商业管理保证金（元）
     */
    @TableField("business_margin")
    private BigDecimal businessMargin;
    /**
     * 商业管理费（元）
     */
    @TableField("business_fees")
    private BigDecimal businessFees;
    /**
     * 水电保证金（元）
     */
    @TableField("water_margin")
    private BigDecimal waterMargin;
    /**
     * 合同开始时间
     */
    @TableField("begined_at")
    private Date beginedAt;
    /**
     * 合同到期时间
     */
    @TableField("ended_at")
    private Date endedAt;
    /**
     * 合同照片
     */
    @TableField("contract_pic")
    private String contractPic;
    /**
     * 备注信息
     */
    @TableField("lease_memo")
    private String leaseMemo;
    /**
     * 创建人ID
     */
    @TableField("user_id")
    private Integer userId;
    /**
     * 是否终止：0未终止，1已终止
     */
    @TableField("flag")
    private Integer flag;


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

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
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

    public Integer getPeriod() {
        return period;
    }

    public void setPeriod(Integer period) {
        this.period = period;
    }

    public Integer getRentStatus() {
        return rentStatus;
    }

    public void setRentStatus(Integer rentStatus) {
        this.rentStatus = rentStatus;
    }

    public Integer getElectricityType() {
        return electricityType;
    }

    public void setElectricityType(Integer electricityType) {
        this.electricityType = electricityType;
    }

    public BigDecimal getElectricityPrice() {
        return electricityPrice;
    }

    public void setElectricityPrice(BigDecimal electricityPrice) {
        this.electricityPrice = electricityPrice;
    }

    public BigDecimal getContractFees() {
        return contractFees;
    }

    public void setContractFees(BigDecimal contractFees) {
        this.contractFees = contractFees;
    }

    public BigDecimal getContractMargin() {
        return contractMargin;
    }

    public void setContractMargin(BigDecimal contractMargin) {
        this.contractMargin = contractMargin;
    }

    public BigDecimal getPropertyMargin() {
        return propertyMargin;
    }

    public void setPropertyMargin(BigDecimal propertyMargin) {
        this.propertyMargin = propertyMargin;
    }

    public BigDecimal getPropertyFees() {
        return propertyFees;
    }

    public void setPropertyFees(BigDecimal propertyFees) {
        this.propertyFees = propertyFees;
    }

    public BigDecimal getBusinessMargin() {
        return businessMargin;
    }

    public void setBusinessMargin(BigDecimal businessMargin) {
        this.businessMargin = businessMargin;
    }

    public BigDecimal getBusinessFees() {
        return businessFees;
    }

    public void setBusinessFees(BigDecimal businessFees) {
        this.businessFees = businessFees;
    }

    public BigDecimal getWaterMargin() {
        return waterMargin;
    }

    public void setWaterMargin(BigDecimal waterMargin) {
        this.waterMargin = waterMargin;
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

    public String getContractPic() {
        return contractPic;
    }

    public void setContractPic(String contractPic) {
        this.contractPic = contractPic;
    }

    public String getLeaseMemo() {
        return leaseMemo;
    }

    public void setLeaseMemo(String leaseMemo) {
        this.leaseMemo = leaseMemo;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getFlag() {
        return flag;
    }

    public void setFlag(Integer flag) {
        this.flag = flag;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "RentAdContractDetails{" +
        ", id=" + id +
        ", tenantsId=" + tenantsId +
        ", cardNumber=" + cardNumber +
        ", bid=" + bid +
        ", fid=" + fid +
        ", adNumber=" + adNumber +
        ", adId=" + adId +
        ", deposit=" + deposit +
        ", payment=" + payment +
        ", period=" + period +
        ", rentStatus=" + rentStatus +
        ", electricityType=" + electricityType +
        ", electricityPrice=" + electricityPrice +
        ", contractFees=" + contractFees +
        ", contractMargin=" + contractMargin +
        ", propertyMargin=" + propertyMargin +
        ", propertyFees=" + propertyFees +
        ", businessMargin=" + businessMargin +
        ", businessFees=" + businessFees +
        ", waterMargin=" + waterMargin +
        ", beginedAt=" + beginedAt +
        ", endedAt=" + endedAt +
        ", contractPic=" + contractPic +
        ", leaseMemo=" + leaseMemo +
        ", userId=" + userId +
        ", flag=" + flag +
        "}";
    }
}
