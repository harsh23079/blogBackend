const express = require("express");
const createPost = require("../controllers/createPost");
const createCommentOnPost = require("../controllers/createCommentOnPost");
const likeOnPost = require("../controllers/likeOnPost");
const unLikeOnPost = require("../controllers/unLikeOnPost");
const getAllPost = require("../controllers/getAllPost");
const getPostById = require("../controllers/getPostById");
const routes = express.Router();

routes.get("/getAllPost", getAllPost);
routes.get("/getPostId/:id",getPostById);
routes.post("/create", createPost);
routes.post("/comment", createCommentOnPost);
routes.post("/like", likeOnPost);
routes.post("/unlike", unLikeOnPost);

module.exports = routes;
