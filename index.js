function showOreos(popupId) {
  var popup = document.getElementById(popupId);
  var popups = document.querySelectorAll('.popuptext');

  // Hide other popups if they are currently shown
  popups.forEach(function(item) {
      if (item.id !== popupId && item.classList.contains("show")) {
          item.classList.remove("show");
      }
  });

  // Toggle the visibility of the clicked popup
  popup.classList.toggle("show");
}

function showMilkshakes(popupId) {
  var popup = document.getElementById(popupId);
  var popups = document.querySelectorAll('.popuptext');

  // Hide other popups if they are currently shown
  popups.forEach(function(item) {
      if (item.id !== popupId && item.classList.contains("show")) {
          item.classList.remove("show");
      }
  });

  // Toggle the visibility of the clicked popup
  popup.classList.toggle("show");
}

function filterTable() {
  const searchValue = document.getElementById('searchBar').value.toLowerCase();
  const tableRows = document.querySelectorAll('.oreoBiscuits tbody tr');

  tableRows.forEach(row => {
      const nameCell = row.cells[0];
      if (nameCell) {
          const nameValue = nameCell.textContent.toLowerCase();
          if (nameValue.includes(searchValue)) {
              row.style.display = '';
          } else {
              row.style.display = 'none';
          }
      }
  });
}