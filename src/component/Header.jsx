/* eslint-disable react/no-unknown-property */
import Button from "./Button";
import brainwave from "../assets/brainwave.svg";
import { navigation } from "../constans/index";
import { useLocation } from "react-router-dom";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

function Header() {
    const pathname = useLocation();
    const [openNave, setopenNave] = useState(false);
    const toggleNav = () => {
        if (openNave) {
            setopenNave(false);
            enablePageScroll();
        } else {
            setopenNave(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNave) return;
        enablePageScroll();
        setopenNave(false);
    };
    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNave ? "bg-2-8" : "bg-n-8/90 backdrop-blur-sm"
                }`}
        >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a href="#hero" className="block w-[12rem] xl:mr-8">
                    <img src={brainwave} width={190} height={40} alt="BrainWave" />
                </a>
                <nav
                    className={`${openNave ? "flex" : "hidden"
                        }  fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
                >
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-3xl uppercause ${item.onlyMobile ? "lg-hidden" : ""
                                    } pr-6 pl-[0.5rem] md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash
                                        ? "z-2 lg:text-n-1"
                                        : "lg:text-n-1/50"
                                    } lg:leading-5 transition-all hover:text-n-1`}
                            >
                                {item.title}
                            </a>
                        ))}
                        <HamburgerMenu />
                    </div>
                </nav>
                <a
                    href="#signup"
                    className="button hidden mr-8 text-n-1 transition-colors hover:text-color-1 lg:block"
                >
                    New Account
                </a>
                <Button className="hidden lg:flex A" >
                    Sign In
                </Button>
                <Button className="ml-auto lg:hidden B" px="px-3" onClick={toggleNav}>
                    <MenuSvg openNave={openNave} />
                </Button>


            </div>

        </div>
    );
}

export default Header;