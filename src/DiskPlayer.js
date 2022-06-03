export default function DiskPlayer({ album }) {
  const { name, coverImg, tracks } = album;
  let styles = { borderRadius: "60px" };
  let x = 0;
  return (
    <div>
      <img style={styles} src={coverImg} alt={name} />
      {tracks.map((track) => (
        <p>
          {++x}. {track}
        </p>
      ))}
    </div>
  );
}
