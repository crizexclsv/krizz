const username = localStorage.getItem('username');
        if (username) {
            document.getElementById('greeting').textContent = `Hi, ${username}`;
        }   

const cards = document.querySelectorAll('.namecontainer');


cards.forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-id');
    alert(`You clicked on card ${id}!`);
  });
});
