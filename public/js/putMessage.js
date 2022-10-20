// function that allows Teacher to update current POST on the Message Board
const updateButtons = document.getElementsByClassName("putMessage");

const selectMessage = async (event) => {
    event.preventDefault();

    // get id of the message clicked 
    containerID = event.target.id

    // targets inputs from that selected message
    const title = $(`#titleInput${containerID}`).val()
    const message = $(`#messageInput${containerID}`).val()
    const where = $(`#whereInput${containerID}`).val()
    const when = $(`#whenInput${containerID}`).val()
    
    const response = await fetch('/api/teacher', {
    method: 'PUT',
    body: JSON.stringify({
        id: containerID,
        title: title,
        message: message,
        where: where,
        when: when
    }),
    headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
        alert("Message updated!");
        document.location.reload();
    } else { 
        alert("Something went wrong. Can't update message");
    };
};

// event listener for all 'Update Message!' buttons
for (let button of updateButtons) {
    button.addEventListener("click", selectMessage);
}

