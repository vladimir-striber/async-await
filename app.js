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
    })

    document.body.innerHTML = output;
  }, 1000)
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
    console.log(posts);
  }, 2000)
}

// getPosts();
createPost(  {
  title: "Post three",
  body: "This is post three body"
}, getPosts);