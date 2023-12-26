import { v4 as uuidv4 } from "uuid";
import formidable from "formidable-serverless";
import saveFileFromForm from "@/lib/saveFileFromForm";
import repository from "@/lib/repository";

const createProduct = async (req, res) => {
  if (req.method !== "POST") {
    res.status(404);
    return;
  }

  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    const productId = uuidv4();
    const filePath = `public/${productId}.jpg`;
    await saveFileFromForm(fields.file, filePath);

    const { name, description, price } = fields;
    await repository.createProduct({ name, description, price, productId });
  });

  res.status(200).json({ success: true });
};

export default createProduct;
export const config = {
  api: {
    bodyParser: false,
  },
};
