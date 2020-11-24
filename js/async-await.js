console.log("hey node");

const posts = [
  {
    title: "Post one",
    body: "This is post one body"
  },
  {
    title: "Post two",
    body: "This is post two body"
  }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`
    });

    let mainUl = document.querySelector(".mainUl");

    mainUl.innerHTML = output;

  }, 1000)
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      console.log(posts);

      let error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong!")
      }

    }, 2000);
  })
}

async function init() {
  await createPost(  {
    title: "Post three",
    body: "This is post three body"
  });

  getPosts();
}

init();
