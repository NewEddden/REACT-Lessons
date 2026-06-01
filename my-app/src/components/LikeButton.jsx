import { useState } from "react";

const styles = {
  wrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#1a1a1f",
    borderRadius: "12px",
    padding: "32px 48px",
    gap: "16px",
    minWidth: "220px",
  },

  count: {
    fontSize: "42px",
    fontWeight: 700,
    color: "#fff",
    margin: 0,
  },

  btnLikes: {
    background: "#d93025",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "12px 40px",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
  },

  btnReset: {
    background: "none",
    border: "none",
    color: "#888",
    fontSize: "14px",
    cursor: "pointer",
    padding: "4px 8px",
  },
};

function LikeButton() {
  const [likes, setLikes] = useState(0);
  function handleLike() {
    setLikes(likes + 1);
  }
  function handleReset() {
    setLikes(0);
  }

  return (
    <>
      <div style={styles.wrap}>
        <p style={styles.count}>
          {likes === 0
            ? "No likes yet"
            : `${likes} ${likes === 1 ? "Like" : "Likes"}`}
        </p>
        <button style={styles.btnLikes} onClick={handleLike}>
          Likes
        </button>
        <button style={styles.btnReset} onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}
export default LikeButton;
