const postMessage = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#titleInput').value.trim();
    const message = document.querySelector('#messageInput').value.trim();
    const where = document.querySelector('#whereInput').value.trim();
    const when = document.querySelector('#whenInput').value.trim();
    
    if (title && message && where) {
        const response = await fetch('/api/teacher', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                message: message,
                where: where,
                when: when
            }),
            headers: {'Content-Type': 'application/json'}
            });
            if (response.ok) {
                alert("Message created!")
                document.location.reload();
            } else {
                alert("Something went wrong. Can't create post");
            }
           }
        }
    

document.querySelector('.updateSubmit').addEventListener('click', postMessage);