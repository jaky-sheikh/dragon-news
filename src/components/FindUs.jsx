import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="mt-4">
            <h2 className="font-semibold mb-4">Find us on</h2>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item"><FaInstagram></FaInstagram>Instagram</button>
                <button className="btn join-item"><FaTwitter></FaTwitter>Twitter</button>
            </div>
        </div>
    );
};

export default FindUs;