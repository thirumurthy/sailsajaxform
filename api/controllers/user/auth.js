module.exports = {


  friendlyName: 'Auth',


  description: 'Auth user.',


  inputs: {

    usrname : {

      type : "string",
      required : true
    },

    password : {

      type : "string",
      required : true
    }

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var cstatus = "201";
    var APIError = "error1";

    if(inputs.usrname == "test@test.com" && inputs.password =="123" )
    cstatus = "200";
    return exits.success({ APIstatus : cstatus, cloudError : APIError });

  }


};
