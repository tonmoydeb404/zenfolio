import { getProjectList } from "../../services/cms";

export default async function handler(req, res) {
  try {
    const response = await getProjectList();
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({ message: "something wents to wrong" });
  }
}
