export const notFound = (req, res) => {
    res.status(404).json({ error: `page not found for ${req.method} ${req.url}` });
};
