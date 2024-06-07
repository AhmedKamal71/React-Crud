export const errorObject = (product: {
  title: string;
  description: string;
  imageLink: string;
  imageAlt: string;
  price: string;
}) => {
  const errors: {
    title: string;
    description: string;
    imageLink: string;
    imageAlt: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageLink: "",
    imageAlt: "",
    price: "",
  };

  if (
    !product.title.trim() ||
    product.title.length > 30 ||
    product.title.length < 10
  ) {
    errors.title = "Title must be between 10 and 30 characters";
  }
  if (
    !product.description.trim() ||
    product.description.length > 100 ||
    product.description.length < 20
  ) {
    errors.description = "Description must be between 20 and 100 characters";
  }
  if (!product.imageLink.trim()) {
    errors.imageLink = "Image Link is required";
  }
  if (!product.imageAlt.trim()) {
    errors.imageAlt = "Image Alt is required";
  }
  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "Price is required and must be a number";
  }

  return errors;
};
