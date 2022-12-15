const Video = () => {
  const src = "https://www.youtube.com/watch?v=xL9WQnlYdDo";
  return (
    <video controls width="100%">
      <source src={src} type="video/mp4"/>
      Sorry, your browser doesn't support videos.
    </video>
  );
};

export default Video;