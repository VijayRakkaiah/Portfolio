// small interactive helpers
document.getElementById('year').innerText = new Date().getFullYear();

document.getElementById('download-resume').addEventListener('click',function(){
  window.location.href = 'assets/docs/VIJAY_RAKKAIAH_CV.pdf';
});

// Simple contact handler: will open mail client with message (no backend)
function handleContact(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:vijay.rakkaiah@gmail.com?subject=${subject}&body=${body}`;
  return false;
}

// Allow smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});
