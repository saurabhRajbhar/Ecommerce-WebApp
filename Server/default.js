import { products } from "./Constants/Data.js"
import Product from "./model/product-schema.js";

const DefaultData=()=>{
try{
    Product.insertMany(products);
    console.log('Data Imported successfully')
}catch(error){
    console.log("Error while inserting default data",error.message);
}
}

export default DefaultData;