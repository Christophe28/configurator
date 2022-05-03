import html2canvas from "html2canvas";

const exportAsImage = async (element, name, setImage) => {
    const canvas = await html2canvas(element)
    console.log(canvas)
    const image = canvas.toDataURL("image/png", 1.0);
    console.log(image)
    setImage(image)
};

export default exportAsImage