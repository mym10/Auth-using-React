import React, { useState } from "react";
import { SketchPicker } from "react-color";

const EditableAvatar = ({width, height}) => {
    const defaultAvatarProps = {
        shape: "circle", 
        color: "#b385de", 
        text: "User", 
    }

    const [avatarProps, setAvatarProps] = useState(() => {
        const savedAvatarProps = localStorage.getItem("avatarProps");
        return savedAvatarProps ? JSON.parse(savedAvatarProps) : defaultAvatarProps;
    });

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        localStorage.setItem("avatarProps", JSON.stringify(avatarProps));
        setOpen(false);
    };

    const handleChange = (prop) => (event) => {
        setAvatarProps({ ...avatarProps, [prop]: event.target.value });
    };

    const handleColorChange = (color) => {
        setAvatarProps({ ...avatarProps, color: color.hex });
    };

    return (
        <div>
        <div
            style={{
            width: width,
            height: height,
            backgroundColor: avatarProps.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: avatarProps.shape === "circle" ? "50%" : "10%",
            cursor: "pointer",
            }}
            onClick={handleClickOpen}
        >
            <span style={{ color: "white", fontSize: width === 30 ? "20px" : "30px" }}>{width === 30 ? avatarProps.text[0] : avatarProps.text}</span>
        </div>
        {open && (
            <div className="modal-overlay">
            <div className="modal-content">
                <h2>Edit Avatar</h2>
                {/* shape */}
                <div className="form-group">
                <label>
                    <input
                    type="radio"
                    name="shape"
                    value="circle"
                    checked={avatarProps.shape === "circle"}
                    onChange={handleChange("shape")}
                    />
                    Circle
                </label>
                <label>
                    <input
                    type="radio"
                    name="shape"
                    value="square"
                    checked={avatarProps.shape === "square"}
                    onChange={handleChange("shape")}
                    />
                    Square
                </label>
                </div>

                {/* color */}
                <div className="form-group-color">
                <label>Color</label>
                    <div className="color-picker-popover">
                    <div className="color-picker-cover"  />
                    <SketchPicker color={avatarProps.color} onChange={handleColorChange} />
                    </div>
                </div>

                {/* text */}
                <div className="form-group">
                <label>Text</label>
                <input
                    type="text"
                    value={avatarProps.text}
                    onChange={handleChange("text")}
                />
                </div>

                {/* buttons */}
                <div className="modal-actions">
                <button className="login-button" onClick={handleClose}>
                    Cancel
                </button>
                <button className="login-button" onClick={handleSave}>
                    Save
                </button>
                </div>
            </div>
            </div>
        )}
        </div>
    );
};

export default EditableAvatar;
