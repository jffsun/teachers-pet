$(function () {
    // Get the text for the Handlebars template from the script element.
    var templateText = $("#tableTemplate").html();
    
    // Compile the Handlebars template.
    var tableTemplate = Handlebars.compile(templateText);
  
      // Define an array of people.
    var people = [
      { "Id": 1, "First Name": "Anthony", "Last Name": "Nelson", "Age": 25 },
      { "Id": 2, "First Name": "Helen", "Last Name": "Garcia", "Age": 32 },
      { "Id": 3, "First Name": "John", "Last Name": "Williams", "Age": 48 }
    ];
    
    // Evaluate the template with an array of people and set the HTML
    // for the people table.
    $("#people").html(tableTemplate({ array: people }));
    
    // Deine an array of smart phones.
    var smartPhones = [
        { "Manufacturer": "Apple", "Phone": "iPhone", "Operating System": "iOS" },
      { "Manufacturer": "Samsung", "Phone": "Galaxy", "Operating System": "Android" },
      { "Manufacturer": "Nokia", "Phone": "Lumia", "Operating System": "Windows" }
    ];
    
    // Evaluate the same table template with an array of smart phoes and set the HTML
    // for the smartphones table.
    $("#smartphones").html(tableTemplate({ array: smartPhones }));
  });