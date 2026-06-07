import { sendPage } from '#public/html';

export const authLogin = (req, res) => {
    sendPage(res, 'User logged in');
};

export const authSignup = (req, res) => {
    sendPage(res, 'User signed up');
};
