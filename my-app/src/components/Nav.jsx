function Nav() {
  const styles = {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F8FAF9",
      height: "100px",
    },
    ul: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      listStyleType: "none",
      margin: 0,
      gap: "20px",
      backgroundColor: "#212121",
      padding: "25px 30px",
      borderRadius: "50px",
    },
    li: {
      display: "flex",
      alignItems: "center",
    },
    a: {
      color: "white",
      textDecoration: "none",
      fontSize: "14px",
    },
    logoPill: {
      width: "28px",
      height: "28px",
      borderRadius: "50%",
      backgroundColor: "#444",
    },
  };

  const links = [
    { label: "Work", href: "#" },
    { label: "About", href: "#" },
    { label: "Playground", href: "#" },
    { label: "Resource", href: "#" },
    { label: "edcenatus19@gmail.com", href: "mailto:edcenatus19@gmail.com" },
  ];

  return (
    <div style={styles.wrapper}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <div style={styles.logoPill} aria-label="Logo" />
        </li>
        {links.map(({ label, href }) => (
          <li key={label} style={styles.li}>
            <a href={href} style={styles.a}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
