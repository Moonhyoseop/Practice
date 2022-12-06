const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-form input");
const greeting = document.getElementById('greeting')

const HIDDEN_CLASSNAME = 'hidden';
const USERID_KEY = '아이디';

function GoLogin(e){
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const userId = loginInput.value;

  if(userId === ""){
    alert('입력해주세요')
  }else if(userId.length > 4){
    alert('ID가 너무 길어요')
  }

  localStorage.setItem(USERID_KEY, userId)
  paintGreetings(userId)
}

function paintGreetings(userId){
  greeting.innerText = `당신의 아이디는 ${userId} 입니다.`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}


const savedUserId = localStorage.getItem(USERID_KEY)

if(savedUserId === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', GoLogin);
} else{
  paintGreetings(savedUserId);
}

