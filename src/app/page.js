import Ad from "@/components/Ad";
import Navbar from "@/components/Navbar";
import Headlines from "@/components/Headlines";
import Retail from "@/components/Retail";
import Fixtures from "@/components/Fixtures";
import MoreNews from "@/components/MoreNews";
import Women from "@/components/Women";
import Community from "@/components/Community";
import Trophies from "@/components/Trophies";
import Memory from "@/components/Memory";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center bg-gray-100 px-10 py-5">
        <Ad />
      </div>
      <div className="bg-liverRed pt-12">
        <div className="px-20 z-40 sticky top-0">
          <Navbar />
        </div>
        <div className="space-y-10 bg-white mt-10">
          <div className="bg-liverRed pb-32">
            <Headlines />
          </div>
          <div>
            <Retail />
          </div>
          <div className="flex justify-center bg-gray-100 p-10">
            <Ad />
          </div>
          <div>
            <Fixtures /> 
          </div>
          <div className="flex justify-center bg-gray-100 p-10">
            <Ad />
          </div>
          <div>
            <MoreNews />
          </div>
          <div>
            <div className="flex justify-center bg-gray-100 p-10">
              <Ad />
            </div>
            <div className="bg-liverRed pb-20">
              <Women />
            </div>
            <div className="bg-gray-100 pt-12 pb-20">
              <Community />
            </div>
          </div>
          <div>
            <Memory />
          </div>
          <div className="bg-gray-100">
            <Trophies />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
