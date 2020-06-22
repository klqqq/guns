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
 * 广告位缴纳租期记录表
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-17
 */
@TableName("rent_ad_paid_list")
public class RentAdPaidList extends Model<RentAdPaidList> {

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
     * 缴费周期信息
     */
    @TableField("paid_cycle")
    private String paidCycle;
    /**
     * 应缴纳金额（元）
     */
    @TableField("price")
    private BigDecimal price;
    /**
     * 实缴纳金额（元）
     */
    @TableField("paid_price")
    private BigDecimal paidPrice;
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
     * 缴租期起始时间
     */
    @TableField("paid_start")
    private Date paidStart;
    /**
     * 缴租期终止时间
     */
    @TableField("paid_end")
    private Date paidEnd;
    /**
     * 凭证
     */
    @TableField("voucher")
    private String voucher;
    /**
     * 收据编号
     */
    @TableField("receipt")
    private String receipt;
    /**
     * 账户
     */
    @TableField("account")
    private String account;
    /**
     * 是否收齐：0未收齐，1已收齐
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

    public String getPaidCycle() {
        return paidCycle;
    }

    public void setPaidCycle(String paidCycle) {
        this.paidCycle = paidCycle;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getPaidPrice() {
        return paidPrice;
    }

    public void setPaidPrice(BigDecimal paidPrice) {
        this.paidPrice = paidPrice;
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

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "RentAdPaidList{" +
        ", id=" + id +
        ", tenantsId=" + tenantsId +
        ", bid=" + bid +
        ", fid=" + fid +
        ", adNumber=" + adNumber +
        ", adId=" + adId +
        ", paidCycle=" + paidCycle +
        ", price=" + price +
        ", paidPrice=" + paidPrice +
        ", memo=" + memo +
        ", createdAt=" + createdAt +
        ", userId=" + userId +
        ", paidStart=" + paidStart +
        ", paidEnd=" + paidEnd +
        ", voucher=" + voucher +
        ", receipt=" + receipt +
        ", account=" + account +
        ", flag=" + flag +
        "}";
    }
}
