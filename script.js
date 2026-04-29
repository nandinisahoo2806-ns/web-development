function addBlog() {
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;

  if(title=="" || content==""){
    alert("Fill all fields");
    return;
  }

  let div = document.createElement("div");
  div.className = "blog";

  div.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
  `;

  document.getElementById("blogList").appendChild(div);

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}