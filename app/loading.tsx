import Image from "next/image"

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-12">
        <Image width={200} height={200} src={'/images/loading.svg'} alt="Loading"/>
    </div>
  )
}

export default Loading