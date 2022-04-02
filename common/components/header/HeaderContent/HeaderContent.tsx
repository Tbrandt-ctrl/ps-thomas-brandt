import StoreNav from "@/components/header/StoreNav";
import Logo from "@/components/elements/Logo";
import Search from "@/modules/search/components/Search";
import LangSwitch from "@/modules/lang/components/LangSwitch";
import Login from "@/modules/auth/components/Login";
import Basket from "@/modules/basket/components/Basket";

const HeaderContent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 d-flex flex-column justify-content-start align-items-start p-4">
          <StoreNav />
        </div>

        <div className="col-4 d-flex justify-content-center align-items-center p-4">
          <Logo />
        </div>

        <div className="col-4 d-flex flex-column p-4 gap-3">
          <div className="d-flex flex-row justify-content-end gap-3">
            <LangSwitch />
            <Login />
            <Basket />
          </div>
          <div className="d-flex flex-row justify-content-end">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
