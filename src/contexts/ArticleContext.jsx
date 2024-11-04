import {createContext, useState} from "react";

const ArticleContext = createContext();

const ArticleContextProvider = ({ children }) => {
    const [reFetched, setReFetched] = useState(false);

    return (
        <ArticleContext.Provider value={{ reFetched, setReFetched }}>
            { children }
        </ArticleContext.Provider>
    )
}

export { ArticleContext, ArticleContextProvider };
