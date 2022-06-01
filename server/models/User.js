module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("users", {
        id: {
            type:DataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement : true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
          type: DataTypes.STRING,
          allowNull:false,
          
      },
        phonenumber: {
            type: DataTypes.STRING,
        },
    })

    return User

}