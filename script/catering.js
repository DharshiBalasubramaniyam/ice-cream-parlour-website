const today = new Date();
const yesterday = new Date(today.setDate(today.getDate())).toISOString().split('T')[0];
document.getElementById('dateInput').setAttribute('min', yesterday);