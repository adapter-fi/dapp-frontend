import Image from 'next/image'

export const PartnerLogo = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <img src={src} height={80} width={80} alt="title" className='rounded-full'/>
        <Image
          src="/icons/ethereum.svg"
          height={26}
          width={26}
          alt="ethereum"
          className="absolute top-[-5px] left-[-5px]"
        />
      </div>
      <p className="text-center text-[#060606]">{title}</p>
    </div>
  )
}
