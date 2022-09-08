{
  /* <div class="post">
            <div class="post-header">
              <img
                class="avatar post-avatar"
                src="./img/Vincent van Gogh.png"
                alt="vincent van gogh"
              />
              <div class="post-title">
                <h3>Vincent Van Gogh</h3>
                <p>Zudert, Netherlands</p>
              </div>
            </div>
            <img
              class="post-img"
              src="./img/vincent-post-img.png"
              alt="vincent post"
            />
            <div class="post-footer">
              <img
                class="post-properties"
                id="like-btn"
                src="./img/like.png"
                alt="like"
              />
              <img
                class="post-properties"
                id="comment-btn"
                src="./img/comment.png"
                alt="comment"
              />
              <img
                class="post-properties"
                id="share-btn"
                src="./img/share.png"
                alt="share"
              />
              <h5 class="all-likes">21,492 likes</h5>
              <span class="post-footer-title">vincey1853</span>
              <span>just took a few mushrooms lol</span>
            </div>
          </div> */
}

const posts = [
  {
    postId:1,
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    postId:2,
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    postId:3,
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:"gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const likePost = (postId) => {
  const postEl = document.getElementById("post-"+postId)
  postEl.innerHTML = Number(postEl.innerHTML.split(" ")[0]) + 1 + " likes"
}

const createPosts = () => {
  const postsEl = document.getElementById("posts");
  posts.forEach((post) => {
    const addedPost = `<div class="post">
    <div class="post-header">
      <img
        class="avatar post-avatar"
        src="./${post.avatar}"
        alt="${post.name}"
      />
      <div class="post-title">
        <h3>${post.name}</h3>
        <p>${post.location}</p>
      </div>
    </div>
    <img
      class="post-img"
      src="./${post.post}"
      alt="${post.comment}"
    />
    <div class="post-footer">
      <img
        class="post-properties"
        id="like-btn"
        onclick="likePost(${post.postId},${post.likes})"
        src="./images/icon-heart.png"
        alt="like"
      />
      <img
        class="post-properties"
        id="comment-btn"
        src="./images/icon-comment.png"
        alt="comment"
      />
      <img
        class="post-properties"
        id="share-btn"
        src="./images/icon-dm.png"
        alt="share"
      />
      <h5 class="all-likes" id="post-${post.postId}" >${post.likes} likes</h5>
      <span class="post-footer-title">${post.username}</span>
      <span>${post.comment}</span>
    </div>
  </div>`;
    postsEl.innerHTML += addedPost;
  });
};

createPosts();
