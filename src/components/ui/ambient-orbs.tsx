"use client";

import { motion } from "framer-motion";

export function AmbientOrbs() {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-[#050505]" />
      
      {/* 3D Liquid Assets in the background */}
      <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none opacity-80">
        
        {/* Blob 1: Top Center-Left */}
        <motion.div
          animate={{
            rotate: [0, 90, 180, 270, 360],
            borderRadius: [
              "40% 60% 70% 30% / 40% 50% 60% 50%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "50% 50% 60% 40% / 50% 60% 40% 50%",
              "40% 60% 70% 30% / 40% 50% 60% 50%"
            ],
            x: ["-5%", "5%", "-5%"],
            y: ["0%", "5%", "0%"]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[15%] left-[5%] h-[55vw] w-[55vw] min-h-[500px] min-w-[500px] bg-gradient-to-br from-accent/10 to-blue-900/30 blur-2xl will-change-transform"
        />
        
        {/* Blob 2: Center-Right */}
        <motion.div
          animate={{
            rotate: [360, 270, 180, 90, 0],
            borderRadius: [
              "30% 70% 70% 30% / 30% 30% 70% 70%",
              "50% 50% 20% 80% / 25% 80% 20% 75%",
              "70% 30% 50% 50% / 70% 30% 70% 30%",
              "30% 70% 70% 30% / 30% 30% 70% 70%"
            ],
            x: ["0%", "-10%", "0%"],
            y: ["0%", "-5%", "0%"]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[0%] h-[50vw] w-[50vw] min-h-[450px] min-w-[450px] bg-gradient-to-bl from-blue-950/40 to-blue-800/20 blur-2xl will-change-transform"
        />

        {/* Blob 3: Bottom Center */}
        <motion.div
          animate={{
            rotate: [0, -90, -180, -270, -360],
            borderRadius: [
              "50% 50% 60% 40% / 50% 60% 40% 50%",
              "40% 60% 70% 30% / 40% 50% 60% 50%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "50% 50% 60% 40% / 50% 60% 40% 50%"
            ],
            x: ["10%", "-10%", "10%"]
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] left-[25%] h-[60vw] w-[60vw] min-h-[500px] min-w-[500px] bg-gradient-to-t from-blue-900/30 to-transparent blur-2xl will-change-transform"
        />
        
      </div>
    </>
  );
}
