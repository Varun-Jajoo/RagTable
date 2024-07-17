import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

import binFileIcon from "../icons/bin-file-unscreen.gif";
import searchFileIcon from "../icons/search-file-unscreen.gif";
import uploadFileIcon from "../icons/upload-file-unscreen.gif";
import chartIcon from "../icons/chart-unscreen.gif";
import codingICON from "../icons/coding-unscreen.gif";
const iconsMap = {
  "Searching Your File ": searchFileIcon,
  "Uploading Your File": uploadFileIcon,
  "Visualizing Your Data": chartIcon,
  "Passing to our LLM": codingICON,
  "Clearing Cache": binFileIcon,
};

const IconComponent = ({ icon, className }) => (
  <img src={icon} alt="Icon" className={cn("w-8 h-8", className)} />
);

const LoaderCore = ({ loadingStates, value = 0 }) => {
  return (
    <div className="flex relative justify-start max-w-xl mx-auto flex-col mt-40">
      {loadingStates.map((loadingState, index) => {
        const distance = Math.abs(index - value);
        const opacity = Math.max(1 - distance * 0.2, 0);

        return (
          <motion.div
            key={index}
            className={cn("text-left flex gap-2 mb-4")}
            initial={{ opacity: 0, y: -(value * 40) }}
            animate={{ opacity: opacity, y: -(value * 40) }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <IconComponent icon={iconsMap[loadingState.text]} className="text-black text-xl" />
            </div>
            <span className={cn("text-black text-xl font-semibold", value === index && "opacity-100")}>
              {loadingState.text}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export const MultiStepLoader = ({
  loadingStates,
  loading,
  duration = 2000,
  loop = true,
}) => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    if (!loading) {
      setCurrentState(0);
      return;
    }
    const timeout = setTimeout(() => {
      setCurrentState((prevState) =>
        loop
          ? prevState === loadingStates.length - 1
            ? 0
            : prevState + 1
          : Math.min(prevState + 1, loadingStates.length - 1)
      );
    }, duration);

    return () => clearTimeout(timeout);
  }, [currentState, loading, loop, loadingStates.length, duration]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl"
        >
          <div className="h-96 relative">
            <LoaderCore value={currentState} loadingStates={loadingStates} />
          </div>
          <div className="bg-gradient-to-t inset-x-0 z-20 bottom-0 bg-white h-full absolute [mask-image:radial-gradient(900px_at_center,transparent_30%,white)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
