import FadeIn from '../FadeIn'
import ContactButton from '../ContactButton'
import Magnet from '../Magnet'

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Price', href: '#price' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip">
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex justify-between px-6 pt-6 font-medium uppercase tracking-wider text-sm text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem] sm:text-lg"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition-opacity duration-200 hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      {/* Hero heading */}
      <div className="overflow-hidden">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading w-full whitespace-nowrap font-black uppercase leading-none tracking-tight text-[14vw] sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4"
        >
          Hi, i&apos;m jack
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="mt-auto flex items-end justify-between pb-7 sm:pb-8 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          a 3d creator driven by crafting striking and unforgettable projects
        </FadeIn>
        <ContactButton delay={0.5} />
      </div>

      {/* Centered portrait with magnetic effect */}
      <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={PORTRAIT_URL}
              alt="Jack portrait"
              className="h-auto w-full select-none"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  )
}
