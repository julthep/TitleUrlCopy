function saveOptions(e) {
  browser.storage.sync.set({
      titlefirst: document.querySelector("#titlefirst").checked,   
      urlonly: document.querySelector("#urlonly").checked,
      breakline: document.querySelector("#breakline").checked,
      canonical: document.querySelector("#canonical").checked,
      decodeurl: document.querySelector("#decodeurl").checked
  });
  e.preventDefault();
}

function restoreOptions() {
  var gettingItem = browser.storage.sync.get();
  gettingItem.then((res) => {
      document.querySelector("#titlefirst").checked = res.titlefirst || false;
      document.querySelector("#urlonly").checked = res.urlonly || false;
      document.querySelector("#breakline").checked = res.breakline || false;
      document.querySelector("#canonical").checked = res.canonical || true;
      document.querySelector("#decodeurl").checked = res.decodeurl || true;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
