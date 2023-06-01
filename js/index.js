const form=document.getElementById('form');
const userName=document.getElementById('userName');
const userPhone=document.getElementById('userPhone');
const userEmail=document.getElementById('userEmail');
const userMessage=document.getElementById('userMessage');


form.addEventListener('submit',e=>{
  e.preventDefault();
  validateInputs();  
})

const setError=(element, message)=>{
    const inputControl=element;
    const errorDisplay=document.getElementById('errorMessage');

    errorDisplay.innerText=message;
    errorDisplay.classList.add('error');
    errorDisplay.classList.remove('success');
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess=element => {
    const inputControl=element;
    const errorDisplay=document.getElementById('errorMessage');

    errorDisplay.innerText='*all elements are required';
    errorDisplay.classList.add('success');
    errorDisplay.classList.remove('error');
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    

}

const isValidEmail=email=>{
    const re=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return re.test(String(email).toLowerCase());
}

const validateInputs = ()=>{
    const userNameValue = userName.value.trim();
    const userPhoneValue = userPhone.value.trim();
    const userEmailValue = userEmail.value.trim();
    const userMessageValue = userMessage.value.trim();
    
    if(userNameValue===""){
        setError(userName, 'Field is required');
    }else{
        setSuccess(userName);
    }

      
    if(userPhoneValue===""){
        setError(userPhone, 'Field is required');
    }else{
        setSuccess(userPhone);
    }

      
    if(userEmailValue===""){
        setError(userEmail, 'Field is required');
    }else if (!isValidEmail(userEmailValue)){
        setError(userEmail, 'Provide valid email address');
    }else{  
        setSuccess(userEmail);
    }

      
    if(userMessageValue===""){
        setError(userMessage, 'Field is required');
    }else{
        setSuccess(userMessage);
    }

};

