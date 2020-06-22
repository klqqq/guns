package cn.stylefeng.guns.modular.system.model;

import java.math.BigDecimal;
import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 商铺分布表
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-06
 */
@TableName("rent_shops")
public class RentShops extends Model<RentShops> {

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
     * 商铺ID
     */
    @TableField("shops_id")
    private Integer shopsId;
    /**
     * 商铺名称
     */
    @TableField("shops_name")
    private String shopsName;
    /**
     * 商铺门牌号
     */
    @TableField("shops_number")
    private String shopsNumber;
    /**
     * 商铺面积
     */
    @TableField("shops_area")
    private BigDecimal shopsArea;
    /**
     * 商铺业态类型
     */
    @TableField("business_type")
    private String businessType;
    /**
     * 具体地址
     */
    private String address;
    /**
     * 合同租金（元）
     */
    @TableField("contract_fees")
    private BigDecimal contractFees;
    /**
     * 物业管理费（元）
     */
    @TableField("property_fees")
    private BigDecimal propertyFees;
    /**
     * 商业管理费（元）
     */
    @TableField("business_fees")
    private BigDecimal businessFees;
    /**
     * 商铺预算月租金
     */
    @TableField("monthly_rent")
    private BigDecimal monthlyRent;
    /**
     * 实际总租金
     */
    @TableField("paid_rent")
    private BigDecimal paidRent;
    /**
     * 租赁状态：1未出租，2已出租
     */
    @TableField("lease_status")
    private Integer leaseStatus;
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

    public Integer getShopsId() {
        return shopsId;
    }

    public void setShopsId(Integer shopsId) {
        this.shopsId = shopsId;
    }

    public String getShopsName() {
        return shopsName;
    }

    public void setShopsName(String shopsName) {
        this.shopsName = shopsName;
    }

    public String getShopsNumber() {
        return shopsNumber;
    }

    public void setShopsNumber(String shopsNumber) {
        this.shopsNumber = shopsNumber;
    }

    public BigDecimal getShopsArea() {
        return shopsArea;
    }

    public void setShopsArea(BigDecimal shopsArea) {
        this.shopsArea = shopsArea;
    }

    public String getBusinessType() {
        return businessType;
    }

    public void setBusinessType(String businessType) {
        this.businessType = businessType;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public BigDecimal getContractFees() {
        return contractFees;
    }

    public void setContractFees(BigDecimal contractFees) {
        this.contractFees = contractFees;
    }

    public BigDecimal getPropertyFees() {
        return propertyFees;
    }

    public void setPropertyFees(BigDecimal propertyFees) {
        this.propertyFees = propertyFees;
    }

    public BigDecimal getBusinessFees() {
        return businessFees;
    }

    public void setBusinessFees(BigDecimal businessFees) {
        this.businessFees = businessFees;
    }

    public BigDecimal getMonthlyRent() {
        return monthlyRent;
    }

    public void setMonthlyRent(BigDecimal monthlyRent) {
        this.monthlyRent = monthlyRent;
    }

    public BigDecimal getPaidRent() {
        return paidRent;
    }

    public void setPaidRent(BigDecimal paidRent) {
        this.paidRent = paidRent;
    }

    public Integer getLeaseStatus() {
        return leaseStatus;
    }

    public void setLeaseStatus(Integer leaseStatus) {
        this.leaseStatus = leaseStatus;
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
        return "RentShops{" +
        ", bid=" + bid +
        ", fid=" + fid +
        ", shopsId=" + shopsId +
        ", shopsName=" + shopsName +
        ", shopsNumber=" + shopsNumber +
        ", shopsArea=" + shopsArea +
        ", businessType=" + businessType +
        ", address=" + address +
        ", contractFees=" + contractFees +
        ", propertyFees=" + propertyFees +
        ", businessFees=" + businessFees +
        ", monthlyRent=" + monthlyRent +
        ", paidRent=" + paidRent +
        ", leaseStatus=" + leaseStatus +
        ", memo=" + memo +
        ", createdAt=" + createdAt +
        ", updatedAt=" + updatedAt +
        ", userId=" + userId +
        ", manageId=" + manageId +
        "}";
    }
}
