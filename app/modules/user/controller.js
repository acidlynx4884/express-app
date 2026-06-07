export const userCreate = (req, res) => {
    const { name, email, password } = req.body;
    res.render('user/created', { name });
};

export const userGetById = (req, res) => {
    const { id } = req.params;
    res.json({ message: 'User found', id });
};

export const userDelete = (req, res) => {
    const { id } = req.params;
    res.json({ message: 'User deleted', id });
};
