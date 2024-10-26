function Map({ location }) {
  return (
    <div className="map-container">
      <iframe
        src={`https://www.google.com/maps?q=${location}$output=embed`}
        className="w-full h-64 rounded"
        allowFullScreen
      />
    </div>
  );
}

export default Map;
