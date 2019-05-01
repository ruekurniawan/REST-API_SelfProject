'use strict';
const op = require('sequelize').Op
const { hash } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter your First Name'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter your Last Name'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter your email'
        },
        isEmail: true,
        validationEmail(email) {
          if(!/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email)) {
            throw new Error ('Email Format is Invalid')
          }
        },
        isUnique(value) {
          try {
            return User.findOne({
              where: { 
                email: value,
                id: {
                  [op.ne]: this.id
                }
              }
            })
            .then(newData => {
              if(newData !== null) {
                throw new Error('Email has been used')
              }
            })
          } catch (error) {
            console.log(error)
          }
        }
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter your Password'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'User'
    }
  }, 
  {
    timestamps: false,
    hooks: {
      beforeCreate(instance) {
        instance.password = hash(instance.password)
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};