import { sendPage } from '#public/html';

export const authLoginPage = (req, res) => {
    res.render('auth/login', { title: 'Log in' });
};

export const authSignupPage = (req, res) => {
    res.render('auth/signup', { title: 'Sign up' });
};

export const authLogin = (req, res) => {
    sendPage(res, 'User logged in');
};

export const authSignup = (req, res) => {
    sendPage(res, 'User signed up');
};
