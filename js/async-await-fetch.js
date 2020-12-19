function displayUsers(users) {
  let output = "";
  users.forEach((user) => {
    debugger

    output += `<p><span style="margin-right: 12px">${user.id}</span>${user.name}</p>`;

    const mainDiv = document.querySelector(".mainDiv");

    mainDiv.innerHTML = output;
    console.log(user, "user");
  })
}

async function getUsers() {

  const res = await fetch("https://jsonplaceholder.typicode.com/users")

  const users = await res.json();

  displayUsers(users);
}

getUsers();