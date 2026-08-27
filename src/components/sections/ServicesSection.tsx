import FadeIn from '../FadeIn'

const SERVICES = [
  {
    num: '01',
    title: '3D Modeling',
    desc: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    num: '02',
    title: 'Rendering',
    desc: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    num: '03',
    title: 'Motion Design',
    desc: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    num: '04',
    title: 'Branding',
    desc: 'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    num: '05',
    title: 'Web Design',
    desc: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn
        as="h2"
        className="mb-16 text-center font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </FadeIn>

      <div className="mx-auto flex max-w-5xl flex-col">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.num}
            delay={i * 0.1}
            className="flex items-start gap-6 border-b py-8 first:border-t sm:gap-8 sm:py-10 md:gap-10 md:py-12"
            style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
          >
            <span
              className="shrink-0 font-black text-[#0C0C0C]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.num}
            </span>
            <div className="flex flex-col">
              <h3
                className="font-medium uppercase"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.title}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed opacity-60"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
