import Image from 'next/image'
import Link from "next/link"
import { BsSunFill } from "react-icons/bs"
import styles from './styles.module.css'
const page = () => {
  return (
    <div className={styles.textcol}>

      {/* Link */}
      <Link target={'_blank'} href={"/about"} className="block">about</Link>
      <Link href={"/year"} className="block">year</Link>
      <Link href={"/hell"} className="block">hell</Link>
      <Link target={'_blank'} href={"https://mernfa.ir/nextjs-learning"} className="block">mernfa</Link>
      {/* image */}
      <Image className="" priority={true} width={100} height={100} src={'/images/licensed-image.jpg'} alt="pinguin" />
      <Image title="forign website" className="" priority={true} width={200} height={200} src={'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LEgb?ver=421a&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true'} alt="pinguin" />
      {/* video */}
      <video controls className="h-48" src="https://dl.mernfa.ir/public-files/mernfa-ir-full-intro/mernfa.ir-intro.mp4"></video>
      <video controls className="h-48" src={'/videos/mernfair-nextpro-00-intro.mp4'}></video>
      {/* react icons */}
      <BsSunFill className="w-24 h-24 text-yellow-500" />
      {/* hero icons */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-24 h-24 text-violet-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>


      <div>😂😂😂</div>
    </div>
  )
}
export default page
