const CommonUtlis = {
    generateResponse: (statusCode, message, data) => {
      console.log(`msg: ${message}, data: ${data}`);
      return {
        statusCode,
        message,
        data,
      };
    },
    dbCustomError: (status, msg) => ({
      status,
      msg,
      isCustom: true,
    }),
    customError: (status, msg) => ({
      status,
      msg,
      isCustom: true,
    }),
    removeDuplicateFromArray: (arr) => [...new Set(arr)],
  };
  
  Object.freeze(CommonUtlis);
  module.exports = CommonUtlis;
  