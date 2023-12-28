import React, {Component} from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Experience from './ExperienceSection';
import PortPagination from './PortPagination';
import RecentWork from './RecentWorkSection';

class ProjectDetails extends Component {

    render() {

        return (
            <main>
                <Breadcrumb pageTitle="Project Details"/>
                <Experience/>
                <PortPagination/>
                <RecentWork/>
            </main>
        );
    }
}

export default ProjectDetails;