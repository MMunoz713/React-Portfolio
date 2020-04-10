import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function Projects(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <h1>Who am I?</h1>
                    <p>Hello! My name is Martin and I am an aspiring web developer. I have a background in JavaScript, React, and Node. My goal is to one day be able to work at a large tech firm.</p>
                    <p></p>
           </Content>
        </div>
    );

}

export default Projects;