import Image from "next/image"
import imgTemplate from "@/public/img/deepak.jpeg"
function Card() {
    return (
        <Image src={imgTemplate} alt="" sizes="100vw"
            // Make the image display full width
            style={{
                width: '100%',
                height: 'auto',
            }} />
    )
}

export default Card