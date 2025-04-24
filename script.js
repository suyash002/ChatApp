const usersData = [
  {
    avatar:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-942065100-copy.jpg?resize=1200:*",
    name: "John Mayers",
    time: "3 min ago",
    status: "Accountant",
  },
  {
    avatar:
      "https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_1280.jpg",
    name: "Tony Stark",
    time: "10 min ago",
    status: "Genius, Billionaire, Playboy, Philanthropist",
  },
  {
    avatar:
      "https://c4.wallpaperflare.com/wallpaper/739/10/526/scarlett-johansson-face-pink-lipstick-actress-wallpaper-preview.jpg",
    name: "S. Johansson",
    time: "3 hours ago",
    status: "Black Widow",
  },
  {
    avatar:
      "https://www.gannett-cdn.com/presto/2023/02/15/USAT/d22ad1a7-00ec-425f-b1c9-a643fcfcda9f-AFP_AFP_336E7FA.jpg",
    name: "Jeremy Renner",
    time: "4 hours ago",
    status: "Hawkeye",
  },
  {
    avatar: "https://flxt.tmsimg.com/assets/308495_v9_bb.jpg",
    name: "Anthony Mackie",
    time: "8 hours ago",
    status: "Falcon",
  },
  {
    avatar:
      "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRpW3LbFgFmL3wF7AxVmNPkfKKVTg3hdeDwJAkQ6ffgI1aqNQH-ofOktw9CRPIIPA8IRuPHc9YeW1BGdTI",
    name: "Chris Evans",
    time: "22 hours ago",
    status: "Captain America",
  },
  {
    avatar:
      "https://hips.hearstapps.com/hmg-prod/images/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg?crop=1xw:0.75xh;center,top&resize=1200:*",
    name: "Chris Hemswoth",
    time: "1 day ago",
    status: "Thor the god of thunder",
  },
  {
    avatar: "https://www.emmys.com/sites/default/files/Mark-Ruffalo.jpg",
    name: "Mark Ruffalo",
    time: "Dec 10",
    status: "The Incrdible Hulk",
  },
  {
    avatar:
      "https://www.themoviedb.org/t/p/w500/mclHxMm8aPlCPKptP67257F5GPo.jpg",
    name: "Tom Hiddleston",
    time: "Dec 8",
    status: "Loki",
  },
  {
    avatar: "https://flxt.tmsimg.com/assets/71830_v9_bb.jpg",
    name: "Don Cheadle",
    time: "Dec 6",
    status: "Rhodey",
  },
  {
    avatar:
      "https://m.media-amazon.com/images/M/MV5BMTk3NDE3Njc5M15BMl5BanBnXkFtZTYwOTY5Nzc1._V1_.jpg",
    name: "Stan Lee",
    time: "Dec 4",
    status: "The Big Daddy",
  },
  {
    avatar:
      "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_FMjpg_UX1000_.jpg",
    name: "S.L. Jackson",
    time: "Dec 2",
    status: "Shield",
  },
];

const JsonData = {
  chat1: [
    {
      from: {
        type: "user1",
      },
      msg: {
        message: "Hi, how can I help you?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message:
          "Hi guys Ive got the O2 package and have really slow internet. A speed check online said i can get 3mbps but it seems more like 0.5 these days, just freezing and taking ages to open pages and open audio files for example. I have decided to switch to the UPC package which offers 10mbps but do you think i will get it?",
      },
    },
    {
      from: {
        type: "user1",
      },
      msg: {
        message:
          "Sure! I will definitely help you with you query. Could you please confirm your email address?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message: "john.mayers@gmail.com",
      },
    },
  ],
  chat2: [
    {
      from: {
        type: "user1",
      },
      msg: {
        message: "Hi, how can I help you?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message:
          "Hi, my computer is not working since yesterday. I need the computer to reboot my Iron Man suit. Could you please help me?",
      },
    },
    {
      from: {
        type: "user1",
      },
      msg: {
        message:
          "Sure! I will definitely help you with you query. Could you please confirm your email address?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message: "tony.stark@gmail.com",
      },
    },
  ],
};

function toggleMenu() {
  const menu = document.getElementById("menuOptions");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

document
  .querySelector('#menuOptions input[type="text"]')
  .addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const list = document.getElementById("chatList");
    list.innerHTML = "";

    usersData.forEach((user) => {
      if (user.name.toLowerCase().includes(query)) {
        const item = document.createElement("div");
        item.className = "chat-item";
        item.innerHTML = `
    <img src="${user.avatar}" alt="profile" />
    <div class="chat-info">
      <h4>${user.name}</h4>
      <p>${user.status}</p>
    </div>
  `;
        item.addEventListener("click", () => {
          // Remove all 'selected' class
          document
            .querySelectorAll(".chat-item")
            .forEach((i) => i.classList.remove("selected"));
          item.classList.add("selected");

          openChat(user); // Send user object instead of index
        });
        list.appendChild(item);
      }
    });
  });

function changeTheme() {
  const selectedColor = document.getElementById("themeColor").value;
  const headers = document.querySelectorAll(".sidebar-header, .chat-header");
  headers.forEach((header) => (header.style.backgroundColor = selectedColor));
  document.getElementById("charWordCount").style.color = selectedColor;
  document.querySelector(".chat-input button").style.backgroundColor =
    selectedColor;

  document.getElementById("searchButton").style.backgroundColor = selectedColor;
}

function changeChatBg() {
  const selectedImage = document.getElementById("chatBgSelect").value;
  document.getElementById(
    "chatBody"
  ).style.backgroundImage = `url(${selectedImage})`;
  document.getElementById("chatBody").style.backgroundSize = "cover";
  document.getElementById("chatBody").style.backgroundRepeat = "no-repeat";
  document.getElementById("chatBody").style.backgroundPosition = "center";
}

// Event listener to trigger background change
document
  .getElementById("chatBgSelect")
  .addEventListener("change", changeChatBg);

// Function to initialize the page with a default background
window.addEventListener("DOMContentLoaded", function () {
  changeChatBg(); // This will set the default background when the page loads
});

function loadChatList() {
  const list = document.getElementById("chatList");
  list.innerHTML = "";
  usersData.forEach((user) => {
    const item = document.createElement("div");
    item.className = "chat-item";
    item.innerHTML = `
  <img src="${user.avatar}" alt="profile" />
  <div class="chat-info">
    <h4>${user.name}</h4>
    <p>${user.status}</p>
  </div>
`;
    item.addEventListener("click", () => {
      document
        .querySelectorAll(".chat-item")
        .forEach((i) => i.classList.remove("selected"));
      item.classList.add("selected");
      openChat(user);
    });
    list.appendChild(item);
  });
}

function openChat(user) {
  // Remove selected class from all items
  document
    .querySelectorAll(".chat-item")
    .forEach((el) => el.classList.remove("selected"));

  document.getElementById("chatUserInfo").innerHTML = `
<div class="chat-user-info">
  <img src="${user.avatar}" alt="profile" />
  <div>
    <h4>${user.name}</h4>
    <p>${user.status}</p>
  </div>
</div>
`;

  const body = document.getElementById("chatBody");
  body.innerHTML = "";

  const userIndex = usersData.findIndex((u) => u.name === user.name); // Find index to get chatKey
  const chatKey = `chat${userIndex + 1}`;
  const chatData = JsonData[chatKey] || [];

  chatData.forEach(({ from, msg }) => {
    const message = document.createElement("div");
    message.className = `message ${from.type === "user1" ? "bot" : "user"}`;
    message.innerHTML = `<p>${msg.message}</p>`;
    body.appendChild(message);
  });

  body.scrollTop = body.scrollHeight;
}

const chatInput = document.getElementById("chatInput");
const charWordCount = document.getElementById("charWordCount");

chatInput.addEventListener("input", () => {
  const text = chatInput.value.trim();
  const characters = text.length;
  const words = text ? text.split(/\s+/).length : 0;
  charWordCount.textContent = `Current characters: ${characters} and current words: ${words}`;
});

function sendMessage() {
  const input = document.getElementById("chatInput");
  const msg = input.value.trim();
  if (!msg) return;
  const body = document.getElementById("chatBody");
  const message = document.createElement("div");
  message.className = "message user";
  message.innerHTML = `<p>${msg}</p>`;
  body.appendChild(message);
  input.value = "";
  body.scrollTop = body.scrollHeight;
}

function closeChat() {
  document.getElementById("chatUserInfo").innerHTML = "";
  document.getElementById("chatBody").innerHTML = "";
}

loadChatList();
setTimeout(() => {
  document.querySelectorAll(".chat-item")[0]?.click();
}, 0);
openChat(0);
