import Image from "next/image"
import imgTemplate from "@/public/img/deepak.jpeg"
import ShareIcon from "../icon/ShareIcon"
import DownloadIcon from "../icon/DownloadIcon"
import HeartUnfilled from "../icon/HeartUnfilled"
function Card() {
    return (
        <>
            <div className="card p-2">
                <Image src={imgTemplate} alt="" sizes="100vw"
                    // Make the image display full width
                    style={{
                        width: '100%',
                        height: 'auto',
                    }} />
            </div>
            <div className="mt-1 d-flex justify-content-between">
                <div>title</div>
                <div>
                    <span className="me-3">
                        <ShareIcon />
                    </span>
                    <span>
                        <DownloadIcon />
                    </span>
                </div>
            </div>
            <div className="mt-1 d-flex justify-content-between">
                <h6><span className="badge text-bg-success">Deepak</span></h6>

                <div>
                    <span className="me-2">
                        <HeartUnfilled />
                    </span>
                    <span>
                        1000
                    </span>
                </div>
            </div>
        </>
    )
}

export default Card