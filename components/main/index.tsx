"use client"
import Link from 'next/link'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const MainPage = () => {
    const contVariant = {
        hidden: {
            x: "-100vw"
        },
        show: {
            x: 0,
            transition: {
                duration: 1,
                type: "spring",
                stiffness: 180,
                when: "beforeChildren",
                staggerChildren:1
            }
        },
        exit: {
            x: "100vw"
        }
    }

    const childVariant={
        hidden: {
            y: 20,
            opacity:0
        },
        show: {
            y: 0,
            opacity:1,
            transition: {
                duration: 1,
            }
        },
    }




    return (
        <section id="select" className="flex justify-center items-center">
            <AnimatePresence>
                <motion.div className="w-[50vw] h-80 rounded-lg bg-[#706468] space-y-24" variants={contVariant} initial="hidden" animate="show" exit="exit">
                    <motion.h1 className="flex justify-center items-center text-white text-5xl mx-auto pt-4" variants={childVariant}>Choose an option</motion.h1>
                    <motion.ul className="flex justify-center items-center space-x-8" variants={childVariant}>
                        <li className='flex justify-center items-center text-xl w-48 h-16 bg-[#4c269a] hover:bg-yellow-400 text-white hover:text-black transition-all duration-300 rounded-xl'>
                            <Link href={'/movie(csr)'}>movie(csr)</Link>
                        </li>
                        <li className='flex justify-center items-center text-xl w-48 h-16 bg-[#4c269a] hover:bg-yellow-400 text-white hover:text-black transition-all duration-300 rounded-xl'>
                            <Link href={'/movie(ssr)'}>movie(ssr)</Link>
                        </li>
                    </motion.ul>
                </motion.div>
            </AnimatePresence>
        </section>
    )
}

export default MainPage