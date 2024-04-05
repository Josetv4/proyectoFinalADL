import UserLogged from "./UserLogged";
import AdminLogged from "./AdminLogged";
import RegularUserLogged from "./RegularUserLogged";
import SellerUserLogged from "./SellerUserLogged";

function getUserComponent(userType) {
    switch (userType) {
        case 'admin':
            return AdminLogged;
        case 'seller':
            return SellerUserLogged;
        case 'regular':
            return RegularUserLogged;
        default:
            return UserLogged;
    }
}

export { getUserComponent };
