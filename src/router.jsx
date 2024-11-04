import {createBrowserRouter, Navigate} from "react-router-dom";
import RootLayout from "./pages/root/RootLayout.jsx";
import ErrorPage from "./error-page/ErrorPage.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import AboutPage from "./pages/About/AboutPage.jsx";
import CareerPage from "./pages/career/CareerPage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";
import ArticlePage from "./pages/home/article/ArticlePage.jsx";
import NewArticle from "./pages/home/new-article/NewArticle.jsx";
import {ArticleContextProvider} from "./contexts/ArticleContext.jsx";
import EditArticle from "./pages/home/edit-article/EditArticle.jsx";

const router = createBrowserRouter([
    {path: '/', element: <RootLayout/>, errorElement: <ErrorPage/>, children: [
            {path: '', element: <Navigate to="home"/>},
            {path: 'home', element: (
                <ArticleContextProvider>
                    <HomePage/>
                </ArticleContextProvider>
                ), children: [
                    {path: 'new-article', element: <NewArticle/>},
                    {path: 'article/:articleId', element: <ArticlePage/>},
                    {path: 'edit-article/:articleId', element: <EditArticle/>}
                ]},
            {path: 'about', element: <AboutPage/>},
            {path: 'career', element: <CareerPage/>},
            {path: 'contact', element: <ContactPage/>}
        ]}
])

export default router;
