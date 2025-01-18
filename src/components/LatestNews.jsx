import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center">
            <p className="bg-red-500 text-white px-3 py-1">Latest</p>
            <Marquee pauseOnHover={true} className="space-x-10 bg-base-200 p-2">
                <Link to="/news">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sed?
                </Link>
                <Link to="/news">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sed?
                </Link>
                <Link to="/news">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sed?
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;