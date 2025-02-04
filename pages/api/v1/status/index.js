function status(request, response) {
  response.status(200).json({ text: "Hello World" });
}

export default status;
