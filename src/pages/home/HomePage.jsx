import classes from "./HomePage.module.css";
import {Link, NavLink, Outlet, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {getArticles} from "../../api.jsx";
import {errorNotification, successNotification} from "../../utils.js";
import BackdropLoader from "../../components/backdrop-loader/BackdropLoader.jsx";
import {ArticleContext} from "../../contexts/ArticleContext.jsx";

export default function HomePage() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { reFetched, setReFetched } = useContext(ArticleContext);
    const { articleId } = useParams();

    const fetchArticles = () => {
        setIsLoading(true);
        getArticles().then(response => {
            successNotification('Articles fetched successfully.')
            const temp = [];
            for (const key in response.data) {
                const obj = {
                    id: key,
                    ...response.data[key]
                }
                temp.push(obj);
            }
            setArticles(temp);
        }).catch(error => {
            errorNotification('An error occurred');
        }).finally(() => {
            setIsLoading(false);
        });
    }

    useEffect(() => {
        fetchArticles();
    }, [reFetched]);
    return (
        <>
            {isLoading && <BackdropLoader/>}
            <div className="row">
                <div className={`${classes.articleContainer} col-4 py-2`}>
                    <div className={classes.homeHeader}>
                        <h4>List of articles</h4>
                        <Link to="new-article">
                            <button className="btn btn-primary">New Article</button>
                        </Link>
                    </div>
                    {articles.length > 0 && articles.map(article => (
                        <NavLink
                            to={`article/${article.id}`}
                            key={article.id}
                            className={articleId === article.id ? `${classes.articleLink} ${classes.activeArticle}` : `${classes.articleLink}`}
                        >
                            {article.title}
                        </NavLink>
                    ))}
                </div>
                <div className="col-8">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}
