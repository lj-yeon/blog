const Loading = ({ isLoading }) => {
  return (
    <div className={`loading ${!isLoading ? "fade-out" : ""}`}>
      <span className={`dot ${!isLoading ? "expand" : "bounce"}`}></span>
    </div>
  );
};

export default Loading;
