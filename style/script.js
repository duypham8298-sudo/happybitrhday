const PASS = "20121997";
const FLY_IMAGES = [];
for(let i=1;i<=38;i++){FLY_IMAGES.push(`style/img/Anh (${i}).jpg`);}

function press(n){ const el=document.getElementById('pwd'); if(el.value.length<8) el.value+=n; }
function clearPwd(){ document.getElementById('pwd').value=""; }

function playGiftEffect(callback){
  const box=document.getElementById("giftEffect");
  const hop=document.getElementById("HopQua");
  const nap=document.getElementById("NapHop");
  const than=document.getElementById("ThanHop");
  box.style.display="block";
  setTimeout(()=>{hop.style.display="none";},1000);
  setTimeout(()=>{nap.style.animation="flyUpGift 1.2s forwards";},1000);
  setTimeout(()=>{than.style.animation="flyDownGift 1.2s forwards";},1000);
  setTimeout(()=>{
    box.style.display="none";
    nap.style.animation=""; than.style.animation="";
    hop.style.display="block";
    callback();
  },2300);
}

const messages=[
  "Gửi Cô Gái của Anh❤️",
  "Anh không biết con đường phía trước của chúng mình dài bao xa",
  "Nhưng a muốn e biết rằng:",
  "Mỗi ngày được đi cùng e là điều a trân quý vô cùng ",
  "Tình cảm này là 1 món quà mà anh luôn sợ sẽ vô tình đánh rơi !",
  "Anh không dám hứa mình là 1 người hoàn hảo và sẽ có lúc làm e buồn",
  "Nhưng a hứa sẽ yêu e thương e 1 cách tử tế trọn vẹn hơn mỗi ngày",
  "Đừng bận lòng vì những cũ kỹ của quá khứ nữa",
  "E đáng được Hạnh Phúc sau bấy nhiêu sự mệt mỏi đó",
  "Anh xin lỗi",
  "Xin lỗi em",
  "Anh Đến Muộn",
  "Nhấn Vào Hộp Quà Đi Nè !",
];

let msgIndex=0, charIndex=0;
const cardMess=document.getElementById("cardMess");
const typingSpeed=70;

function typeMessage(){
  const currentMsg=messages[msgIndex];
  if(charIndex<currentMsg.length){
    cardMess.textContent+=currentMsg.charAt(charIndex);
    charIndex++;
    setTimeout(typeMessage,typingSpeed);
  }else{
    setTimeout(()=>{
      charIndex=0;
      cardMess.textContent="";
      msgIndex=(msgIndex+1)%messages.length;
      typeMessage();
    },2000);
  }
}
function startTypingEffect(){ typeMessage(); }

function checkPwd(){
  const v=document.getElementById('pwd').value;
  if(v===PASS){
    document.getElementById('lockScreen').style.display='none';
    playMusic();
    playGiftEffect(()=>{
      const card=document.getElementById('cardScene');
      card.style.display='block';
      setTimeout(()=>{ card.style.opacity=1; },50);
      startTypingEffect();
    });
  }else{
    const msg=document.getElementById('msg');
    msg.textContent="Sai rồi...Có bấy nhiêu cũng không nhớ 😑";
    setTimeout(()=>msg.textContent="",2000);
    clearPwd();
  }
}

function playMusic(){ 
  const music=document.getElementById('bgMusic'); 
  music.currentTime = 7;
  music.play().catch(()=>{}); 
}

document.getElementById('openGift').addEventListener('click',()=>{
  window.location.href = 'index1.html';
 });

function spawnImg(){
  const src=FLY_IMAGES[Math.floor(Math.random()*FLY_IMAGES.length)];
  const img=document.createElement('img');
  img.src=src;
  img.className='flyImg';
  img.style.height=(100+Math.random()*200)+'px';
  img.style.top=Math.random()*(window.innerHeight-150)+'px';
  const dur=6+Math.random()*3;
  img.style.animation=`moveLeftToRight ${dur}s linear forwards`;
  document.body.appendChild(img);
  setTimeout(()=>img.remove(),dur*1000);
}

function checkOrientation() {
  const warn = document.getElementById('rotateWarning');
  if (window.innerWidth <= 768 && window.innerHeight > window.innerWidth) {
    warn.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  } else {
    warn.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);
checkOrientation();

function createHeart(){
  const emojis=['❤️','🌲','🎁','❄️', '🍧','☃️', '🎄'];
  const heart=document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];
  heart.style.left=Math.random()*window.innerWidth+'px';
  heart.style.fontSize=15+Math.random()*25+'px';
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
}
setInterval(createHeart,400);
