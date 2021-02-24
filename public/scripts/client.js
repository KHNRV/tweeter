/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

/**
 * This function output a message of how long ago that tweet was posted
 * @author fearofawhackplanet (stackoverflow)
 * @param {*} current
 * @param {*} previous
 */
const timeDifferenceFromNow = function(prev) {
  const current = new Date();
  const previous = new Date(prev);

  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return "approximately " + Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return "approximately " + Math.round(elapsed / msPerYear) + " years ago";
  }
};

const tweetData = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text:
        "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

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

const renderTweets = function(db) {
  $.each(db, (index, tweetObj) => {
    const $tweet = createTweetElement(tweetObj);
    $("#tweets-container").append($tweet);
  });
};

$(document).ready(function() {
  renderTweets(tweetData);
});
