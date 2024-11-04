import classes from "./ErrorPage.module.css";
import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <div className={classes.errorBox}>
                <h1>Oops, An unexpected error occurred !!</h1>
                <h4 className="text-danger">Error Status: {error.statusText}</h4>
                <p className="text-danger">Error Message: {error.error.message}</p>
            </div>
        </>
    )
}
