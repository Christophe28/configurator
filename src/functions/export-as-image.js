import html2canvas from "html2canvas";

const exportAsImage = async (element, setImage) => {
    const canvas = await html2canvas((element), {
        scrollY: 100
    })
    const image = canvas.toDataURL("image/png", 1.0);
    setImage(image)
};

export default exportAsImage