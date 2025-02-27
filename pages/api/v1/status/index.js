import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 2 as sum;");
  console.log(result);
  response.status(200).json({ text: "Hello World" });
}

export default status;
