const validateInfo = (name, age) => {
    if (!name || !age) {
      throw new Error("Todas as informações são necessárias");
    }
  };
  
  const studentRegister = (name, age) => {
    try {
      validateInfo(name, age);
    } catch (error) {
      return error.message;
    }
  };
