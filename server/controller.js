
module.exports = {

    getItemId: (req, res) => {
        const { x, y } = req.query;
        const itemId = (1/2 * Math.pow(y,2) + (x - 1.5) * y + (Math.pow(x,2) - x) / 2 + 1).toString();
        res.status(200).json(itemId);
    }
}