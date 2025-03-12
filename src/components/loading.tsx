import { RBLogo } from "@/images/logo";

export default function Loading() {
	return (
    <div className="flex items-center justify-center h-screen bg-fuchsia-900">
      <div className="flex-col text-center text-white">
          <p className="font-[Berlin] text-4xl mb-4">Loading...</p>
          <RBLogo text={true} vertical={true} animate={true} className="max-w-[50%] w-80 mx-auto" textClass={["text-[2.5rem] leading-6", "text-[1.75rem] leading-6"]}/>
      </div>
    </div>
	);
};