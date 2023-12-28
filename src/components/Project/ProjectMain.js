import React, {Component} from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import ProjectTabTwo from '../Elements/Tab/ProjectTabTwo';

class ProjectMain extends Component {

    render() {

        return (
            <main>
                <Breadcrumb pageTitle="Galeria"/>
                <ProjectTabTwo/>
            </main>
        );
    }
}

export default ProjectMain;