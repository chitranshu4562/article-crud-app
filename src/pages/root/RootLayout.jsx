import classes from "./RootLayout.module.css";
import {Link, NavLink, Outlet} from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <div className={classes.navBar}>
                <NavLink to="/home"
                         className={({isActive}) => isActive ? classes.activeNavLink : ''}
                >Home</NavLink>
                <NavLink to="/about"
                         className={({isActive}) => isActive ? classes.activeNavLink : ''}
                >About Us</NavLink>
                <NavLink to="/career"
                         className={({isActive}) => isActive ? classes.activeNavLink : ''}
                >Career</NavLink>
                <NavLink to="/contact"
                         className={({isActive}) => isActive ? classes.activeNavLink : ''}
                >Contact Us</NavLink>
            </div>
            <Outlet/>

        </>
    )
}
