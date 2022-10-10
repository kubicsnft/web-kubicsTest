import connectionDB from "../../database/connectionDB";
import NFT from "../../database/NFT";

connectionDB();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const nfts = await NFT.find({ mint: true });

        res.status(200).json({ success: true, data: nfts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const nfts = await NFT.create(req.body);

        res.status(201).json({ success: true, data: nfts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const nfts = await NFT.updateOne(id, {
          $set: req.body,
        });
        if (!nfts) {
          res.status(400).json({ success: false });
        }

        res.status(201).json({ success: true, data: nfts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
