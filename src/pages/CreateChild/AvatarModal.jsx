import "./AvatarModal.css";

export default function AvatarModal({ avatars, onClose, onSelect }) {
    return (
        <div className="modal-overlay">
            <div className="avatar-modal">
                <button className="close-btn" onClick={onClose}>
                    ×
                </button>

                <h2 className="avatar-modal-title">Выберите аватар</h2>

                <div className="avatar-modal-grid">
                    {avatars.map((src) => (
                        <button
                            key={src}
                            type="button"
                            className="avatar-modal-item"
                            onClick={() => onSelect(src)}
                        >
                            <img src={src} alt="" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
