import './pagesTitle.scss'
interface IPageTitle {
    title:string
}


const PageTitle = ({title}: IPageTitle) => {
    return (
       <>
           <h2 className={'pagesTitle'}><span className={'pagesTitle__span'}>/</span>{title}</h2>
       </>
    );
};

export default PageTitle;