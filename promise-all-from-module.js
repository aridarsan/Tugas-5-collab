//Promise

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

//Promise all

const handleOnClick = () => {
  console.log("Tunggu sebentar...")
  Promise.all([getFirstName(), getLastName()])
  .then(([hasil1, hasil2]) =>{
    document.querySelector("#hasil").innerText = hasil1 + hasil2
  })
}