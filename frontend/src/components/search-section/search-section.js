import React from 'react';
import './search-section.css';
import '../common/columns.css';
import '../common/input.css';
import '../common/heading.css';
import Button from '../Button/Button';
import Company from './company';

export default function(props) {

    const inputCompany = React.useRef(null);

    const handleSearchCopmany = () => {
        // eslint-disable-next-line no-console
        console.log(inputCompany.current.value);
        props.requestAction(inputCompany.current.value);
    };

    return (
        <section className="search-section">
            <div className="columns-wrapper">
                <h2 className="heading heading_level-3">Поиск по компаниям</h2>
                <div className="columns-row">
                    <div className="column column_s-1 column_m-3 column_l-6">
                        <input
                            className="input"
                            type="text"
                            placeholder="Введите название компании"
                            ref={inputCompany}
                        />
                        {
                            props.companies && props.companies.items.map(el =>
                                <Company
                                    key={el.id}
                                    id={el.id}
                                    name={el.name}
                                    url={el.url}
                                />,
                            )
                        }
                    </div>
                    <div className="column column_s-1 column_m-3 column_l-6">
                        <Button onClick={handleSearchCopmany}>Найти</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
