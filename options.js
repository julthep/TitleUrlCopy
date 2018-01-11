function saveOptions(e) {
  browser.storage.sync.set({
      titlefirst: document.querySelector("#titlefirst").checked,   
      urlonly: document.querySelector("#urlonly").checked,
      breakline: document.querySelector("#breakline").checked,
      cleanurl: document.querySelector("#cleanurl").checked,
      canonical: document.querySelector("#canonical").checked,
      decodeurl: document.querySelector("#decodeurl").checked
  });
  e.preventDefault();
}

function restoreOptions() {
  var gettingItem = browser.storage.sync.get();
  gettingItem.then((res) => {
      document.querySelector("#titlefirst").checked = res.titlefirst;
      document.querySelector("#urlonly").checked = res.urlonly;
      document.querySelector("#breakline").checked = res.breakline;
      document.querySelector("#cleanurl").checked = res.cleanurl;
      document.querySelector("#canonical").checked = res.canonical;
      document.querySelector("#decodeurl").checked = res.decodeurl;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
