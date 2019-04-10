module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define("Pet", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        adopted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return Pet;
}