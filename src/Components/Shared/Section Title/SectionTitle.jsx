

const SectionTitle = ({title, semititle}) => {
    return (
        <div>
            <h1 className="text-center text-white dmsans text-[2rem] font-semibold">{title}</h1>

            <p className="text-lg text-gray-400 text-center">{semititle}</p>
            
        </div>
    );
};

export default SectionTitle;