import './sectionTitle.scss'
interface ISectionTitle {
    title: string
}


const SectionTitle = ({title}:ISectionTitle) => {
    return (
        <div className={'sectionTitle'}>
            <h2 className="sectionTitle__title"><span className="net">#</span>{title}</h2>
            <h2 className="sectionTitle__line"></h2>
        </div>
    );
};

export default SectionTitle;