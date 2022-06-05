const app = require("express")();

const PORT = process.argv.slice(2)[0];

app.get("/", (req, res) => {
	res.send("App running at Port "+PORT);
})

app.listen(PORT, () => {
	console.log("server started at port "+PORT);
})