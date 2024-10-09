export const validatName = (name="", required=false) => {

  const trimmedName = name.trim();
  const theRequired = required;
  console.log('theRequired', theRequired)
  // 檢查是否為空
  if (trimmedName === "" && theRequired ) {
    return "請填寫姓名";
  }else if(trimmedName === "" && theRequired === false){
    return;
  }
  const nameRegex = /^[\u4e00-\u9fa5a-zA-Z\s]+$/; // 中文、英文、空格
  const numberRegex = /\d+/; // 檢查是否包含數字
  const specialCharRegex = /[^a-zA-Z\u4e00-\u9fa5\s]/; // 檢查是否有特殊字符
  if (numberRegex.test(trimmedName)) {
    console.log('姓名不能包含數字');
    return "姓名不能包含數字";
  }
  
  if (specialCharRegex.test(trimmedName)) {
    console.log('姓名不能有特殊符號');
    return "姓名不能有特殊符號";
  }
  
  if (!nameRegex.test(trimmedName)) {
    console.log('姓名格式不正確');
    return "姓名格式不正確";
  }

  return;
}

export const validatEmail = (email="", required=false) => {
  const trimmedEmail = email.trim();
  const theRequired = required;
  
  if (trimmedEmail === "" && theRequired ) {
    return "請填寫姓名";
  }else if(trimmedEmail === "" && theRequired === false){
    return;
  }
  
  const emailRegex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    console.log('email 格式不正確');
    return "email 格式不正確";
  }
  return;
}

export const validatTelephone = (phone='', required=false) => {
  const trimmedPhone = phone.trim();
  const theRequired = required;
  if (trimmedPhone === "" && theRequired ) {
    return "請填寫姓名";
  }else if(trimmedPhone === "" && theRequired === false){
    return;
  }
  const phoneRegex09 = /^09/;
  if(!phoneRegex09.test(trimmedPhone)){
    return "需 09 開頭"
  }
  const phoneRegex = /^09\d{8}$/;
  if(!phoneRegex.test(trimmedPhone)){
    return "手機格式不正確，請輸入10碼"
  }

  return;
}
