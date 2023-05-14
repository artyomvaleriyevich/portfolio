import './sectionTitle.scss'
import {motion } from 'framer-motion'


interface ISectionTitle {
    title: string
}


const SectionTitle = ({title}:ISectionTitle) => {

    const sectionTitleAnimate = {
        hidden:{
            x:-300
        },
        visible:{
            x: 0,
            transition:{duration:3}
        }
    }

    return (
        <div className={'sectionTitle'}>
            <motion.h2
                       initial={'hidden'}
                       whileInView={'visible'}
                       variants={sectionTitleAnimate}
                       viewport={{amount: 0.3, once:true}}
                       className="sectionTitle__title"
            ><span className="net">#</span>{title}</motion.h2>
            <h2 className="sectionTitle__line"></h2>
        </div>
    );
};

export default SectionTitle;