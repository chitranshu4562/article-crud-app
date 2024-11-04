import classes from "./EditArticle.module.css";
import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {getArticleById, updateArticle} from "../../../api.jsx";
import ArticleForm from "../../../components/article-form/ArticleForm.jsx";
import BackdropLoader from "../../../components/backdrop-loader/BackdropLoader.jsx";
import {ArticleContext} from "../../../contexts/ArticleContext.jsx";

export default function EditArticle() {
    const { articleId } = useParams();
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { reFetched, setReFetched } = useContext(ArticleContext);

    const fetchArticle = () => {
        setIsLoading(true);
        getArticleById(articleId).then(response => {
            setArticle(response.data);
        }).catch(error => {
            console.error(error)
        }).finally(() => {
            setIsLoading(false);
        });
    }

    const handleEditArticle = (updatedArticleData) => {
        setIsLoading(true);
        updateArticle(articleId, updatedArticleData).then(response => {
            setIsLoading(false);
            setReFetched(!reFetched);
            navigate(`/home/article/${articleId}`);
        }).catch(error => {
            setIsLoading(false);
            console.error(error)
        });
    }

    useEffect(() => {
        fetchArticle();
    }, []);

    return (
        <>
            {isLoading && <BackdropLoader/>}
            {article && (
                <div className={classes.editArticleBox}>
                    <h3 className="text-center">Edit Article</h3>
                    <ArticleForm
                        title={article.title}
                        description={article.description}
                        onSubmit={handleEditArticle}
                    />
                </div>
            )}
        </>
    )
}
