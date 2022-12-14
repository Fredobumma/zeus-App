import React from "react";
import Header from "../header";
import Button from "./../button";
import Figure from "../figure";

const Callout = () => {
  const backgroundImage = [
    "callout-01 !bg-[-7979px_0] bottom-0 h-0 left-0 w-0 bigTab:h-[330px] bigTab:w-[167px] laptop:bottom-[-5%] desktop:!bg-[-8333px_0] desktop:h-[446px] desktop:w-[301px]",
    "callout-02 !bg-[-8156px_0] bottom-0 h-0 right-0 w-0 bigTab:h-[330px] bigTab:w-[167px] laptop:bottom-[-5%] desktop:!bg-[-8644px_0] desktop:h-[446px] desktop:w-[301px]",
  ];

  return (
    <aside className="aside bg-callOut block my-12 max-w-[1280px] mx-auto px-4 py-6 rounded-4xl text-center tablet:my-16 bigTab:py-12 bigTab:relative laptop:my-20 desktop:py-28">
      <Header
        type="h2"
        heading="Ready to sell your NFTs?"
        headingClasses="text-3xl bigTab:max-w-400 laptop:max-w-700 desktop:text-5xl"
        text="Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
      feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna
      semper orci a tincidunt."
        textClasses="max-w-[600px] mb-4 mt-2 mx-auto text-secondary text-xs tablet:mt-4 tablet:mb-6 bigTab:max-w-400 laptop:max-w-700 desktop:mb-8 desktop:text-base"
      />
      <Button label="Sell right now" mb-4="mb-4" />
      {backgroundImage.map((image, index) => (
        <Figure key={index} classes={`sprite absolute ${image}`} />
      ))}
    </aside>
  );
};

export default Callout;
