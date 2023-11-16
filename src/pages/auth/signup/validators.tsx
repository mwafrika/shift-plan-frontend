export default {
    fullname: { 
      required: true,
      minLength: {
        value: 3,
        message: "Full name should be at least 3 characters",
      },
      maxLength: {
        value: 50,
        message: "Full name should not exceed 50 characters",
      },
     },
  
      email: { 
        required: true,
        pattern: {
          value: /\S+@\S+\.\S+/,
          message: "Invalid email address",
        },
      },
  
      password: { 
        required: true,
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          message: "Password must be at least 8 characters with 1 special character, 1 number, 1 uppercase, and 1 lowercase letter"
        }
       },
    };