const Video = () => {
  const src = "https://www.youtube.com/embed/5wu1PAE7NH0"
  const allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  return (
    <iframe 
      width="560" 
      height="315"
      src={src}
      title="Panna Final gift"
      allow={allow}
      allowFullScreen
    />
  );
};

export default Video;