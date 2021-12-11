import NavigationHeader from '../navigationHeader/NavigationHeader.component';
import FilterByTag from '../filterByTag/FilterByTag.component';

import { Divider } from '@chakra-ui/layout';

import { navigation } from './navigation.module.scss';
import Notes from '../Notes/Notes.component';

const Navigation = ({ setFlag, items }) => {
    return (
        <div className={navigation}>
            <NavigationHeader />
            <Divider />
            <FilterByTag />
            <Divider />
            <Notes setFlag={setFlag} items={items} />
        </div>
    );
};

export default Navigation;
