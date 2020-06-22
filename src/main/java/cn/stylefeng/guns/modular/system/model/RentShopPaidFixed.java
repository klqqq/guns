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
 * 商铺固定费用缴纳租期记录表
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-22
 */
@TableName("rent_shop_paid_fixed")
public class RentShopPaidFixed extends Model<RentShopPaidFixed> {

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
     * 商铺门牌号
     */
    @TableField("shops_number")
    private String shopsNumber;
    /**
     * 商铺ID
     */
    @TableField("shops_id")
    private Integer shopsId;
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
     * 应缴合同保证金（元）
     */
    @TableField("contract_margin")
    private BigDecimal contractMargin;
    /**
     * 应缴物业保证金（元）
     */
    @TableField("property_margin")
    private BigDecimal propertyMargin;
    /**
     * 应缴物业管理费（元）
     */
    @TableField("property_fees")
    private BigDecimal propertyFees;
    /**
     * 应缴商业管理保证金（元）
     */
    @TableField("business_margin")
    private BigDecimal businessMargin;
    /**
     * 应缴商业管理费（元）
     */
    @TableField("business_fees")
    private BigDecimal businessFees;
    /**
     * 应缴水电保证金（元）
     */
    @TableField("water_margin")
    private BigDecimal waterMargin;
    /**
     * 应缴证照押金（元）
     */
    @TableField("lisense_price")
    private BigDecimal lisensePrice;

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
    /**
     *应缴合计
     */
    @TableField("money_paid")
    private BigDecimal moneyPaid;



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

    public BigDecimal getMoneyPaid() {
        return moneyPaid;
    }

    public void setMoneyPaid(BigDecimal moneyPaid) {
        this.moneyPaid = moneyPaid;
    }


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "RentShopPaidFixed{" +
        ", id=" + id +
        ", tenantsId=" + tenantsId +
        ", bid=" + bid +
        ", fid=" + fid +
        ", shopsNumber=" + shopsNumber +
        ", shopsId=" + shopsId +
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
        ", contractMargin=" + contractMargin +
        ", propertyMargin=" + propertyMargin +
        ", propertyFees=" + propertyFees +
        ", businessMargin=" + businessMargin +
        ", businessFees=" + businessFees +
        ", waterMargin=" + waterMargin +
        ", lisensePrice=" + lisensePrice +
        ", fitmentPrice=" + fitmentPrice +
        ", garbagePrice=" + garbagePrice +
        ", platePrice=" + platePrice +
        ", popPrice=" + popPrice +
        ", offPrice=" + offPrice +
        ", otherPrice=" + otherPrice +
        ", toolPrice=" + toolPrice +
        ", exitElectricity=" + exitElectricity +
        ", exitWater=" + exitWater +
        ", adMargin=" + adMargin +
        ", adRent=" + adMargin +
        ", trashPrice=" + trashPrice +
        ", moneyPaid=" + moneyPaid +

        "}";
    }
}
