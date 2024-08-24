/* Style 12 : Reaction Mode. By Mahesh Technicals. */

function getRandomReaction() {
  const moreReactions = [
  "💙••✠•💠❀💠•✠•💙",
  "💛✧✿🌟✨💫🌼🌻💛",
  "💜❀❄️🌸🌷🌼❀❄️💜",
  "💚🌿🌱🍀🍃🌾🍀🌿💚",
  "💖❖💘💓💗💖💗💓💘❖💖",
  "💙✧❀💠✦💠❀✧💙",
  "💗💞💝💘💓💞💗💘💝",
  "💛🌟✨🎇🎆🌟💛",
  "💜💫✨🌈💜💫🌈✨",
  "💚🌺🌸🌼🍃🌿💚",
  "💙❀💠💥💠❀💙",
  "💖💐💞🌸💖💐💞",
  "💛🍂🌾🌿🍁💛🍂",
  "💜🧡🌈✨💜💜🧡✨",
  "💚🍀🌷🌸🍀💚",
  "💙🌟💫💥🌟💙",
  "💖🌹🌼🌸💞💖",
  "💛🎉🎊🎈💛",
  "💜🎁🎀💜🌟🎁",
  "💚🍀🌷🌸🍀💚",
  "💙✨💙🎇💙",
  "💖❀🌟💘❀💖",
  "💛🌸🌼🌻🌼💛",
  "💜✨💜💫💜",
  "💚🍃🍂🌿🌱💚",
  "💙🌹💙🌟🌹💙",
  "💗🌸💗🌼💗",
  "💛🌟🎊✨🌟💛",
  "💜🌺🌸💜🌺",
  "💚🍀🌼🌷🌿💚",
  "💙🌸💙🌺🌸💙",
  "💖🎁🎀💖🎊",
  "💛✨🎆🎇✨💛",
  "💜❀💖❀💜",
  "💚🍃🌿💚",
  "💙💫🌟💥💙",
  "💗💐💞💗💐",
  "💛🌼🌸🍀💛",
  "💜🌸💜🌺🌸💜"
];

  const randomIndex = Math.floor(Math.random() * moreReactions.length);
  return moreReactions[randomIndex];
}




// Iterate through quote containers and mycard elements
document.querySelectorAll(".quote-container-Mahesh-Technicals, .mycard, blockquote").forEach((blockquote) => {
  // Modify the text within the blockquote elements
  let modifiedText = blockquote.innerText.split(",").join(",\n").split("।").join("|\n");
  // Removes double quotes from the beginning and end of a string
  let fresh = modifiedText.replace(/^"|"$/g, "");
  blockquote.innerText = getRandomReaction() + "\n\n" + fresh + "\n" + getRandomReaction();


  // Create and append action container for each blockquote
  let actionContainer = document.createElement("div");
  actionContainer.classList.add("quote-actions-Mahesh-Technicals");
  actionContainer.innerHTML = `
    <span class="copy-action-Mahesh-Technicals" onclick="copyText(this)"><i class="fa-regular fa-copy"></i></span>
    <span class="facebook-action-Mahesh-Technicals" onclick="share('facebook', this)"><i class="fa-brands fa-facebook"></i></span>
    <span class="whatsapp-action-Mahesh-Technicals" onclick="share('whatsapp', this)"><i class="fa-brands fa-whatsapp"></i></span>
    <span class="telegram-action-Mahesh-Technicals" onclick="share('telegram', this)"><i class="fa-brands fa-telegram"></i></span>`;

  blockquote.append(actionContainer);
});

// Function to copy text to clipboard and highlight the action
function copyText(element) {
  let text = element.parentElement.parentElement.innerText;
  navigator.clipboard.writeText(text + "\n\n" + location.href);
  highlightElement(element);
}

// Function to share text on social media and open a new window
function share(platform, element) {
  let text = element.parentElement.parentElement.innerText;
  let url = location.href;
  let shareUrl = '';

  switch (platform) {
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote= encodeURIComponent(${text})`;
      break;
    case 'whatsapp':
      shareUrl = `https://wa.me/?text=${encodeURIComponent(text + "\n\n" + url)}`;
      break;
    case 'telegram':
      shareUrl = `https://t.me/share/url?text=${encodeURIComponent(text + "\n")}&url=${encodeURIComponent(url+"\n")}`;
      break;
  }

  window.open(shareUrl);
}

// Function to highlight an element temporarily
function highlightElement(element) {
  // Apply the gradient background
  element.style.background = "linear-gradient(135deg, #ff00cc, #3333ff)";

  // Revert to the original background after 1 second
  setTimeout(() => {
    element.style.background = "linear-gradient(135deg, #ff00cc, #3333ff)";
  }, 1000);
}


// Add click event listeners to action elements for copying and sharing
document.querySelectorAll(".copy-action-Mahesh-Technicals, .facebook-action-Mahesh-Technicals, .whatsapp-action-Mahesh-Technicals, .telegram-action-Mahesh-Technicals").forEach((el) => {
  el.addEventListener("click", () => {
    if (el.classList.contains("copy-action-Mahesh-Technicals")) {
      copyText(el);
    } else {
      share(el.classList[0].replace("-action-Mahesh-Technicals", ""), el);
    }
  });
});