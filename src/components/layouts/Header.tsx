import React, { FC, useState } from "react";
interface Props {
  username: string;
}
const Header: FC<Props> = (props: Props) => {
  const menus = [
    { id: "home", text: "Home" },
    { id: "services", text: "Services" },
  ];
  //   const [counter, setCounter] = useState(0);
  const [menuItems] = useState(menus);

  const counterMenu = {
    menus: menus,
    counter: 0,
  };
  const [menuItemsCounter, setMenuItemsCounter] = useState(counterMenu);
  console.log("menuItems===>>>", menuItems);
  const changeMenu = () => {
    setMenuItemsCounter({
      menus: [{ id: "1", text: "Customer" }], // menu, counter
      counter: menuItemsCounter.counter + 1,
    });
  };
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <div className="menu">
        <ul className="menu-item">
          {menuItemsCounter.menus.map((menu, i) => (
            <li className="item" key={i}>
              {menu.text}
            </li>
          ))}
        </ul>
        <span>
          Welcome: {props.username} {menuItemsCounter.counter}
        </span>
        <button onClick={changeMenu}>Change Menu</button>
      </div>
    </header>
  );
};

export default Header;
