export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const deletProduct = (pid) => {
  return { type: DELETE_PRODUCT, pid: pid };
};

export const createProduct = (title, imgUrl, description, price) => {
  return {
    type: CREATE_PRODUCT,
    productData: {
      title: title,
      imageUrl: imgUrl,
      description: description,
      price: price,
    },
  };
};

export const updateProduct = (id, title, imgUrl, description) => {
  return {
    type: UPDATE_PRODUCT,
    pid: id,
    productData: {
      title: title,
      imageUrl: imgUrl,
      description: description,
    },
  };
};
