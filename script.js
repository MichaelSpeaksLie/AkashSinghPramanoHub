const likeButton = document.getElementById('likeButton');
const likeCountSpan = document.getElementById('likeCount');

let likeCount = localStorage.getItem('likeCount') || 0;
likeCountSpan.textContent = likeCount;

likeButton.addEventListener('click', () => {
    likeCount++;
    likeCountSpan.textContent = likeCount;
    localStorage.setItem('likeCount', likeCount);
});
