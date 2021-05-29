'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('questionaire', {
      id: {
        type: Sequelize.INTEGER,

        primaryKey: true,
        autoIncrement: true,
      },
      question: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      is_first: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    })
    await queryInterface.createTable('choice', {
      id: {
        type: Sequelize.INTEGER,

        primaryKey: true,
        autoIncrement: true,
      },
      choices: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      is_prompt: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      questionaire_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'questionaire',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      next_question_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'questionaire',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    })
    await queryInterface.createTable('result', {
      id: {
        type: Sequelize.INTEGER,

        primaryKey: true,
        autoIncrement: true,
      },
      lastAnswer: {
        type: Sequelize.STRING(100),
        allowNull: false
      }
    })
    await queryInterface.createTable('answer', {
      id: {
        type: Sequelize.INTEGER,

        primaryKey: true,
        autoIncrement: true,
      },
      user_prompt: {
        type: Sequelize.STRING(500)
      },
      choice_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'choice',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      questionaire_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'questionaire',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      result_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'result',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('answer');
    await queryInterface.dropTable('result');
    await queryInterface.dropTable('choice');
    await queryInterface.dropTable('questionaire');



  }
};
