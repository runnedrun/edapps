module.exports = function(sequelize, DataTypes) {
    var Teacher = sequelize.define('Teacher', {
        username: DataTypes.STRING,
        name: DataTypes.STRING,
        passwordHash: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Teacher.hasMany(models.Student, {foreignKey: "TeacherId"})
            }
        }
    })

    return Teacher
}
