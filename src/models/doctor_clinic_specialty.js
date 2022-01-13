'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DoctorClinicSpecialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DoctorClinicSpecialty.init(
    {
      doctorID: DataTypes.UUID,
      clinicID: DataTypes.UUID,
      specialtyID: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'DoctorClinicSpecialty',
    }
  );
  return DoctorClinicSpecialty;
};
