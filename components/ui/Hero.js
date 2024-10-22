import cameraimg from "@/public/img/camera.svg"
import instagramImg from "@/public/img/instagram.png"
import Image from "next/image"
function Hero() {
    return (
        <>
            <div className="row">
                <div className="col-sm-6">
                    <div className="text-font" style={{ fontWeight: "900", marginTop: "110px" }}>Unleash the Art of Your Screen {"-"} <mark><u className="text-success">Stunning Wallpapers</u></mark>, <mark><u className="text-primary">Redefined.</u></mark></div>
                    <button className="mt-4 btn btn-outline-dark btn-sm wh-10">Follow On  <Image src={instagramImg} height={20} width={20} alt="okay" /></button>
                </div>
                <div className="col-sm-6">
                    <Image src={cameraimg} height={500} width={500} alt="okay" />
                </div>
            </div>
        </>
    )
}

export default Hero