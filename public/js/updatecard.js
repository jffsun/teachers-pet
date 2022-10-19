const updateCard = async (card) => {
    card.preventDefault();

    const allergies = document.querySelector('#allergyInput').value.trim();
    const medication = document.querySelector('#medicationInput').value.trim();
    const diet = document.querySelector('#dietInput').value.trim();
    const notes = document.querySelector('#notesInput').value.trim();

    
    if (allergies && medication && diet && notes) {
        const response = await fetch('/api/parent/child', {
            method: 'PUT',
            body: JSON.stringify({
                allergies, 
                medication,
                diet,
                notes
            }),
            headers: {'Content-Type': 'application/json'}
          });

        if (response.ok) {
            alert('Information Updated!')
        } else {
            alert("Something went wrong. Can't update information.")
        }
    }
}

document.querySelector('.child-info-update').addEventListener('submit', updateCard);