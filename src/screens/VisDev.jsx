const cards = [
  { title: 'GANDA', img: '#' },
  { title: 'Card Title 2', img: '#' },
  { title: 'the bard I write for is a vampire!', img: '#' },
  { title: 'Before the last bell', img: '#' },
  { title: 'a work in progress', img: '#' },
  { title: 'stuck in the summer of ‘97', img: '#' },
]

const VisDev = () => {
  return (
    <div className="absolute inset-0 overflow-y-auto" >
      <div className="px-8 md:pl-80 md:pr-16 py-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-2xl overflow-hidden"
            >
              <div className="w-full h-32 sm:h-40 md:h-48 lg:h-43 bg-gray-100 shadow-md rounded-t-2xl overflow-hidden">
                {card.img && (
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <p className="text-sm md:text-base font-semibold text-[#313131] p-3 text-center">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p
        className="fixed z-50 pointer-events-none select-none font-extrabold text-[#313131] leading-none"
        style={{
          fontSize: "clamp(1.6rem, 5vw, 4rem)",
          bottom: "clamp(0.6rem, 2.5vw, 2rem)",
          right: "clamp(0.6rem, 2.5vw, 3rem)",
        }}
      >
        VisDev.
      </p>
    </div>
  )
}

export default VisDev