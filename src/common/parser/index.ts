import { ResponseJSONPlaceHolderType } from "../helpers";

export const parserData = (data: ResponseJSONPlaceHolderType[]) => {
  if (!data) return null;

  const descriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Pellentesque ac augue eget velit varius aliquet.",
    "Sed tincidunt tellus vel velit ultricies, eget ullamcorper turpis bibendum.",
  ];

  const images = () => `https://picsum.photos/200/300?random=${Math.random()}`;

  const randomDescription = () =>
    descriptions[Math.floor(Math.random() * descriptions.length)];
  const randomRating = () => Math.floor(Math.random() * 6);

  const parsedData = data.map((item) => ({
    id: item.id,
    title: item.title,
    description: randomDescription(),
    price: Math.floor(Math.random() * 100) + 1,
    currency: "USD",
    image: images(),
    rating: randomRating(),
  }));

  return parsedData;
};
