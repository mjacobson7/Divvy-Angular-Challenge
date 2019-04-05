
module.exports = {

    getItemId: (req, res) => {
        const { x, y } = req.query;
        const itemId = (1 / 2 * Math.pow(y, 2) + (x - 1.5) * y + (Math.pow(x, 2) - x) / 2 + 1).toString();
        res.status(200).json(itemId);
    }


    // I came up with a few solutions and utlimately decided with the mathematical one because I felt it was better for performance.  I probably wouldn't chose this if readability was more important.

    // Here are a few other solutions:

    // RECURSIVE:

    // const init = (xx, y) => {
    //     let count = 0;
    //     count = getXValue(x, count);
    //     return getYValue(x, y - 1, count);
    //   };

    //   const getXValue = (x, count) => {
    //     x--;
    //     if (x >= 0) {
    //       count += x + 1;
    //       return getXValue(x, count);
    //     }
    //     return count;
    //   };

    //   const getYValue = (x, y, count) => {
    //     y--;
    //     if (y >= 0) {
    //       count += x + y;
    //       return getYValue(x, y, count);
    //     }
    //     return count;
    //   };

    //   init(1, 1);


    //----------------------------------------------------------------

    // LOOPING:

    // const init = (x, y) => {
    //     let count = 0;

    //     Array(x).fill().map((_, i) => {
    //         count += i + 1;
    //     });

    //     Array(y - 1).fill().map((_, i) => {
    //         count += x + i;
    //     })

    //     return count;
    // }

    //   init(1,1);

}