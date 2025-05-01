import React, { forwardRef } from "react";

const HelpSection = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen bg-green-50 flex items-center justify-center px-10 py-20"
    >
      <h2 className="text-4xl text-green-900 font-bold">How can we help you?</h2>
    </section>
  );
});

export default HelpSection;
