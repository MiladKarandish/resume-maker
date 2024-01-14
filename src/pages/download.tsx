import { auth } from "../services/iLovePdf";

const Download = () => {
  const onDownload = () => {
    auth();
  };

  return (
    <div
      style={{
        width: "100dvw",
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={onDownload}
        style={{
          cursor: "pointer",
          width: "50%",
          height: "30%",
          backgroundColor: "cornflowerblue",
          color: "white",
          border: "0",
          borderRadius: "12px",
        }}
      >
        Download
      </button>
    </div>
  );
};

export default Download;
