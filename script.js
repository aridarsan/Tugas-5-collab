// promise chain
const getUserPromsChain = (id) => {
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
  
  const handlePromsChain = () => {
    console.log("Clicked...");
    getUserPromsChain(10)
      .then((result) => {
        const dataUser = result;
        console.log(dataUser);
        document.querySelector("#chainProms").innerText = result.id + " " +result.message
      })
      .catch((err) => {
        console.log(err);
      });
  };

//   async await
const getUserAsyncAwait = (id) => {
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
    console.log("Clicked...");
    try {
    const dataUser = await getUserAsyncAwait(12);
    console.log(dataUser);
    document.querySelector("#asyncAwait").innerText = dataUser.id + " " +dataUser.message
    } catch (err) {
    console.log(err);
    }
  };

//   promise all
const getUserPromsAll = (id) => {
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
    console.log("Clicked...");
    Promise.all([getUserPromsAll(11)])
      .then((response) => {
        const dataUser = response[0];
        console.log(dataUser);
        document.querySelector("#promiseAll").innerText = dataUser.id + dataUser.message
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  //Promise all from module

const getFirstName = () => {
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
    console.log("Tunggu sebentar...")
    Promise.all([getFirstName(), getLastName()])
    .then(([hasil1, hasil2]) =>{
      document.querySelector("#promiseAllModule").innerText = hasil1 + hasil2
    })
  }