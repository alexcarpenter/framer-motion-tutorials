const data = [
  { label: "Home", url: "/home" },
  { label: "About", url: "/about" },
  { label: "Blog", url: "/blog" },
  { label: "Contact", url: "/contact" },
];

import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

export function App() {
  const [activeIndex, setActiveIndex] = React.useState(null);
  return (
    <>
      <AnimateSharedLayout>
        <nav>
          <motion.ul onHoverEnd={() => setActiveIndex(null)}>
            {data.map(({ label, url }, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.li
                  key={index}
                  onHoverStart={() => setActiveIndex(index)}
                >
                  <a href={url}>
                    {isActive ? (
                      <motion.span layoutId="shadow" className="shadow" />
                    ) : null}
                    <span>{label}</span>
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>
      </AnimateSharedLayout>
    </>
  );
}
