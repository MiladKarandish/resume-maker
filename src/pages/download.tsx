import { auth } from "../services/iLovePdf";

const Download = () => {
  const onDownload = () => {
    auth();
  };

  return (
    <button onClick={onDownload} style={{ cursor: "pointer" }}>
      Download
    </button>
  );
};

export default Download;
