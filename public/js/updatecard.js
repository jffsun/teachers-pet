// function that allows PARENT to update child's profile
const updateCard = async (event) => {
    event.preventDefault();

    const allergies = document.querySelector('#allergyInput').value.trim();
    const medication = document.querySelector('#medicationInput').value.trim();
    const diet = document.querySelector('#dietInput').value.trim();
    const notes = document.querySelector('#notesInput').value.trim();
    
    const response = await fetch('/api/parent', {
        method: 'PUT',
        body: JSON.stringify({
            allergies: allergies,
            medication: medication,
            diet: diet,
            notes: notes
        }),
        headers: {'Content-Type': 'application/json'}
        })
        if (response.ok) {
            alert("Student's information updated!")
            document.location.reload();
        } else { 
          alert ("Something went wrong. Can't update message");
        };
}

document.querySelector('.updateSubmit').addEventListener('click', updateCard);