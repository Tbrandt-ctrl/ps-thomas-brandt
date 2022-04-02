import styles from "./MenuNavBar.module.scss";

import Link from "next/link";

import menu_items from "./menu_items";

const MenuNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav  ">
            {menu_items.map((item, index) => {
              return (
                <li key={index} className={`nav-item `}>
                  <Link href={item.link}>
                    <a
                      className={`${styles.link} nav-link  ${
                        item.important && "text-danger"
                      }`}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenuNavBar;
