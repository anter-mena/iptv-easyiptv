import Image from "next/image"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white">
      <div className="relative flex h-12 w-12 items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-gray-100" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-iptv-green border-t-transparent" />
        <Image src="/logo.svg" alt="Logo Icon" width={16} height={16} className="h-4 w-4 opacity-10" />
      </div>
    </div>
  )
}
