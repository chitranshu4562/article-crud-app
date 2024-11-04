import classes from "./NewArticle.module.css";
import ArticleForm from "../../../components/article-form/ArticleForm.jsx";
import {useContext, useState} from "react";
import BackdropLoader from "../../../components/backdrop-loader/BackdropLoader.jsx";
import {createArticle} from "../../../api.jsx";
import {errorNotification, successNotification} from "../../../utils.js";
import {useNavigate} from "react-router-dom";
import {ArticleContext} from "../../../contexts/ArticleContext.jsx";

export default function NewArticle() {
    const { reFetched, setReFetched } = useContext(ArticleContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleAddArticle = (articleData) => {
        setIsLoading(true);
        createArticle(articleData).then(response => {
            setReFetched(!reFetched);
            navigate(`/home/article/${response.data.name}`)
        }).catch(error => {
            errorNotification('An error occurred while creating article')
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <>
            {isLoading && <BackdropLoader/>}
            <div className={classes.newArticleBox}>
                <h3 className="text-center">Add Article</h3>
                <ArticleForm onSubmit={handleAddArticle}/>
            </div>
        </>
    )
}
