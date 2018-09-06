module.exports = {


  friendlyName: 'User view login user',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      statusCode: 200,
      description: 'login page design.',
      viewTemplatePath: 'pages/user/loginUser.ejs'
    },


  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};
