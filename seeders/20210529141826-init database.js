'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const questionaire = [{
      question: 'วันนี้เป็นยังไงบ้าง',
      is_first: true
    },
    {
      question: 'คุณกําลังรู้สึกเศร้าหรือเครียดอยู่ใช่ไหม',
      is_first: false
    }, {
      question: 'คุณอยากมาลดความเศร้ากับน้องหมีไหม',
      is_first: false
    }, {
      question: 'คุณกําลังรู้สึกเศร้าหรือเครียดเรื่องอะไรอยู่ ',
      is_first: false
    }, {
      question: 'ตอนนี้ปัญหาเรื่องการเงินของคุณกระทบต่อจิตใจคุณแค่ไหน',
      is_first: false
    }, {
      question: 'หากตอนนี้คุณกำลังรู้สึกกังวลใจ ไม่ต้องกลัวไปนะเรามาข้ามผ่านอุปสรรคนี้ไปด้วยกัน  โดยเราอยากนำเสนอรูปแบบเหล่านี้มาให้คุณได้ลองเลือก',
      is_first: false
    }, {
      question: 'ก่อนอื่น เรามาลองจัดระเบียบหนี้กันก่อนเลย พอจะนึกออกกันไหม',
      is_first: false
    }, {
      question: 'ไม่เป็นไรน้า เราช่วยบอกคุณได้เสมอ นั่นก็คืออ เราจะทำการจัดลำดับหนี้ของเรากันก่อน พอจะเข้าใจกันไหม',
      is_first: false
    }
    ]
    let questionaireIds = await queryInterface.bulkInsert('questionaire', questionaire, { returning: ['id'] });
    // await queryInterface.bulkInsert('choice', choice, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('questionaire', null, {});
  }
};
