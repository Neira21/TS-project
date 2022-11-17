enum ROLES {
  ADMIN = "admin",
  CUSTOMER = "customer",
  AUTHOR = "author",
  SELLER = "seller",
}

type User = {
  username : string;
  role: ROLES;
}

const nicoUser: User = {
  username: "nico",
  role: ROLES.SELLER,
}
