//this function converts a string to a date and back to an appropriately formatted string
function convertDateString(sDate) {
  var sDateArray = sDate.split('-');
  var s = new Date();
  s.setFullYear(
    parseInt(sDateArray[0]),
    parseInt(sDateArray[1]) - 1,
    parseInt(sDateArray[2])
  );
  var sString = s.toString();
  return sString;
}

// var convertedData = newData.map();
//confirm that we have proper linking to the data
// console.log(data);
//declare a table body variab;e
var tblbody = d3.select('tbody');

data.forEach((ufoSighting) => {
  var row = tblbody.append('tr');
  Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append('td');
    // cell.attr('class', 'table-primary');
    cell.text(value);
  });
});

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select('#filter-sighting');

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputDate = d3.select('#date-picker');

// Input fields can trigger a change event when new text is entered.
inputDate.on('change', function () {
  var tbody = d3.select('tbody');
  var selectedDate = d3.event.target.value;
  var selectedDateArray = selectedDate.split('-');
  var formattedDateArray = [];
  selectedDateArray.forEach(function (item) {
    formattedDateArray.push(parseInt(item));
  });
  console.log(selectedDateArray);
  console.log(formattedDateArray);
  var dateStringForCompare =
    formattedDateArray[1] +
    '/' +
    formattedDateArray[2] +
    '/' +
    formattedDateArray[0];

  //create a new array object to hold the filtered records
  var filteredData = data.filter(
    (sighting) => sighting.datetime === dateStringForCompare
  );

  //clear previous data out
  d3.select('tbody').selectAll('tr').remove();

  filteredData.forEach((ufoTracking) => {
    var row = tbody.append('tr');
    Object.entries(ufoTracking).forEach(([key, value]) => {
      var cell = row.append('td');
      cell.text(value);
    });
  });
});

// This function is triggered when the button is clicked
function handleClick() {
  data.forEach((ufoSighting) => {
    var row = tblbody.append('tr');
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append('td');
      // cell.attr('class', 'table-primary');
      cell.text(value);
    });
  });

  console.log('Clear filter button clicked!');
}

function parseDate(dateString) {
  //split date into array structure
  var dateParts = dateString.split('-');
  //
  var stringObject = dateParts[1] + '/' + dateParts[2] + '/' + dateParts[0];

  return stringObject;
}

const unique = (value, index, self) => {
  return self.indexOf(value) === index;
};

var states = [];
//var uniqueStates = states.filter(unique);
