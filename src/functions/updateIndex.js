const updateIndex = (currentIndex, value, setCurrentIndex) => {
    if (currentIndex < value - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex > value) {
      setCurrentIndex(currentIndex - 1);
    }
  };

export default updateIndex