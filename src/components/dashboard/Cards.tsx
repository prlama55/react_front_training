import React, { FC } from "react";
interface Props {
  cardData: any;
}
const Cards: FC<Props> = (props: Props) => {
  return <h1>Cards section: {JSON.stringify(props)}</h1>;
};

export default Cards;
