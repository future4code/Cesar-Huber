import app from "./app";
import PostBusiness from "./business/PostBusiness";
import UserBusiness from "./business/UserBusiness";
import PostController from "./controller/PostController";
import UserController from "./controller/UserController";
import PostData from "./data/PostData";
import UserData from "./data/UserData";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/IdGenerator";

const userController = new UserController(
  new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
  )
)

const postController = new PostController(
  new PostBusiness(
    new UserData(),
    new PostData(),
    new IdGenerator(),
    new Authenticator()
  )
)

app.post('/user/signup', userController.signup)

app.post('/user/login', userController.login)

app.post('/post', postController.newPost)

app.get('/post/:id', postController.findPostById)