var wallets = [];
var randomWords = [];
var mailIds = [];
var users = [];
var paused = false;
const setPausedData = () => {
  wallets = [
    {
      address: "0x9ce35c8CfD42cF9472e419B4DF5429783A1f8B52",
      privateKey:
        "0x25a4bf43c996e36ea5e6a90ec56a1a74560279ba1c9899f3db9e2fd0b7e8dcb3",
    },
    {
      address: "0x349D33590b939e1E9ce8D4DdEB7B0489bFa0e1ec",
      privateKey:
        "0x12df93d7b27821a24ad4f4a2229db368e1854b9a12c5f5daf2ff626aab5189b7",
    },
    {
      address: "0x3F6d5fb38a7f14A3A634765dC0cD81D45F63ec6D",
      privateKey:
        "0xa88fb2a19102ccb65dbd14da4253009eb37532959452f67e7bb1b3f099e0d1cb",
    },
    {
      address: "0x011d3a997e098308E64c36c5de46302998D913d8",
      privateKey:
        "0x4d8d52853b8ba1575da16632f7dfccf09ae8e5ef53d8ab132737badbeea64dbd",
    },
    {
      address: "0x68c0BbB6570cfcef4Be871Ebe01f5F143fF7cE79",
      privateKey:
        "0x4009ee39c0c3edf4eaca23357211481b240bd4ff9364428bbc6533fa3ac93bac",
    },
    {
      address: "0x0C3daC67FEda59D8EeD29c2942cB173A9B70Db70",
      privateKey:
        "0x68c91799779f3a877009c7f448dbc35ed6e2eec704ff164b809938ebed0ab66f",
    },
    {
      address: "0xBC3570aDb7a6f348fC49178fBb2A8A0a8E867c8E",
      privateKey:
        "0x0a67f13bd2d22939850549f3c718710ff8e7a22edaf46ddc8918eace4852327e",
    },
    {
      address: "0xA94EAe661e2e9450E24F884b9888768568201eA7",
      privateKey:
        "0x49fa0df3ca3d972937385429357ca09544c3435fe5ba1eec9e559bc060ddacdf",
    },
    {
      address: "0xAF00630a684023d36982880E60DA965AC08853dE",
      privateKey:
        "0xd335143e9259327f916767f2702da3ebe56f2606b6f4da065af10d511e9c445a",
    },
    {
      address: "0x6f6aF01011B4513f957A3cAcD359047901953748",
      privateKey:
        "0xde8f26c9063c038d34b27d8cf1ff80e01e8a2159a29e0a928f9400d2231759a3",
    },
    {
      address: "0x1391F22129418D69fe3aA7435A3AED39AAaeF505",
      privateKey:
        "0x728210393b1430afb374ee049fab1c5e5cffc05055284a8a750d8a4b81ed3db0",
    },
    {
      address: "0xc5a23E1b0E9e5CA365FC3189AcbF1731550Ea5ca",
      privateKey:
        "0x68f5d2959801607e5a73639817eb8f1c63647dee72dff0642aaaeaff10e34891",
    },
    {
      address: "0x247c845616C74A44B05BB5019CEB4fC2e142Bb0a",
      privateKey:
        "0xf5a25731de2de44267bad6f16a2753a55ae228766c7654f5863c287661a380b2",
    },
  ];

  mailIds = [
    "rohitparakh4+2%dez/i%&czjx@gmail.com",
    "rohitparakh4+zfx^=z7y'0&my@gmail.com",
    "rohitparakh4+9}0~zy}ss=^/y@gmail.com",
    "rohitparakh4+`50y4ysg$1_2r@gmail.com",
    "rohitparakh4+o|1!u-=f#f`3f@gmail.com",
    "rohitparakh4+i4zydi=}h6#i6@gmail.com",
    "rohitparakh4+4x3#'tjpr}1^3@gmail.com",
    "rohitparakh4+y0ugc1/{&f{'{@gmail.com",
    "rohitparakh4+3v584m~v1u$xk@gmail.com",
    "rohitparakh4+{wq5&b33^l0_`@gmail.com",
    "rohitparakh4+l&i}}6%pa}8vl@gmail.com",
    "rohitparakh4+ppc!q^^r17c$l@gmail.com",
    "rohitparakh4+gtj*n/'0-*bc1@gmail.com",
  ];

  randomWords = [
    "2%dez/i%&czjx",
    "zfx^=z7y'0&my",
    "9}0~zy}ss=^/y",
    "`50y4ysg$1_2r",
    "o|1!u-=f#f`3f",
    "i4zydi=}h6#i6",
    "4x3#'tjpr}1^3",
    "y0ugc1/{&f{'{",
    "3v584m~v1u$xk",
    "{wq5&b33^l0_`",
    "l&i}}6%pa}8vl",
    "ppc!q^^r17c$l",
    "gtj*n/'0-*bc1",
  ];
  users = [];
};
if (paused == true) setPausedData();
// Generate Ethereum Wallets with private key
const generateWallets = (n = 1) => {
  // const last = n - 1;
  // for (let i = 0; i < n; i++) {
  //   var wallet = ethers.Wallet.createRandom();
  //   const { address, privateKey } = wallet;
  //   var wallObj = { address, privateKey };
  //   wallets.push(wallObj);
  //   if (i == last) {
  //     return true;
  //   }
  // }

  console.log(wallets);
};

// Generate Random Strings to append to mail id
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!#$%&'*-/=^_`{|}~";
var passwordLength = 12;
const generateStrings = (n = 1) => {
  // if (paused == true) {
  //   setPausedData();
  //   return;
  /*}*/

  while (randomWords.length != n) {
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    randomWords.push(password);
  }
  randomWords = [...new Set(randomWords)];
  // console.log(randomWords);
};

// Generate Random Mail Id's
const createRandomMails = (
  mail = "rohitparakh4",
  domain = "@gmail.com",
  n = 1
) => {
  // if (paused == true) {
  //   alert("the wizard is paused by the developer, these are static values");
  //   setPausedData();
  //   return;
  // }
  let mailUser = mail;
  let mailDomain = domain;
  for (let i = 0; i < n; i++) {
    let newMail = mailUser + "+" + randomWords[i] + mailDomain;
    mailIds.push(newMail);
    userListenerObj.listenerValue = 1;
  }
};

const generateMailAndWallet = (n) => {
  let myPromise = new Promise(function (myResolve, myReject) {
    generateStrings(n);
    myResolve(); // when successful
    myReject(); // when error
  });

  generateWallets(n);
  myPromise.then((res) => {
    createRandomMails("rohitparakh4", "@gmail.com", n);
  });

  console.log({ wallets, mailIds });
};

// Generate HTML Table in front end
const generateHtmlTable = () => {
  let tableHolder = document.getElementById("tableHolder");
  let tableHtml = "";
  let tableHead = `<tr>
    <th>S.No</th>
    <th>Email</th>
    <th>Wallet Address</th>
    <th>Wallet Private Key</th>
  </tr>`;
  users.map((user, index) => {
    let jsx = `<tr>
    <td>${index + 1}</td>
    <td class="cursorPointer"><a onclick="copy('${user.mail}',true)">${
      user.mail
    }</a></td>
    <td class="cursorPointer" onclick="copy('${user.walletAddress}', true)">
    ${truncateEthAddress(user?.walletAddress||"")}
    </td>
    <td class="cursorPointer" onclick="copy('${
      user.walletPrivateKey
    }', true)">${truncateEthAddress(user?.walletPrivateKey||"")}</td>
  </tr>`;
    tableHtml += jsx;
  });
  tableHolder.innerHTML = `<table>${tableHead}${tableHtml}</table>`;
};

// Create complete user object with wallet and mail
const createUsers = (n = 13) => {
  console.time("Execution Time");
  // if (paused == false) {
  randomWords = [];
  wallets = [];
  mailIds = [];
  users = [];
  // } else {
  //   setPausedData();
  //   if (n >= 13) n = 13;
  // }

  console.log(n);

  let myPromise = new Promise(function (myResolve, myReject) {
    generateMailAndWallet(n);
    myResolve(); // when successful
    myReject(); // when error
  });

  myPromise
    .then((res) => {
      for (let i = 0; i < n; i++) {
        var user = {
          walletAddress: wallets[i]?.address,
          walletPrivateKey: wallets[i]?.privateKey,
          mail: mailIds[i],
        };
        users.push(user);
        // userListenerObj.listenerValue = users;
      }
      console.log(users);
    })
    .then((res) => {
      generateHtmlTable();
      ExportUserCsv();
      console.timeEnd("Execution Time");
    });
};

var userListenerObj = {
  value: 0,
  letMeKnow() {
    console.log(`The variable has changed to ${this.listenerValue}`);
  },
  get listenerValue() {
    return this.value;
  },
  set listenerValue(value) {
    this.value += value;
    generateHtmlTable();
    this.letMeKnow();
  },
};

const ExportUserCsv = () => {
  const csvString = [
    ["S.no", "Email ID", "Wallet Address", "Wallet Private Key"],
    ...users.map((user, index) => [
      index + 1,
      user.mail,
      user.walletAddress,
      user.walletPrivateKey,
    ]),
  ]
    .map((e) => e.join(","))
    .join("\n");

  console.log(csvString);

  var a = document.createElement("a");
  var link = document.createTextNode("Download Users");
  a.appendChild(link);
  a.href = "data:attachment/csv," + encodeURIComponent(csvString);
  a.target = "_blank";
  a.download = "RaffleUsers.csv";
  document.getElementById("downloadButton").innerHTML = "";
  document.getElementById("downloadButton").appendChild(a);
};

function startWorker() {
  if (typeof Worker !== "undefined") {
    if (typeof worker == "undefined") {
      worker = new Worker("scripts/demoWorker.js");
    }
    worker.onmessage = function (event) {
      // document.getElementById("result").innerHTML = event.data;
      console.log(event.data);
    };
  } else {
    document.getElementById("result").innerHTML =
      "Sorry! No Web Worker support.";
  }
}

function stopWorker() {
  worker.terminate();
  worker = undefined;
}
