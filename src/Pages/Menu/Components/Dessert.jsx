import bg from '../../../../assets/menu/dessert-bg.jpeg'

const Dessert = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className="relative bg-center bg-cover mb-10 min-h-[50vh] md:min-h-[60vh]"
        >
            {/* dark overlay across the whole section */}
            <div className="absolute inset-0 bg-black/60" />

            {/* centered content panel */}
            <div className="relative z-10 flex items-center justify-center w-full h-full py-16 md:py-20">
                <div className="bg-black/40 text-white text-center px-8 py-10 md:px-16 md:py-12 rounded md:rounded-lg max-w-4xl w-[90%]">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-wide uppercase mb-4">DESSERTS</h2>
                    <p className="text-sm md:text-base leading-relaxed text-gray-200">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dessert;