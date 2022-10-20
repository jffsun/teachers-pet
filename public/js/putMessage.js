const updateMsg = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#titleInput').value.trim();
    const message = document.querySelector('#messageInput').value.trim();
    const where = document.querySelector('#whereInput').value.trim();
    const when = document.querySelector('#whenInput').value.trim();
    const id = document.querySelector('#announcementIdInput').value;

    console.log(id);
    fetch('/api/teacher', {
        method: 'PUT',
        body: JSON.stringify({

            id: id,
            title: title,
            message: message,
            where: where,
            when: when
        }),
        headers: {'Content-Type': 'application/json'}
        }).then(res => {
            if (res.ok) { console.log("Message updated!") }
            else { 
                console.log(res) }
            return res
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .then(alert('Information Updated!'))
        .catch(error => console.log(error));
}



document.querySelector('.putMessage').addEventListener('click', updateMsg);