const handler = async (r, res) => {
  res.status(401).json({ msg: "un autorized" });
};

export default handler;
