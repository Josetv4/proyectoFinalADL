import UserLogged from "../../utils/UtilsNavbar/UserLogged";
import AdminLogged from "../../utils/UtilsNavbar/AdminLogged";
import RegularUserLogged from "../../utils/UtilsNavbar/RegularUserLogged";
import SellerUserLogged from "../../utils/UtilsNavbar/SellerUserLogged";

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
