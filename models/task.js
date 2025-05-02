export default (sequelize, DataTypes) => {
  const Task = sequelize.define(
      'Task',
      {
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: DataTypes.TEXT,
        priority: {
          // eslint-disable-next-line new-cap
          type: DataTypes.ENUM('low', 'medium', 'high'),
          allowNull: false,
        },
        dueDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        status: {
          // eslint-disable-next-line new-cap
          type: DataTypes.ENUM('pending', 'completed'),
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Users',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      {
        tableName: 'Tasks',
        timestamps: true,
        paranoid: true,
      },
  );

  return Task;
};
