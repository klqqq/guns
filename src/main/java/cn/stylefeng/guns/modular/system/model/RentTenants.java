package cn.stylefeng.guns.modular.system.model;

import com.baomidou.mybatisplus.enums.IdType;
import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 租户基本信息表
 * </p>
 *
 * @author stylefeng
 * @since 2019-04-06
 */
@TableName("rent_tenants")
public class RentTenants extends Model<RentTenants> {

    private static final long serialVersionUID = 1L;

    /**
     * 租赁商户编号
     */
    @TableId(value = "tenants_id", type = IdType.AUTO)
    private Integer tenantsId;
    /**
     * 租赁商户姓名
     */
    private String name;
    /**
     * 性别：0女，1男
     */
    private Integer sex;
    /**
     * 手机号码
     */
    private String mobile;
    /**
     * 身份证号码
     */
    @TableField("card_number")
    private String cardNumber;
    /**
     * 联系地址
     */
    private String address;
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


    public Integer getTenantsId() {
        return tenantsId;
    }

    public void setTenantsId(Integer tenantsId) {
        this.tenantsId = tenantsId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    @Override
    protected Serializable pkVal() {
        return this.tenantsId;
    }

    @Override
    public String toString() {
        return "RentTenants{" +
        ", tenantsId=" + tenantsId +
        ", name=" + name +
        ", sex=" + sex +
        ", mobile=" + mobile +
        ", cardNumber=" + cardNumber +
        ", address=" + address +
        ", memo=" + memo +
        ", createdAt=" + createdAt +
        ", updatedAt=" + updatedAt +
        ", userId=" + userId +
        "}";
    }
}
