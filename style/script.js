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
  "Gửi Cô Gái của Anh ❤️",
  "Anh không biết con đường phía trước của mình dài bao xa",
  "Nhưng Anh muốn e biết rằng",
  "Mỗi ngày được đi cùng Em, Là điều a trân quý cô cùng ",
  "Tình cảm này với A !",
  "Là một món quà mà Anh luôn sợ sẽ vô tình đánh rơi !",
  "Anh không dám hứa",
  "Mình là 1 người hoàn hảo ",
  "Và sẽ có lúc A vô tình làm E buồn !",
  "Nhưng a hứa sẽ Yêu Em",
  "Thương Em tử tế và trọn vẹn hơn từng ngày !!!",
  "Đừng suy nghĩ quá nhiều về mối quan hệ này của tụi mình e nhé",
  "A hài lòng với hiện tại và k quan tâm sự công khai",
  "Nên e đừng áp lực e nhé",
  "Không biết đoạn đường này sẽ đi tới đâu",
  "Nhưng a chỉ muốn đi cùng e, yêu e và bên cạnh e hết sức có thể",
  "Anh sẽ cố gắng là chỗ dựa vững chắc ",
  "Để e cảm thấy yên tâm ",
  "Trong khoảng thời gian e tìm lại được chính ngôi nhà của mình",
  "Đừng buồn vì mình đã hy sinh quá nhiều",
  "Nhưng mọi thứ lại quay lưng với e như vậy",
  "Điều tốt nhất là e không bao giờ đánh mất bản thân mình",
  "Đó cũng là minh chứng cho thấy e đã trưởng thành trong cuộc đời khắc nghiệt này rồi",
  "E yên tâm nhé , CÓ ANH Ở ĐÂY RỒI!",
  "Nếu mệt mỏi hay phiền lòng hãy chia sẻ cùng a nhé",
  "Đừng bận lòng vì những cũ kỹ của quá khứ nữa",
  "E đáng được hạnh phúc sau bấy nhiêu mệt mỏi đó",
  "A XIN LỖI E",
  "XIN LỖI E",
  "Vì !!!",
  "Anh Đến Muộn:(", 
  "❤️Anh Yêu Em❤️",
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
