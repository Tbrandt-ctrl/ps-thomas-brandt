import Link from "next/link";

const StoreNav = () => {
  return (
    <div className="d-flex flex-row gap-3">
      <span className="">
        <i className="bi bi-pin-map"></i> Trouver un Magasin
      </span>
      <Link href="#">Entrepôt </Link>{" "}
    </div>
  );
};

export default StoreNav;
