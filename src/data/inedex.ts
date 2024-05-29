import { IProduct } from "../interfaces/Index";
import { v4 as uuid } from "uuid";

export const products: IProduct[] = [
  {
    id: uuid(),
    imageLink:
      "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
    imageAlt: "Corvette",
    title: "Corvette",
    price: "200000",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quae distinctio",
    colors: ["red", "blue", "green"],
    category: {
      name: "cars",
      imageLink:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
    },
  },
  {
    imageLink:
      "https://i.pinimg.com/736x/d2/6d/2a/d26d2aab2ff63cb48b3a91b0e8e0aa55.jpg",
    imageAlt: "Ferrari",
    title: "Ferrari",
    price: "400000",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quae distinctio",
    colors: ["red", "blue", "green", "yellow"],
    category: {
      name: "Ferrari",
      imageLink:
        "https://i.pinimg.com/736x/d2/6d/2a/d26d2aab2ff63cb48b3a91b0e8e0aa55.jpg",
    },
  },
  {
    imageLink:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
    imageAlt: "Bugati",
    title: "Bugati",
    price: "5000000",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quae distinctio",
    colors: ["red", "blue", "green", "yellow"],
    category: {
      name: "Ferrari",
      imageLink:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  },
  {
    imageLink:
      "https://www.motortrend.com/uploads/sites/11/2016/09/Chevrolet-Camaro-1LE-660x440.jpg?w=768&width=768&q=75&format=webp",
    imageAlt: "BMW",
    title: "BMW",
    price: "3400000",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quae distinctio",
    colors: ["red", "blue", "green", "yellow"],
    category: {
      name: "Ferrari",
      imageLink:
        "https://www.motortrend.com/uploads/sites/11/2016/09/Chevrolet-Camaro-1LE-660x440.jpg?w=768&width=768&q=75&format=webp",
    },
  },
  {
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gmELq9_9wbLXf_zp1PovxjoEda8B_6SIaBg-40xr3DtyuT8M8A9StmG9ye8gBbT7SAg&usqp=CAU",
    imageAlt: "Ferrari",
    title: "Ferrari",
    price: "400000",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quae distinctio",
    colors: ["red", "blue", "green", "yellow"],
    category: {
      name: "Ferrari",
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gmELq9_9wbLXf_zp1PovxjoEda8B_6SIaBg-40xr3DtyuT8M8A9StmG9ye8gBbT7SAg&usqp=CAU",
    },
  },
  {
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9p2CtuXDCNE9PmNnBO0WdANEspEK8hSbb3njJMa9piGd6OgYnAPAKCpWTSl0hTY89KA&usqp=CAU",
    imageAlt: "Ferrari",
    title: "Ferrari",
    price: "6500000",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quae distinctio",
    colors: ["red", "blue", "green", "yellow"],
    category: {
      name: "Ferrari",
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9p2CtuXDCNE9PmNnBO0WdANEspEK8hSbb3njJMa9piGd6OgYnAPAKCpWTSl0hTY89KA&usqp=CAU",
    },
  },
  {
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5nabF2VWcOBNJ8dlylrn4EEtTXG483y5jB1cdmjhQdxxfvgMwUtffaFv82tQKZDm8CU&usqp=CAU",
    imageAlt: "Mercides",
    title: "Mercides",
    price: "80000000",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quae distinctio",
    colors: ["red", "blue", "green", "yellow"],
    category: {
      name: "Ferrari",
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5nabF2VWcOBNJ8dlylrn4EEtTXG483y5jB1cdmjhQdxxfvgMwUtffaFv82tQKZDm8CU&usqp=CAU",
    },
  },
  {
    imageLink:
      "https://i.pinimg.com/736x/d2/6d/2a/d26d2aab2ff63cb48b3a91b0e8e0aa55.jpg",
    imageAlt: "Ferrari",
    title: "Ferrari",
    price: "9000600",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quae distinctio",
    colors: ["red", "blue", "green", "yellow"],
    category: {
      name: "Renaut",
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfr-MUbqwDFbKfN5FBxrvaKmH6TLnVCSafccoeR7Fy9POMx3Ufwg9NIVo7fAtQaecP-5U&usqp=CAU",
    },
  },
];
