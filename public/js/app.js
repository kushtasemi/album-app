console.log('Website is loaded...');

const albumForm = document.querySelector('form');
const albumInput = document.querySelector('input');
const albumUser = document.querySelector('#album-userId');
const albumTitle= document.querySelector('#album-title');


albumForm.addEventListener('submit', (event) => {
    event.preventDefault();

    albumUser.textContent = 'Loading albums...';

    fetch(`/Albums?userId=${albumInput.value}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                albumUser.textContent = data.message;
                console.log(data.error);
                console.log(data.error);
            } else {
              albumUser.textContent = data.albums.userData[0].userId;
              albumTitle.textContent =data.albums.userData[0].title;
                console.log(data);
            }
        });
    });
});
