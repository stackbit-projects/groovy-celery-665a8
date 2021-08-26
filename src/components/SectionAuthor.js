import React from 'react';
import _ from 'lodash';

import { htmlToReact, withPrefix } from '../utils';

export default class SectionAuthor extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const background = _.get(section, 'background');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const reviews = _.get(section, 'reviews');
        const content = _.get(section, 'content');
        const avatar = _.get(section, 'avatar');
        const avatarAlt = _.get(section, 'avatar_alt');
        const authorName = _.get(section, 'author_name');

        return (
            <section id={sectionId} className={`block reviews-block bg-${background} outer`}>
                <div className="block-header inner-small">
                    {title && <h2 className="block-title">{title}</h2>}
                    {subtitle && <p className="block-subtitle">{htmlToReact(subtitle)}</p>}
                </div>
                <div className="card inner">
                    {avatar && <img className="author-avatar" src={withPrefix(avatar)} alt={avatarAlt} />}
                    <div >
                        <h3 className="author-name">Anna Maria Del Fiorentino</h3>
                        {content.split('\n').map(c => <p>{c}</p>)}
                    </div>
                </div>
            </section>
        );
    }
}
