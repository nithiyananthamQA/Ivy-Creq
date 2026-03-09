import svgPaths from "./svg-nfqrivskw4";
import imgIcon from "figma:asset/bebc00b59b077c5e59b6bd8f62b979701b2aa4d0.png";
import imgYourPrivacyChoicesIcon from "figma:asset/ed35f48a9fd142447684c5717a326546a5588b38.png";
import imgTravisMathew from "figma:asset/11686a68dd8bd8e6264c12a51c7adc896867d422.png";
import imgYouveGotAMysteryDiscount from "figma:asset/4693b38e4ccb7d30410afad3fe394fca43815200.png";
import { imgGroup, imgGroup1, imgGroup2 } from "./svg-ju098";
import WhiteLogo from "../assets/White.svg";
import BlackLogo from "../assets/Black.svg";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
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

function DivNeedsclick({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end px-[6px] py-[10px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type ButtonNeedsclickTextProps = {
  text: string;
};

function ButtonNeedsclickText({ text }: ButtonNeedsclickTextProps) {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col h-[50px] items-center justify-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[17.9px] text-center text-white tracking-[2px] whitespace-nowrap">
        <p className="leading-[18px]">{text}</p>
      </div>
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
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="relative self-stretch shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#090c0f] text-[16px] whitespace-nowrap">
          <p className="leading-[22px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#333b42] text-[14px] whitespace-nowrap">
        <p className="leading-[21.7px]">{text}</p>
      </div>
    </div>
  );
}

export default function Component1024WLight() {
  return (
    <div className="bg-white relative size-full" data-name="1024w light">
      <div className="absolute bottom-[1722.36px] content-stretch flex flex-col items-start left-[15px] max-h-[625px]" data-name="Live chat">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div#gladlyChatTempWrapper">
          <div className="bg-white content-stretch flex flex-col h-[50px] items-center justify-center min-w-[50px] px-[13px] relative shrink-0" data-name="Live chat">
            <div className="relative shrink-0 size-[24px]" data-name="Frame">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g clipPath="url(#clip0_8_1422)" id="Frame">
                  <path clipRule="evenodd" d={svgPaths.p1b192200} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
                  <path clipRule="evenodd" d={svgPaths.p1bf8f100} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
                  <path d={svgPaths.p563d400} id="Vector_3" stroke="var(--stroke-0, white)" />
                </g>
                <defs>
                  <clipPath id="clip0_8_1422">
                    <rect fill="white" height="24" width="24" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 max-w-[2000px] right-0 top-[calc(50%-645.01px)]" data-name="main#MainContent">
        <div className="content-stretch flex flex-col items-start max-w-[2000px] relative shrink-0 w-full" data-name="div.max-w-screen-xl">
          <div className="relative shrink-0 w-full" data-name="div.px-5">
            <div className="content-stretch flex flex-col gap-[17.9px] items-start pb-[40px] pt-[35.9px] px-[20px] relative w-full">
              <div className="content-stretch flex items-baseline relative shrink-0 w-full" data-name="div.flex">
                <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#090c0f] text-[24px]">
                  <p className="leading-[28.8px] whitespace-pre-wrap">YOUR CART (0)</p>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="Cart">
                <div className="content-stretch flex flex-col gap-[9.99px] items-start px-[16px] relative w-full">
                  <div className="content-stretch flex flex-col items-start pb-[11.69px] pt-[20.5px] relative shrink-0 w-full" data-name="h3.font-bold">
                    <div aria-hidden="true" className="absolute border-[#090c0f] border-b-2 border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#333b42] text-[21px] whitespace-nowrap">
                      <p className="leading-[25.2px]">Your Items</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start py-[10px] relative shrink-0 w-full" data-name="p.mb-10">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#333b42] text-[16px] w-full">
                      <p className="leading-[17.6px] whitespace-pre-wrap">There are no items in your cart</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f2f2f2] relative shrink-0 w-full" data-name="Order Summary">
            <div className="content-stretch flex flex-col gap-[35px] items-start pb-[36.36px] pt-[40px] px-[19px] relative w-full">
              <div className="content-stretch flex flex-col gap-[29px] items-start relative shrink-0 w-full" data-name="div.flex">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.font-bold">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#090c0f] text-[21px] w-full">
                    <p className="leading-[25.2px] whitespace-pre-wrap">Order Summary</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="div.flex">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="div.flex">
                    <Text text="Subtotal" />
                    <Text text="$0.00" />
                  </div>
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="div.flex">
                    <Text text="Estimated Taxes" />
                    <Text text="--" />
                  </div>
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="div.flex">
                    <Text text="Shipping" />
                    <Text text="--" />
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-between pt-[19px] relative shrink-0 w-full" data-name="div.flex">
                  <div aria-hidden="true" className="absolute border-[#d1d9de] border-solid border-t inset-0 pointer-events-none" />
                  <Text1 text="Total" />
                  <Text1 text="$0.00" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-name="form#my-ajax-cart-form">
                <div className="bg-[#090c0f] relative shrink-0 w-full" data-name="button#proceedToCheckoutBtn">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[32px] py-[14px] relative w-full">
                      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                        <p className="leading-[14px]">Checkout</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start justify-center pt-[62px] relative shrink-0 w-full" data-name="shopify-accelerated-checkout-cart">
                  <div className="content-stretch flex items-start justify-center min-w-[100px] relative shrink-0 w-full" data-name="shopify-paypal-button">
                    <div className="flex-[1_0_0] h-[42px] min-h-[25px] min-w-[150px] relative" data-name="div#zoid-paypal-buttons-uid_756fbff812_mte6mzu6mza">
                      <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="PayPal">
                        <div className="content-stretch flex flex-col h-[42px] items-start justify-center max-h-[42px] min-h-[42px] relative shrink-0 w-full" data-name="div.paypal-button-row">
                          <div className="bg-[#ffc439] content-stretch flex items-start justify-center overflow-clip py-[11px] relative shrink-0 w-full" data-name="PayPal">
                            <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[907.13px]" data-name="div.paypal-button-label-container">
                              <div className="content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0" data-name="image">
                                <div className="content-stretch flex flex-col h-[20px] items-center justify-center overflow-clip pl-[0.01px] relative shrink-0 w-[63.12px]" data-name="image fill">
                                  <div className="h-[20px] relative shrink-0 w-[63.125px]" data-name="image">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.125 20">
                                      <g id="image">
                                        <path d={svgPaths.p1a1d8e70} fill="var(--fill-0, #003087)" id="Vector" />
                                        <path d={svgPaths.p1071b70} fill="var(--fill-0, #003087)" id="Vector_2" />
                                        <path d={svgPaths.p12398480} fill="var(--fill-0, #003087)" id="Vector_3" />
                                        <path d={svgPaths.p13dafbf0} fill="var(--fill-0, #009CDE)" id="Vector_4" />
                                        <path d={svgPaths.pce93e80} fill="var(--fill-0, #009CDE)" id="Vector_5" />
                                        <path d={svgPaths.p22c19b00} fill="var(--fill-0, #009CDE)" id="Vector_6" />
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
        </div>
      </div>
      <div className="absolute bg-[#f5f7f8] content-stretch flex flex-col items-center justify-center left-0 min-h-[300px] px-[18px] right-0 top-[891.33px]" data-name="div.w-full">
        <div className="content-stretch flex flex-col items-start max-w-[706px] relative shrink-0" data-name="div.klaviyo-form-XuJhzE">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.needsclick">
            <div className="bg-[#f5f7f8] relative shrink-0 w-full" data-name="form.needsclick">
              <div className="flex flex-row justify-center size-full">
                <div className="content-stretch flex items-start justify-center px-[30px] py-[48px] relative w-full">
                  <div className="content-stretch flex flex-col items-start justify-center min-h-[300px] min-w-[646px] relative self-stretch shrink-0" data-name="div.needsclick">
                    <div className="content-stretch flex items-start justify-center min-h-[143.61000061035156px] py-[10px] relative shrink-0 w-full" data-name="div.needsclick">
                      <div className="content-stretch flex flex-col gap-[19.1px] items-start relative self-stretch shrink-0 w-[634px]" data-name="div#rich-text-01K1BRDYEANN2XGYEEV139D57M">
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
      <div className="absolute bg-[#090c0f] content-stretch flex flex-col gap-[44px] items-start left-0 pb-[44px] pt-[64px] px-[20px] right-0 top-[1287.33px]" data-name="div.block">
        <div className="content-stretch flex flex-col h-[27px] items-center relative shrink-0 w-full" data-name="div.relative">
          <div className="content-stretch flex flex-col h-[27px] items-start max-w-[984px] overflow-clip relative shrink-0 w-[306px]" data-name="TravisMathew">
            <img src={WhiteLogo} alt="TravisMathew Logo" className="h-full w-auto object-contain" />
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
          <div className="content-stretch flex flex-col gap-[11px] items-start pt-[25px] relative shrink-0 w-full" data-name="div.border-t">
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
      <div className="absolute bg-[#090c0f] content-stretch flex flex-col items-start left-0 pb-[44px] right-0 top-[1997.34px]" data-name="div.w-full">
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
                                      <g clipPath="url(#clip0_8_1457)" id="us.svg">
                                        <path d="M0 0H40V30H0" fill="var(--fill-0, #BD3D44)" id="Vector" />
                                        <g id="Vector_2">
                                          <path d={svgPaths.p2985d900} fill="black" />
                                          <path d={svgPaths.p16d73780} stroke="var(--stroke-0, white)" strokeWidth="2.3125" />
                                        </g>
                                        <path d="M0 0H22.8V16.1562H0" fill="var(--fill-0, #333B42)" id="Vector_3" />
                                        <g id="Vector_4" />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8_1457">
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
          <div className="h-[160.61px] relative shrink-0 w-full" data-name="div.items-center">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
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
              <div className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%-0.2px)] top-[98.8px]" data-name="a.text-white">
                <a className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" href="https://cdn.shopify.com/s/files/1/0610/4629/2558/files/accounts.store_576fdbb5-d388-44f3-8626-6aefb3c5801b.pdf">
                  <p className="cursor-pointer leading-[20.4px]">{`Privacy, Ad & Cookie Policy`}</p>
                </a>
              </div>
              <div className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%+0.27px)] top-[139.2px]" data-name="a.text-white">
                <a className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" href="https://travismathew.com/pages/terms-and-conditions">
                  <p className="cursor-pointer leading-[20.4px]">Terms + Condition</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[2347.360107421875px] inset-0 pointer-events-none">
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
                          <img src={BlackLogo} alt="TravisMathew Logo" className="h-full w-auto object-contain" />
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
                          <Wrapper>
                            <g id="Open menu">
                              <path d="M2.75 16.25H17.25" id="Vector" stroke="var(--stroke-0, #333B42)" strokeLinecap="round" strokeWidth="1.5" />
                              <path d="M2.75 10.25H17.25" id="Vector_2" stroke="var(--stroke-0, #333B42)" strokeLinecap="round" strokeWidth="1.5" />
                              <path d="M2.75 4.25H17.25" id="Vector_3" stroke="var(--stroke-0, #333B42)" strokeLinecap="round" strokeWidth="1.5" />
                            </g>
                          </Wrapper>
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
                            <Wrapper>
                              <g id="Frame">
                                <path d={svgPaths.p104f4300} id="Vector" stroke="var(--stroke-0, #090C0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              </g>
                            </Wrapper>
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
      <div className="absolute bg-[rgba(20,20,20,0.6)] content-stretch flex h-[640px] items-start justify-center left-0 overflow-x-clip overflow-y-auto top-0 w-[1024px]" data-name="FULLSCREEN Form">
        <div className="flex-[1_0_0] h-full min-h-[640px] min-w-px relative" data-name="div.needsclick">
          <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[20px] relative size-full">
            <div className="content-stretch flex flex-col items-start min-h-[640px] relative shrink-0 w-full" data-name="div.needsclick">
              <div className="h-[20px] min-h-[20px] shrink-0 w-full" data-name="::before" />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.needsclick:align-stretch">
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="div.needsclick">
                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative rounded-[4px] self-stretch shadow-[0px_0px_30px_0px_rgba(0,0,0,0.15)]" data-name="div.needsclick">
                    <div className="bg-[#fafafa] flex-[1_0_0] min-h-[600px] min-w-px relative rounded-[4px]" data-name="form.needsclick">
                      <div className="flex flex-row justify-center min-h-[inherit] overflow-auto size-full">
                        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[24px] relative w-full">
                          <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative self-stretch" data-name="div.needsclick">
                            <div className="content-stretch flex flex-col h-full items-start justify-center max-w-[804px] min-w-[124px] pr-[24px] relative shrink-0 w-[468px]" data-name="div.needsclick">
                              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="div.needsclick">
                                <div className="content-stretch flex items-start pb-[15px] px-[6px] relative self-stretch shrink-0" data-name="div.needsclick">
                                  <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="div.needsclick">
                                    <div className="content-stretch flex items-center relative shrink-0" data-name="div.needsclick">
                                      <div className="h-[22.86px] relative shrink-0 w-[250px]" data-name="TravisMathew">
                                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                          <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-[-0.01%] w-full" src={imgTravisMathew} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex items-start justify-center pt-[10px] relative shrink-0 w-full" data-name="div.needsclick">
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="div#rich-text-01KEASD61FE95GDKNQFXCFF0B3">
                                  <div className="content-stretch flex flex-col items-center pb-px relative shrink-0 w-full" data-name="p">
                                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[27.1px] text-black text-center whitespace-nowrap">
                                      <p className="leading-[normal]">{`You've Got a Mystery Discount`}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex items-start justify-center min-h-[56px] pt-[15px] relative shrink-0 w-full" data-name="div.needsclick">
                                <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[432px]" data-name="div#rich-text-01KEASD61R438JJBSB8EX8RFVJ">
                                  <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div">
                                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-center whitespace-nowrap">
                                      <p className="leading-[normal]">Who are you shopping for?</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="div.needsclick">
                                <DivNeedsclick>
                                  <div className="bg-black content-stretch flex flex-[1_0_0] flex-col h-[50px] items-center justify-center min-h-px min-w-px relative rounded-[2px]" data-name="button.needsclick">
                                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[17.7px] text-center text-white tracking-[2px] whitespace-nowrap">
                                      <p className="leading-[18px]">Men</p>
                                    </div>
                                  </div>
                                </DivNeedsclick>
                              </div>
                              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="div.needsclick">
                                <DivNeedsclick>
                                  <ButtonNeedsclickText text="Women" />
                                </DivNeedsclick>
                              </div>
                              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="div.needsclick">
                                <DivNeedsclick>
                                  <ButtonNeedsclickText text="I Want It All" />
                                </DivNeedsclick>
                              </div>
                              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="div.needsclick">
                                <DivNeedsclick>
                                  <div className="bg-white flex-[1_0_0] h-[58px] min-h-px min-w-px relative" data-name="button.needsclick">
                                    <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
                                    <div className="flex flex-col items-center justify-center size-full">
                                      <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative size-full">
                                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17.7px] text-black text-center tracking-[2px] whitespace-nowrap">
                                          <p className="leading-[18px]">{`No, I'll Pay Full Price`}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </DivNeedsclick>
                              </div>
                              <div className="content-stretch flex items-start justify-center py-[10px] relative shrink-0 w-full" data-name="div.needsclick">
                                <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[432px]" data-name="div#rich-text-01KEASD630EJ1VGMMT0M24WYXV">
                                  <div className="content-stretch flex flex-col items-center pb-px pt-[4px] relative shrink-0 w-full" data-name="p">
                                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center whitespace-nowrap">
                                      <p className="mb-0">*Offer valid for new subscribers only. Coupons not valid on Member Exclusive, Luggage,</p>
                                      <p className="mb-0">Corkcicle, Headcovers or Sale. Offers cannot be combined. By submitting your information, you</p>
                                      <p>agree to the terms of our privacy policy.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px overflow-clip relative" data-name="div.needsclick">
                              <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="You\'ve Got a Mystery Discount">
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                  <img alt="" className="absolute h-full left-[-0.57%] max-w-none top-0 w-[101.15%]" src={imgYouveGotAMysteryDiscount} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute h-[0.01px] left-0 right-0 top-0" data-name="div.needsclick">
                      <div className="absolute content-stretch flex flex-col items-start right-[8px] rounded-[17.5px] size-[35px] top-[8px]" data-name="Close dialog">
                        <div className="relative shrink-0 size-[35px]" data-name="Frame">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                            <g id="Frame">
                              <path d={svgPaths.p2cb32d40} fill="var(--fill-0, white)" id="Vector" />
                              <path d={svgPaths.pec75a00} id="Vector_2" stroke="var(--stroke-0, #373F47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[20px] min-h-[20px] shrink-0 w-full" data-name="::after" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}