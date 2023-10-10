import cn from 'classnames';
import { AboutPageProps } from './AboutPage.props';
import styles from './AboutPage.module.scss';

const AboutPage = ({ className }: AboutPageProps) => (
    <div className={cn(styles.aboutPage, className)}>
        AboutPage
    </div>
);

export default AboutPage;
