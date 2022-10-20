// Function to DELETE messages posted to Message Board
const deleteButtons = document.getElementsByClassName("deleteMessage");

const deleteMessage = async (event) => {
    event.preventDefault();

    // get id of the message clicked 
    containerID = event.target.id

    const response = await fetch('/api/teacher/', {
        method: 'DELETE',
        body: JSON.stringify({
            id: containerID,
        }),
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
        alert("Message deleted!");
        document.location.reload();
    } else { 
        alert("Something went wrong. Can't delete message");
    };
};

// event listener for all 'Delete Message!' buttons
for (let button of deleteButtons) {
    button.addEventListener("click", deleteMessage);
}
