import React, {FC} from 'react';

interface ContactProps {
    icon : string;
    name : string;
    contact : string;

}

const Contact: React.FC<ContactProps> = ({icon, name, contact}) => {
    return (
            <div style={{display: "flex", flexDirection: "row"}} className="contacts">
                <img src={icon} alt='some cringe' style={{marginRight: 20}}></img>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <div className='name'>{name}</div>
                    <div className='cont'>{contact}</div>
                </div>
            </div>
    )
}

interface ContactContainerProps {
    info : {
        icon : string;
        name : string;
        contact : string;
    }[]
}

const ContactCard: React.FC<ContactContainerProps> = ({info}) => {
    return ( <>
        {info.map((inform, index) => (
            <Contact key={index} icon={inform.icon} name={inform.name} contact={inform.contact}/>
        ))}
    </>);

};

export default ContactCard;