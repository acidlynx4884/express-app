export const userCreate = (req, res) => {
    const { name, email, password } = req.body;
    res.json({ message: 'User created', name });
};

export const userDelete = (req, res) => {
    const { id } = req.params;
    res.json({ message: 'User deleted', id });
};
