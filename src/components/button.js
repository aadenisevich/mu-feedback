import React from "react"

function Button({
  children,
  onClick = () => {},
  color = "white",
  bordered = false,
  width = 250,
  marginLeft = 0,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        background: color,
        padding: 15,
        color: color === "white" ? "black" : "white",
        width,
        borderRadius: 5,
        marginTop: 10,
        textAlign: "center",
        border: bordered ? "1px solid rgb(202, 202, 202)" : "none",
        marginLeft,
        overflow: "hidden",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {children}
    </div>
  )
}

export default Button
