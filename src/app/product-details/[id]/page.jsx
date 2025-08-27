
import { dbConnect } from "../../../lib/dbconnect"
import { Product } from "../../../model/post.model"

import Cart from "../../../components/ProductDetail"

async function page({ params }) {

  const { id } = await params;
  console.log("product id ", id)
  await dbConnect();
  const product = await Product.findById(id)
  const parseproduct = JSON.parse(JSON.stringify(product))
  console.log(product)

  return (
    <>
      <Cart cart={parseproduct} />
    </>
  )
}

export default page;
