const buttonStyles = {
    textDecoration: 'none',
    textTransform: 'none',
    '&.active': {
        color: 'var(--font-link-color)',
    },
    "&:hover": {
        backgroundColor: "var(--background-hover-color)",
        borderColor: "var(--background-hover-color)",
        color: "var(--background-footer-color2)",
        boxShadow: "none",
    },
};

export { buttonStyles };
