import axios from "axios";
import {API_BASE_URL} from "./constants.js";

export const createArticle = (articleData) => {
    return axios.post(API_BASE_URL + 'articles.json', articleData);
}

export const getArticles = () => {
    return axios.get(API_BASE_URL + 'articles.json')
}

export const getArticleById = (articleId) => {
    return axios.get(API_BASE_URL + `articles/${articleId}.json`)
}

export const updateArticle = (articleId, articleData) => {
    return axios.patch(API_BASE_URL + `articles/${articleId}.json`, articleData);
}

export const deleteArticle = (articleId) => {
    return axios.delete(API_BASE_URL + `articles/${articleId}.json`)
}
