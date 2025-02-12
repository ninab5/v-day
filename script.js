document.addEventListener('DOMContentLoaded', function() {
  const envelope = document.querySelector('.envelope-wrapper');
  const heart = document.querySelector('.heart');
  
  envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
    heart.classList.toggle('flap'); // Toggling the 'flap' class on heart as well
  });
});