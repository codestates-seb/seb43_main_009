const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

let data = [
  {
    itemName: "제품명",
    entpName: "회사명",
    efcyQesitm: "효능",
    useMethodQesitm: "복용방법(사용법)",
    atpnQesitm: "사용상 주의사항",
    intrcQesitm: "사용중 주의사항(약,음식)",
    itemImage: "약 이미지",
  },
];

app.get("/search", (req, res) => {
  const searchTerm = req.query.searchTerm;
  const results = data.filter((item) => item.itemName.includes(searchTerm));
  res.json(results);
});

app.listen(port, () => {
  console.log(`JSON server listening at http://localhost:${port}`);
});
