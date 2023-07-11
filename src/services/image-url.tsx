const getCroppedUrlImage = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length; // 0 to media
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedUrlImage;
