const getUser1 = (id) => {
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

//promise all

Promise.all
const handleOnClick = () => {
  console.log("Clicked...");
  Promise.all([getUser1(11)])
    .then((response) => {
      const dataUser = response[0];
      console.log(dataUser);
      document.querySelector("#hasil").innerText = dataUser
    })
    .catch((err) => {
      console.log(err);
    });
};
