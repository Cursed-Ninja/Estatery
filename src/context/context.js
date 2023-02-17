import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";

const initialState = createContext();
faker.seed(1);

const realEstates = [...Array(30)].map(() => ({
  id: faker.datatype.uuid(),
  price: faker.datatype.number({ max: 5000, min: 1000 }),
  title: faker.address.cityName(),
  address: faker.address.streetAddress() + ", " + faker.address.cityName(),
  image: `https://source.unsplash.com/random/900x700/?building,${faker.datatype.number(
    1000
  )}`,
  bedRooms: faker.datatype.number({ max: 3, min: 1 }),
  bathRooms: faker.datatype.number({ max: 2, min: 1 }),
  breadth: faker.datatype.number({ max: 100, min: 50 }),
  length: faker.datatype.number({ max: 100, min: 50 }),
  date: faker.date.future(1, new Date()),
  type: (() => {
    switch (faker.datatype.number(3, 1)) {
      case 1:
        return "Apartment";
      case 2:
        return "House";
      case 3:
        return "Villa";
      default:
        return "Apartment";
    }
  })(),
  popular: faker.datatype.boolean(),
}));

const Context = ({ children }) => {
  const [filter, setFilter] = useState({
    Name: "",
    Price: [1000, 5000],
    Date: null,
    Type: "All",
  });

  return (
    <initialState.Provider value={{ realEstates, filter, setFilter }}>
      {children}
    </initialState.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(initialState);
};

export default Context;
