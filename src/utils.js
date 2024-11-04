import {toast} from "react-toastify";

export const generateUniqueId = () => {
    const date = new Date();
    return date.getTime();
}

export const successNotification = (message) => {
    toast.success(message);
}

export const errorNotification = (message) => {
    toast.error(message);
}
