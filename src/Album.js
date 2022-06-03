export default function Album({ album, handleChange, loadedAlbumId }) {
  const { id, name, coverImg } = album;
  let styles = { borderRadius: "60px", maxWidth: 50, maxHeight: 50 };
  return (
    <div>
      <label>
        <input
          type="radio"
          name="anAlbum"
          text={name}
          value={id}
          checked={loadedAlbumId === id}
          onChange={() => handleChange(album)}
        />
        <img style={styles} src={coverImg} alt={name} />
        {name}
      </label>
    </div>
  );
}
