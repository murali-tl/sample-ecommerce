'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.belongsTo(models.product, {
        foreignKey: 'product_id',
        as: 'productInfo'
      });
    }
  }
  order.init({
    order_id: {
        type: DataTypes.STRING,
        primaryKey: true
      },
    user_id: DataTypes.UUID,
    product_details: DataTypes.JSON,
    amount: DataTypes.FLOAT,
    payment_status: DataTypes.STRING,
    order_status: DataTypes.STRING,
    shipping_type: DataTypes.STRING,
    address: DataTypes.JSON,
    delivery_status: DataTypes.STRING,
    estimated_delivery_date: DataTypes.DATE,
    delivered_at: DataTypes.DATE,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
    underscored:true,
    paranoid:true,
  });
  return order;
};