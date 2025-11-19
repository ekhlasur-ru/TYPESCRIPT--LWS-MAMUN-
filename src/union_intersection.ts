//uninon and intersection type
//union type (|) example (uses input form || dynamic api response)
let value: string | number;

type productID = string | number;

function getProduct(id: productID) {
  console.log(`Fetching product with id: ${id}`);
}
getProduct("12aa22bb");
getProduct(39568);

//intersection type (& ampersign)

type Userr = {
  id: string;
  name: string;
};
type Admin = {
  isAdmin: boolean;
};

type AdminUser = Userr & Admin;

const admin: AdminUser = {
  id: "ekhlas1234",
  name: "ekhlasur rahman",
  isAdmin: true,
};

// TODO literal types in typescript


