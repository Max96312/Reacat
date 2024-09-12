import { MenuNavItem } from "../components/MenuNavItem";
import { MenuItem } from "../pages/MenuPage";

export const MenuNav = ({ menuData }: MenuItem) => {
  console.log(menuData);
  return (
    <div className="ztree">
      {menuData.map((ele) => {
        return (
          <MenuNavItem
            key={ele.id}
            menuName={ele.urlNm}
            depth={menuData.depth}
          />
        );
      })}
    </div>
  );
};
