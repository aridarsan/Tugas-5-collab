const getUser = (id) => {
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

const handleOnClick = () => {
  console.log("Clicked...");
  getUser(10)
    .then((result) => {
      const dataUser = result;
      console.log(dataUser);
      document.querySelector("#hasil").innerText = dataUser
    })
    .catch((err) => {
      console.log(err);
    });
};