import clsx from "clsx";
import svgPaths from "./svg-tuck8o1sla";
import imgTravisMathewRewardsLogo from "figma:asset/b6858b952ea5bc2c6545cc6767d90711664c26b8.png";
import imgIcon from "figma:asset/bebc00b59b077c5e59b6bd8f62b979701b2aa4d0.png";
import imgYourPrivacyChoicesIcon from "figma:asset/ed35f48a9fd142447684c5717a326546a5588b38.png";
import { imgGroup, imgGroup1, imgGroup2 } from "./svg-2xuta";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function DivJustifyBetween({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative w-full">{children}</div>
    </div>
  );
}
type P1HelperProps = {
  additionalClassNames?: string;
};

function P1Helper({ children, additionalClassNames = "" }: React.PropsWithChildren<P1HelperProps>) {
  return (
    <a href="https://login.travismathew.com/accounts.store.downloadPublicConsentDocument" className={clsx("cursor-pointer font-['Inter:Medium_Italic',sans-serif] font-medium text-[#090c0f]", additionalClassNames)}>
      <span className="leading-[20.4px]" href="https://login.travismathew.com/accounts.store.downloadPublicConsentDocument">
        {children}
      </span>
    </a>
  );
}
type DivProps = {
  additionalClassNames?: string;
};

function Div({ children, additionalClassNames = "" }: React.PropsWithChildren<DivProps>) {
  return (
    <div className={clsx("content-stretch flex flex-col items-center mb-[-1.01px] pb-[0.98px] relative shrink-0", additionalClassNames)}>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[19.99px] not-italic relative shrink-0 text-[#090c0f] text-[14px] text-center whitespace-nowrap">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[85px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 85">
        {children}
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type DivTextSmTextProps = {
  text: string;
};

function DivTextSmText({ text }: DivTextSmTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f5f7f8] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">
        <p className="leading-[16.8px]">{text}</p>
      </div>
    </div>
  );
}

function Plus() {
  return (
    <div className="absolute inset-[13.75%]">
      <div className="absolute inset-[-5.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Plus">
            <path d="M0.75 8.25H15.25" id="2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M8.25 15.25V0.75" id="1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type PTextProps = {
  text: string;
};

function PText({ text }: PTextProps) {
  return (
    <div className="content-stretch flex flex-col items-center pb-[1.5px] pt-[0.5px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#333b42] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[14px]">{text}</p>
      </div>
    </div>
  );
}
type LabelAbsoluteProps = {
  text: string;
  text1: string;
};

function LabelAbsolute({ text, text1 }: LabelAbsoluteProps) {
  return (
    <div className="absolute bg-white bottom-[21.62%] content-stretch flex gap-[5px] items-start leading-[0] left-[8px] not-italic pl-[9px] pr-[4px] top-[20.37%] whitespace-nowrap">
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

export default function Component1024WLight() {
  return (
    <div className="bg-white relative size-full" data-name="1024w light">
      <div className="absolute bg-white bottom-[1952.55px] content-stretch flex flex-col items-start max-w-[1008px] overflow-clip right-[-1024px] top-0 w-[492px]" data-name="div.rebuy-cart__flyout">
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
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-[160px] min-w-px overflow-x-clip overflow-y-auto relative w-full" data-name="div">
          <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div">
            <div className="relative shrink-0 w-full" data-name="div">
              <div aria-hidden="true" className="absolute border-[#e2dfda] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col items-start pb-[36px] pt-[10px] px-[18.5px] relative w-full">
                <Wrapper additionalClassNames="h-[268px]">
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
      <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 max-w-[2000px] px-[256px] right-0 top-[calc(50%-645.8px)]" data-name="main#MainContent">
        <div className="bg-white max-w-[512px] relative rounded-[4px] shrink-0 w-full" data-name="div.max-w-lg">
          <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[32px] py-[36px] relative w-full">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="div.max-w-lg:shadow" />
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.flex">
              <div className="content-stretch flex flex-col items-start max-w-[448px] pb-[8px] relative shrink-0 w-[330px]" data-name="TravisMathew Rewards Logo:margin">
                <div className="h-[72px] max-w-[448px] relative shrink-0 w-[330px]" data-name="TravisMathew Rewards Logo">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTravisMathewRewardsLogo} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[28px] relative shrink-0" data-name="h2#register:margin">
                <div className="content-stretch flex flex-col items-center min-w-[448px] pl-[24.59px] pr-[24.61px] relative shrink-0" data-name="h2#register">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[27px] not-italic relative shrink-0 text-[#333b42] text-[18px] text-center whitespace-nowrap">
                    <p className="mb-0">{`It's free to join & you can start earning right`}</p>
                    <p>away!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Sign Up benefits icons and labels">
              <div className="content-stretch flex items-start justify-between pb-[21.4px] pl-[5px] pr-[5.02px] pt-[5px] relative w-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px pb-[1.01px] relative" data-name="div.flex">
                  <div className="content-stretch flex flex-col items-start mb-[-1.01px] pb-[17px] relative shrink-0" data-name="div:margin">
                    <div className="aspect-[85/85] content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Get FREE Shipping & Returns">
                      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[85px]" data-name="TM_free-shipping-and-returns.svg fill">
                        <Wrapper1>
                          <g id="TM_free-shipping-and-returns.svg">
                            <path d={svgPaths.p26eaa900} fill="var(--fill-0, #231F20)" id="Vector" />
                            <path d={svgPaths.p9ff7f00} fill="var(--fill-0, #231F20)" id="Vector_2" />
                            <path d={svgPaths.p16996800} fill="var(--fill-0, #231F20)" id="Vector_3" />
                            <path d={svgPaths.p34487970} fill="var(--fill-0, #231F20)" id="Vector_4" />
                            <path d={svgPaths.p12bbd800} fill="var(--fill-0, #231F20)" id="Vector_5" />
                            <path d={svgPaths.p23fa9900} fill="var(--fill-0, #231F20)" id="Vector_6" />
                            <path d={svgPaths.p1a321700} fill="var(--fill-0, #231F20)" id="Vector_7" />
                          </g>
                        </Wrapper1>
                      </div>
                    </div>
                  </div>
                  <Div additionalClassNames="px-[6.56px]">
                    <p className="mb-0">Get FREE Shipping</p>
                    <p>{`& Returns`}</p>
                  </Div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px pb-px relative" data-name="div.flex">
                  <div className="content-stretch flex flex-col items-start mb-[-1px] pb-[17px] relative shrink-0" data-name="div:margin">
                    <div className="aspect-[85/85] content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Unlock Tier-Up Gifts">
                      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[85px]" data-name="TM_earn-tier-up-gifts.svg fill">
                        <Wrapper1>
                          <g id="TM_earn-tier-up-gifts.svg">
                            <path d={svgPaths.p1087c3f0} fill="var(--fill-0, #231F20)" id="Vector" />
                            <path d={svgPaths.p19bcc200} fill="var(--fill-0, #231F20)" id="Vector_2" />
                          </g>
                        </Wrapper1>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center mb-[-1px] pb-[0.98px] relative shrink-0" data-name="div">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#090c0f] text-[14px] text-center whitespace-nowrap">
                      <p className="leading-[19.99px]">Unlock Tier-Up Gifts</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px pb-[1.01px] relative" data-name="div.flex">
                  <div className="content-stretch flex flex-col items-start mb-[-1.01px] pb-[17px] relative shrink-0" data-name="div:margin">
                    <div className="aspect-[85/85] content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Earn & Redeem Points on Purchases">
                      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[85px]" data-name="TM_earn-tier-up-rewards.svg fill">
                        <Wrapper1>
                          <g id="TM_earn-tier-up-rewards.svg">
                            <path d={svgPaths.p1be1f100} fill="var(--fill-0, #231F20)" id="Vector" />
                            <path d={svgPaths.pc23a280} fill="var(--fill-0, #231F20)" id="Vector_2" />
                            <path d={svgPaths.p6411c00} fill="var(--fill-0, #231F20)" id="Vector_3" />
                            <path d={svgPaths.p3a3b000} fill="var(--fill-0, #231F20)" id="Vector_4" />
                            <path d={svgPaths.pafe3500} fill="var(--fill-0, #231F20)" id="Vector_5" />
                            <path d={svgPaths.pfe46240} fill="var(--fill-0, #231F20)" id="Vector_6" />
                            <path d={svgPaths.p21b4a700} fill="var(--fill-0, #231F20)" id="Vector_7" />
                            <path d={svgPaths.p387a5e00} fill="var(--fill-0, #231F20)" id="Vector_8" />
                            <path d={svgPaths.p80e1a12} fill="var(--fill-0, #231F20)" id="Vector_9" />
                            <path d={svgPaths.p34c12f00} fill="var(--fill-0, #231F20)" id="Vector_10" />
                            <path d={svgPaths.p1d6ecc00} fill="var(--fill-0, #231F20)" id="Vector_11" />
                            <path d={svgPaths.p2b07aa80} fill="var(--fill-0, #231F20)" id="Vector_12" />
                            <path d={svgPaths.p5bbd880} fill="var(--fill-0, #231F20)" id="Vector_13" />
                            <path d={svgPaths.p30556040} fill="var(--fill-0, #231F20)" id="Vector_14" />
                            <path d={svgPaths.p24f26e30} fill="var(--fill-0, #231F20)" id="Vector_15" />
                          </g>
                        </Wrapper1>
                      </div>
                    </div>
                  </div>
                  <Div additionalClassNames="px-[3.14px]">
                    <p className="mb-0">{`Earn & Redeem`}</p>
                    <p>Points on Purchases</p>
                  </Div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center pb-[18px] pt-[12px] relative shrink-0 w-full" data-name="Other benefits Link">
              <div className="flex flex-col font-['Inter:Medium_Italic',sans-serif] font-medium italic justify-center leading-[0] relative shrink-0 text-[#333b42] text-[0px] text-center whitespace-nowrap">
                <p className="text-[13px]">
                  <span className="leading-[18.56px]">{`Plus other exclusive benefits. Exclusions Apply. `}</span>
                  <a className="cursor-pointer decoration-solid leading-[18.56px] underline" href="https://travismathew.com/pages/tm-rewards">
                    <span className="decoration-solid leading-[18.56px]" href="https://travismathew.com/pages/tm-rewards">
                      See Details
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full" data-name="form#create_customer">
              <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-full" data-name="div.w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="First name input">
                  <Helper />
                  <LabelAbsolute text="*" text1="First Name" />
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Last name input">
                  <Helper />
                  <LabelAbsolute text="*" text1="Last Name" />
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Email input">
                  <Helper />
                  <LabelAbsolute text="*" text1="Email" />
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Password input">
                  <Helper />
                  <LabelAbsolute text="*" text1="Password" />
                  <div className="absolute content-stretch flex h-[22px] items-center justify-center p-px right-[8px] top-[9px] w-[50px]" data-name="span.border">
                    <div aria-hidden="true" className="absolute border border-[#090c0f] border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#333b42] text-[10px] text-center whitespace-nowrap">
                      <p className="leading-[12px]">SHOW</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[250.59px] relative shrink-0 w-full" data-name="div.w-full">
                <div className="absolute content-stretch flex items-center left-0 right-0 top-[-1px]" data-name="div.inline-flex">
                  <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[25.61px]" data-name="input#marketing:margin">
                    <div className="bg-[#090c0f] rounded-[2.5px] shrink-0 size-[17.61px]" data-name="input#marketing" />
                  </div>
                  <div className="content-stretch flex flex-col items-start min-w-[422.3900146484375px] pb-[0.975px] pr-[43.45px] relative shrink-0" data-name="label.text-sm">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[19.99px] not-italic relative shrink-0 text-[#333b42] text-[14px] whitespace-nowrap">
                      <p className="mb-0">Sign up for email and get special news and offers from</p>
                      <p>TravisMathew.</p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[557.7039794921875px] px-[10px] right-0 top-[57.38px]" data-name="div.font-heading">
                  <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p">
                    <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#333b42] text-[0px] text-[12px] text-center whitespace-nowrap">
                      <p className="mb-0">
                        <span className="font-['Inter:Italic',sans-serif] font-normal leading-[20.4px] text-[#333b42]">{`By creating an account, you agree to TravisMathew's `}</span>
                        <P1Helper additionalClassNames="leading-[20.4px]">{`Terms of Use `}</P1Helper>
                        <span className="font-['Inter:Italic',sans-serif] font-normal leading-[20.4px] text-[#333b42]">and</span>
                      </p>
                      <p className="leading-[20.4px] mb-0">
                        <a className="cursor-pointer font-['Inter:Medium_Italic',sans-serif] font-medium text-[#090c0f]" href="https://www.travismathew.com/tm-rewards-terms-and-conditions">
                          <span className="leading-[20.4px]" href="https://www.travismathew.com/tm-rewards-terms-and-conditions">
                            TM Reward Program Terms of Use
                          </span>
                        </a>
                        <span className="font-['Inter:Italic',sans-serif] font-normal text-[#333b42]">, and that you have reviewed its</span>
                      </p>
                      <p className="leading-[20.4px]">
                        <P1Helper>{`Privacy, Ad, & Cookie Policies`}</P1Helper>
                        <span className="font-['Inter:Italic',sans-serif] font-normal text-[#333b42]">.</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex items-start justify-center left-0 right-0 top-[137.19px]" data-name="div.flex">
                  <div className="bg-[#090c0f] content-stretch flex h-[42px] items-center justify-center pb-[7.5px] pt-[6.5px] px-[33px] relative shrink-0 w-[131px]" data-name="button.btn">
                    <div aria-hidden="true" className="absolute border border-[#090c0f] border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[14px] not-italic relative shrink-0 text-[13px] text-center text-white tracking-[0.26px] whitespace-nowrap">
                      <p className="mb-0">Join For</p>
                      <p>Free</p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[9.85px] items-center left-0 right-0 top-[196.19px]" data-name="div.flex">
                  <div className="content-stretch flex flex-col items-start min-w-[192.22000122070312px] pb-[0.7px] relative shrink-0" data-name="div">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#333b42] text-[0px] whitespace-nowrap">
                      <p className="text-[14px]">
                        <span className="leading-[21.7px]">{`Already Registered? `}</span>
                        <a className="cursor-pointer decoration-solid leading-[21.7px] underline" href="https://travismathew.com/account/login">
                          <span className="decoration-solid leading-[21.7px]" href="https://travismathew.com/account/login">
                            Sign In
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                  <a className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#333b42] text-[14px] text-center whitespace-nowrap" href="https://travismathew.com/pages/tm-rewards">
                    <p className="cursor-pointer decoration-solid leading-[21.7px] underline">Learn More About TM Rewards</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f5f7f8] content-stretch flex flex-col items-center justify-center left-0 min-h-[300px] px-[18px] right-0 top-[1136.52px]" data-name="div.w-full">
        <div className="content-stretch flex flex-col items-start max-w-[706px] relative shrink-0" data-name="div.klaviyo-form-XuJhzE">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.needsclick">
            <div className="bg-[#f5f7f8] relative shrink-0 w-full" data-name="form.needsclick">
              <div className="flex flex-row justify-center size-full">
                <div className="content-stretch flex items-start justify-center px-[30px] py-[48px] relative w-full">
                  <div className="content-stretch flex flex-col items-start justify-center min-h-[300px] min-w-[646px] relative self-stretch shrink-0" data-name="div.needsclick">
                    <div className="content-stretch flex items-start justify-center min-h-[143.61000061035156px] py-[10px] relative shrink-0 w-full" data-name="div.needsclick">
                      <div className="content-stretch flex flex-col gap-[19.105px] items-start relative self-stretch shrink-0 w-[634px]" data-name="div#rich-text-01K1BRDYEANN2XGYEEV139D57M">
                        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2">
                          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-black text-center whitespace-nowrap">
                            <p className="leading-[normal]">GET 20% OFF YOUR FIRST ORDER</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div">
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[23.2px] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
                            <p className="mb-0">Stay updated from TravisMathew on exclusive online and in-store offers, new</p>
                            <p>product alerts, store events in your area and more.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.needsclick">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.needsclick">
                        <div className="flex flex-row items-end size-full">
                          <div className="content-stretch flex items-end px-[16px] py-[10px] relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.needsclick">
                              <div className="bg-white h-[42px] relative shrink-0 w-full" data-name="input#email_01K1BRDYEJSTYG267R2C176A81">
                                <div className="overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex flex-col items-start pl-[17px] pr-px py-[12.5px] relative size-full">
                                    <div className="relative shrink-0 w-full" data-name="div#placeholder">
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a2026] text-[14px] tracking-[1px] w-full">
                                          <p className="leading-[normal] whitespace-pre-wrap">Email Address</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div aria-hidden="true" className="absolute border border-[#d1d9de] border-solid inset-0 pointer-events-none" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-end px-[6px] py-[10px] relative self-stretch shrink-0" data-name="div.needsclick">
                        <div className="bg-[#090c0f] content-stretch flex flex-col h-[42px] items-center justify-center pb-[15.5px] pt-[14.5px] px-[24px] relative shrink-0" data-name="button.needsclick">
                          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[1px] whitespace-nowrap">
                            <p className="leading-[12px]">SIGN UP</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start justify-center py-[10px] relative shrink-0 w-full" data-name="div.needsclick">
                      <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[634px]" data-name="div#rich-text-01K1BRDYEXGJ97V536ZR8SE91H">
                        <PText text="*For new customers only. Not valid on Member Exclusive product, luggage or sale items." />
                        <PText text="Cannot be combined with additional offers." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#090c0f] content-stretch flex flex-col gap-[44px] items-start left-0 pb-[44px] pt-[64px] px-[20px] right-0 top-[1532.52px]" data-name="div.block">
        <div className="content-stretch flex flex-col h-[27px] items-center relative shrink-0 w-full" data-name="div.relative">
          <div className="content-stretch flex flex-col h-[27px] items-start max-w-[984px] overflow-clip relative shrink-0 w-[306px]" data-name="TravisMathew">
            <div className="content-stretch flex flex-col h-[27px] items-center justify-center overflow-clip relative shrink-0 w-[306px]" data-name="TM_Logo_Full_3.svg fill">
              <div className="h-[27px] overflow-clip relative shrink-0 w-[306px]" data-name="TM_Logo_Full_3.svg">
                <div className="absolute contents inset-0" data-name="Clip path group">
                  <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[306px_27px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 305.995 27.0003">
                      <g id="Group">
                        <path clipRule="evenodd" d={svgPaths.p329d4680} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                        <path clipRule="evenodd" d={svgPaths.p17cd0500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
                        <path d={svgPaths.p31f81600} fill="var(--fill-0, white)" id="Vector_3" />
                        <path d={svgPaths.p9e57d00} fill="var(--fill-0, white)" id="Vector_4" />
                        <path d={svgPaths.p3bb1500} fill="var(--fill-0, white)" id="Vector_5" />
                        <path d={svgPaths.p368003c0} fill="var(--fill-0, white)" id="Vector_6" />
                        <path d={svgPaths.pe67f872} fill="var(--fill-0, white)" id="Vector_7" />
                        <path d={svgPaths.p16723600} fill="var(--fill-0, white)" id="Vector_8" />
                        <path d={svgPaths.pccde900} fill="var(--fill-0, white)" id="Vector_9" />
                        <path d={svgPaths.p311e3580} fill="var(--fill-0, white)" id="Vector_10" />
                        <path d={svgPaths.p17d49000} fill="var(--fill-0, white)" id="Vector_11" />
                        <path d={svgPaths.p10f82100} fill="var(--fill-0, white)" id="Vector_12" />
                        <path d={svgPaths.p38850a00} fill="var(--fill-0, white)" id="Vector_13" />
                        <path d={svgPaths.pc94f600} fill="var(--fill-0, white)" id="Vector_14" />
                        <path d={svgPaths.p15e41600} fill="var(--fill-0, white)" id="Vector_15" />
                        <path d={svgPaths.p22095e20} fill="var(--fill-0, white)" id="Vector_16" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pb-[44px] relative shrink-0 w-full" data-name="div">
          <div className="content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="div.border-t">
            <div aria-hidden="true" className="absolute border-[#6c7782] border-solid border-t inset-0 pointer-events-none" />
            <div className="relative shrink-0 w-full" data-name="div.justify-between">
              <div className="flex flex-row items-center size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[964px] py-[24px] relative w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Expand menu item">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
                      <Plus />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="div.border-t">
            <div aria-hidden="true" className="absolute border-[#6c7782] border-solid border-t inset-0 pointer-events-none" />
            <DivJustifyBetween>
              <DivTextSmText text="Customer Support" />
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Expand menu item">
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
                  <Plus />
                </div>
              </div>
            </DivJustifyBetween>
          </div>
          <div className="content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="div.border-t">
            <div aria-hidden="true" className="absolute border-[#6c7782] border-solid border-t inset-0 pointer-events-none" />
            <DivJustifyBetween>
              <DivTextSmText text="Discover" />
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Expand menu item">
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
                  <Plus />
                </div>
              </div>
            </DivJustifyBetween>
          </div>
          <div className="content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="div.border-t">
            <div aria-hidden="true" className="absolute border-[#6c7782] border-solid border-t inset-0 pointer-events-none" />
            <DivJustifyBetween>
              <div className="content-stretch flex flex-col items-start pb-[4.8px] pt-px relative shrink-0" data-name="div.text-sm">
                <div className="aspect-[104/11] content-stretch flex items-start overflow-clip relative shrink-0" data-name="Menu Header Image">
                  <div className="content-stretch flex flex-col h-[11px] items-center justify-center overflow-clip relative shrink-0 w-[104px]" data-name="TM_Rewards.svg fill">
                    <div className="h-[11px] overflow-clip relative shrink-0 w-[104px]" data-name="TM_Rewards.svg">
                      <div className="absolute contents inset-0" data-name="Clip path group">
                        <div className="absolute inset-[0_0.22%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[104px_11px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
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
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Expand menu item">
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
                  <Plus />
                </div>
              </div>
            </DivJustifyBetween>
          </div>
          <div className="content-stretch flex flex-col gap-[10.99px] items-start pt-[25px] relative shrink-0 w-full" data-name="div.border-t">
            <div aria-hidden="true" className="absolute border-[#6c7782] border-solid border-t inset-0 pointer-events-none" />
            <div className="relative shrink-0 w-full" data-name="div.justify-between">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="a.block">
                  <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f5f7f8] text-[14px] tracking-[0.56px] uppercase w-full" href="https://travismathew.com/pages/contact-us">
                    <p className="cursor-pointer leading-[16.8px] whitespace-pre-wrap">Contact Us</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="div.text-white">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15px] items-start relative w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="a.block">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-full">
                    <p className="leading-[20.4px] whitespace-pre-wrap">1-877-969-1952 Mon-Fri: 8am - 5pm PST</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="a.block">
                  <a className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-full" href="mailto:onlinesupport@travismathew.com">
                    <p className="cursor-pointer leading-[20.4px] whitespace-pre-wrap">onlinesupport@travismathew.com</p>
                  </a>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="a.block">
                  <a className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-full" href="https://goo.gl/maps/VtLpxGQZe35yZLAw8">
                    <p className="cursor-pointer leading-[20.4px] whitespace-pre-wrap">15202 Graham St, Huntington Beach, CA 92649</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#090c0f] content-stretch cursor-pointer flex gap-[36px] h-[20px] items-center justify-center relative shrink-0 w-full" data-name="div.w-full">
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
      <div className="absolute bg-[#090c0f] content-stretch flex flex-col items-start left-0 pb-[44px] right-0 top-[2242.53px]" data-name="div.w-full">
        <div className="content-stretch flex flex-col items-start justify-between pt-px relative shrink-0 w-full" data-name="div.justify-between">
          <div aria-hidden="true" className="absolute border-[#1a2026] border-solid border-t inset-0 pointer-events-none" />
          <div className="relative shrink-0 w-full" data-name="div.flex">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[43px] items-center relative w-full">
              <div className="content-stretch flex flex-col items-center py-px relative shrink-0 w-full" data-name="div.border-y">
                <div aria-hidden="true" className="absolute border-[#6c7782] border-b border-solid border-t inset-0 pointer-events-none" />
                <div className="relative shrink-0" data-name="div.relative">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[24px] relative">
                    <div className="content-stretch flex items-center relative shrink-0" data-name="div.flex">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div">
                          <div className="content-stretch flex gap-[12px] items-center pr-[16px] relative shrink-0" data-name="button.pr-4">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="span.w-10">
                              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="United StatesIcon">
                                <div className="content-stretch flex flex-col h-[30px] items-center justify-center overflow-clip relative shrink-0 w-[40px]" data-name="us.svg fill">
                                  <div className="h-[30px] relative shrink-0 w-[40px]" data-name="us.svg">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 30">
                                      <g clipPath="url(#clip0_8_6504)" id="us.svg">
                                        <path d="M0 0H40V30H0" fill="var(--fill-0, #BD3D44)" id="Vector" />
                                        <g id="Vector_2">
                                          <path d={svgPaths.p2985d900} fill="black" />
                                          <path d={svgPaths.p16d73780} stroke="var(--stroke-0, white)" strokeWidth="2.3125" />
                                        </g>
                                        <path d="M0 0H22.8V16.1562H0" fill="var(--fill-0, #333B42)" id="Vector_3" />
                                        <g id="Vector_4" />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8_6504">
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
          <Wrapper additionalClassNames="h-[160.61px]">
            <a className="-translate-x-1/2 absolute content-stretch cursor-pointer flex items-center left-1/2 top-[21px]" data-name="a.text-white" href="https://travismathew.com/pages/travismathew-accessibility-statement">
              <div className="content-stretch flex flex-col items-start max-w-[48px] relative shrink-0" data-name="span.max-w-12">
                <div className="aspect-[48/18.389999389648438] relative shrink-0 w-full" data-name="Icon">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[100.05%] left-0 max-w-none top-[-0.03%] w-full" src={imgIcon} />
                  </div>
                </div>
              </div>
            </a>
            <a className="-translate-x-1/2 absolute block cursor-pointer h-[20.41px] left-1/2 top-[59.39px] w-[154.94px]" data-name="a.text-white" href="https://privacyportal.onetrust.com/webform/e35618a4-0a94-48f8-bb8e-00c8b0f8a3a2/55baaac1-8ff7-4be6-8dc1-9dbe66c8befe">
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
            <div className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%-0.2px)] top-[98.79px]" data-name="a.text-white">
              <a className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" href="https://cdn.shopify.com/s/files/1/0610/4629/2558/files/accounts.store_576fdbb5-d388-44f3-8626-6aefb3c5801b.pdf">
                <p className="cursor-pointer leading-[20.4px]">{`Privacy, Ad & Cookie Policy`}</p>
              </a>
            </div>
            <div className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%+0.27px)] top-[139.2px]" data-name="a.text-white">
              <a className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" href="https://travismathew.com/pages/terms-and-conditions">
                <p className="cursor-pointer leading-[20.4px]">Terms + Condition</p>
              </a>
            </div>
          </Wrapper>
        </div>
      </div>
      <div className="absolute h-[2592.550048828125px] inset-0 pointer-events-none">
        <div className="content-stretch flex flex-col items-start pointer-events-auto sticky top-0" data-name="header.sticky">
          <div className="bg-[#090c0f] content-stretch flex items-center justify-center min-h-[37px] py-[8px] relative shrink-0 w-full" data-name="sections: group_header">
            <div className="content-stretch flex items-center relative shrink-0" data-name="ul.flex">
              <div className="content-stretch flex items-start relative shrink-0" data-name="li.flex">
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="p">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white whitespace-nowrap">
                    <p className="text-[12px]">
                      <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20.4px]">{`Free shipping on orders for members! `}</span>
                      <a className="cursor-pointer decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[20.4px] underline" href="https://travismathew.com/account/register">
                        <span className="decoration-solid leading-[20.4px]" href="https://travismathew.com/account/register">
                          Join for Free
                        </span>
                      </a>
                      <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20.4px]">{` or `}</span>
                      <a className="cursor-pointer decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[20.4px] underline" href="https://travismathew.com/account/login">
                        <span className="decoration-solid leading-[20.4px]" href="https://travismathew.com/account/login">
                          Sign In
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start min-h-[127px] pb-px relative shrink-0 w-full" data-name="div.w-full">
            <div aria-hidden="true" className="absolute border-[#d1d9de] border-b border-solid inset-0 pointer-events-none" />
            <div className="relative shrink-0 w-full" data-name="div">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                <div className="max-h-[82px] relative shrink-0 w-full" data-name="div.flex">
                  <div className="flex flex-row items-center max-h-[inherit] size-full">
                    <div className="content-stretch flex items-center justify-between max-h-[inherit] pb-[10px] pt-[20px] px-[20px] relative w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="a">
                        <div className="content-stretch flex flex-col h-[30px] items-start overflow-clip relative shrink-0 w-[44px]" data-name="TravisMathew">
                          <div className="content-stretch flex flex-col h-[30px] items-center justify-center overflow-clip relative shrink-0 w-[44px]" data-name="tm-mobile-logo.svg fill">
                            <div className="h-[30px] overflow-clip relative shrink-0 w-[44px]" data-name="tm-mobile-logo.svg">
                              <div className="absolute contents inset-0" data-name="Clip path group">
                                <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[44px_30px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 30">
                                    <g id="Group">
                                      <path clipRule="evenodd" d={svgPaths.p2fa8bd30} fill="var(--fill-0, #090C0F)" fillRule="evenodd" id="Vector" />
                                      <path clipRule="evenodd" d={svgPaths.p21327100} fill="var(--fill-0, #090C0F)" fillRule="evenodd" id="Vector_2" />
                                      <path d={svgPaths.p17296a00} fill="var(--fill-0, #090C0F)" id="Vector_3" />
                                      <path d={svgPaths.p499f500} fill="var(--fill-0, #090C0F)" id="Vector_4" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[36px] items-start relative shrink-0" data-name="ul.flex">
                        <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="li">
                          <a className="block cursor-pointer relative shrink-0 size-[20px]" data-name="Account Login" href="https://travismathew.com/account/login">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g id="Account Login">
                                <path d={svgPaths.p1f9652c0} id="Vector" stroke="var(--stroke-0, #333B42)" strokeWidth="1.5" />
                                <path d={svgPaths.p2debb700} id="Vector_2" stroke="var(--stroke-0, #333B42)" strokeWidth="1.5" />
                                <path d={svgPaths.p2863e4c0} id="Vector_3" stroke="var(--stroke-0, #333B42)" strokeWidth="1.5" />
                                <path d="M7.75 11H12.75" id="Vector_4" stroke="var(--stroke-0, #333B42)" strokeWidth="1.5" />
                              </g>
                            </svg>
                          </a>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="li">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Cart having 0 items">
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
                        <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="li">
                          <Wrapper2>
                            <g id="Open menu">
                              <path d="M2.75 16.25H17.25" id="Vector" stroke="var(--stroke-0, #333B42)" strokeLinecap="round" strokeWidth="1.5" />
                              <path d="M2.75 10.25H17.25" id="Vector_2" stroke="var(--stroke-0, #333B42)" strokeLinecap="round" strokeWidth="1.5" />
                              <path d="M2.75 4.25H17.25" id="Vector_3" stroke="var(--stroke-0, #333B42)" strokeLinecap="round" strokeWidth="1.5" />
                            </g>
                          </Wrapper2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="div.flex">
                  <div className="flex flex-row justify-center size-full">
                    <div className="content-stretch flex items-start justify-center px-[20px] py-[15px] relative w-full">
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="form.relative">
                        <div className="bg-[#f5f7f8] h-[36px] relative shrink-0 w-full" data-name="input.ss__autocomplete__input--mobile">
                          <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex items-start justify-center pb-[9.5px] pl-[12px] pr-[32px] pt-[11.5px] relative size-full">
                              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="div#placeholder">
                                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-full">
                                  <p className="leading-[normal] whitespace-pre-wrap">Search</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex items-center justify-center right-0 size-[36px] top-0" data-name="Click to search for the typed product">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 size-[20px]" data-name="span.w-5">
                            <Wrapper2>
                              <g id="Frame">
                                <path d={svgPaths.p104f4300} id="Vector" stroke="var(--stroke-0, #090C0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              </g>
                            </Wrapper2>
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
      <div className="absolute bottom-[1967.55px] content-stretch flex flex-col items-start left-[15px] max-h-[625px]" data-name="Live chat">
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
      <div className="absolute bg-[rgba(0,0,0,0.7)] h-[640px] left-[1024px] opacity-0 top-0 w-[1024px]" data-name="div.rebuy-cart__background" />
    </div>
  );
}