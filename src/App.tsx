import {  motion } from "framer-motion";
import Tile from "./components/Tile";

function App() {
  return (
    <main className="w-full relative">
      <section className="w-full grid grid-cols-20 h-screen overflow-y-clip">
        {/*  */}
        {Array.from(Array(20*12), i => (
          <Tile key={i} />
        ))}
      </section>
      <div className="pointer-events-none absolute inset-0 flex flex-col gap-5 items-center justify-center z-10 mb-10 font-poppins">
        <motion.h1 className=" text-neutral-100 font-black uppercase tracking-tighter sm:text-5xl lg:text-18xl" initial={{opacity:0, y:100}} animate={{opacity:1, y: 0}}>
          <span className="text-red-600">hi</span><span className="text-yellow-500">ma</span><span>na</span>lla
        </motion.h1>
        <motion.p className="text-white w-1/2 text-xl text-center tracking-wide" initial={{opacity:0, y:100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.25}}>
          Que tal mi gente, soy Masaquiza Runa developers
        </motion.p>
        <motion.button className="text-neutral-100 rounded-full text-3xk bg-indigo-700 px-10 py-3 border border-indigo-900 pointer-events-auto" initial={{scale: 0}} animate={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{tye: "spring", stiffness: 400, damping:17}}>
          Subcribete
        </motion.button>
      </div>
    </main>
  );
}

export default App;
