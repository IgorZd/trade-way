import React from "react";

const Features = ({ slice }) => (
  <section>
    <RichText render={slice.primary.lable} />
    {slice?.items?.map((item, i) => {
      return (
        <>
          <img src={item.image.url} alt={item.image.alt} />
          <RichText render={item.title} />
          <RichText render={item.description} />
        </>
      );
    })}
  </section>
);

export default Features;
