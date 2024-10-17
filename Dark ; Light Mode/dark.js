const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;
const sunContainer = document.getElementById('sunContainer');
const moonContainer = document.getElementById('moonContainer');

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('night-mode');
    sunContainer.classList.toggle('active');
    moonContainer.classList.toggle('active');
});