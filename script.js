// promise chain
const getUserPromsChain = () => {
  let id = document.getElementById("input-chainProms").value;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (!id && typeof id !== number) {
    reject(Error("Invalid ID"));
    }

    let response;
    if (id > 10 ) {
      response = {
      success: false,
      id: id,
      message: "User Not Found!",
      };
    } else {
      response = {
      success: true,
      id: id,
      message: "User Found",
      };
    }
    resolve(response);
    }, 2000);
  });
};
  
const handlePromsChain = () => {
  const result = document.querySelector("#chainProms");
  result.innerText = "Loading..."
  console.log("Clicked...");
  getUserPromsChain()
    .then((result) => {
      console.log(result);
      document.querySelector("#chainProms").innerText = "ID " + result.id + " " + result.message
    })
    .catch((err) => {
      console.log(err);
      result.innerText = err
    });
};

//   async await
const getUserAsyncAwait = () => {
  let id = document.getElementById("input-asyncAwait").value;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (!id) {
    reject(Error("Invalid ID"));
    }

    let response;
    if (id > 10) {
      response = {
      success: false,
      id: id,
      message: "User Not Found!",
      };
    } else {
      response = {
      success: true,
      id: id,
      message: "User Found",
      };
    }
    resolve(response);
    }, 2000);
  });
};
  
const handleAsyncAwait = async () => {
  const result = document.querySelector("#asyncAwait");
  result.innerText = "Loading..."
  console.log("Clicked...");
  try {
  const dataUser = await getUserAsyncAwait();
  console.log(dataUser);
  document.querySelector("#asyncAwait").innerText = "ID " + dataUser.id + " " + dataUser.message
  } catch (err) {
  console.log(err);
  }
};

//   promise all
const getUserPromsAll = () => {
  let id = document.getElementById("input-promiseAll").value;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (!id) {
    reject(Error("Invalid ID"));
    }

    let response;
    if (id > 10) {
      response = {
      success: false,
      id: id,
      message: "User Not Found!",
      };
    } else {
      response = {
      success: true,
      id: id,
      message: "User Found",
      };
    }
    resolve(response);
    }, 2000);
  });
};
  
Promise.all
const handlePromsAll = () => {
  const result = document.querySelector("#promiseAll");
  result.innerText = "Loading..."
  console.log("Clicked...");
  Promise.all([getUserPromsAll(11)])
    .then(([response]) => {
      const dataUser = response;
      console.log(dataUser);
      document.querySelector("#promiseAll").innerText = "ID " + dataUser.id + " " + dataUser.message
    })
    .catch((err) => {
      console.log(err);
    });
};
  
  //Promise all from module

const getFirstName = () => {
  let id = document.getElementById("input-promiseAllModule").value;
  const promise  = new Promise((resolve, reject) => {
    setTimeout(() => {
      ////ternary operation (short hand if else)
      return (true) ? resolve("Binar") : reject(Error("Gagal"))
    }, 3000);
  });
  return promise;
};

const getLastName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //ternary operation (short hand if else)
      return (true) ? resolve(` Academy`) : reject(Error("Gagal")) 
    }, 3000)
  });
};

const handleOnClick = () => {
  const result = document.querySelector("#promiseAllModule");
  result.innerText = "Loading..."
  console.log("Tunggu sebentar...")
  Promise.all([getFirstName(), getLastName()])
  .then(([hasil1, hasil2]) =>{
    document.querySelector("#promiseAllModule").innerText = hasil1 + hasil2
  })
}