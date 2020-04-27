import User from "./pages/user";

export default [{ children: User, url: "/user:id", private: true, redirectUrl: 'login' }];
