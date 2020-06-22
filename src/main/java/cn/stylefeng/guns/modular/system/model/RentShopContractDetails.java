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
 * 租户租赁商铺合同详情表
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-15
 */
@TableName("rent_shop_contract_details")
public class RentShopContractDetails extends Model<RentShopContractDetails> {

    private static final long serialVersionUID = 1L;

    /**
     * 合同ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 对应租赁商户ID
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
     * 商铺门牌号
     */
    @TableField("shops_number")
    private String shopsNumber;
    /**
     * 对应商铺ID
     */
    @TableField("shops_id")
    private Integer shopsId;
    /**
     * 押金，可选押3付6和押2付12
     */
    private Integer deposit;
    /**
     * 付款，可选押3付6和押2付12
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
     * 核定电费单价（元）
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
     * 证照押金（元）
     */
    @TableField("lisense_price")
    private BigDecimal lisensePrice;
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
     * 其他费用（元）
     */
    @TableField("other_price")
    private BigDecimal otherPrice;

    /**
     *核定水费单价
     */
    @TableField("water_price")
    private BigDecimal waterPrice;
    /**
     *工具费
     */
    @TableField("tool_price")
    private BigDecimal toolPrice;
    /**
     *退场电费
     */
    @TableField("exit_electricity")
    private BigDecimal exitElectricity;
    /**
     *退场水费
     */
    @TableField("exit_water")
    private BigDecimal exitWater;
    /**
     *广告位保证金
     */
    @TableField("ad_margin")
    private BigDecimal adMargin;
    /**
     *广告位租金
     */
    @TableField("ad_rent")
    private BigDecimal adRent;
    /**
     *生活垃圾费
     */
    @TableField("trash_price")
    private BigDecimal trashPrice;



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

    public String getShopsNumber() {
        return shopsNumber;
    }

    public void setShopsNumber(String shopsNumber) {
        this.shopsNumber = shopsNumber;
    }

    public Integer getShopsId() {
        return shopsId;
    }

    public void setShopsId(Integer shopsId) {
        this.shopsId = shopsId;
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

    public BigDecimal getLisensePrice() {
        return lisensePrice;
    }

    public void setLisensePrice(BigDecimal lisensePrice) {
        this.lisensePrice = lisensePrice;
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

    public BigDecimal getOtherPrice() {
        return otherPrice;
    }

    public void setOtherPrice(BigDecimal otherPrice) {
        this.otherPrice = otherPrice;
    }

    public BigDecimal getWaterPrice() {
        return waterPrice;
    }

    public void setWaterPrice(BigDecimal waterPrice) {
        this.waterPrice = waterPrice;
    }

    public BigDecimal getToolPrice() {
        return toolPrice;
    }

    public void setToolPrice(BigDecimal toolPrice) {
        this.toolPrice = toolPrice;
    }

    public BigDecimal getExitElectricity() {
        return exitElectricity;
    }

    public void setExitElectricity(BigDecimal exitElectricity) {
        this.exitElectricity = exitElectricity;
    }

    public BigDecimal getExitWater() {
        return exitWater;
    }

    public void setExitWater(BigDecimal exitWater) {
        this.exitWater = exitWater;
    }

    public BigDecimal getAdMargin() {
        return adMargin;
    }

    public void setAdMargin(BigDecimal adMargin) {
        this.adMargin = adMargin;
    }

    public BigDecimal getAdRent() {
        return adRent;
    }

    public void setAdRent(BigDecimal adRent) {
        this.adRent = adRent;
    }

    public BigDecimal getTrashPrice() {
        return trashPrice;
    }

    public void setTrashPrice(BigDecimal trashPrice) {
        this.trashPrice = trashPrice;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "RentShopContractDetails{" +
        ", id=" + id +
        ", tenantsId=" + tenantsId +
        ", cardNumber=" + cardNumber +
        ", bid=" + bid +
        ", fid=" + fid +
        ", shopsNumber=" + shopsNumber +
        ", shopsId=" + shopsId +
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
        ", lisensePrice=" + lisensePrice +
        ", beginedAt=" + beginedAt +
        ", endedAt=" + endedAt +
        ", contractPic=" + contractPic +
        ", leaseMemo=" + leaseMemo +
        ", userId=" + userId +
        ", flag=" + flag +
        ", fitmentPrice=" + fitmentPrice +
        ", garbagePrice=" + garbagePrice +
        ", platePrice=" + platePrice +
        ", popPrice=" + popPrice +
        ", offPrice=" + offPrice +
        ", otherPrice=" + otherPrice +
        ", waterPrice=" + waterPrice +
        ", toolPrice=" + toolPrice +
        ", exitElectricity=" + exitElectricity +
        ", exitWater=" + exitWater +
        ", adMargin=" + adMargin +
        ", adRent=" + adMargin +
        ", trashPrice=" + trashPrice +
        "}";
    }
}
