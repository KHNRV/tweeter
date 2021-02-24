/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  user: {
    name: "Newton",
    avatars: "https://i.imgur.com/73hZDYK.png",
    handle: "@SirIsaac",
  },
  content: {
    text: "If I have seen further it is by standing on the shoulders of giants",
  },
  created_at: 1461116232227,
};

const createTweetElement = function(db) {
  const $tweet = $(`<article class="tweet">
  <header>
    <div class="user-meta">
      <img src="${db.user.avatars}" class="avatar">
      <div class="username">${db.user.name}</div>
    </div>
    <div class="user-handle">${db.user.handle}</div>
  </header>
  <main>${db.content.text}
  </main>
  <footer>
    <div class="date">${timeDifferenceFromNow(db.created_at)}</div>
    <div class="action-bar">
      <img src="./icons/flag.png" alt="Flag">
      <img src="./icons/share.png" alt="Share">
      <img src="./icons/plus_one.png" alt="+1">
    </div>
  </footer>
</article>`);

  return $tweet;
};

const $tweet = createTweetElement(tweetData);

console.log($tweet); // to see what it looks like
$("#tweets-container").append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
