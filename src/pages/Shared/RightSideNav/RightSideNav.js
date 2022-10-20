import React from 'react';
import { ButtonGroup, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import Carosel from '../Carosel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-5'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook />Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaGithub />Github</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp />Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter />Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch />Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Carosel></Carosel>
            </div>
        </div>
    );
};

export default RightSideNav;