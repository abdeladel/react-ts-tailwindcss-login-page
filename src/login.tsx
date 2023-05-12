import {
	faFacebook,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
	faArrowAltCircleRight,
	faLock,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

const Login = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			{/** TODO: add class gradient instead of [screen]*/}
			<div className="relative h-[600px] w-[360px] shadow-[0_0_20px_0px_rgba(0,0,0,0.3)] shadow-purple-200 screen">
				<div className="relative h-full z-[1]">
					<form className="w-[320px] p-[30px] pt-[156px]">
						<div className="py-[20px] px-0 relative">
							<i className="absolute top-[33px] text-purple-200 ">
								<FontAwesomeIcon icon={faUser} />
							</i>
							<input
								type="text"
								className="outline-0 p-[10px] pl-[24px] w-3/4  font-bold border-b-2 border-solid border-slate-400 focus:border-purple-200 hover:border-purple-200"
								placeholder="User name / Email"
							/>
						</div>
						<div className="py-[20px] px-0 relative">
							<i className="absolute top-[33px] text-purple-200">
								<FontAwesomeIcon icon={faLock} />
							</i>
							<input
								type="password"
								className="outline-0 p-[10px] pl-[24px] w-3/4  font-bold border-b-2 border-solid border-slate-400 focus:border-purple-200 hover:border-purple-200"
								placeholder="Password"
							/>
						</div>
						<button className="font-bold flex items-center w-full text-purple-200 px-[20px] py-[16px] mt-[30px] border border-solid border-gray-200 bg-white text-[14px] uppercase rounded-full shadow-[0_2px_2px_0px_rgba(0,0,0,0.3)] shadow-purple-100 pointer focus:border-purple-200 hover:border-purple-200">
							<span>Log In Now</span>
							<i className=" text-[24px] text-purple-200 ml-auto">
								<FontAwesomeIcon icon={faArrowAltCircleRight} />
							</i>
						</button>
					</form>
					<div className=" absolute h-[140px] w-[160px] text-center bottom-0 right-0 text-white ">
						<h3>log in via</h3>
						<div className="flex items-center justify-center">
							<a
								href="#"
								className="px-[10px] py-[20px] text-white decoration-none shadow-[0_0px_8px_0px_rgba(0,0,0,0.3)] shadow-purple-100"
							>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a
								href="#"
								className="px-[10px] py-[20px] text-white decoration-none shadow-[0_0px_8px_0px_rgba(0,0,0,0.3)] shadow-purple-100"
							>
								<FontAwesomeIcon icon={faFacebook} />
							</a>
							<a
								href="#"
								className="px-[10px] py-[20px] text-white decoration-none shadow-[0_0px_8px_0px_rgba(0,0,0,0.3)] shadow-purple-100"
							>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
						</div>
					</div>
				</div>
				{/** TODO: add class clip-path instead of [screen__background]*/}
				<div className="absolute top-0 left-0 right-0 bottom-0 z-0 screen__background">
					<span className="screen__background__shape screen__background__shape4"></span>
					<span className="screen__background__shape screen__background__shape3"></span>
					<span className="screen__background__shape screen__background__shape2"></span>
					<span className="screen__background__shape screen__background__shape1"></span>
				</div>
			</div>
		</div>
	);
};

export default Login;
