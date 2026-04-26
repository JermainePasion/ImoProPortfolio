const cards = [
  { title: 'GANDA', img: '#' },
  { title: 'Card Title 2', img: '#' },
  { title: 'the bard I write for is a vampire!', img: '#' },
  { title: 'Before the last bell', img: '#' },
  { title: 'a work in progress', img: '#' },
  { title: 'stuck in the summer of ‘97', img: '#' },
]

const VisDev = ({ scrolledAway }) => {
  return (
    <div
      className={`
        absolute inset-0 overflow-y-auto
        transition-all duration-700 ease-in-out
        ${scrolledAway
          ? 'translate-x-0 opacity-100'
          : 'translate-x-full opacity-0 pointer-events-none'}
      `}
    >
      <div className="px-8 md:pl-80 md:pr-16 py-8 w-full">

        <div className="grid grid-cols-3 grid-rows-2 gap-4 md:gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-2xl overflow-hidden"
            >
              <div className="w-full h-36 md:h-56 bg-gray-100 shadow-md rounded-t-2xl overflow-hidden">
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
    </div>
  )
}

export default VisDev