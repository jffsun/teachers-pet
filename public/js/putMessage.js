const updateMsg = async (event) => {
    event.preventDefault();

    // const postId = 
    const title = document.querySelector("#titleInput"+id).value.trim();
    // Give container the ID, when that container's attribute is typed in, UPDATE, GET container ID, Put request WHERE message ID=ID Clicked
    // const message = document.querySelector('#messageInput').value.trim();
    // const where = document.querySelector('#whereInput').value.trim();
    // const when = document.querySelector('#whenInput').value.trim();
    console.log(title);
   
    const buttons = document.getElementsByTagName("button");

    const buttonPressed = e => {
    console.log('THIS IS THE ID VALUE OF BUTTON PRESSED------------');
    console.log(e.target.id);  // Get ID of Clicked Element
    }


    // fetch('/api/teacher', {
    //     method: 'PUT',
    //     body: JSON.stringify({

    //         id: id,
    //         title: title,
    //         message: message,
    //         where: where,
    //         when: when
    //     }),
    //     headers: {'Content-Type': 'application/json'}
    //     }).then(res => {
    //         if (res.ok) { console.log("Message updated!") }
    //         else { 
    //             console.log(res) }
    //         return res
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .then(alert('Information Updated!'))
    //     .catch(error => console.log(error));

        for (let button of buttons) {
            button.addEventListener("click", buttonPressed);
            }
}



document.querySelector('.putMessage').addEventListener('click', updateMsg);

