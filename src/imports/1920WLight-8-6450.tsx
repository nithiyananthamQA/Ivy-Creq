import clsx from "clsx";
import svgPaths from "./svg-s27e560e9";
import imgTravisMathewRewardsLogo from "figma:asset/b6858b952ea5bc2c6545cc6767d90711664c26b8.png";
import imgTravisMathew from "figma:asset/f144d5585eb10670a3323e1d954d06b6137cfe98.png";
import imgIcon from "figma:asset/bebc00b59b077c5e59b6bd8f62b979701b2aa4d0.png";
import imgYourPrivacyChoicesIcon from "figma:asset/ed35f48a9fd142447684c5717a326546a5588b38.png";
import { imgGroup } from "./svg-m7crd";
import BlackLogo from "../assets/Black.svg";
type P1HelperProps = {
  additionalClassNames?: string;
};

function P1Helper({ children, additionalClassNames = "" }: React.PropsWithChildren<P1HelperProps>) {
  return (
    <a href="https://login.travismathew.com/accounts.store.downloadPublicConsentDocument" className={clsx("cursor-pointer font-['Inter:Medium_Italic',sans-serif] font-medium text-[#090c0f]", additionalClassNames)}>
      <span className="leading-[17px]" href="https://login.travismathew.com/accounts.store.downloadPublicConsentDocument">
        {children}
      </span>
    </a>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <a href="https://travismathew.com/pages/tm-rewards" className="flex flex-col justify-center relative shrink-0">
      <p className="cursor-pointer leading-[20.4px]">{text}</p>
    </a>
  );
}
type DivFlexCol2TextProps = {
  text: string;
};

function DivFlexCol2Text({ text }: DivFlexCol2TextProps) {
  return (
    <a href="https://www.topgolfcallawaybrands.com/sustainability" className="flex flex-col justify-center relative shrink-0">
      <p className="cursor-pointer leading-[20.4px]">{text}</p>
    </a>
  );
}
type P1TextProps = {
  text: string;
  additionalClassNames?: string;
};

function P1Text({ text, additionalClassNames = "" }: P1TextProps) {
  return (
    <a href="https://www.travismathew.com/tm-rewards-terms-and-conditions" className={clsx("cursor-pointer font-['Inter:Medium_Italic',sans-serif] font-medium text-[#090c0f]", additionalClassNames)}>
      <span className="leading-[17px]" href="https://www.travismathew.com/tm-rewards-terms-and-conditions">
        {text}
      </span>
    </a>
  );
}
type LabelAbsoluteProps = {
  text: string;
  text1: string;
};

function LabelAbsolute({ text, text1 }: LabelAbsoluteProps) {
  return (
    <div className="absolute bg-white bottom-[21.65%] content-stretch flex gap-[5px] items-start leading-[0] left-[8px] not-italic pl-[9px] pr-[4px] top-[20.35%] whitespace-nowrap">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#c10230] text-[15px]">
        <p className="leading-[21.7px]">{text}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#333b42] text-[14px]">
        <p className="leading-[21.7px]">{text1}</p>
      </div>
    </div>
  );
}

function Helper() {
  return (
    <div className="h-[40px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function Component1920WLight() {
  return (
    <div className="bg-white relative size-full" data-name="1920w light">
      <div className="absolute bg-white bottom-[741.17px] content-stretch flex flex-col items-start max-w-[1904px] overflow-clip right-[-1920px] top-0 w-[492px]" data-name="div.rebuy-cart__flyout">
        <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div">
          <div className="relative shrink-0 w-full" data-name="div">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pl-[22px] pr-[30px] py-[10px] relative w-full">
                <div className="content-stretch flex flex-[1_0_0] items-center max-w-[460px] min-h-px min-w-px relative" data-name="div">
                  <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-name="h2#rebuy-cart-title">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[0.14px] whitespace-nowrap">
                      <p className="leading-[30px]">My Bag (0 Item)</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 size-[24px]" data-name="Close Cart">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="i.fal">
                    <div className="content-stretch flex items-start relative shrink-0" data-name="span.__h2d-remove-before">
                      <div className="flex items-center justify-center relative shrink-0">
                        <div className="-scale-y-100 flex-none">
                          <div className="h-[18px] relative w-[11.25px]" data-name="Icon">
                            <div className="absolute inset-[0_-0.16%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2852 18">
                                <g id="Icon">
                                  <path d={svgPaths.p3bb82e00} fill="var(--fill-0, black)" id="Vector" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start py-[21px] relative shrink-0 w-full" data-name="div.rebuy-cart__banner">
            <div aria-hidden="true" className="absolute border-[#e2dfda] border-b border-solid border-t inset-0 pointer-events-none" />
            <div className="relative shrink-0 w-full" data-name="p">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-center tracking-[0.14px] whitespace-nowrap">
                  <p className="text-[14px]">
                    <span className="leading-[21px]">{`Free Shipping for Members. `}</span>
                    <a className="cursor-pointer decoration-solid leading-[21px] underline" href="https://travismathew.com/account/login">
                      <span className="decoration-solid leading-[21px]" href="https://travismathew.com/account/login">
                        Log In
                      </span>
                    </a>
                    <span className="leading-[21px]">{` or `}</span>
                    <a className="cursor-pointer decoration-solid leading-[21px] underline" href="https://travismathew.com/account/register">
                      <span className="decoration-solid leading-[21px]" href="https://travismathew.com/account/register">
                        Join
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-[300px] min-w-px overflow-x-clip overflow-y-auto relative w-full" data-name="div">
          <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div">
            <div className="relative shrink-0 w-full" data-name="div">
              <div aria-hidden="true" className="absolute border-[#e2dfda] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col items-start pb-[36px] pt-[10px] px-[18.5px] relative w-full">
                <Wrapper additionalClassNames="h-[268px] w-full">
                  <div className="absolute content-stretch flex flex-col items-center left-[16px] right-[16px] top-[40px]" data-name="h4.ql-align-center">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#333b42] text-[18px] text-center whitespace-nowrap">
                      <p className="leading-[27px]">Your Cart is Empty</p>
                    </div>
                  </div>
                  <div className="absolute bg-black content-stretch flex flex-col items-center left-[16px] px-[16px] py-[11px] right-[16px] top-[83px]" data-name="a">
                    <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
                    <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" href="https://travismathew.com/account/login">
                      <p className="cursor-pointer leading-[21px]">Log In</p>
                    </a>
                  </div>
                  <div className="absolute bg-black content-stretch flex flex-col items-center left-[16px] px-[16px] py-[11px] right-[16px] top-[134px]" data-name="a">
                    <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
                    <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" href="https://travismathew.com/collections/mens-new-arrivals-1">
                      <p className="cursor-pointer leading-[21px]">{`Shop Men's New Arrivals`}</p>
                    </a>
                  </div>
                  <div className="absolute bg-black content-stretch flex flex-col items-center left-[16px] px-[16px] py-[11px] right-[16px] top-[185px]" data-name="a">
                    <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
                    <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" href="https://travismathew.com/collections/shop-all-womens-new-arrivals">
                      <p className="cursor-pointer leading-[21px]">{`Shop Women's New Arrivals`}</p>
                    </a>
                  </div>
                </Wrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0)] border border-[rgba(0,0,0,0.05)] border-solid opacity-0 right-0 shadow-[0px_3px_5px_0px_rgba(0,0,0,0.05)] size-[2px] top-[44px]" data-name="div.ss__autocomplete--target" />
      <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 max-w-[2000px] px-[704px] right-0 top-[calc(50%-464.84px)]" data-name="main#MainContent">
        <div className="bg-white max-w-[512px] relative rounded-[4px] shrink-0 w-full" data-name="div.max-w-lg">
          <div className="content-stretch flex flex-col gap-[28px] items-start max-w-[inherit] px-[32px] py-[36px] relative w-full">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="div.max-w-lg:shadow" />
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.flex">
              <div className="h-[72px] max-w-[448px] relative shrink-0 w-[330px]" data-name="TravisMathew Rewards Logo">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTravisMathewRewardsLogo} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="div">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="shop-login-button">
                <div className="bg-[#5433eb] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0" data-name="button.relative">
                  <div className="content-stretch flex gap-[4px] items-center justify-center px-[44px] py-[16px] relative shrink-0" data-name="span.mx-auto">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15.8px] text-center text-white tracking-[-0.5px] whitespace-nowrap">
                      <p className="leading-[22px]">Sign in with</p>
                    </div>
                    <div className="content-stretch flex flex-col h-[22px] items-center justify-center pb-[1.5px] pt-[4.5px] relative shrink-0" data-name="undefined:css-transform">
                      <div className="h-[16px] relative shrink-0 w-[38.391px]" data-name="Frame">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.3906 16">
                          <g id="Frame">
                            <path d={svgPaths.p9e54600} fill="var(--fill-0, white)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p.text-center">
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#333b42] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[21.7px]">Or sign in with</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full" data-name="Login Form">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.field">
                  <Helper />
                  <LabelAbsolute text="*" text1="Email" />
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.field">
                  <Helper />
                  <LabelAbsolute text="*" text1="Password" />
                  <div className="absolute content-stretch flex h-[22px] items-center justify-center p-px right-[8px] top-[9px] w-[50px]" data-name="span.border">
                    <div aria-hidden="true" className="absolute border border-[#090c0f] border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#333b42] text-[10px] text-center whitespace-nowrap">
                      <p className="leading-[12px]">SHOW</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="div.flex">
                  <div className="content-stretch flex flex-col items-start max-w-[464.75px] pb-[18px] px-[10px] relative shrink-0" data-name="div.font-heading">
                    <div className="content-stretch flex flex-col items-center min-w-[428px] px-[12.58px] relative shrink-0" data-name="p">
                      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#333b42] text-[0px] text-[10px] text-center whitespace-nowrap">
                        <p className="mb-0">
                          <span className="font-['Inter:Italic',sans-serif] font-normal leading-[17px] text-[#333b42]">{`By signing in, you agree to TravisMathew's `}</span>
                          <P1Helper additionalClassNames="leading-[17px]">{`Terms of Use `}</P1Helper>
                          <span className="font-['Inter:Italic',sans-serif] font-normal leading-[17px] text-[#333b42]">{`and `}</span>
                          <P1Text text="TM Reward Program" additionalClassNames="leading-[17px]" />
                        </p>
                        <p className="leading-[17px]">
                          <P1Text text="Terms of Use" />
                          <span className="font-['Inter:Italic',sans-serif] font-normal text-[#333b42]">{`, and that you have reviewed its `}</span>
                          <P1Helper>{`Privacy, Ad, & Cookie Policies`}</P1Helper>
                          <span className="font-['Inter:Italic',sans-serif] font-normal text-[#333b42]">.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col h-[67px] items-start pb-[25px] relative shrink-0 w-[131px]" data-name="button.btn:margin">
                    <div className="bg-[#090c0f] content-stretch flex h-[42px] items-center justify-center pb-[14.5px] pt-[13.5px] px-[33px] relative shrink-0 w-[131px]" data-name="button.btn">
                      <div aria-hidden="true" className="absolute border border-[#090c0f] border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white tracking-[0.26px] uppercase whitespace-nowrap">
                        <p className="leading-[14px]">Sign In</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[9.7px] items-center leading-[0] min-w-[271.44000244140625px] not-italic relative shrink-0 text-[#333b42] text-[0px] text-center whitespace-nowrap" data-name="div.flex">
                    <div className="flex flex-col justify-center relative shrink-0">
                      <p className="text-[14px]">
                        <span className="leading-[21.7px]">{`Forgot Your Password? `}</span>
                        <a className="cursor-pointer decoration-solid leading-[21.7px] underline" href="https://travismathew.com/account/login#recover">
                          <span className="decoration-solid leading-[21.7px]" href="https://travismathew.com/account/login#recover">
                            Reset Here
                          </span>
                        </a>
                      </p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0">
                      <p className="text-[14px]">
                        <span className="leading-[21.7px]">{`Unable to Login? `}</span>
                        <a className="cursor-pointer decoration-solid leading-[21.7px] underline" href="https://travismathew.com/pages/faq-entry/im-having-trouble-logging-in">
                          <span className="decoration-solid leading-[21.7px]" href="https://travismathew.com/pages/faq-entry/im-having-trouble-logging-in">
                            Read More
                          </span>
                        </a>
                      </p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0">
                      <p className="text-[14px]">
                        <span className="leading-[21.7px]">{`Not a Member? `}</span>
                        <a className="cursor-pointer decoration-solid leading-[21.7px] underline" href="https://travismathew.com/account/register">
                          <span className="decoration-solid leading-[21.7px]" href="https://travismathew.com/account/register">
                            Sign Up
                          </span>
                        </a>
                      </p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0">
                      <p className="text-[14px]">
                        <span className="leading-[21.7px]">{`Joined in Store? `}</span>
                        <a className="cursor-pointer decoration-solid leading-[21.7px] underline" href="https://travismathew.com/pages/complete-registration">
                          <span className="decoration-solid leading-[21.7px]" href="https://travismathew.com/pages/complete-registration">
                            Complete Registration
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[17px] relative shrink-0" data-name="a.underline:margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="a.underline">
                      <a className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#333b42] text-[13px] text-center whitespace-nowrap" href="https://travismathew.com/pages/tm-rewards">
                        <p className="cursor-pointer decoration-solid leading-[18.46px] underline">Learn More About TM Rewards</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f5f7f8] h-[300px] left-0 right-0 top-[856.67px]" data-name="div.w-full" />
      <div className="absolute bg-[#090c0f] content-stretch flex items-start justify-center left-0 right-0 top-[1156.67px]" data-name="div.hidden">
        <div className="bg-[#090c0f] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="div.w-full">
          <div className="bg-[#1a2026] h-[47px] relative shrink-0 w-full" data-name="div.w-full">
            <div className="flex flex-row items-center justify-end size-full">
              <div className="content-stretch cursor-pointer flex gap-[24px] items-center justify-end pr-[58px] relative size-full">
                <a className="content-stretch flex flex-col items-start relative shrink-0" data-name="Instagram" href="https://www.instagram.com/travismathew/">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
                    <div className="absolute inset-[10%]" data-name="Social Icons">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g id="Social Icons">
                          <path d={svgPaths.p2a4c4380} fill="var(--fill-0, #F5F7F8)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
                <a className="content-stretch flex flex-col items-start relative shrink-0" data-name="Facebook" href="https://www.facebook.com/travismathew">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
                    <div className="absolute inset-[10%_29.22%]" data-name="Social Icons">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.31195 16">
                        <g id="Social Icons">
                          <path d={svgPaths.p220f1400} fill="var(--fill-0, #F5F7F8)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
                <a className="content-stretch flex flex-col items-start relative shrink-0" data-name="Twitter" href="https://x.com/travismathew">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
                    <div className="absolute inset-[17.5%_10%_17.49%_10%]" data-name="Social Icons">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 13.0019">
                        <g id="Social Icons">
                          <path d={svgPaths.p3c41d800} fill="var(--fill-0, #F5F7F8)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
                <a className="content-stretch flex flex-col items-start relative shrink-0" data-name="TikTok" href="https://www.tiktok.com/@travismathew">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
                    <div className="absolute inset-[10%_15.16%]" data-name="Social Icons">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9377 16">
                        <g id="Social Icons">
                          <path d={svgPaths.p1822b680} fill="var(--fill-0, #F5F7F8)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
                <a className="content-stretch flex flex-col items-start relative shrink-0" data-name="YouTube" href="https://www.youtube.com/user/TheTRAVISMATHEW">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
                    <div className="absolute inset-[10%_16.92%]" data-name="Social Icons">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2321 16">
                        <g id="Social Icons">
                          <path d={svgPaths.p395c8731} fill="var(--fill-0, #F5F7F8)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-[2000px] relative shrink-0 w-full" data-name="div.w-auto">
            <div className="content-stretch flex items-start justify-between max-w-[inherit] pb-[59px] pl-[58px] pr-[123px] pt-[60px] relative w-full">
              <div className="content-stretch flex flex-col h-[71px] items-start relative shrink-0 w-[170px]" data-name="div.relative">
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="a">
                  <div className="h-[71px] max-w-[170px] relative shrink-0 w-[150px]" data-name="TravisMathew">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTravisMathew} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[192px]" data-name="div.flex-col">
                <div className="h-[172.44px] relative shrink-0 w-[192.73px]" data-name="div.prose-sm">
                  <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="a.block">
                    <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f5f7f8] text-[12px] tracking-[0.48px] uppercase whitespace-nowrap" href="https://travismathew.com/pages/contact-us">
                      <p className="cursor-pointer leading-[14.4px]">Contact Us</p>
                    </a>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.61px] right-0 top-[37.61px]" data-name="a.block">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20.4px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                      <p className="mb-0">1-877-969-1952 Mon-Fri: 8am -</p>
                      <p>5pm PST</p>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[94.22px]" data-name="a.block">
                    <a className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" href="mailto:onlinesupport@travismathew.com">
                      <p className="cursor-pointer leading-[20.4px]">onlinesupport@travismathew.com</p>
                    </a>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.61px] right-0 top-[130.83px]" data-name="a.block">
                    <a className="cursor-pointer flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20.4px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" href="https://goo.gl/maps/VtLpxGQZe35yZLAw8">
                      <p className="mb-0">15202 Graham St, Huntington</p>
                      <p>Beach, CA 92649</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[22.91px] items-start leading-[0] not-italic relative shrink-0 text-[12px] w-[192px] whitespace-nowrap" data-name="div.flex-col">
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#f5f7f8] tracking-[0.48px] uppercase">
                  <p className="leading-[14.4px]">Customer Support</p>
                </div>
                <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[11.4px] items-start relative shrink-0 text-white" data-name="div.flex-col">
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/contact-us">
                    <p className="cursor-pointer leading-[20.4px]">Help Center</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/shipping-info">
                    <p className="cursor-pointer leading-[20.4px]">Shipping Information</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/returns">
                    <p className="cursor-pointer leading-[20.4px]">Returns</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/order-status">
                    <p className="cursor-pointer leading-[20.4px]">Order Status</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/faq">
                    <p className="cursor-pointer leading-[20.4px]">FAQ</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/products/e-gift-card">
                    <p className="cursor-pointer leading-[20.4px]">E-Gift Card</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://wwws-usa1.givex.com/merchant_balcheck/22293_en/">
                    <p className="cursor-pointer leading-[20.4px]">Gift Card Balance</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://careers.travismathew.com/">
                    <p className="cursor-pointer leading-[20.4px]">Careers</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/affiliate">
                    <p className="cursor-pointer leading-[20.4px]">Become An Affiliate</p>
                  </a>
                  <DivFlexCol2Text text="Corporate Social Responsibility" />
                  <DivFlexCol2Text text="Environmental Responsibility" />
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/travismathew-accessibility-statement">
                    <p className="cursor-pointer leading-[20.4px]">Accessibility Statement</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/scam-awareness">
                    <p className="cursor-pointer leading-[20.4px]">Scam Awareness</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/recallnotice">
                    <p className="cursor-pointer leading-[20.4px]">Recall Information</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew---sandbox.myklpages.com/p/mobile-terms-of-service">
                    <p className="cursor-pointer leading-[20.4px]">Mobile Terms of Service</p>
                  </a>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[22.91px] items-start leading-[0] not-italic relative shrink-0 text-[12px] w-[192px] whitespace-nowrap" data-name="div.flex-col">
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#f5f7f8] tracking-[0.48px] uppercase">
                  <p className="leading-[14.4px]">Discover</p>
                </div>
                <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[11.4px] items-start relative shrink-0 text-white" data-name="div.flex-col">
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/about-us">
                    <p className="cursor-pointer leading-[20.4px]">About</p>
                  </a>
                  <Text text="TM Rewards" />
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/stores">
                    <p className="cursor-pointer leading-[20.4px]">Store Locator</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/blogs/stories">
                    <p className="cursor-pointer leading-[20.4px]">Stories</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/ambassadors">
                    <p className="cursor-pointer leading-[20.4px]">Ambassador</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/fabric-tech">
                    <p className="cursor-pointer leading-[20.4px]">{`Fabric & Tech`}</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/book-an-event">
                    <p className="cursor-pointer leading-[20.4px]">Book An Event</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/corporate-sales">
                    <p className="cursor-pointer leading-[20.4px]">Corporate Sales</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/true-fit">
                    <p className="cursor-pointer leading-[20.4px]">True Fit</p>
                  </a>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0 w-[192px]" data-name="div.flex-col">
                <div className="content-stretch flex flex-col items-start pb-[3.41px] relative shrink-0" data-name="div.text-xs">
                  <div className="aspect-[104/11] content-stretch flex items-start overflow-clip relative shrink-0" data-name="Menu Header Image">
                    <div className="content-stretch flex flex-col h-[11px] items-center justify-center overflow-clip relative shrink-0 w-[104px]" data-name="TM_Rewards.svg fill">
                      <div className="h-[11px] overflow-clip relative shrink-0 w-[104px]" data-name="TM_Rewards.svg">
                        <div className="absolute contents inset-0" data-name="Clip path group">
                          <div className="absolute inset-[0_0.22%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[104px_11px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
                            <div className="absolute inset-[-0.62%_-0.48%_0_0]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.274 11.0679">
                                <g id="Group">
                                  <path d={svgPaths.p3fa49d00} fill="var(--fill-0, white)" id="Vector" />
                                  <path clipRule="evenodd" d={svgPaths.p22262b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
                                  <path clipRule="evenodd" d={svgPaths.p2a657a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
                                  <path d={svgPaths.p25ae9580} fill="var(--fill-0, white)" id="Vector_4" />
                                  <path d={svgPaths.p14dbea00} fill="var(--fill-0, white)" id="Vector_5" stroke="var(--stroke-2, white)" strokeMiterlimit="10" />
                                  <path d={svgPaths.p2dc70600} fill="var(--fill-0, white)" id="Vector_6" stroke="var(--stroke-2, white)" strokeMiterlimit="10" />
                                  <path d={svgPaths.p24cab00} fill="var(--fill-0, white)" id="Vector_7" stroke="var(--stroke-2, white)" strokeMiterlimit="10" />
                                  <path d={svgPaths.p3a334300} fill="var(--fill-0, white)" id="Vector_8" stroke="var(--stroke-2, white)" strokeMiterlimit="10" />
                                  <path d={svgPaths.p39f00380} fill="var(--fill-0, white)" id="Vector_9" stroke="var(--stroke-2, white)" strokeMiterlimit="10" />
                                  <path d={svgPaths.pde4a080} fill="var(--fill-0, white)" id="Vector_10" stroke="var(--stroke-2, white)" strokeMiterlimit="10" />
                                  <path d={svgPaths.p1dc8b480} fill="var(--fill-0, white)" id="Vector_11" stroke="var(--stroke-2, white)" strokeMiterlimit="10" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[11.4px] items-start leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-name="div.flex-col">
                  <Text text="About TM Rewards" />
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/faq/tm-rewards">
                    <p className="cursor-pointer leading-[20.4px]">TM Rewards FAQ</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/tm-rewards-terms-and-conditions">
                    <p className="cursor-pointer leading-[20.4px]">{`TM Rewards Terms & Conditions`}</p>
                  </a>
                  <a className="flex flex-col justify-center relative shrink-0" href="https://travismathew.com/pages/promo-code">
                    <p className="cursor-pointer leading-[20.4px]">Promo Codes</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#090c0f] content-stretch flex flex-col items-start left-0 pb-[43px] px-[48px] right-0 top-[1835.17px]" data-name="div.w-full">
        <div className="content-stretch flex items-start justify-between pt-[17px] relative shrink-0 w-full" data-name="div.justify-between">
          <div aria-hidden="true" className="absolute border-[#1a2026] border-solid border-t inset-0 pointer-events-none" />
          <div className="relative self-stretch shrink-0" data-name="div.flex">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[50px] h-full items-center relative">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.border-y">
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="div.relative">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="div.flex">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div">
                        <div className="content-stretch flex gap-[12px] items-center pr-[16px] py-[8px] relative shrink-0" data-name="button.pr-4">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="span.w-10">
                            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="United StatesIcon">
                              <div className="content-stretch flex flex-col h-[30px] items-center justify-center overflow-clip relative shrink-0 w-[40px]" data-name="us.svg fill">
                                <div className="h-[30px] relative shrink-0 w-[40px]" data-name="us.svg">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 30">
                                    <g clipPath="url(#clip0_8_6480)" id="us.svg">
                                      <path d="M0 0H40V30H0" fill="var(--fill-0, #BD3D44)" id="Vector" />
                                      <g id="Vector_2">
                                        <path d={svgPaths.p2985d900} fill="black" />
                                        <path d={svgPaths.p16d73780} stroke="var(--stroke-0, white)" strokeWidth="2.3125" />
                                      </g>
                                      <path d="M0 0H22.8V16.1562H0" fill="var(--fill-0, #333B42)" id="Vector_3" />
                                      <g id="Vector_4" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8_6480">
                                        <rect fill="white" height="30" width="40" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="span.underline">
                            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                              <p className="decoration-solid leading-[20.4px] underline">United States</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[20.41px] relative shrink-0 w-[59.91px]" data-name="div.underline">
                    <div aria-hidden="true" className="absolute border-l border-solid border-white inset-0 pointer-events-none" />
                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] left-[19px] not-italic text-[12px] text-white top-[9.5px] w-[41.235px]">
                      <p className="decoration-solid leading-[20.4px] underline whitespace-pre-wrap">English</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="div.flex">
                <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="p">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                    <p className="leading-[20.4px]">Copyright © 2025 TravisMathew</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative self-stretch shrink-0" data-name="div.items-center">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] h-full items-center justify-end pb-[12.79px] pt-[11.8px] relative">
              <a className="content-stretch cursor-pointer flex items-center relative shrink-0" data-name="a.text-white" href="https://travismathew.com/pages/travismathew-accessibility-statement">
                <div className="content-stretch flex flex-col items-start max-w-[48px] relative shrink-0" data-name="span.max-w-12">
                  <div className="aspect-[48/18.389999389648438] relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[100.05%] left-0 max-w-none top-[-0.03%] w-full" src={imgIcon} />
                    </div>
                  </div>
                </div>
              </a>
              <a className="block cursor-pointer h-[20.41px] relative shrink-0 w-[154.94px]" data-name="a.text-white" href="https://privacyportal.onetrust.com/webform/e35618a4-0a94-48f8-bb8e-00c8b0f8a3a2/55baaac1-8ff7-4be6-8dc1-9dbe66c8befe">
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] left-0 not-italic text-[12px] text-left text-white top-[calc(50%-0.7px)] w-[121.327px]" role="link" tabIndex="0">
                  <p className="cursor-pointer leading-[20.4px] whitespace-pre-wrap">Your Privacy Choices</p>
                </div>
                <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[126.94px] max-w-[48px] top-1/2 w-[28px]" data-name="span.max-w-12">
                  <div className="aspect-[28/13.520000457763672] relative shrink-0 w-full" data-name="Your Privacy ChoicesIcon">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-full left-[-0.01%] max-w-none top-0 w-[100.02%]" src={imgYourPrivacyChoicesIcon} />
                    </div>
                  </div>
                </div>
              </a>
              <div className="content-stretch flex items-center relative shrink-0" data-name="a.text-white">
                <a className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" href="https://cdn.shopify.com/s/files/1/0610/4629/2558/files/accounts.store_576fdbb5-d388-44f3-8626-6aefb3c5801b.pdf">
                  <p className="cursor-pointer leading-[20.4px]">{`Privacy, Ad & Cookie Policy`}</p>
                </a>
              </div>
              <div className="content-stretch flex items-center relative shrink-0" data-name="a.text-white">
                <a className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" href="https://travismathew.com/pages/terms-and-conditions">
                  <p className="cursor-pointer leading-[20.4px]">Terms + Condition</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[1941.1700439453125px] inset-0 pointer-events-none">
        <div className="content-stretch flex flex-col items-start pointer-events-auto sticky top-0" data-name="header.sticky">
          <div className="bg-[#090c0f] min-h-[37px] shrink-0 sticky top-0 w-full" data-name="sections: group_header">
            <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center min-h-[inherit] px-[60px] py-[8px] relative w-full">
                <div className="content-stretch flex items-center relative shrink-0" data-name="ul.flex">
                  <div className="content-stretch flex items-start relative shrink-0" data-name="li.flex">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="p">
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white whitespace-nowrap">
                        <p className="text-[12px]">
                          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20.4px]">{`50+ New Styles Just Dropped! `}</span>
                          <a className="cursor-pointer decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[20.4px] underline" href="https://travismathew.com/collections/mens-new-arrivals">
                            <span className="decoration-solid leading-[20.4px]" href="https://travismathew.com/collections/mens-new-arrivals">
                              Shop Now
                            </span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start min-h-[117px] pb-px relative shrink-0 w-full" data-name="div.w-full">
            <div aria-hidden="true" className="absolute border-[#d1d9de] border-b border-solid inset-0 pointer-events-none" />
            <div className="relative shrink-0 w-full" data-name="div">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                <div className="max-h-[65px] relative shrink-0 w-full" data-name="div.flex">
                  <div aria-hidden="true" className="absolute border-[#d1d9de] border-b border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center max-h-[inherit] size-full">
                    <div className="content-stretch flex items-center justify-between max-h-[inherit] pb-[16px] pt-[15px] px-[20px] relative w-full">
                      <Wrapper additionalClassNames="h-[26px] w-[792px]">
                        <div className="-translate-y-1/2 absolute left-[5px] overflow-clip size-[20px] top-[calc(50%-1px)]" data-name="icon-location">
                          <div className="absolute inset-[15%_20%_10%_20%]" data-name="Group">
                            <div className="absolute inset-[-5%_-6.25%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 16.5">
                                <g id="Group">
                                  <path d={svgPaths.p38685032} id="Vector" stroke="var(--stroke-0, #333B42)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                  <path d={svgPaths.p22883380} id="Vector_2" stroke="var(--stroke-0, #333B42)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[41px] top-[calc(50%-1px)]" data-name="span.text-black-600">
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#47515c] text-[16px] whitespace-nowrap">
                            <p className="leading-[24px]">|</p>
                          </div>
                        </div>
                        <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[54.33px] top-[calc(50%-1.7px)]" data-name="a.text-xs">
                          <a className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#47515c] text-[12px] whitespace-nowrap" href="https://travismathew.com/pages/stores">
                            <p className="cursor-pointer leading-[20.4px]">View All Locations</p>
                          </a>
                        </div>
                      </Wrapper>
                      <div className="relative shrink-0" data-name="a">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
                          <div className="content-stretch flex flex-col h-[34px] items-start overflow-clip relative shrink-0 w-[306px]" data-name="TravisMathew">
                            <img src={BlackLogo} alt="TravisMathew Logo" className="h-full w-auto object-contain" />
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-[782px]" data-name="div.hidden">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative w-full">
                          <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-end min-h-px min-w-px relative" data-name="ul.hidden">
                            <div className="content-stretch flex flex-col h-[22px] items-start px-[11px] relative shrink-0" data-name="li.h-5">
                              <a className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c7782] text-[14px] whitespace-nowrap" href="https://travismathew.com/account/login">
                                <p className="cursor-pointer leading-[21.7px]">Sign In</p>
                              </a>
                            </div>
                            <div className="h-[20px] relative shrink-0 w-[109.31px]" data-name="li.h-5">
                              <div aria-hidden="true" className="absolute border-[#9faab2] border-l border-solid inset-0 pointer-events-none" />
                              <a className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] left-[12px] not-italic text-[#6c7782] text-[14px] top-[10px] w-[92.51px]" href="https://travismathew.com/account/register">
                                <p className="cursor-pointer leading-[21.7px] whitespace-pre-wrap">Join For Free</p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="div.hidden">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between pr-[0.02px] relative w-full">
                      <div className="h-[0.01px] shrink-0 w-[387.73px]" data-name="div.hidden" />
                      <div className="content-stretch flex flex-col items-start max-h-[53px] py-[15px] relative shrink-0 w-[1124.52px]" data-name="nav.hidden:margin">
                        <div className="content-stretch flex gap-[40px] items-center justify-center max-h-[23px] relative shrink-0 w-full" data-name="nav.hidden">
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.relative">
                            <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#090c0f] text-[14px] whitespace-nowrap" href="https://travismathew.com/collections/mens-new-arrivals">
                              <p className="cursor-pointer leading-[21.7px]">{`New & Featured`}</p>
                            </a>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.relative">
                            <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#090c0f] text-[13.8px] whitespace-nowrap" href="https://travismathew.com/pages/men">
                              <p className="cursor-pointer leading-[21.7px]">Men</p>
                            </a>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.relative">
                            <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#090c0f] text-[14px] whitespace-nowrap" href="https://travismathew.com/pages/women">
                              <p className="cursor-pointer leading-[21.7px]">Women</p>
                            </a>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.relative">
                            <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#090c0f] text-[14px] whitespace-nowrap" href="https://travismathew.com/collections/footwear">
                              <p className="cursor-pointer leading-[21.7px]">Shoes</p>
                            </a>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.relative">
                            <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#090c0f] text-[13.8px] whitespace-nowrap" href="https://travismathew.com/collections/accessories">
                              <p className="cursor-pointer leading-[21.7px]">Accessories</p>
                            </a>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.relative">
                            <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#090c0f] text-[14px] whitespace-nowrap" href="https://travismathew.com/collections/mens-golf">
                              <p className="cursor-pointer leading-[21.7px]">Golf</p>
                            </a>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.relative">
                            <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#090c0f] text-[14px] whitespace-nowrap" href="https://travismathew.com/collections/game-day">
                              <p className="cursor-pointer leading-[21.7px]">Game Day</p>
                            </a>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.relative">
                            <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap" href="https://travismathew.com/collections/sale">
                              <p className="cursor-pointer leading-[21.7px]">Sale</p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[28px] items-center justify-end pr-[20px] relative shrink-0 w-[407.73px]" data-name="Nav menu, search bar and cart icon">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.relative">
                          <div className="absolute bg-[rgba(255,255,255,0)] opacity-0 right-0 size-[2px] top-[44px]" data-name="div.ss__autocomplete--target">
                            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none shadow-[0px_3px_5px_0px_rgba(0,0,0,0.05)]" />
                          </div>
                          <div className="bg-[#f5f7f8] content-stretch flex h-[36px] items-start justify-center overflow-clip pb-[9.5px] pl-[12px] pr-[32px] pt-[11.5px] relative shrink-0 w-[180px]" data-name="input.ss__autocomplete__input">
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="div#placeholder">
                              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-full">
                                <p className="leading-[normal] whitespace-pre-wrap">Search</p>
                              </div>
                            </div>
                          </div>
                          <div className="absolute content-stretch flex items-center justify-center right-0 size-[36px] top-0" data-name="Click to search for the typed product">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 size-[20px]" data-name="span.w-5">
                              <div className="relative shrink-0 size-[20px]" data-name="Frame">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                  <g id="Frame">
                                    <path d={svgPaths.p104f4300} id="Vector" stroke="var(--stroke-0, #090C0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Cart icon and items counter (shown only when cart items > 0)">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Cart Drawer">
                            <div className="absolute inset-[20%_9.99%_3.75%_0]" data-name="Name=Cart Empty">
                              <div className="absolute inset-[-4.92%_-4.16%_0_0]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7505 16">
                                  <g id="Name=Cart Empty">
                                    <path d={svgPaths.p2ffe4a00} id="Vector" stroke="var(--stroke-0, #090C0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    <path d="M0 0.75H2.5L4 4.25" id="Vector 3" stroke="var(--stroke-0, #090C0F)" strokeWidth="1.5" />
                                    <path d={svgPaths.p280ed080} fill="var(--fill-0, #090C0F)" id="Vector_2" />
                                    <path d={svgPaths.p27c7ff00} fill="var(--fill-0, #090C0F)" id="Vector_3" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[756.17px] content-stretch flex flex-col items-start left-[15px] max-h-[1185px]" data-name="Live chat">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div#gladlyChatTempWrapper">
          <div className="bg-white content-stretch flex flex-col h-[50px] items-center justify-center min-w-[50px] px-[13px] relative shrink-0" data-name="Live chat">
            <div className="relative shrink-0 size-[24px]" data-name="Frame">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g clipPath="url(#clip0_8_1530)" id="Frame">
                  <path clipRule="evenodd" d={svgPaths.p1b192200} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
                  <path clipRule="evenodd" d={svgPaths.p1bf8f100} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
                  <path d={svgPaths.p563d400} id="Vector_3" stroke="var(--stroke-0, white)" />
                </g>
                <defs>
                  <clipPath id="clip0_8_1530">
                    <rect fill="white" height="24" width="24" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.7)] h-[1200px] left-[1920px] opacity-0 top-0 w-[1920px]" data-name="div.rebuy-cart__background" />
    </div>
  );
}