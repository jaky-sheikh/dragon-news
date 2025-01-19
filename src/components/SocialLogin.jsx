import { FaGithub, FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-4">Login with</h2>
            <div className="*:w-full space-y-2">
                <div className="btn"><FaGoogle></FaGoogle>Login with Google</div>
                <div className="btn">
                    <FaGithub></FaGithub>Login with Github
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;