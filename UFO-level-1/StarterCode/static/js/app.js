// YOUR CODE HERE!
// from data.js
var tableData = data;
console.log(tableData);

//Get a reference to the table body
var tbody = d3.select("tbody");

//UFO Sighting values for each column
tableData.forEach(function(ufoSighting){
    console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key,value])
    {
        console.log(key,value);
        //Append  a cell too the row for each value
        var cell = row.append("td");
       cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");
button.on("click",function(){
    tbody.html("");

    //select the input data get the raw html nodes
    var inputElement=d3.select("#datetime");
    //Get the value property of input dta,state,shape
    var inputValue = inputElement.property("value");
    // console.log input value
    console.log(inputValue);
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    // console.log filter values
    console.log(filteredData);

    filteredData.forEach(function(selections) {
    
        console.log(selections);
        // Append one table row `tr` for each UFO Sighting object
        var row = tbody.append("tr");

    });

});

