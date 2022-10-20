const updateCard = async (event) => {
    event.preventDefault();

    const allergies = document.querySelector('#allergyInput').value.trim();
    const medication = document.querySelector('#medicationInput').value.trim();
    const diet = document.querySelector('#dietInput').value.trim();
    const notes = document.querySelector('#notesInput').value.trim();
    console.log(allergies);
    console.log(medication);
    console.log(diet);
    console.log(notes);
    
    fetch('/api/parent', {
        method: 'PUT',
        body: JSON.stringify({
            allergies: allergies,
            medication: medication,
            diet: diet,
            notes: notes
        }),
        headers: {'Content-Type': 'application/json'}
        }).then(res => {
            if (res.ok) { console.log("HTTP request successful") }
            else { 
                console.log(res) }
            return res
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .then(alert('Information Updated!'))
        .catch(error => console.log(error));
    // console.log(response);
    // if (response.ok) {
    //     alert('Information Updated!')
    // } else {
    //     alert("Something went wrong. Can't update information.")
    // }
}

document.querySelector('.updateSubmit').addEventListener('click', updateCard);