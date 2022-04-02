const Search = () => {
  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" />
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>
    </form>
  );
};
export default Search;
