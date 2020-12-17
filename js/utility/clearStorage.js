export function clearAllStorage() {
  const clearAllButton = document.querySelector(".clear");

  clearAllButton.addEventListener("click", clearList);

  function clearList() {
    const doDelete = confirm("Remove products?");
    if (doDelete) {
      localStorage.clear();
      window.location.reload();
    }
  }
}
