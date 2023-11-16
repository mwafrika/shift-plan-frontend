export  function getItemsForCurrentPage(data, currentPage, itemsPerPage) {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return data.slice(startIndex, endIndex);
}
