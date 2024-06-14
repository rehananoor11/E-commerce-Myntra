export default function Loading() {
  return (
    <>
      <div className="text-center">
        <div
          className="spinner-border"
          role="status"
          style={{
            width: "100px",
            height: "100px",
            marginTop: "10%",
            marginBottom: "10%",
          }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}
