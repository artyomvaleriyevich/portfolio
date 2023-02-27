import './netTitle.scss'
interface INetTitle {
    title:string
}


const NetTitle = ({title}:INetTitle) => {
    return (
        <h2 className={'netTitle'}><span className="netTitle__span">#</span>{title}</h2>
    );
};

export default NetTitle;