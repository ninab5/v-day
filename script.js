document.addEventListener('DOMContentLoaded', function() {
  const envelope = document.querySelector('.envelope-wrapper');
  const heart = document.querySelector('.heart');
  const hearts = document.querySelector('.hearts');

  hearts.classList.remove('start-heart-animation');
  
  envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
    hearts.classList.toggle('flap');
  });
});