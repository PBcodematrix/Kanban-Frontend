import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Card from '../Card/Card';
import styles from './Main.module.css';
import add from "../../assets/add.svg";
import dot from "../../assets/3 dot menu.svg";
import { MappedIcons, Priorities } from '../../utils/util';
import { faker } from '@faker-js/faker';

const Main = ({ grouping, ordering }) => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  
  let userAvailability={};
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        setTickets(response.data.tickets);
        setUsers(response.data.users);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
   
  }, []);
  users.map((user)=>{
    userAvailability[user.id]=user.available;
  })
  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown User";
  };

  const groupTickets = (tickets) => {
    const groupedTickets = {};

    tickets.forEach((ticket) => {
      let key;
      switch (grouping) {
        case 'status':
          key = ticket.status;
          break;
        case 'user':
          key = getUserName(ticket.userId);
          break;
        case 'priority':
          key = Priorities[`Priority ${ticket.priority}`];
          break;
        default:
          key = 'Others';
      }

      if (!groupedTickets[key]) {
        groupedTickets[key] = [];
      }
      groupedTickets[key].push(ticket);
    });

    return groupedTickets;
  };

  const sortTickets = (ticketsArray) => {
    if (ordering === 'priority') {
      return ticketsArray.sort((a, b) => b.priority - a.priority);
    } else if (ordering === 'title') {
      return ticketsArray.sort((a, b) => a.title.localeCompare(b.title));
    }
    return ticketsArray; 
  };

  const groupedTickets = groupTickets(tickets);
  console.log(groupedTickets);
  console.log(userAvailability);
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        {Object.keys(groupedTickets).map((key) => (
          <div key={key}>
            <div className={styles.columnHeader}>
              <div style={{ display: 'flex', gap: '5px', alignItems: 'center',justifyContent:"center" }}>
                <div>
                  {MappedIcons[key] ? (
                    <img
                      src={MappedIcons[key]}
                      alt={`${key} icon`}
                      className={styles.icon}
                    />
                  ):<img
                  src={faker.image.avatar()}
                  alt={`${key} icon`}
                  className={styles.icon}
                />}
                </div>
                <h1 className={styles.assigneeName}>{key}</h1>
                <h1 style={{
                    fontSize:"13px",
                    marginLeft:"8px",
                    marginBottom:"10px",
                    color:"#b6b3b3",
                    
                }}>
                {groupedTickets[key].length}
                </h1>
              </div>
              <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                <img src={add} alt="add" className={styles.assigneeImage} />
                <img src={dot} alt="3 dot" className={styles.assigneeImage} />
              </div>
            </div>
            <div className={styles.column}>
              {sortTickets(groupedTickets[key]).map((ticket) => (
                <Card
                  key={ticket.id}
                  cardId={ticket.id}
                  title={ticket.title}
                  priority={Priorities[`Priority ${ticket.priority}`]}
                  available={userAvailability[ticket.userId]}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
