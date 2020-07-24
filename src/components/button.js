import React from "react"

function Button({
  children,
  onClick = () => {},
  color = "white",
  disabledColor = color,
  bordered = false,
  width = 250,
  marginLeft = 0,
  disabled = false,
  styles = {}
}) {
  return (
    <div
      onClick={() => {
        if (!disabled) onClick()
      }}
      style={{
        background: disabled ? disabledColor : color,
        padding: 15,
        color: disabled ? "#eee" : color === "white" ? "black" : "white",
        width,
        borderRadius: 5,
        marginTop: 10,
        textAlign: "center",
        border: bordered ? "1px solid rgb(202, 202, 202)" : "none",
        marginLeft,
        overflow: "hidden",
        cursor: "pointer",
        userSelect: "none",
        ...styles
      }}
    >
      {children}
    </div>
  )
}

export default Button
