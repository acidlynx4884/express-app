export const homePage = (req, res) => {
    res.render('home/index', { title: 'Home' });
};

export const aboutPage = (req, res) => {
    res.render('about/index', { title: 'About' });
};
