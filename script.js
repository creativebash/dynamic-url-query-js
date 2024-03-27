function applyFilters() {
  var filters = [];
  var checkboxes = document.querySelectorAll(".filter:checked");

  checkboxes.forEach(function (checkbox) {
    filters.push(checkbox.value);
  });

  var queryString = "";
  if (filters.length > 0) {
    queryString = "?" + filters.join("&");
  }

  // Modify the URL with the new query string
  history.pushState(null, null, window.location.pathname + queryString);
}
