const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send("Hello sir , my name is ghaya ammari");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
});
