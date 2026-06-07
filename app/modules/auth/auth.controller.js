export const authLogin = (req, res) => {
    const { email, password } = req.body;
    res.json({ 
        message: 'User logged in', 
        email 
    });
};

export const authSignup = (req, res) => {
    const { name, email, password } = req.body;
    res.json({
        message: 'User signed up', 
        name, 
        email 
    });
};
