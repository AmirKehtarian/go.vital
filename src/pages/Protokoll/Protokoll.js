import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Content from '../../components/Content/Content'
import './Protokoll.css'
import moment from 'moment/moment';
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { BsFillExclamationTriangleFill } from 'react-icons/bs'
import { IoIosDocument } from 'react-icons/io'
import { BsXCircleFill } from 'react-icons/bs'
import { getFetch } from '../../components/FetchAPI/FetchApi';



const Protokoll = () => {

    const [all, setAll] = useState([]);

    const { type } = useParams()

    const { page } = useParams()

    useEffect(() => {
        getFetch(type, page, setAll)
    }, [type, page]);

    const iconHandler = (a) => {
        if (a === 'log') {
            return <IoIosDocument />
        } if (a === 'error') {
            return <BsFillExclamationTriangleFill />
        } if (a === 'warning') {
            return <BsXCircleFill />
        }
    }

    return (
        <div className='protokoll'>
            <Content title='Protokoll' icon={<HiMagnifyingGlass className='protokoll-icon' />}>
                <div>
                    <div className='content-field'>
                        <ul>
                            <li className='all'>
                                <Link to='/protokoll/all/1'>Alle</Link>
                            </li>
                            <li className='all1' >
                                <Link className='active-link' to='/protokoll/error/1'>Fehler</Link>
                            </li>
                            <li  >
                                <Link activeclassname='active-link' to='/protokoll/warning/1'>Warnung</Link>
                            </li>
                            <li >
                                <Link activeclassname='active-link' to='/protokoll/log/1'>Log</Link>
                            </li>
                        </ul>
                    </div>
                    <section className='section'>
                        <div className='fields'>
                            {
                                all && all.map(a => (
                                    <div key={a.id} className='field' >
                                        <div className='field-des'>{iconHandler(a.typ)}{a.message.slice(0, a.message.indexOf('vom'))}</div>
                                        <div className='field-time'>{moment([a.updated_at.replace(/-/g, ',').slice(0, 10)]).fromNow()} von {a.mitarbeiter_vorname}.{a.mitarbeiter_name}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                    <div className='content-field content-no'>
                        <ul className='content-links'>
                            <li>
                                <Link to={`/protokoll/${type}/1`}>1</Link>
                            </li>
                            <li>
                                <Link to={`/protokoll/${type}/2`}>2</Link>
                            </li>
                            <li>
                                <Link to={`/protokoll/${type}/3`}>3</Link>
                            </li>
                            <li>
                                <Link to={`/protokoll/${type}/4`}>4</Link>
                            </li>
                        </ul>
                    </div>
                </div>


            </Content >

        </div >
    )
}

export default Protokoll