import { useEffect, useRef, useState } from 'react'

const GIFS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const sectionTop = el.offsetTop
      const o = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(o)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const row1 = GIFS.slice(0, 11)
  const row2 = GIFS.slice(11)
  const tripled1 = [...row1, ...row1, ...row1]
  const tripled2 = [...row2, ...row2, ...row2]

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      {/* Row 1 — moves RIGHT on scroll */}
      <div
        className="flex gap-3 will-change-transform"
        style={{ transform: `translateX(${offset - 200}px)` }}
      >
        {tripled1.map((src, i) => (
          <img
            key={`r1-${i}`}
            src={src}
            loading="lazy"
            alt=""
            className="h-[270px] w-[420px] flex-shrink-0 rounded-2xl object-cover"
          />
        ))}
      </div>

      {/* Row 2 — moves LEFT on scroll */}
      <div
        className="mt-3 flex gap-3 will-change-transform"
        style={{ transform: `translateX(${-(offset - 200)}px)` }}
      >
        {tripled2.map((src, i) => (
          <img
            key={`r2-${i}`}
            src={src}
            loading="lazy"
            alt=""
            className="h-[270px] w-[420px] flex-shrink-0 rounded-2xl object-cover"
          />
        ))}
      </div>
    </section>
  )
}
