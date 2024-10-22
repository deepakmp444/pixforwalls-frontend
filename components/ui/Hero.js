import cameraimg from "@/public/img/camera.svg"
import Image from "next/image"
function Hero() {
    return (
        <>
            <div className="row">
                <div className="col-sm-6 ">
                    <h1 className="text-left" style={{ fontWeight: "900", marginTop:"150px" }}>Unleash the Art of Your Screen {"-"} Stunning Wallpapers, Redefined.</h1>
                </div>
                <div className="col-sm-6">
                    <Image src={cameraimg} height={500} width={500} alt="okay" />
                </div>
            </div>
        </>
    )
}

export default Hero