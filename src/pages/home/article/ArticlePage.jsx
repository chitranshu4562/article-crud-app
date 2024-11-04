import classes from "./ArticlePage.module.css";
import {useNavigate, useParams} from "react-router-dom";
import {deleteArticle, getArticleById} from "../../../api.jsx";
import {useContext, useEffect, useState} from "react";
import BackdropLoader from "../../../components/backdrop-loader/BackdropLoader.jsx";
import {Button} from "@mui/material";
import {ArticleContext} from "../../../contexts/ArticleContext.jsx";

export default function ArticlePage() {
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { articleId } = useParams();
    const { reFetched, setReFetched } = useContext(ArticleContext);
    const navigate = useNavigate();

    const fetchArticleById = () => {
        setIsLoading(true);
        getArticleById(articleId).then(response => {
            setArticle(response.data);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    const handleEditArticle = () => {
        navigate(`/home/edit-article/${articleId}`);
    }

    const handleDeleteArticle = () => {
        if (confirm('Are you want to delete this article ?')) {
            setIsLoading(true);
            deleteArticle(articleId).then(response => {
                setIsLoading(false);
                setReFetched(!reFetched);
                navigate('/home');
            }).catch(error => {
                setIsLoading(false);
                console.error(error)
            })
        }
    }

    useEffect(() => {
        fetchArticleById();
    }, [articleId]);
    return (
        <>
            {isLoading && <BackdropLoader/>}
            {article && (
                <div className={classes.articleBox}>
                    <h4>Title: {article.title}</h4>
                    <p>Description: {article.description}</p>
                    <div className="d-flex justify-content-end gap-2">
                        <Button type="button" variant="contained" onClick={handleEditArticle}>Edit</Button>
                        <Button type="button" variant="contained" onClick={handleDeleteArticle}>Delete</Button>
                    </div>
                </div>
            )}
        </>
    )
}
