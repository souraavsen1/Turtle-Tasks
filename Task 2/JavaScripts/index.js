const url = "https://gorest.co.in/public/v1/users";
const token =
  "d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3";

const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", `Token ${token}`);

async function fetchAPI(url, headers) {
  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });

  var data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  console.log(data.data);
  displayData(data.data);
}
fetchAPI(url);

function hideloader() {
  document.getElementById("loading").style.display = "none";
}

function displayData(data) {
  let tab = `<h4>User Name:</h4>`;

  for (let d of data) {
    tab += `<h5>${d.name} </h5>`;
  }
  document.getElementById("user").innerHTML = tab;
}
