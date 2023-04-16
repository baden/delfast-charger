const id = window.location.hash.slice(1);
console.log("id=", id);
window.onhashchange = function() {
  window.location.reload();
}

export default id;
