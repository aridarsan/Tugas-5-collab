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

// Async-Await
const handleOnClick = async () => {
  console.log("Clicked...");
  try {
  const dataUser = await getUser(12);
  console.log(dataUser);
  document.querySelector("#hasil").innerText = dataUser.id + " " +dataUser.message
  } catch (err) {
  console.log(err);
  }
};